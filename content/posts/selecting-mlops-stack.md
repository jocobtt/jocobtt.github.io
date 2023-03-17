---
title: "Selecting an Mlops Stack"
date: 2023-02-28T17:40:16-05:00
draft: true
---

As the hype surrounding AI and MLOps continues to grow, more and more individuals and organizations are looking to get involved and add value in this space. However, one of the biggest challenges that many face is choosing the right MLOps stack for their specific use case. In this blog, we will discuss the difficulties in choosing the right MLOps stack and provide some guidance on how to select the best one for your unique needs. Whether you are a beginner looking to get started or a seasoned professional looking to optimize your existing workflow, this blog will provide valuable insights and tips to help you make the right decision.


First, by way of introduction, I am an MLOps engineer. My background is in statistics but I have been doing MLOps related stuff for the last 3-4 years now. As I have worked in this field I have found that there are always new tools coming out and it is sometimes hard to prperly evaluate what is out there and how useful the tool is. There are many options available for your own MLOps stack and that may seem overwhelming but in this blog I am hoping to discuss some important considerations to keep in mind when evaluating and deciding on an MLOps platform. 

Something to start out with is the focus on what your model use case is. Are you building a model for a product? Is the model * do you already have models that are being used? How are these models being used? In general, regardless of model usecase or the answers to the previous questions you can break down MLOps into the following steps: data engineering, model training, model deployment, model deployment, model monitoring, model retraining, and overall pipelining and orchestrating. The below diagram illustrates this concept more clearly. As you can see the process is constantly feeding into itself, this allows your models to be improved upon and better aligned to the needs and usecases for the company. So any tool that you choose to include in your stack should in theory contribute in some way to the CICD aspect for modeling that is central to MLOps. 
 


Another consideration is the Jobs to be done vs tools argument.  When evaulating how your team wants to do MLOps you will be bombarded by many different tools, methods, and platforms. How do you sift through the options and prioritize what is important to your team? First lay out your top use cases for MLOps. What are you trying to solve through MLOps?  Do you already have models that you are deploying and are you having issues with keeping fresh models in production? Or are you struggling to automate aspects around your data science workflow? Perhaps, you aren't feeling like your best models are getting into production? All of these, and many more are perfect use cases for MLOps. Now that you have your usecases listed out and your priorities it's time to evaluate what MLOps strategy you want to adopt and what tools you can leverage better, add to your existing stack, or build your stack around.



Build vs buy
There are a lot of great tools out there that are paid services that provide all of the needs that you may have for your MLOps needs. For instance, any of the major cloud providers have very robust offerings for MLOps. Likewise, there are plenty of open source tools that can address our needs. The most important thing to figure out though is whether to build or buy the tool that you want to leverage or build what you are wanting to implement using open source tools.

# Evaluating tools
Providing value from an mlops tool - only worth while if you can provide value. 

Don't just select a tool because it can do everything you think you might need. Play around with the tool to actually evaulate it. How to evaluate the tool? And once you have a few different tools narrowed down, how can you then make informed decisions to pick the best tool? I have been in a few situations where we went through this evaluation process. One thing that I have thought was successful was having a set critira laid out that we were wanting to evaluate certain tools on, one source that I felt was helpful was neptune.ai's blogs that discuss these tools and compare and contrast them. 


Understanding the mlops lifecycle helps you decide what tools you need to use. This all depends on what use cases you are wanting to address. For instance, are you primarily needing to deploy your models? Do you need a workflow orchestration tool? 

Tools that are either popular or worth exploring/methods:
- mlflow
- kserve/kubeflow 
- mlem/dvc
- seldoncore 
- sagemaker/azureml/googleml 
- airflow 
- neptune.ai
- nannyml 
- flyte
- feast 

