---
title: Installing MongoDB
sidebar_label: Installing MongoDB
sidebar_position: 4
---

## Introduction

MongoDB is a popular open-source NoSQL database designed for modern applications that require scalability, flexibility, and high performance. It stores data in a document-oriented format, using JSON-like BSON (Binary JSON) objects. Unlike traditional relational databases, MongoDB is schema-less, which allows developers to handle dynamic, unstructured, or semi-structured data with ease.

### Installing and configuring MongoDB

- Connect to the MongoDB virtual machine (VM) using the SSH credentials specific to your environment. For Stackbill, the default operating system for VMs is **Ubuntu 22.x**, and the default username is **ubuntu**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-loggedin.jpg" width="90%" />

- Once logged in as the ubuntu user, switch to the root account for elevated privileges. Use the following command.

**sudo -i**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-sudo-info.jpg" width="90%" />

- Go to the /usr/local/src directory, where all scripts will be stored as temporary location.

**cd /usr/local/src**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-source.jpg" width="90%" />

- Download the MongoDB installation script from the centralized repository using the wget command.

**wget https://stacbilldeploy.s3.us-east-1.amazonaws.com/MongoDB/Mongodb.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-download-mongodb.jpg" width="90%" />

- Provide executable permissions to the script

**chmod +x Mongodb.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-mongodb-script.jpg" width="90%" />

- Execute the script to begin the MongoDB installation process

**sh MongoDb.sh**

- The script will install all required MongoDB components and configure them. During the process, you’ll be prompted to set up an admin account. For our demo environment, we user username as **stackbill** and password **MuyUzRc7t32R**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-mongodb-set-user.jpg" width="90%" />

- After completing the configuration and admin user creation, the script will display the message ***"MongoDB configuration updated and admin user created successfully"***


### MongoDB Cluster Configuration

When deploying a production-grade Stackbill environment, a MongoDB cluster is recommended to ensure high availability, fault tolerance, and scalability. This setup uses three virtual machines (VMs): a primary node, a secondary node, and an arbiter. The arbiter helps in election processes without storing data, maintaining quorum during failover scenarios.

What is mean by arbiter?

A MongoDB cluster arbiter is a lightweight member of a MongoDB replica set that participates in the election process for determining the primary node in the cluster. However, it does not store data or serve client requests. The arbiter ensures high availability and fault tolerance by enabling the replica set to maintain a quorum during elections, especially in cases where the set contains an even number of data-bearing nodes.

Below are detailed steps to configure the MongoDB cluster.

- In our testing environment, we set up three virtual machines named **Mongo-01, Mongo-02, and Mongo-03**. Mongo-01 serves as the primary node, Mongo-02 functions as the secondary node, and Mongo-03 acts as the arbiter.

- Login into each VM and update and upgrade packages on all three VMs

**apt update & apt upgrade -y**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-progress.jpg" width="90%" />

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-package-upgrade.jpg" width="90%" />

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-progress-status.jpg" width="90%" />

- Reboot all VMs to apply updates.

- On each VM, navigate to the /usr/local/src/ directory.

**cd /usr/local/src/**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-local-source.jpg" width="90%" />

- Download the cluster-common.sh script on all three VMs.

**wget https://stacbilldeploy.s3.us-east-1.amazonaws.com/MongoDB/cluster/cluster-common.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-cluster-script.jpg" width="90%" />

- Make the script executable.

**chmod +x cluster-common.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-script-change-mode.jpg" width="90%" />

- Execute the script.

**sh cluster-common.sh**

Once its completed it shows ***"MongoDB Installation completed Successfully"***

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-success.jpg" width="90%" />


#### Primary Node Configuration

- On Mongo-01, download the cluster-primary-config.sh script

**wget https://stacbilldeploy.s3.us-east-1.amazonaws.com/MongoDB/cluster/cluster-primary-config.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-primary-cluster-config.jpg" width="90%" />

- Make it executable

**chmod +x cluster-primary-config.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-primary-cluster-config-chmod.jpg" width="90%" />

- Run the script

**sh cluster-primary-config.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-script-execute.jpg" width="90%" />

- Provide the internal IP addresses and login credentials for Mongo-02 and Mongo-03.

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-script-details-set.jpg" width="90%" />

- Once the replication configuration is completed it shows the message as “ Files transferred and MongoDB service restarted on secondary and arbiter servers. Great job!”

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-bytes-sent-info.jpg" width="90%" />


#### Enable Replication in Primary Node

- On Mongo-01, download the cluster-primary-replication.sh script.

**wget https://stacbilldeploy.s3.us-east-1.amazonaws.com/MongoDB/cluster/cluster-primary-replication.sh**

- Make it executable

**chmod +x cluster-primary-replication.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-primary-replica-script.jpg" width="90%" />

- Execute the script

**sh cluster-primary-replication.sh**

Provide the private IPs of **Mongo-01, Mongo-02, and Mongo-03** to configure replication.

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-primary-replica-ipaddress.jpg" width="90%" />

- During the replication process, the script will prompt for new MongoDB admin credentials. In this demo environment, we provide DB username as **stackbill** and password as **MuyUzRc7t32R**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-replica-credential-set.jpg" width="90%" />

- After successful configuration, the script displays a message: ***"MongoDB replica set configured and admin user created successfully."***

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-admin-user-create-success.jpg" width="90%" />


#### Cluster Verification

- On the primary server (Mongo-01), connect to MongoDB using the created admin user.

**Syntax:** mongosh --username &lt;username&gt; --authenticationDatabase admin

**Example:** mongosh --username stackbill --authenticationDatabase admin

Enter the corresponding password when prompted.

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-authenticate-db.jpg" width="90%" />

- Once logged in, verify the replica set status.

**rs.status()**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-authenticate-db-status.jpg" width="90%" />

- A successful configuration will display the cluster information for all three nodes.

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-mongodb/stackbill-installation-mongodb-replicat-info.jpg" width="90%" />


