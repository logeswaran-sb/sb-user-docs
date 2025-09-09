---
title: ActiveMQ
sidebar_label: ActiveMQ
---

|**`Version 5.17.4` `OS Ubuntu 22.04` `DEVELOPER TOOLS`**|  |
|--------------------------------------------------------|--|


### Description

Apache ActiveMQ is an open-source message-oriented middleware (MOM) broker service written in Java programming language. It is a protocol developed by the Apache foundation that helps to send messages between different applications with additional features.

### Software Included

ActiveMQ - 5.17.4

Java - 11

### Getting started after deploying ACTIVEMQ

Allow the ports in the firewall only SSH (port 22, rate limited), and ActiveMQ on port 8161 access.

Sets the ActiveMQ Admin password and creates initial ActiveMQ Configuration. 

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the ACTIVEMQ is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

The ActiveMQ Admin credential is stored under **/root/.activemq_admin_password**

Then in a web browser go to **http://IPADDRESS:8161/admin** to view the ActiveMQ Admin dashboard and **http://IPADDRESS:8161** to log in as a user.

Login using the Admin credentials stored under **/root/.activemq_admin_password**
