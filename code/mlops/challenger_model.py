import pandas as pd 
from datasets import load_dataset
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
# statsmodels api 
import statsmodels.api as sm
import statsmodels.formula.api as smf
import mlflow 
import mlflow.statsmodels
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
    
  

    with mlflow.start_run():
          # Train model
        model = smf.logit(y_train, X_train).fit()
        # Evaluate model
        print(model.summary())
        y_pred = model.predict(X_test)
        rmse = mean_squared_error(y_test, y_pred, squared=False)

        # log model to mlflow 
        model_uri = mlflow.get_artifact_uri(artifact_uri)
        mlflow.statsmodels.log_model(model, "model")
        mlflow.log_metric("rmse", rmse)
        mlflow.log_param("num_boost_round", model.best_iteration)
        # save our model as a onnx file 
      # Save model with mlem
        path = os.path.join(os.getcwd(), "challenger-model")
        save(model, path = path, version = 1, sample_data = df)

if __name__ == "__main__":
    train_model("model")