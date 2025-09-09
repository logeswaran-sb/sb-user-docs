---
title: RabbitMQ
sidebar_label: RabbitMQ
---

|**`Version 3.11.9` `OS Ubuntu 20.04` `DEVELOPER TOOLS`**|  |
|--------------------------------------------------------|--|


### Description

RabbitMQ is a messaging broker - an intermediary for messaging. It gives your applications a common platform to send and receive messages, and your messages a safe place to live until received.

### Software Included

RabbitMQ - 3.11.9

Erlang - 25.0.4

### Getting started after deploying RABBITMQ

Allow the ports in the firewall only SSH (port 22, rate limited), and RabbitMQ on port 15672 access.

Sets the RabbitMQ Admin password and creates initial RabbitMQ Configuration. 

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the RABBITMQ is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

Erlang is configured with RabbitMQ. 

The RABBITMQ Admin credential is stored under **/root/.admin_password**

Then in a web browser go to **http://IPADDRESS:15672**  to view the RABBITMQ Management Web dashboard.

Login using the credentials stored under **/root/.admin_password**
