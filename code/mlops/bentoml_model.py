from bentoml import env, artifacts, api, BentoService
import mlflow 
from bentoml.adapters import DataframeInput
from bentoml.frameworks.lightgbm import LGBMModelArtifact
import bentoml

def load_models(model_uri, model_name, type):
    if type == "mlflow":
        model = bentoml.mlflow.import_model(model_name, model_uri)
        return model
    else:
        model = bentoml.load(model_name)
        return model
# https://docs.bentoml.org/en/latest/integrations/mlflow.html
# https://github.com/bentoml/BentoML/tree/main/examples/mlflow/pytorch
def predict(model, version, df):
    load_models(model, "model", "mlflow")

    # define our runner 
    runner = bentoml.mlflow.get(run_id=model+ version ).to_runner()

    # get our svc 
    svc = bentoml.Service(model, runners = [runner])

    # input spect 
    input_spec = bentoml.io.DataframeInput(
        dtype = "float64",
        shape = (None, 13),
        enforce_shape = True,
        enforce_dtype = True,
    )

    @svc.api(input = input_spec, output = bentoml.io.DataframeOutput(), batch = True) # can be batch or something else
    def predict(df):

        return svc.artifacts.model.predict(df)
    return predict(df)

@env(infer_pip_packages=True)
@artifacts([LGBMModelArtifact('model')])
class MlemModel(BentoService):
    @api(input=DataframeInput(), batch=True)
    def predict(self, df):
        return self.artifacts.model.predict(df)

