---
title: Magento 2 Open Source
sidebar_label: Magento 2 
---

|**`Version 2.4.6` `OS Ubuntu 20.04` `ECOMMERCE`**|  |
|-------------------------------------------------|--|

### Description

Magneto is one of the best e-commerce platforms. Its creators built it using open-source technology. This gives its users the ability to control the look, functionality, and content of their online store without compromising the shopping experience. In addition, Magento gives its users a variety of useful tools and features. This includes marketing, search engine optimization, and catalogue-management tools.

### Software Included

Magento Open Source - 2.4.6

PHP - 8.1

Composer -  2.5.8

Elasticsearch - 7.17.10

Varnish - 6.4.0 

Apache - 2.4.41

MySQL - 8.0.33

Certbot - 0.40.0

Redis - 5.0.7

Postfix - 3.4.13

### Getting started after deploying MAGENTO 2

Before the installation process, you will need to register an account and get your authentication keys from Magento Marketplace.

To get your **Public** and **Private key**, you must follow the instruction [How to get your authentication keys](https://devdocs.magento.com/guides/v2.3/install-gde/prereq/connect-auth.html). Use the **Public key** as your **Username** and the **Private key** as your **Password**.

Allow the ports in the firewall only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.

Sets the MySQL root password, runs mysql_secure_installation, and creates a Magento 2 mysql database and user with the necessary permissions.

Enables the Apache rewrite module so the Magento 2 permalink feature will work.

Enable and configure Varnish (port 80) for your Magento 2 instance.

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the MAGENTO 2 is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

When you connect to your MAGENTO 2 Instance via SSH for the 1st time, you’ll be displayed with the passwords and prompted to enter a domain name to continue the setup and secure your connection, you will need a registered domain configured for your Instance.
~~~
To cancel setup, press Ctrl+C.  This script will run again on your next login:
Enter the domain name for your new Magento2 site:
(ex. example.org or test.example.org) do not include www or http/s:
Domain/sub-domain name:
~~~

Further, you will be asked to enter the required data to create a new admin account for Magento 2.
~~~
Creating Magento admin login credentials.

Enter your Email Address: 

Please enter your admin username.
Username: 

Please enter your password.
*Note: Password should be at least 6 characters long with one digit and one Upper case Alphabet.
Password:
~~~

The next prompt asks if you want to use SSL for your website via Let’s Encrypt.

**Note**. Before using SSL your domain name must have a proper A record of the server's IP address that needs to be propagated by DNS, otherwise Let’s Encrypt doesn’t validate it.

~~~
Next, you have the option of configuring LetsEncrypt to secure your new site.
Before doing this, be sure that you have pointed your domain or subdomain to this server's IP address.
You can also run LetsEncrypt certbot later with the command 'certbot'


Would you like to use LetsEncrypt (certbot) to configure SSL(https) for your new site? (y/n):
~~~

**Note**. You can not configure the SSL certificate later just using the command 'certbot --apache' because Varnish uses the default 80 port. In case you want to configure SSL after the Magento installation, Run the below command and enter the domain name
~~~
chmod +x /opt/ssl_config/ssl.sh && /opt/ssl_config/ssl.sh
~~~

After SSL configuration the Magento 2 installation will begin,
> Downloading Magento 2...

Then you’ll see the installation process of Magento 2, where you can choose to install the sample data or not.
~~~
Would you like to install Magento 2 Sample Data? (y/n):
~~~

After successful installation, you will see the following message:
~~~
Installation complete. Access your new Magento site http://$DOMAIN/ in a browser to continue.
~~~

To access your new Magento site use **http://$DOMAIN/** in a browser.

To access the Magento admin area use **http://$DOMAIN/admin** in a browser and log in using the username and password that you have entered while configuring.

The MySQL root password is stored under  **/root/.mysql_root_password**

 Login to MySQL using the command,
 ~~~
 mysql -u root -p <$password stored in the above file>
 ~~~

Magento 2 Database Information is stored under  **/root/.magento_database_details**

The web root is  **/var/www/html**.

Replace your **public** and **private key** in the file **/var/www/.config/composer/auth.json** for further installation and updation.
~~~
Replace:
$PUBLIC_KEY with your public key
$PRIVATE_KEY with your private key
~~~

### In addition, there are a few customized setup steps that we recommend you take

Creating an Apache virtual hosts file for each site maintains the default configuration as the fallback, as intended, and makes it easier to manage changes when hosting multiple sites.

To do so, you’ll need to create two things for each domain: a new directory in  **/var/www**  for that domain’s content, and a new virtual host file in  **/etc/apache2/sites-available**  for that domain’s configuration

Setting up an SSL certificate enables HTTPS on the web server, which secures the traffic between the server and the clients connecting to it. Certbot is a free and automated way to set up SSL certificates on a server. It’s included as part of the Magento 2 deployment to make securing the domain easier.

### To use Certbot, you’ll need a registered domain name and two DNS records

An A record from a domain (e.g., example.com) to the server’s IP address

An A record from a domain prefaced with www (e.g.,  [www.example.com](http://www.example.com/)) to the server’s IP address

Additionally, if you’re using a virtual hosts file, you’ll need to make sure the server name directive in the VirtualHost block (e.g., ServerName example.com) is correctly set to the domain.

Once the DNS records and, optionally, the virtual host files are set up, you can generate the SSL certificate. Make sure to substitute the domain in the command.

HTTPS traffic on port 443 needs to be allowed through the firewall. After you set up HTTPS, you can optionally deny HTTP traffic on port 80:

### Setting up Postfix

 Set a Valid Hostname using the command 
 ~~~
 hostnamectl set-hostname $HOSTNAME
 ~~~
 
 Replace **$HOSTNAME** with a valid hostname and make sure the hostname has a proper A record.

The Instance IP must have a proper PTR record.

Configure the hostname in the postfix configuration  **/etc/postfix/main.cf**

In the section below section, replace the $hostname with the valid hostname

```
myhostname = $hostname
```

Restart the postfix using the command

```
systemctl restart postfix
```

Once the above step is completed. You can check outgoing Emails using the command

```
echo "Postfix test" | mail -s "Subject" test@gmail.com
```

Initially, the Emails will be dropped into the SPAM folder. As this is a NEW IP the reputation is unknown. Once the reputation is calculated based on the incoming and outgoing emails. The emails will be dropped in the INBOX.