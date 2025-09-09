---
title: NodeJS
sidebar_label: NodeJS
---

|**`Version 18.14.0` `OS Ubuntu 22.04` `FRAMEWORKS`**|  |
|----------------------------------------------------|--|


### Description

A lightweight platform ideal for building fast, scalable network applications in Javascript. Similar in design to Ruby's Event Machine or Python's Twisted, and built on Chrome's JavaScript runtime, NodeJS is ideal for data-intensive apps that run across distributed devices.

### Software Included

NodeJS - 18.14.0

NPM - 9.3.1

Nginx - 1.18.0

PM2 - 5.2.2

### Getting started after deploying NODEJS

 Allow the ports in the firewall only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.

 You will be logged out of the instance and displayed with the below message until the instance is deployed. **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**
> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the NODEJS is deployed

 You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

 You can view the Django instance immediately by visiting the instance’s IP address in your browser.

 NodeJS shell user login credentials are stored under **/root/.shell_user_passwords**

 NodeJS home directory **/var/www/html/**

 NodeJS PM2 files are stored under **/home/nodejs/**

 Modify this script at **/var/www/html/hello.js**. You can then see the results live by using pm2, a process manager that schedules your code to run at boot time. The application runs as the nodejs user, so changes to pm2 need to be run as the nodejs user.
~~~
sudo -u nodejs pm2 restart hello
~~~

Clone your NodeJS code onto the instance, anywhere you like. Note: If you're not using source code control, you can directly upload the files to your instance using SFTP.

**cd** into the directory where your NodeJS code lives, and install any dependencies. (For example, if you have a package.json file, run **npm install**.)

Launch your app
~~~
sudo -u nodejs pm2 start <your-file>
~~~

Map the port your app runs on to an HTTP URL
~~~
nano /etc/nginx/sites-available/default
~~~

Edit the existing entry that exposes the "hello" app at port 3000 to the world so that it points to your app's port instead.

Enable your new nginx config.
~~~
sudo systemctl restart nginx
~~~

Call to schedule your code to run at launch.
~~~
sudo -u nodejs pm2 save
~~~

Repeat these steps for any other NodeJS apps that need to run concurrently -- schedule them to run at boot time on whatever internal port you like using PM2, then map that port to an HTTP/HTTPS URL in the nginx config. Build out the URL directory structure you need by mapping applications to URL paths; that's the reverse proxy method in a nutshell!

Now you can delete the sample app we installed on your instance. Stop running the initial script (that you're viewing now)
~~~
sudo -u nodejs pm2 delete hello
~~~

Stop it from running on instance boot.
~~~
sudo -u nodejs pm2 save
~~~

