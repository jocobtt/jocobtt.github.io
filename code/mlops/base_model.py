import pandas as pd 
from datasets import load_dataset
import lightgbm as lgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import mlflow 
import mlflow.lightgbm
from mlem.api import save, load
import os

def train_model(artifact_uri):
    # Load data
    dataset = load_dataset("imodels/credit-card")
    df = dataset["train"].to_pandas()
    # Split data
    X = df.drop(columns=['default.payment.next.month'])
    y = df['default.payment.next.month'].values
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    # Train model
    lgb_train = lgb.Dataset(X_train, y_train)
    lgb_eval = lgb.Dataset(X_test, y_test, reference=lgb_train)
    
    # Log & store in mlflow 
    with mlflow.start_run():

        params = {
        "objective": "binary",
        "metric": "rmse",
        "verbosity": -1,
        "boosting_type": "gbdt",
        }

        model = lgb.train(
            params,
            lgb_train,
            valid_sets=[lgb_train, lgb_eval],
            num_boost_round=100,
            early_stopping_rounds=10,
            verbose_eval=10,
        )

        # Evaluate model
        y_pred = model.predict(X_test, num_iteration=model.best_iteration)
        rmse = mean_squared_error(y_test, y_pred, squared=False)

        model_uri = mlflow.get_artifact_uri(artifact_uri)
        mlflow.lightgbm.log_model(model, "model")
        mlflow.log_metric("rmse", rmse)
        mlflow.log_param("num_boost_round", model.best_iteration)

        # Save model with mlem
        path = os.path.join(os.getcwd(), "base-model")
        save(model, path = path, version = 1, sample_data = df)

    # save model information in dvc 
    

if __name__ == "__main__":
    train_model("model")