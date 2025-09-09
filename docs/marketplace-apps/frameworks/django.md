---
title: Django
sidebar_label: Django
---

|**`Version 4.1.1` `OS Ubuntu 22.04` `FRAMEWORKS`**|  |
|--------------------------------------------------|--|


### Description

Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without having to reinvent the wheel. It’s free and open source.

### Software Included

Django - 4.1.1

Nginx - 1.18.0

Postgres - 14.6

Postfix - 3.4.13

Certbot - 1.21.0

Gunicorn - 20.1.0

### Getting started after deploying DJANGO

 Allow the ports in the firewall only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.

 You will be logged out of the instance and displayed with the below message until the instance is deployed. **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**
> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the DJANGO is deployed

 You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

 You can view the Django instance immediately by visiting the instance’s IP address in your browser.

 The postgres user password is stored under  **/root/.postgresql_user_passwords**

 Login to postgres using the command,
 ~~~
 sudo -u postgres psql
 ~~~

 The Django database Informations are stored under **/root/.postgresql_passwords**

 Django Admin login credentials are stored under **/root/.adminpanel_passwords**

 Django shell user login credentials are stored under **/root/.shell_user_passwords**

 Django home directory **/home/django/django_project/django_project/**

 You can try to reuse this project, located in **/home/django/django_project**, or start fresh in a new location and edit Gunicorn's configuration to point to it at **/etc/systemd/system/gunicorn.service**. You can also change how nginx is routing traffic by editing **/etc/nginx/sites-enabled/default**

 **Cd** into the directory where your Django code lives, and install any dependencies. (For example, if you have a requirements.txt file, run **pip install -r requirements.txt**.)

That's it! Whenever you make code changes, reload Gunicorn like so:
~~~
PID=$(systemctl show --value -p MainPID gunicorn.service) && kill -HUP $PID
~~~

 The standard Django admin area is accessible at **/admin**. The login and password are stored in the **DJANGO_ADMIN_LOGIN_USER*** values you see when you call cat **/root/.adminpanel_passwords** while logged in over SSH.

 [Click here to view connecting PostgreSQL through remote](http://docs2.stackbill.com/docs/3.0.0/marketplace-docs/database/POSTGRESQL)

 Refer to the Section "**Once the PostgreSQL is deployed:**" and follow the instuction from "**By default, this database server...**"

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

 Restart the postfix using the command
~~~
systemctl restart postfix
~~~

 Once the above step is completed. You can check outgoing Emails using the command
~~~
echo "Postfix test" | mail -s "Subject" test@gmail.com
~~~

Initially, the Emails will be dropped into the SPAM folder. As this is a NEW IP the reputation is unknown. Once the reputation is calculated based on the incoming and outgoing emails. The emails will be dropped in the INBOX.
