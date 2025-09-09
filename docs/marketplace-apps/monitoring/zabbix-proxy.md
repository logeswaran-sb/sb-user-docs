---
title: Zabbix Proxy
sidebar_label: Zabbix Proxy
---

|**`Version 6.2.9` `OS Ubuntu 22.04` `MONITORING`**|  |
|--------------------------------------------------|--|

### Description

Zabbix is an open-source monitoring tool that is used to monitor servers, networks, IT components, cloud services, and virtual machines. The Zabbix monitoring tool is used to provide monitoring metrics and monitor network usage, disk space consumption, and CPU load. Zabbix allows administrators to recognize server and device problems within a short period and therefore reduces the system downtime and risk of system failure.

### Software Included

Zabbix Server - 6.2.9

### Getting started after deploying ZABBIX PROXY

Allow the ports in the firewall only SSH (port 22, rate limited) and Zabbix on ports 10050 and 10051 access

Sets the MySQL root password, runs mysql_secure_installation, and creates initial Zabbix Configuration.

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the ZABBIX PROXY is deployed

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

To add the Zabbix proxy to the Zabbix server, the file **/etc/zabbix/zabbix_proxy.conf** must be modified to
~~~
Server=$IPADDRESS (IP ADDRESS OF ZABBIX SERVER)
Hostname=$HOSTNAME (HOSTNAME OF THE ZABBIX PROXY)
~~~

Save the file and restart the Zabbix proxy service
~~~
systemctl restart zabbix-proxy.service
~~~