---
title: PostgreSQL
sidebar_label: PostgreSQL
---

|**`Version 15.2` `OS Ubuntu 22.04` `DATABASES`**|  |
|------------------------------------------------|--|

### Description

PostgreSQL is a powerful, open-source object-relational database system that is known for reliability, feature robustness, and performance.

### Software Included

PostgreSQL - 15.2

### Getting started after deploying POSTGRESQL

Allow the ports in the firewall only SSH (port 22, rate limited) access.

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**
> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the POSTGRESQL is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

The postgres user password is stored under  **/root/.postgresql_passwords**

Login to postgres using the command,
~~~
sudo -u postgres psql
~~~

By default, this database server will listen only to the localhost, to access it remotely, we need to perform some changes in its configuration file. We can limit it to some particular IP address or open it for all.

Edit the PostgreSQL configuration file **postgresql.conf** using the command
~~~
nano /etc/postgresql/15/main/postgresql.conf
~~~

In the Configuration file, Under section **"CONNECTIONS AND AUTHENTICATION"** find **#listen_addresses**  –  and first, remove the **#** given in front of it. 

After that replace localhost with '*' sign to allow all Ip-address to connect to the Database server, 
~~~
From:
#listen_addresses = 'localhost'         # what IP address(es) to listen on;
To:
listen_addresses = '*'         # what IP address(es) to listen on;
~~~

Whereas to limit it to some particular Ip-addresses then type them instead of '*'.  Multiple addresses need to be separated with commas,
~~~
From:
#listen_addresses = 'localhost'         # what IP address(es) to listen on;
To:
listen_addresses = '$IPADDRESS, $IPADDRESS'         # what IP address(es) to listen on;
~~~
Save the file by pressing  **Ctrl+X, Y**, and hitting the  **Enter**  key.

Next, edit the **IPv4 local connections** section of the **pg_hba.conf** file to allow IPv4 connections from all clients using the command,
~~~
nano /etc/postgresql/15/main/pg_hba.conf file.
~~~

~~~
From:
# IPv4 local connections:
host    all             all             127.0.0.1/32            scram-sha-256
To:
# IPv4 local connections:
host    all             all              0.0.0.0/0            scram-sha-256
~~~

Save the file by pressing  **Ctrl+X, Y**, and hitting the  **Enter**  key.

Allow the port **5432** in the firewall for PostgreSQL remote access.

Restart the PostgreSQL service to apply the changes:
~~~
systemctl restart postgresql
~~~

Try to access DB from remote client.
~~~
psql -h $IPADDRESS -U postgres
~~~
In this example, $IPADDRESS is the IP address of the PostgreSQL database server.
