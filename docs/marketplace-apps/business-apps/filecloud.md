---
title: FileCloud
sidebar_label: FileCloud
---

|**`Version Latest` `OS Ubuntu 20.04` `BUSINESS APPS`**|  |
|------------------------------------------------------|--|


### Description

FileCloud is an enterprise-class file-sharing and sync solution for homes or businesses that allows users to access and sync data from any device. It offers features like file sharing, backup, remote access, and sync.  

With the Community Edition of FileCloud, you will be able to have UNLIMITED free external users and up to 5 full accounts.

### Getting started after deploying FILECLOUD

 Allow the ports in the firewall only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.

 You will be logged out of the instance and displayed with the below message until the instance is deployed. **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**
> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the FILECLOUD is deployed

 You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

Once switched to root, the File cloud installation will start with the below message,
~~~
################################################################################################################
#                              Your Filecloud Installation will start in 3 seconds...                          #
#                              This will take sometime to complete. Please be patience...                      #
#                              DO NOT END THE SESSION. IF SO RE-LAUNCH THE VM AGAIN!...                        #
################################################################################################################
~~~

The installation can be viewed, **DO NOT END THE SESSION**, If so the instance has to be relaunched.

Wait until the notification **Your MarketPlace App has been deployed successfully!** is displayed.

After the successful installation, you can log in to the FileCloud admin panel by **http://$IPADDRESS/admin** in the browser.

> Admin Username is admin, 
>
> Admin Password is password.

Once you have accessed your Admin Portal via the browser,

The warnings can be viewed and it can be fixed from the Admin Panel.

[Click here](https://www.filecloud.com/supportdocs/fcdoc/latest/server/filecloud-community-edition/deploying-filecloud-with-linode-one-click-apps)  and refer to the **Getting Started After Deployment** section to proceed further.

[Click here ](https://www.filecloud.com/supportdocs/fcdoc/latest/server/filecloud-administrator-guide/installing-filecloud-server/installation/direct-installation/installation-of-filecloud-on-linux-using-the-repository/filecloud-cli) to view Filecloud CLI.

To setup MongoDB authentication and to allow MongoDB remote access [click here.](https://www.filecloud.com/supportdocs/fcdoc/latest/server/filecloud-administrator-guide/installing-filecloud-server/post-installation/enable-mongodb-authentication)

 [Click here for more details on POST INSTALLATION](https://www.filecloud.com/supportdocs/fcdoc/latest/server/filecloud-administrator-guide/installing-filecloud-server/post-installation)
