import pickle 
import os
import sys
from mlem.api import load
from mlem.runtime.client.base import HTTPClient

from mlem.api import save, load, build, load_meta
from mlem.model import Model
from mlem.utils import get_logger
from mlem.contrib.docker import DockerImageBuilder
from mlem.contrib.docker.base import DockerImage
from mlem.contrib.fastapi import FastAPIServer
from mlem.core.objects import MlemModel


def deploy_n_build_model(type, path):
    # load our model metadata
    model_meta = load_meta(path, load_value=True, force_type=MlemModel)
    # build our model 
    built = build(
        DockerImageBuilder(
            image=DockerImage(name = "mlem_model_fast", tag = "latest"),
            server = FastAPIServer(),
            force_overwrite = True,
        ),
        model_meta
    )
    # deploy our model on dev  
    sys.subprocess.run(f"mlem serve {type} --model {path}")
    # deploy our model on prod
    sys.subprocess.run(f"mlem serve {type} --model {path} --prod") # if k8s etc. also 

def mlem_req(host, port,file):
    # make a request to our model
    client = HTTPClient(host, port)
    res = client.predict(load(file))
    return res # use this 