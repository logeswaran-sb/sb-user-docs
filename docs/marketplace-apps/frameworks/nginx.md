---
title: Nginx
sidebar_label: Nginx
---

|**`Version 1.18` `OS Ubuntu 20.04` `FRAMEWORKS`**|  |
|-------------------------------------------------|--|


### Description

NGINX is an open-source software for web serving, reverse proxying, caching, load balancing, media streaming, and more. It started out as a web server designed for maximum performance and stability. In addition to its HTTP server capabilities, NGINX can also function as a proxy server for email (IMAP, POP3, and SMTP) and a reverse proxy and load balancer for HTTP, TCP, and UDP servers.

### Software Included

Nginx - 1.18

### Getting started after deploying NGINX

 Allow the ports in the firewall only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.

 You will be logged out of the instance and displayed with the below message until the instance is deployed. **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**
> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the NGINX is deployed

 You can view the NGINX instance immediately by visiting the instance’s IP address in your browser.

 You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

 Checking the status of the nginx by accessing the IP address on your web browser. If NGINX is running, you should be greeted with the default **"Welcome to MarketPlace!"** landing page.

 You can also check the status by running the below command,
~~~
systemctl status nginx
~~~

 The web root is **/var/www/html**

 To secure your connection, you will need a registered domain configured for your Instance.

### In addition, there are a few customized setup steps that we recommend you take

Creating an Nginx server block file for each site maintains the default configuration as the fallback, as intended, and makes it easier to manage changes when hosting multiple sites.

To do so, you’ll need to create two things for each domain: a new directory in **/var/www** for that domain’s content, and a new server block file in **/etc/nginx/sites-available** for that domain’s configuration.
