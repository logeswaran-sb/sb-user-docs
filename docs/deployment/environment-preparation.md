---
title: Environment Preparation
sidebar_label: Environment Preparation
sidebar_position: 8
---

### Verifying the Hardware configuration

Before proceeding with the Stackbill application installation, it is crucial to verify the hardware setup to ensure smooth deployment and operation. Follow these steps:

#### 1. Network Connectivity: 

Verify that all the required virtual machines (VMs) are created and properly configured in your environment. Ensure that each VM can successfully ping all the other VMs to confirm network connectivity. This step ensures that the VMs can communicate seamlessly without interruptions.

#### 2. Unified Network Setup : 

Confirm that all VMs are created within the same network or subnet. This configuration is essential to facilitate communication and data transfer among the components of the Stackbill application.

#### 3. Firewall Configuration : 

Check that there are no firewall rules blocking communication between the VMs. Any restrictions could disrupt service communication and lead to issues during the configuration or operation of Stackbill.

#### 4. Internet Access : 

Ensure that all VMs intended for Stackbill installation have unrestricted internet access. Internet connectivity is required to download necessary packages, updates, and scripts during the deployment process.


### Deployment Script Accessibility

The deployment process relies on a set of pre-written scripts stored in a centralized location for efficient installation and configuration. These scripts are hosted on AWS S3, and it is essential to verify that the Stackbill application VMs can access these URLs. Any connectivity issues to these script URLs can impede the deployment process.

Below is the list of critical script URLs used for installing Stackbill components:

#### 1. Kubernetes Master & Worker Configuration:

- https://stacbilldeploy.s3.us-east-1.amazonaws.com/Kubernetes/k8-common-installation.sh

- https://stacbilldeploy.s3.us-east-1.amazonaws.com/Kubernetes/k8-init.sh

#### 2. MySQL Installation:

- https://stacbilldeploy.s3.us-east-1.amazonaws.com/Mysql/Mysql.sh

- https://stacbilldeploy.s3.us-east-1.amazonaws.com/Mysql/cluster/mysql-cluster-common.sh

- https://stacbilldeploy.s3.us-east-1.amazonaws.com/Mysql/cluster/mysql-cluster-config.sh

#### 3. MongoDB Installation:

- https://stacbilldeploy.s3.us-east-1.amazonaws.com/MongoDB/Mongodb.sh

- https://stacbilldeploy.s3.us-east-1.amazonaws.com/MongoDB/cluster/cluster-common.sh

- https://stacbilldeploy.s3.us-east-1.amazonaws.com/MongoDB/cluster/cluster-primary-config.sh

- https://stacbilldeploy.s3.us-east-1.amazonaws.com/MongoDB/cluster/cluster-primary-replication.sh

#### 4. RabbitMQ Installation:

- https://stacbilldeploy.s3.us-east-1.amazonaws.com/RabbitMQ/rabbitmq.sh



