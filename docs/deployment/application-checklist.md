---
title: Application Checklist
sidebar_label: Application Checklist
sidebar_position: 6
---

### Summary of Installation task

The following information describes the stackbill application installation and configuration stages. To set up the environment, all stages must be completed once, unless marked as optional.

#### 1. KUBERNETES

- Validate the hardware requirements for both master and worker modes on the server.

- Download the necessary scripts from the centralized repository.

- Install Kubernetes components on the master and worker nodes.

- Connect the worker nodes to the master node.

- Confirm successful communication between the master and worker nodes.

#### 2. RabbitMQ

- Confirm that the hardware meets the requirements for RabbitMQ installation.

- Retrieve the installation script from the centralized repository.

- Execute the automation script to install and configure RabbitMQ.

- Ensure that the RabbitMQ service is up and running successfully.

#### 3. MongoDB

- Confirm that the hardware meets the requirements for MongoDB installation.

- Retrieve the installation script from the centralized repository.

- Execute the automation script to install and configure MongoDB.

- Ensure that the MongoDB service is up and running successfully.

#### 4. MYSQL

- Confirm that the hardware meets the requirements for MYSQL installation.

- Retrieve the installation script from the centralized repository.

- Execute the automation script to install and configure MYSQL.

- Ensure that the MYSQL service is up and running successfully.

#### 4. NFS

- Ensure the hardware complies with the requirements for NFS installation.

- Verify that an additional data drive is attached and confirm that the appropriate filesystem has been configured.

- Install and set up the NFS service.

- Create a mount point and verify its accessibility from the 
Kubernetes worker nodes.

- Test and confirm access to the NFS mount point from all worker nodes.

#### 5. ISTIO & KUBECTL

- Set up and configure kubectl on the NFS server.

- Transfer the kubeconfig file from the master server to the NFS server and integrate it.

- Validate access to the Kubernetes cluster from the NFS server.

- Install and configure Istio on the NFS server.


#### 6. HELM Installation

- Retrieve Helm from the official repository.

- Install Helm on the NFS server.

- Utilize Helm to download the deployment chart from the centralized repository.

### Hardware Prerequisites

Stackbill offers flexibility in installation, allowing deployment in both small-scale and large-scale environments depending on your business requirements. This guide outlines the hardware requirements for each scenario to help you set up the application efficiently.

#### Small-Scale Environment Installation

A small-scale setup is ideal for scenarios where you are evaluating Stackbill for Proof of Concept (POC) or catering to a limited customer base. This environment provides a minimal configuration that ensures the application runs smoothly while keeping resource usage low. The hardware requirements for this type of setup are sufficient for testing and small-scale operations but may not be adequate for handling extensive workloads or a growing user base.

For a small-scale installation, the following hardware specifications are recommended:

| S. No | Service | OS Version | No. of VM | CPU | Memory | Root Disk Size | Additional Disk Size
|---|---|---|---|---|---|---|---|
| 1 | Kubernetes-Master+ HA Proxy Service | Ubuntu 22.X | 1 | 2 vCPU | 4 GB | 50 GB | N/A
|2|Kubernetes-Worker Node | Ubuntu 22.X | 1 | 8 vCPU | 16 GB | 50 GB | N/A
|3|MYSQL, MongoDB, RabbitMQ|Ubuntu 22.X|1|4 vCPU|8 GB|50 GB|N/A
|4|NFS Server|Ubuntu 22.X|1|2 vCPU| 4 GB| 50 GB| 100 GB

<!-- <![endif]--> -->

#### Large-Scale Environment Installation

A large-scale environment is designed for **production deployments** where Stackbill is expected to handle high traffic and a significant number of users. This setup is suitable for enterprises or businesses planning to accommodate **over 50,000 users**, ensuring robust performance, scalability, and reliability. The hardware requirements for this type of installation are tailored to support intensive workloads, multiple concurrent operations, and seamless service delivery to a large customer base.


| S. No | Service | OS Version | No. of VM | CPU | Memory | Root Disk Size | Additional Disk Size
|---|---|---|---|---|---|---|---|
| 1 | Kubernetes-Master | Ubuntu 22.X | 3 | 2 vCPU | 4 GB | 50 GB | N/A
|2| Kubernetes – Worker Node | Ubuntu 22.X | 2 | 2 vCPU | 24 GB | 50 GB | N/A
|3|MYSQL Cluster|Ubuntu 22.X| 2 | 4 vCPU | 8 GB | 50 GB | N/A
|4| MongoDB Cluster | Ubuntu 22.X| 3 | 4 vCPU | 8 GB | 75 GB | N/A
|5| RabbitMQ | Ubuntu 22.X | 1 | 2 vCPU | 4 GB | 30 GB | N/A
|6| NFS Server | Ubuntu 22.X | 1 | 4 vCPU | 8 GB | 30 GB | 500 GB
|7| HAProxy Cluster | Ubuntu 22.X | 2 | 2 vCPU | 4 GB | 30 GB | N/A


### Software Prerequisites
To ensure a seamless installation of the Stackbill application, it is essential to use the recommended versions of the supporting software components. The specified versions are tested and verified for compatibility with Stackbill to maintain stability and optimal performance. Below is a detailed breakdown of the required software and their respective versions:

#### 1. Kubernetes Version:

For Stackbill, we recommend installing the previous minor version of the latest Kubernetes release. For instance, if the current stable release is 1.30, the version to be installed is 1.29. This approach ensures compatibility while leveraging a stable version with proven reliability and fewer bugs.

#### 2. MySQL Version:

The application requires MySQL 8.0.x or higher to support the database needs of Stackbill. This version provides enhanced features such as transactional support, improved performance, and compatibility with the application’s database schema.


#### 3. MongoDB Version:

MongoDB is utilized for storing customer usage statistics and payment details. The recommended version is 7.0.x or higher, which ensures compatibility with Stackbill and offers better scalability, performance, and support for advanced querying.

#### 4. RabbitMQ Version:

RabbitMQ is the messaging broker used to facilitate communication between Stackbill and the underlying CloudStack components. The application requires RabbitMQ 3.13.7 or higher, ensuring reliable message queuing and processing.

#### 5. ISTIO:

ISTIO is essential for managing microservices traffic within the Kubernetes environment. For Stackbill, the recommended version is 1.20.3 or higher, which provides robust service mesh features like traffic management, observability, and security.

#### 6. HELM:

HELM is a package manager for Kubernetes, used to simplify the deployment of Stackbill components. It is advised to use the latest version of HELM to take advantage of the newest features and bug fixes.

#### 7. KUBECTL:

KUBECTL is the command-line tool used to interact with Kubernetes clusters. Installing the latest version of KUBECTL is recommended for Stackbill to ensure compatibility with the Kubernetes version and access to the latest commands and features.

