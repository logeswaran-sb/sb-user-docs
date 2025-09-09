---
title: Rocket.Chat
sidebar_label: Rocket.Chat
---

|**`Version 6.1.6` `OS Ubuntu 20.04` `BUSINESS APPS`**|  |
|-----------------------------------------------------|--|

### Description

​Rocket. Chat is a customizable open-source communications platform for organizations with high data protection standards. It enables real-time conversations between colleagues, other companies, or your customers across web, desktop, or mobile devices.

### Software Included

Rocket.Chat - 6.1.6

NodeJS - 14.21.2

MongoDB - 5.0.17

### Getting started after deploying ROCKET.CHAT

Allow the ports in the firewall only SSH (port 22, rate limited) and Rocket.Chat (port 3000) access.

 You will be logged out of the instance and displayed with the below message until the instance is deployed. **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**
> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the ROCKET.CHAT is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

Once you are connected you should see something like:

~~~
##################################################################################################################################################################
Rocket.Chat is the leading open source team chat software solution. Free, unlimited and completely customizable with on-premises and SaaS cloud hosting.
Replace email, HipChat & Slack with the ultimate team chat software solution.

This Rocket.Chat image uses docker under the hood. To learn more, please read our docker documentation - https://docs.rocket.chat/deploy/prepare-for-your-deployment/rapid-deployment-methods/docker-and-docker-compose

You can find the compose project in $HOME/rocketchat directory.

Looking for how to use Rocket.Chat? Be sure to check our docs: https://docs.rocket.chat
Need some help? Join our community forums https://forums.rocket.chat and https://open.rocket.chat
##################################################################################################################################################################
~~~

You can access the Rocker.Chat Admin UI using the below URL in your browser **http://$IPADDRESS:3000** or the domain name configured for the instance. 

We recommend setting up an A record from your domain to your server's IP address. **Ex: chat.mycompany.com**

