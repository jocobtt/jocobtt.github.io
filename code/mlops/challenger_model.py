import pandas as pd 
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
# statsmodels api 
import statsmodels.api as sm
import statsmodels.formula.api as smf
import mlflow 
import mlflow.lightgbm
from mlem.api import save, load

def train_model():
        # Load data
    df = pd.read_csv("data/processed/processed_data.csv")
    # Split data
    X = df.drop("target", axis=1)
    y = df["target"]
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    # Train model
    lgb_train = lgb.Dataset(X_train, y_train)
    lgb_eval = lgb.Dataset(X_test, y_test, reference=lgb_train)
    params = {
        "objective": "regression",
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
    # Log model
    mlflow.lightgbm.log_model(model, "model")
    mlflow.log_metric("rmse", rmse)
    mlflow.log_param("num_boost_round", model.best_iteration)

    # save model information in dvc 
    
    # Save model with mlem
    save(model, labels=X.columns)