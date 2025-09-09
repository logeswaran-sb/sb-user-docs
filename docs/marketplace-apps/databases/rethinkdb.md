---
title: RethinkDB
sidebar_label: RethinkDB
---

|**`Version 2.4.3` `OS Ubuntu 22.04` `DATABASES`**|  |
|-------------------------------------------------|--|

### Description

RethinkDB is an open-source, document database stores the information in JSON (JavaScript Object Notation) format and it makes it easy to build and scale realtime apps. 

### Software Included

RethinkDB - 2.4.3

### Getting started after deploying RETHINKDB

Allow the ports in the firewall only SSH (port 22, rate limited), WEB (port 8080) access.

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**
> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the RETHINKDB is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

You can view the RethinkDB Admin UI immediately by visiting the instance IP address on the administration port **http://$IPADDRESS:8080** in your browser.

You can modify the default instance configuration by editing **/etc/rethinkdb/instances.d/instance.conf**.

You can check the logs of the server at **/var/log/rethinkdb** or through the Admin UI.

## Setting up users

RethinkDB controls access to clusters through a system based around users, permissions, and scopes. Together, these allow you to specify fine grained control for reading, writing and administrative access down to a per-table level.

A new RethinkDB cluster always has one user named admin; this user always has all permissions at a global scope, and the user cannot be deleted. By default, the admin user has no password. You can change this by updating the admin user document, or by specifying the **--initial-password** command line option on startup.

The web administration UI always connects as if it were the admin user, and skips the authentication process (i.e., the password is not used for this connection). While the web UI cannot be password-protected, you can limit the addresses it will accept connections on using the **--bind-http** command line option.

If your instance is publicly available, it is highly recommended to not expose the Admin UI or limit the addresses it will accept.

For more information, please visit our [Permissions and user accounts](https://rethinkdb.com/docs/permissions-and-accounts/) documentation.

## Securing your cluster

The best way to secure a RethinkDB cluster is to run it on a protected network that doesn’t allow access from the outside world. However, this may not always be feasible. For example, cloud deployments often require access from wide area networks.

There are two main methods RethinkDB provides for securing the cluster: TLS encryption for connections, and binding the ports the server uses to specific IP addresses to limit outside connections.

For more information, please visit our instructions [how to secure](https://rethinkdb.com/docs/security/) your cluster.