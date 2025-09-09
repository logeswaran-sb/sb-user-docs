---
title: ownCloud
sidebar_label: ownCloud
---

|**`Version 10.12.0` `OS Ubuntu 20.04` `BUSINESS APPS`**|  |
|-------------------------------------------------------|--|

### Description

ownCloud is a file server that enables secure storage, collaboration and sharing. It is convenient to store files in the cloud, so they are available on any device and can be shared with a few clicks.

### Software Included

Apache - 2.4.41

MySQL - 8.0.32

PHP - 7.4

Postfix - 3.4.13

ownCloud - 10.12.0

### Getting started after deploying OWNCLOUD

 Allow the ports in the firewall only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.

 Sets the MySQL root password and runs mysql_secure_installation.

 You will be logged out of the instance and displayed with the below message until the instance is deployed. **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**
> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the OWNCLOUD is deployed

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

 The ownCloud database detail is stored under **/root/.owncloud_database_details**

 The ownCloud admin login credential is stored under **/root/.owncloud_admin_details**

 You can access your ownCloud dashboard using the instance IPADDRESS as **http://$IPADDRESS** or the domain name configured for the instance. Login using the credential stored in the above file.

### Before accessing the OWNCLOUD follow the below Instructions

If you need to access the ownCloud dashboard using only the IPADDRESS. 

You will need to allow the instance IP to the trusted domain in ownCloud using the below command, by replacing the **$my_ip** with the instance IP.
~~~
occ config:system:set trusted_domains 1 --value="$my_ip"
~~~

Restart the apache service using the below command to apply the changes,
~~~
systemctl restart apache2
~~~

To configure the domain name, modify the below script by replacing the **$my_domain** with your required domain,
~~~
sed -i 's/#ServerName $my_domain/ServerName $my_domain/g'
~~~

Add the domain name to the trusted domain in ownCloud using the below command, by replacing the **$my_domain** with your required domain,
~~~
occ config:system:set trusted_domains 2 --value="$my_domain"
~~~

 Domain's A record must be pointed to the Instance's IPADDRESS.

Restart the apache service using the below command to apply the changes,
~~~
systemctl restart apache2
~~~

The value of the trused domains, **trusted_domains $NUMBER** should be added carefully,

> trusted_domains 0 --> localhost

If you would need to add other trusted_domains increment the **$NUMBER** as mentioned in the above commands.

### Setting up Postfix

 Set a Valid Hostname using the command 
 ~~~
 hostnamectl set-hostname $HOSTNAME
 ~~~
 
 Replace **$HOSTNAME** with a valid hostname and make sure the hostname has a proper A record.

 The Instance IP must have a proper PTR record.

 Configure the hostname in the postfix configuration **/etc/postfix/main.cf**

In the section below section, replace the **$hostname** with the valid hostname
~~~
myhostname = $hostname
~~~

 Restart the postfix using the command
~~~
systemctl restart postfix
~~~

 Once the above step is completed. You can check outgoing Emails using the command
~~~
echo "Postfix test" | mail -s "Subject" test@gmail.com
~~~

Initially, the Emails will be dropped into the SPAM folder. As this is a NEW IP the reputation is unknown. Once the reputation is calculated based on the incoming and outgoing emails. The emails will be dropped in the INBOX.


