---
title: MediaWiki
sidebar_label: MediaWiki
---

|**`Version 1.39` `OS Ubuntu 22.04` `CMS`**|  |
|------------------------------------------|--|

### Description

MediaWiki is the free open-source wiki software used to power Wikipedia and thousands of other wikis. The contributions of hundreds of individual developers have helped make it a feature-rich, secure and scalable platform capable of powering some of the largest collaboratively edited reference projects in the world.

### Software Included

Apache - 2.4.41

MySQL - 8.0.32

PHP - 7.4

Postfix - 3.4.13

MediaWiki - 1.39

### Getting started after deploying MEDIAWIKI

 Allow the ports in the firewall only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.

 Sets the MySQL root password and runs mysql_secure_installation.

 You will be logged out of the instance and displayed with the below message until the instance is deployed. **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**
> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the MEDIAWIKI is deployed

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

 The MediaWiki database detail is stored under **/root/.mediawiki_database_details**

 The MediaWiki admin login credential is stored under **/root/.mediawiki_admin_details**

 You can access your MediaWiki dashboard using the instance IPADDRESS as **http://$IPADDRESS/mediawiki** or the domain name configured for the instance. Login using the credential stored in the above file.

### Before accessing the MEDIAWIKI follow the below Instructions

If you need to access the MediaWiki dashboard using only the IPADDRESS. 

You will need to allow the instance IP in MediaWiki Configuration using the below command, by replacing the **$my_ip** with the instance IP.
~~~
sed -i 's/$wgServer = \"http\:\/\/localhost\"\;/$wgServer = \"http\:\/\/$my_ip\"\;/g' /var/www/html/mediawiki/LocalSettings.php
~~~

Restart the apache service using the below command to apply the changes,
~~~
systemctl restart apache2
~~~

To configure the domain name, modify the below script by replacing the **$my_domain** with your required domain,
~~~
sed -i 's/#ServerName $my_domain/ServerName $my_domain/g'
~~~

Add the domain name in MediaWiki Configuration using the below command, by replacing the **$my_domain** with your required domain,
~~~
sed -i 's/$wgServer = \"http\:\/\/localhost\"\;/$wgServer = \"http\:\/\/$my_domain\"\;/g' /var/www/html/mediawiki/LocalSettings.php
~~~

 Domain's A record must be pointed to the Instance's IPADDRESS.

Restart the apache service using the below command to apply the changes,
~~~
systemctl restart apache2
~~~

If the MediaWiki need to be accessed directly using the IPADDESS as **http://$IPADDRESS** instead of **http://$IPADDRESS/mediawiki**. Follow the below steps

You can add the below rule under **/var/www/html/** under a filename **.htaccess** using the below command,
~~~
vi /var/www/html/.htaccess
~~~

Paste the below command and save the file by pressing **ESC** and the command **:wq**
~~~
RewriteEngine On
RewriteRule ^$ /mediawiki [L]
~~~

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
