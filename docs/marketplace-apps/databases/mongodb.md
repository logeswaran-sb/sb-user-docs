---
title: MongoDB
sidebar_label: MongoDB
---

|**`Version 6.0.4` `OS Ubuntu 20.04` `DATABASES`**|  |
|-------------------------------------------------|--|

### Description

Thousands of startups use MongoDB for their mission-critical applications. It's the leading NoSQL database, offering a simple and elegant way to help developers scale.


### Software Included

MongoDB: 6.0.4

### Getting started after deploying MONGODB

 Allow the ports in the firewall only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.

 The MongoDB instance is available at 127.0.0.1:27017 and is bound to localhost by default. Note that port 27017 is not allowed by default.

 MongoDB’s configuration details are in **/etc/mongod.conf.**

 You will be logged out of the instance and displayed with the below message until the instance is deployed. **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**
> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the MONGODB is deployed

 You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

 View MONGODB status using the below command:
~~~
mongosh --eval 'db.runCommand({ connectionStatus: 1 })'
~~~

 By default the remote login is disabled and authentication for remote login is enabled for security purposes.

**To Enable Remote login:**

 Change the bindIp in the configuration file **/etc/mongod.conf**
~~~
From: "  bindIp: 127.0.0.1"
TO: "  bindIp: 0.0.0.0"
~~~

 Restart MongoDB
~~~
systemctl restart mongod
~~~

