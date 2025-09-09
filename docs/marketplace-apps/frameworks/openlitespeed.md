---
title: OpenLitespeed
sidebar_label: OpenLitespeed
---

|**`Version 1.7.16` `OS Ubuntu 22.04` `FRAMEWORKS`**|  |
|---------------------------------------------------|--|


### Description

OpenLiteSpeed is the Open Source edition of LiteSpeed Web Server Enterprise and contains all of the essential features, including HTTP/3 support.

### Software Included

OpenLiteSpeed - 1.7.16

LSPHP - 7.4

### Getting started after deploying OPENLITESPEED

Allow the ports in the firewall only SSH (port 22, rate limited), HTTP (port 80), HTTPS (port 443) access, and Litespeed Admin Panel (port 7080).

Sets the OpenLitespeed Admin Dashboard Password.

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the OPENLITESPEED is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command.  **< sudo su - >**

When you connect to your OpenLitespeed Instance via SSH for the 1st time, you’ll be displayed with the password and accessing the IP address on your web browser, you should be greeted with the default **"Welcome to MarketPlace!"** landing page.

The OpenLitespeed Admin Dashboard Login Credential is stored under  **/root/.Litespeed_Admin_Password**

Access OpenLitespeed Admin Dashboard through the web using **http://IPADDRESS:7080**

You can view the php information immediately by visiting the Instance’s IP address in your browser followed by  **/phpinfo.php**

The web root is  **/var/www/html**

To secure your connection, you will need a registered domain configured for your Instance.
