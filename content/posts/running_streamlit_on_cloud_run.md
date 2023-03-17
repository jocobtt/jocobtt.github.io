---
title: "Running streamlit on cloud run"
date: 2023-03-07T09:48:03-05:00
draft: true
---

# Intro
For a fun weekend project I decided to set up a streamlit application to make an interface for a model and deploy the streamlit application on google cloud run so that it could be exposed to the internet. In this blog I want to walk through how to do that and some of the pros and cons of the different application hosting tools that google cloud provides. 

# Cloud Run
First, I want to talk about Cloud run. Cloud run is a Google Cloud Platform offering for running containers in the cloud in a SaaS like way. So you only pay for what you use and the container itself is exposed to the internet or can be put within a vpc as desired. It's a great way to for running simple container workloads as needed without having to stand up a whole kubernetes cluster and having to figure out networking on top of that. 

One thing I want to delve into a little bit is the difference between cloud run, app engine, GKE, and GCE and when you would want to use one over the other. One advantage of the cloud is providing compute easily. But with this there comes many different choices provided to you. 

# Setting up cloud run
For setting up cloud run you can do this as easily as building your container and then running `gcloud run build` in the directory that your dockerfile is located in or give it the path to your desired image. But for our specific usecase we will be using Terraform to stand up our desired architecture and use Github actions to build and push up our container to the container registry that cloud run will be pulling it from.

# The code 
Now that we have our cloud run instance deployed and our image built we will discuss the deployment of our api and the code that is associated with it. We are using cloud run for the deployment of our api that will generate baby names. This code is using fastapi to create the api and then uvicorn to expose the endpoints via cloud run. 

# The result 
See for yourself. Go and try generating a baby name via the following url. 