---
title: Docker
sidebar_label: Docker
---


|**`Version 23.0.1` `OS Ubuntu 22.04` `DEVELOPER TOOLS`**|  |
|--------------------------------------------------------|--|

### Description

Docker containers combine software and related dependencies into a standardized unit for software development that includes everything it needs to run: code, runtime, system tools and libraries. This guarantees that your application will always run the same and makes collaboration as simple as sharing a container image.

This enables you to create a instance pre-installed with recommended Docker tools (docker-engine, docker-compose).

### Software Included

Docker CE - 23.0.1

Docker Compose - 2.16.0

### Getting started after deploying DOCKER

Allow the ports in the firewall only SSH (port 22, rate limited) access.


You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the DOCKER is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

Verify that the Docker Engine installation is successful by running the  **hello-world**  image:
```
sudo docker run hello-world
```
This command downloads a test image and runs it in a container. When the container runs, it prints a confirmation message and exits

