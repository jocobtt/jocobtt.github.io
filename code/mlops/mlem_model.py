import pickle 
import os
import sys
from mlem.api import load
from mlem.runtime.client.base import HTTPClient

from mlem.api import save, load
from mlem.model import Model
from mlem.utils import get_logger

def deploy_model(type, path,):
    # deploy our model on dev  
    sys.subprocess.run(f"mlem serve {type} --model {path}")
    # deploy our model on prod
    sys.subprocess.run(f"mlem serve {type} --model {path} --prod") # if k8s etc. also 

def mlem_req(host, port,file):
    # make a request to our model
    client = HTTPClient(host, port)
    res = client.predict(load(file))
    return res # use this 