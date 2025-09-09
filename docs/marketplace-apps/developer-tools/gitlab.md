---
title: Gitlab
sidebar_label: Gitlab
---

|**`Version Latest` `OS Ubuntu 20.04` `DEVELOPER TOOLS`**|  |
|--------------------------------------------------------|--|


### Description

GitLab is a web-based Git repository that provides free open and private repositories, issue-following capabilities, and wikis. It is a complete DevOps platform that enables professionals to perform all the tasks in a project—from project planning and source code management to monitoring and security.
Continuous Integration and Delivery, Security with Monitoring, as well as rich project management, features to development teams across the enterprise. 
GitLab helps teams reduce product lifecycles and increase productivity, 
which in turn creates value for customers. 

**Note: 4GB of RAM is the required minimum memory size to run this app. It supports up to 500 users. 30 GB storage is required for successfull installation. You can read more about system requirements  [here](https://docs.gitlab.com/ee/install/requirements.html#hardware-requirements).**

### Software Included

GitLab CE - Latest

### Getting started after deploying GITLAB

**Please note**: It can take up to 10 mins after instance creation for Gitlab to be functional.

Allow the ports in the firewall only SSH (port 22, rate limited), and access GitLab through the web on port 80 access.

Sets the GitLab Admin password.

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the GITLAB is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

The GitLab Admin credential is stored under **/root/.gitlab_dashboard_credentials**

Then in a web browser go to **http://$IPADDRESS** to view the GitLab Dashboard.

Login using the Admin credentials stored under **/root/.gitlab_dashboard_credentials**
