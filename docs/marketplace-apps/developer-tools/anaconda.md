---
title: Anaconda
sidebar_label: Anaconda
---

|**`Version 2021.11` `OS Ubuntu 22.04` `DEVELOPER TOOLS`**|  |
|---------------------------------------------------------|--|


### Description

Anaconda is an open-source distribution of the Python and R programming languages for data science that aims to simplify package management and deployment. Anaconda helps in simplified package management and deployment. Anaconda comes with a wide variety of tools to easily collect data from various sources using various machine learning and AI algorithms. It helps in getting an easily manageable environment setup which can deploy any project with the click of a single button.

**Note:- 20 GB storage is required for a successful installation.**

### Software Included

Conda - 4.10.3

Anaconda - 2021.11  

### Getting started after deploying ANACONDA

Allow the ports in the firewall only SSH (port 22, rate limited) access.

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the ANACONDA is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

Anaconda files are stored under **/home/aconda/anaconda/**

Switch the user to **aconda** by entering the following command from the root. 
~~~
su aconda 
~~~

Anaconda shell user login credentials are stored under  **/root/.shell_user_passwords**

To use anaconda or directly log in as the user using the login credentials stored above.

Once you have done that, you’ll be placed into the default  **base**  programming environment of Anaconda, and your command prompt will change to be the following:
~~~
(base) aconda@ubuntu:~$
~~~

Use the below command to check the version of conda from the user.
```
conda --version
```

