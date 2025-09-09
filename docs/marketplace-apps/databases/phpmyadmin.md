---
title: phpMyAdmin
sidebar_label: phpMyAdmin
---

|**`Version 5.2.0` `OS Ubuntu 20.04` `DATABASES`**|  |
|-------------------------------------------------|--|

### Description

PhpMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web.

### Software Included

Apache - 2.4.41

MySQL - 8.0.30

PHP - 8.1

Certbot - 0.40.0

phpMyAdmin - 5.2.0


### Getting started after deploying PHPMYADMIN

 Allow the ports in the firewall only SSH (port 22, rate limited), HTTP (port 80), HTTPS (port 443) and MySQL (3306) access.

 Sets the MySQL root password and runs mysql_secure_installation.

 Sets the phpMyAdmin admin password.

 The phpMyAdmin configuration file is located at **/etc/phpmyadmin/**

 You will be logged out of the instance and displayed with the below message until the instance is deployed. **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**
> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the PHPMYADMIN is deployed

 You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

 The MySQL root password is stored under **/root/.mysql_root_password**

 Login to MySQL using the command,
 ~~~
 mysql -u root -p <$password stored in the above file>
 ~~~
 
 You can access phpMyAdmin immediately by visiting the Instance’s IP address in your browser followed by **/phpmyadmin**

 You will be prompted for the first login, which we have created for security purposes. 

 The user name is **"admin"**

 The Phpmyadmin password is stored under **/root/.phpmyadmin_password**

 The web root is **/var/www/html**

 To secure your connection, you will need a registered domain configured for your Instance.
