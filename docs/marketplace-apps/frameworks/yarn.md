---
title: Yarn
sidebar_label: Yarn
---

|**`Version 3.4.1` `OS Ubuntu 22.04` `FRAMEWORKS`**|  |
|--------------------------------------------------|--|


### Description

Yarn stands for Yet Another Resource Negotiator and is a package manager for Node.js in JavaScript that replaces NPM. Yarn is a tool for managing JavaScript runtime environments. Yarn uses Node. js to track libraries and dependencies and lets you share solutions with other developers.

### Software Included

NodeJS - 18.15.0

NPM - 9.5.0

Yarn - 3.4.1

### Getting started after deploying YARN

Allow the ports in the firewall only SSH (port 22, rate limited) access.

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the YARN is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

We can check which version of the package manager is on our system.
~~~
yarn --version
~~~

Any time you'll want to update Yarn to the latest version, just run:

~~~
yarn set version stable
~~~

Yarn will then configure your project to use the most recent stable binary. Don't forget to run a new install to update your artifacts before committing the results!

Now that you have Yarn installed, you can start using it!  [Click here to view some of the most common commands you'll need.](https://yarnpkg.com/getting-started/usage)
