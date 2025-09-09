---
title: Laravel Lemp
sidebar_label: Laravel Lemp
---

|**`Version 10.3.1` `OS Ubuntu 22.04` `CMS`**|  |
|--------------------------------------------|--|


### Description

[Laravel](https://laravel.com/) is an open-source PHP framework that provides a set of tools and resources to build modern PHP applications.

### Software Included

Laravel - 10.3.1

Nginx - 1.18.0

MySQL - 8.0.32

PHP - 8.2

Composer - 2.5.4

Certbot - 1.21.0

### Getting started after deploying LARAVEL

Allow the ports in the firewall only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.

Sets the MySQL root password, runs mysql_secure_installation, and creates a Laravel user with the necessary permissions.

Creates the initial Laravel configuration file to set up database credentials and allow the Laravel instance to connect to the database.

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the LARAVEL is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

When you connect to your Laravel Instance via SSH for the 1st time, you’ll be displayed with the passwords and prompted to enter a domain name to complete the setup and secure your connection, you will need a registered domain configured for your Instance.

```
--------------------------------------------------
This setup requires a domain name.  If you do not have one yet, you may
cancel this setup, press Ctrl+C.  This script will run again on your next login
--------------------------------------------------
Enter the domain name for your new Laravel site.
(ex. example.org or test.example.org) do not include www or http/s
--------------------------------------------------
Domain/sub-domain name:
```

Domain's A record must be pointed to the Instance's IPADDRESS.

Once the setup is completed without any issues, you will be able to access the domain name or Server's IPADDRESS in your browser to see the Laravel installation.

The MySQL root password is stored under  **/root/.mysql_root_password**

 Login to MySQL using the command,
 ~~~
 mysql -u root -p <$password stored in the above file>
 ~~~

Laravel Database Informations are stored under  **/root/.laravel_database_details**

Laravel shell user login credentials are stored under  **/root/.shell_user_passwords**

The web root is **/var/www/laravel**, and the Laravel configuration file is **/var/www/laravel/.env**.

### In addition, there are a few customized setup steps that we recommend you take

Creating an Nginx server block file for each site maintains the default configuration as the fallback, as intended, and makes it easier to manage changes when hosting multiple sites.

To do so, you’ll need to create two things for each domain: a new directory in /var/www for that domain’s content, and a new server block file in /etc/nginx/sites-available for that domain’s configuration.

Setting up an SSL certificate enables HTTPS on the web server, which secures the traffic between the server and the clients connecting to it. Certbot is a free and automated way to set up SSL certificates on a server. It’s included as part of the LEMP deployment to make securing the domain easier.

### To use Certbot, you’ll need a registered domain name and two DNS records

An A record from a domain (e.g., example.com) to the server’s IP address

An A record from a domain prefaced with www (e.g.,  [www.example.com](http://www.example.com/)) to the server’s IP address

Additionally, if you’re using a virtual hosts file, you’ll need to make sure the server name directive in the VirtualHost block (e.g., ServerName example.com) is correctly set to the domain.

Once the DNS records and, optionally, the virtual host files are set up, you can generate the SSL certificate. Make sure to substitute the domain in the command.

```
certbot --nginx -d example.com -d www.example.com
```

HTTPS traffic on port 443 needs to be allowed through the firewall. After you set up HTTPS, you can optionally deny HTTP traffic on port 80.
