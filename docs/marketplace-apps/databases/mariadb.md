---
title: MariaDB
sidebar_label: MariaDB
---

|**`Version 10.6.12` `OS Ubuntu 22.04` `DATABASES`**|  |
|---------------------------------------------------|--|

### Description

MariaDB server is a popular open-source multithreaded relational database. MariaDB is remarkably scalable and can handle tens of thousands of tables and billions of rows of data. It can also manage small amounts of data quickly and smoothly.

### Software Included

MariaDB - 10.6.12

### Getting started after deploying MARIADB

Allow the ports in the firewall only SSH (port 22, rate limited) and MariaDB(3306) access.

Sets the MariaDB root password and runs mysql_secure_installation.

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the MARIADB is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

The MariaDB root password is stored under  **/root/.mariadb_root_password**

Login to MariaDB using the command  **mysql**  and Click Enter

The user  **dbadmin**  has the same capabilities as the root account but is configured for password authentication

The  **root**  MariaDB user is set to authenticate using the  **unix_socket**  plugin by default rather than with a password. So setting up a password for  **root**  user is not recommended.

