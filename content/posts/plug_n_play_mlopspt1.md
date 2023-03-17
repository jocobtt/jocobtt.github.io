---
title: "Plug n play mlops pt1"
date: 2023-03-07T09:49:56-05:00
draft: true
---
# Motivation
This is an extension to my previous blog where I discuss choosing your own mlops stack and the different things that you need to consider. In this particular article I am going to walk through some different tool pairings that could serve as a good starting point to get your feet wet in mlops for your team and how these tools could be leveraged. 

# Our base model(s) and use case 


# Workflow - argoworkflows or github actions 
github actions - https://docs.mlops-github.com/docs/experiment_tracking/experiment_tracking.html

# feature store - dvc or feast

# DVC + MLEM
Experiment tracking and model deployment. 
DVC and MLEM are both made by the same company and together they provide a cool way to track model version tracking, data version tracking, and ultimately save and deploy your model. In our below code we generate our model, store the model features, and then based on model performance deploy our model into production. MLEM allows you to build out your model as either a docker container, fastapi, or ... From there you can then serve your model to a given location or feed the output of the deployment build to your final destination. 

Here is what our deployment code looks like:

# Bentoml + mlflow 
In this blog we obviously have now built our model out. Stored the metadata we care about to compare the models. Now that we have that all set up as we want we can deploy our model. We are wanting to deploy the best model we have. So we can utilize mlflow to help us determine which of our models in our registry performed best on our training data and then deploy that into production using bentoml. Bentoml... 

In order to deploy our model using bentoml we can do the following. 

From there we can now access our model here if we are running this on our local machine or here if we are running it in production. Bentoml feature highlight. Why we don't just deploy with mlflow.. 


# NannyML (or maybe a different tool?)
