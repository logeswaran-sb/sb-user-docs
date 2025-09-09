---
title: Plesk
sidebar_label: Plesk
---

|**`Version Latest` `OS Ubuntu 20.04` `HOSTING PANELS`**|  |
|-------------------------------------------------------|--|

### Description

Plesk enables web hosting customers to easily perform a wide variety of tasks using a robust and easy to use web interface. It includes all the necessary tools to create and manage websites, mailboxes, databases, and so on.

### Software Included

Plesk - Latest

### Getting started after deploying PLESK

You can allow the ports in the 5th Section **(Setup Cloud Firewall)**, under the **(Setup Cloud Firewall)** section you can view **Create Firewall**, Click on the drop-down and select **Plesk**. 

### Getting started after deploying PLESK

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

After deploying the template at the first instance reset the Plesk admin Panel password using the below command, and replace **\<your_new_password\>** with your password.

~~~
plesk bin admin --set-admin-password -passwd "`<your_new_password>`"
~~~

You can access the Plesk Web interface at **http://IPADDRESS:8443**

You can then set up the Plesk through the Web interface.