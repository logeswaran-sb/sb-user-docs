---
title: WordPress Lamp
sidebar_label: WordPress Lamp
---

|**`Version 6.0` `OS Ubuntu 20.04` `CMS`**|  |
|-----------------------------------------|--|


### Description

Over 60 million people choose WordPress to power their websites and blogs. Born out of a desire for an elegant personal publishing system built on PHP and MySQL, its potential has evolved into a full content management system.

### Software Included

WordPress - 6.0

Apache - 2.4.41

MySQL - 8.0.32

PHP - 8.1

Fail2ban - 4.4.0.4

Postfix - 3.4.13

Certbot - 0.40.0

### Getting started after deploying WORDPRESS

 Allow the ports in the firewall only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.

 Sets the MySQL root password, runs mysql_secure_installation, and creates a wordpress user with the necessary permissions.

 Creates the initial WordPress configuration file to set up salt keys and allow the WordPress instance to connect to the database.

 Disables XML-RPC to help prevent DDoS and other brute force attacks.

 Modifies some of PHP’s settings to increase the maximum file size and execution time.

 Enables the Apache rewrite module so the WordPress permalink feature will work.

 You will be logged out of the instance and displayed with the below message until the instance is deployed. **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**
> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the WORDPRESS is deployed

 You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

 When you connect to your WordPress Instance via SSH for the 1st time, you’ll be displayed with the passwords and prompted to enter a domain name to continue the setup and secure your connection, you will need a registered domain configured for your Instance.
~~~
To cancel setup, press Ctrl+C.  This script will run again on your next login:
Enter the domain name for your new WordPress site:
(ex. example.org or test.example.org) do not include www or http/s:
Domain/sub-domain name: 
~~~

Domain's A record must be pointed to the Instance's IPADDRESS.

You will be prompted to enter your user-related data for site and admin setup.
~~~
Please take some time to complete the WordPress Admin Setup.
Your Email Address: 

Username: 

Password:

Blog Title: 

Is the information correct? [Y/n] 
~~~

After you acknowledge data is correct, wait for a few seconds to complete the wordpress setup and you will be displayed with the message **Completing the configuration of WordPress**.

Once the setup is completed without any issues, a message **Installation completed. Access your new WordPress site in a browser to continue** will be displayed.

You will be able to access the domain name or Server's IPADDRESS in your browser to view the site.

 The MySQL root password is stored under **/root/.mysql_root_password**

 Login to MySQL using the command,
 ~~~
 mysql -u root -p <$password stored in the above file>
 ~~~

 You can access phpMyAdmin immediately by visiting the Instance’s IP address in your browser followed by **/phpmyadmin**

 You will be prompted for the first login, which we have created for security purposes. 

 The user name is **"admin"**

 The Phpmyadmin password is stored under **/root/.phpmyadmin_password**

 WordPress Database Informations are stored under **/root/.wordpress_database_details**

 The web root is **/var/www/html** and the WordPress configuration file is **/var/www/html/wp-config.php.**

### In addition, there are a few customized setup steps that we recommend you take

Creating an Apache virtual hosts file for each site maintains the default configuration as the fallback, as intended, and makes it easier to manage changes when hosting multiple sites.

To do so, you’ll need to create two things for each domain: a new directory in **/var/www** for that domain’s content, and a new virtual host file in **/etc/apache2/sites-available** for that domain’s configuration

Setting up an SSL certificate enables HTTPS on the web server, which secures the traffic between the server and the clients connecting to it. Certbot is a free and automated way to set up SSL certificates on a server. It’s included as part of the WordPress deployment to make securing the domain easier.

### To use Certbot, you’ll need a registered domain name and two DNS records

An A record from a domain (e.g., example.com) to the server’s IP address

An A record from a domain prefaced with www (e.g., www.example.com) to the server’s IP address

Additionally, if you’re using a virtual hosts file, you’ll need to make sure the server name directive in the VirtualHost block (e.g., ServerName example.com) is correctly set to the domain.

Once the DNS records and, optionally, the virtual host files are set up, you can generate the SSL certificate. Make sure to substitute the domain in the command.

~~~
certbot --apache -d example.com -d www.example.com
~~~

HTTPS traffic on port 443 needs to be allowed through the firewall. After you set up HTTPS, you can optionally deny HTTP traffic on port 80:

### Setting up Postfix

 Set a Valid Hostname using the command 
 ~~~
 hostnamectl set-hostname $HOSTNAME
 ~~~
 
 Replace **$HOSTNAME** with a valid hostname and make sure the hostname have a proper A record.

 The Instance IP must have a proper PTR record.

 Configure the hostname in the postfix configuration **/etc/postfix/main.cf**

In the section below section, replace the $hostname with the valid hostname
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
