---
title: Miniconda
sidebar_label: Miniconda
---

|**`Version Latest` `OS Ubuntu 22.04` `DEVELOPER TOOLS`**|  |
|--------------------------------------------------------|--|


### Description

Miniconda is a minimal installer for Conda, Python, their dependencies and a small collection of packages. Miniconda is a lightweight version of Anaconda. 

### Software Included

Miniconda - Latest

Conda - 23.1.0

### Getting started after deploying MINICONDA

Allow the ports in the firewall only SSH (port 22, rate limited) access.

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the MINICONDA is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

Miniconda files are stored under **/home/mconda/miniconda/**

Switch the user to **mconda** by entering the following command from the root.  
~~~
su mconda
~~~

Miniconda shell user login credentials are stored under  **/root/.shell_user_passwords**

To use miniconda or directly log in as the user using the login credentials stored above.

Once you have done that, you’ll be placed into the default  `base`  programming environment of Miniconda, and your command prompt will change to be the following:
~~~
(base) mconda@ubuntu:~$
~~~

Use the below command to check the version of conda from the user.
```
conda --version
```
