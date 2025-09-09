---
title: Webmin
sidebar_label: Webmin
---

|**`Version 2.013` `OS Ubuntu 20.04` `HOSTING PANELS`**|  |
|------------------------------------------------------|--|


### Description

Webmin is a free, open-source application for Linux server administration. If you prefer to manage all aspects of your Linux VPS or dedicated server from a graphical interface instead of the command line interface (CLI), Webmin might be right for you.

### Software Included

Webmin - 2.013 

Postfix - 3.4.13

### Getting started after deploying WEBMIN

 Allow the ports in the firewall only SSH (port 22, rate limited) and WEBMIN (port 10000) access.

 Creates the initial Webmin Admin Panel Password.

 You will be logged out of the instance and displayed with the below message until the instance is deployed. **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**
> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the WEBMIN is deployed

 You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

 Access the Webmin Admin Panel Password by accessing **$IPADDRESS:10000**

 The Webmin Admin Panel root password is stored under **/root/.webmin_root_password**

### Setting up Postfix
 Set a Valid Hostname using the command 
 ~~~
 hostnamectl set-hostname $HOSTNAME
 ~~~
 
 Replace **$HOSTNAME** with a valid hostname and make sure the hostname have a proper A record.

 The Instance IP must have a proper PTR record.

 Configure the hostname in the postfix configuration **/etc/postfix/main.cf**

In the section below section, replace the **$hostname** with the valid hostname
~~~
myhostname = $hostname
~~~

 Restart postfix using the command
~~~
systemctl restart postfix
~~~

 Once the above step is completed. You can check outgoing Emails using the command
~~~
echo "Postfix test" | mail -s "Subject" test@gmail.com
~~~

Initially, the Emails will be dropped into the SPAM folder. As this is a NEW IP the reputation is unknown. Once the reputation is calculated based on the incoming and outgoing emails. The emails will be dropped in the INBOX.

