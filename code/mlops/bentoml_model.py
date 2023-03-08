from bentoml import env, artifacts, api, BentoService
from bentoml.adapters import DataframeInput
from bentoml.frameworks.lightgbm import LGBMModelArtifact

@env(infer_pip_packages=True)
@artifacts([LGBMModelArtifact('model')])
class MlemModel(BentoService):
    @api(input=DataframeInput(), batch=True)
    def predict(self, df):
        return self.artifacts.model.predict(df)

