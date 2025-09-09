---
title: Installing MYSQL
sidebar_label: Installing MYSQL
sidebar_position: 5
---

## Introduction

MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) for managing and organizing data. It is widely used for web applications, enterprise solutions, and other database-driven software systems. Known for its reliability, scalability, and ease of use, MySQL supports multi-user access and is designed to handle large amounts of data efficiently.

### Installing and configuring MYSQL

- Connect to the MYSQL virtual machine (VM) using the SSH credentials specific to your environment. For Stackbill, the default operating system for VMs is **Ubuntu 22.x**, and the default username is **ubuntu**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-loggedin.jpg" width="90%" />

- Once logged in as the ubuntu user, switch to the root account for elevated privileges. Use the following command.

**sudo -i**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-sudo-info.jpg" width="90%" />

- Go to the /usr/local/src directory, where all scripts will be stored as temporary location.

**cd /usr/local/src**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-source-setup.jpg" width="90%" />

- Download the MySQL installation script from the centralized repository.

**wget https://stacbilldeploy.s3.us-east-1.amazonaws.com/Mysql/Mysql.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-mysql-save.jpg" width="90%" />

- Run the installation script to initiate the MySQL setup.

**chmod +x Mysql.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-mysql-script.jpg" width="90%" />

- During installation, the script will prompt to install MYSQL. Simply type **Y** and press **Enter** to proceed with the installation.

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-package-update-progress.jpg" width="90%" />

- The script will prompt you to set up the MySQL administrator username and password. For our demo environment, we user username as **stackbill** and password **MuyUzRc7t32R**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-mysql-service-start.jpg" width="90%" />

- After completing the configuration and admin user creation, the script will display the message ***"MySQL setup completed"***

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-mysql-credential-set.jpg" width="90%" />



#### MYSQL Cluster Configuration

When setting up a production-grade Stackbill environment, it is recommended to use a MySQL cluster to achieve high availability, fault tolerance, and scalability. This involves configuring two virtual machines (VMs), one as the primary server (MYSQL-01) and the other as the secondary server (MYSQL-02).

- Login to both MYSQL-01 and MYSQL-02 VMs, Update and upgrade the system packages using below command.

**apt update && apt upgrade -y**

- Reboot both VMs after the updates are complete.

- On both VMs, download the MySQL cluster common script

**wget https://stacbilldeploy.s3.us-east-1.amazonaws.com/Mysql/cluster/mysql-cluster-common.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-mysql-cluster-script.jpg" width="90%" />

- Grant execution permissions to the script.

**chmod +x mysql-cluster-common.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-mysql-cluster-chmode.jpg" width="90%" />

- Run the script on both VMs.

**sh mysql-cluster-common.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-mysql-script-command.jpg" width="90%" />

- During installation, confirm the process by typing "Y" when prompted. After successful installation, a message will display: ***"MySQL has been installed."***

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-install-continue.jpg" width="90%" />

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-mysql-status.jpg" width="90%" />


#### Configure the MySQL Cluster

- Log in to the primary VM (MYSQL-01).

- Download the MySQL cluster configuration script

**wget https://stacbilldeploy.s3.us-east-1.amazonaws.com/Mysql/cluster/mysql-cluster-config.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-mysql-cluster-download.jpg" width="90%" />

- Grant execution permissions to the script

**chmod +x mysql-cluster-config.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-mysql-config-script.jpg" width="90%" />

- Run the script

**sh mysql-cluster-config.sh**

- During the script execution, provide the IP address of the slave (secondary) VM. For example, in the demo environment: **10.1.1.218**.

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-mysql-config-ip-enter.jpg" width="90%" />

- Specify a username and password for MySQL replication. For our demo environment, we specify username as **repuser** and password as **MuyUzRc7t32R**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-mysql-config-user-enter.jpg" width="90%" />

- Enter the credentials for the slave VM (MYSQL-02) to allow the script to copy the cluster configuration.

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-master-server-config.jpg" width="90%" />

- Provide the primary VM's IP address, In our demo environment the IP is 10.1.1.23.

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-master-server-ip-enter.jpg" width="90%" />

- The script will display the master log filename and log position. Copy and paste these values when prompted.

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-master-server-log.jpg" width="90%" />

- Verify the displayed slave configuration details for any errors. Once confirmed, proceed with the database setup by typing "**yes**" when prompted.

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-db-setup-config.jpg" width="90%" />

- Provide the database username and password for the application. For our demo environment, we provide username as stackbill and password as MuyUzRc7t32R

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-db-credential-set.jpg" width="90%" />

- After successful configuration, a message will appear ***“Congrats, you have successfully configured the MySQL Cluster”***

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-mysql-cluster-config-success.jpg" width="90%" />

- To verify the MYSQL replication, Login into MYSQL from the primary server and create a database. You can able to see that database from the Secondary server.

  **Primary Server**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-db-create-test.jpg" width="90%" />

**Secondary Server**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mysql/apache-cloudstack-setup-db-info.jpg" width="90%" />
