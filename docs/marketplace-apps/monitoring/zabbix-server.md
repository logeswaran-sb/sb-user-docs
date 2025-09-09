---
title: Zabbix Server
sidebar_label: Zabbix Server
---

|**`Version 6.2.7` `OS Ubuntu 22.04` `MONITORING`**|  |
|--------------------------------------------------|--|


### Description

Zabbix is an open-source monitoring tool that is used to monitor servers, networks, IT components, cloud services, and virtual machines. The Zabbix monitoring tool is used to provide monitoring metrics and monitor network usage, disk space consumption, and CPU load. Zabbix allows administrators to recognize server and device problems within a short period and therefore reduces the system downtime and risk of system failure.

### Software Included

Apache - 2.4.52

MySQL - 8.0.32

PHP - 8.1

Zabbix Server - 6.2.7

Zabbix Agent - 6.2.7


### Getting started after deploying ZABBIX SERVER

Allow the ports in the firewall only SSH (port 22, rate limited), apache on port 80 and Zabbix on ports 10050 and 10051 access

Sets the MySQL root password, runs mysql_secure_installation and creates initial Zabbix Configuration.

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the ZABBIX SERVER is deployed

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

The Zabbix database credential is stored under **/root/.zabbix_database_credentials**

The Zabbix Admin credential is stored under **/root/.zabbix_admin_credentials**

Then in a web browser go to **http://$IPADDRESS/zabbix/setup.php** to complete the setup. 

You will be taken to the,

**Welcome**  Page. Select the preferred language. If the language is not installed, [Click here](https://www.zabbix.com/documentation/current/en/manual/appendix/install/locales) and follow the steps mentioned in the link to install and activate the language. Once completed Click the Next step

 **Check of pre-requisites** Page. Click Next step

**Configure DB connection** Page. Enter the required informations. Refer to the file **/root/.zabbix_database_credentials** for database credentials. Click Next step

**Settings** Page. Enter the **Zabbix server name** and select the **Default time zone** and **Default theme**

**Pre-installation summary** Page. Check configuration parameters. If all is correct, click "Next step" button, or "Back" button to change configuration parameters.

**Install** Page. Displays **Congratulations! You have successfully installed Zabbix frontend.** Click Finish

You will be taken to the Admin login page. Login to the panel by referring the 
file **/root/.zabbix_admin_credentials**.

You can access the admin panel at **http://$IPADDRESS/zabbix/**
