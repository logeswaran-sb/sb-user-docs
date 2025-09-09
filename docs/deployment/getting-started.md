---
title: Getting Started
sidebar_label: Getting Started
sidebar_position: 1
---

## Welcome to Stackbill Deployment Documentation

Welcome to the Stackbill deployment !! It provides detailed guidance on setting up and configuring Stackbill for your environment. It covers prerequisites, installation steps, and best practices to ensure a seamless deployment process, enabling efficient cloud management.

### Table of Contents

#### 1. [Copyright Policy](/docs/deployment/copyright-policy.md)
   
-  [Restrictions on Use](/docs/deployment/copyright-policy#restrictions-on-use)
- [Third-Party Content](/docs/deployment/copyright-policy#third-party-content)
- [Fair Use Policy](/docs/deployment/copyright-policy#fair-use-policy)
- [Licensing Terms](/docs/deployment/copyright-policy#licensing-terms)
- [Reporting Copyright Violations](/docs/deployment/copyright-policy#reporting-copyright-violations)
- [Disclaimer](/docs/deployment/copyright-policy#disclaimer)
- [Updates to Copyright Policy](/docs/deployment/copyright-policy#updates-to-copyright-policy)

#### 2. [About Deployment Guide](/docs/deployment/about-deployment-guide.md)
 - [Audience](/docs/deployment/about-deployment-guide#audience)

#### 3. [Document Accessibility](/docs/deployment/document-accessibility.md)

#### 4. [Product Overview](/docs/deployment/product-overview.md)

 - [About stackbill application](/docs/deployment/product-overview#about-stackbill-application)
 - [High Level application flow](/docs/deployment/product-overview#high-level-application-flow)

#### 5. [Application Checklist](/docs/deployment/application-checklist.md)
 - [**Summary of Installation task**](/docs/deployment/application-checklist#summary-of-installation-task)
    - [Kubernetes](/docs/deployment/application-checklist#1-kubernetes)
    - [RabbitMQ](/docs/deployment/application-checklist#2-rabbitmq)
    - [MongoDB](/docs/deployment/application-checklist#3-mongodb)
    - [MYSQL](/docs/deployment/application-checklist#4-mysql)
    - [NFS](/docs/deployment/application-checklist#4-nfs)
    - [ISTIO & KUBECTL](/docs/deployment/application-checklist#5-istio--kubectl)
    - [HELM Installation](/docs/deployment/application-checklist#6-helm-installation)

  - [**Hardware Prerequisites**](/docs/deployment/application-checklist#hardware-prerequisites)
     - [Small-Scale Environment Installation](/docs/deployment/application-checklist#small-scale-environment-installation)
     - [Large-Scale Environment Installation](/docs/deployment/application-checklist#large-scale-environment-installation)

 - [**Software Prerequisites**](/docs/deployment/application-checklist#software-prerequisites)
    - [Kubernetes Version](/docs/deployment/application-checklist#1-kubernetes-version)
    - [MySQL Version](/docs/deployment/application-checklist#2-mysql-version)
    - [MongoDB Version](/docs/deployment/application-checklist#3-mongodb-version)
    - [RabbitMQ](/docs/deployment/application-checklist#4-rabbitmq-version)
    - [ISTIO](/docs/deployment/application-checklist#5-istio)
    - [HELM](/docs/deployment/application-checklist#6-helm)
    - [KUBECTL](/docs/deployment/application-checklist#7-kubectl)

#### 6. [Deployment Model](/docs/deployment/deployment-model.md)
 - [**Types of Deployment Models Offered by Stackbill**](/docs/deployment/deployment-model#types-of-deployment-models-offered-by-stackbill)
   - [**Self Deployment**](/docs/deployment/deployment-model#self-deployment)
      - [Comprehensive Documentation](/docs/deployment/deployment-model#1-comprehensive-documentation)
      - [Empowerment and Ownership](/docs/deployment/deployment-model#2-empowerment-and-ownership)
      - [Cost-Effective Solution](/docs/deployment/deployment-model#3-cost-effective-solution)
    
    -  [**Product Team Deployment**](/docs/deployment/deployment-model#product-team-deployment)
       - [Expert-Led Deployment](/docs/deployment/deployment-model#1-expert-led-deployment)
       - [Hassle-Free Setup](/docs/deployment/deployment-model#2-hassle-free-setup)
       - [Tailored for Large-Scale Environments](/docs/deployment/deployment-model#3-tailored-for-large-scale-environments)
       - [Additional Costs](/docs/deployment/deployment-model#4-additional-costs)
    
#### 7. [Environment Preparation](/docs/deployment/environment-preparation.md)

- [**Verifying the Hardware configuration**](/docs/deployment/environment-preparation#verifying-the-hardware-configuration)
  - [Network Connectivity](/docs/deployment/environment-preparation#1-network-connectivity)
  - [Unified Network Setup](/docs/deployment/environment-preparation#2-unified-network-setup-)
  - [Firewall Configuration](/docs/deployment/environment-preparation#3-firewall-configuration-)
  - [Internet Access](/docs/deployment/environment-preparation#4-internet-access-)

- [**Deployment Script Accessibility**](/docs/deployment/environment-preparation#deployment-script-accessibility)
  - [Kubernetes Master & Worker Configuration](/docs/deployment/environment-preparation#1-kubernetes-master--worker-configuration)
  - [MySQL Installation](/docs/deployment/environment-preparation#2-mysql-installation)
  - [MongoDB Installation](/docs/deployment/environment-preparation#3-mongodb-installation)
  - [RabbitMQ Installation](/docs/deployment/environment-preparation#4-rabbitmq-installation)

#### 8. [Installing Stackbill Components](/docs/deployment/installing-stackbill-components/introduction.md)
 
- [**Introduction**](/docs/deployment/installing-stackbill-components/introduction.md)
- [**Installing Kubernetes**](/docs/deployment/installing-stackbill-components/installing-kubernetes.md)
  - [Installing & configuring Kubernetes Master Node(s)](/docs/deployment/installing-stackbill-components/installing-kubernetes#installing--configuring-kubernetes-master-nodes)
  - [Configuring Kubernetes Master Node(s)](/docs/deployment/installing-stackbill-components/installing-kubernetes#configuring-kubernetes-master-nodes)
  - [Installing & configuring Kubernetes Worker Node(s)](/docs/deployment/installing-stackbill-components/installing-kubernetes#installing--configuring-kubernetes-worker-nodes)
 
 - [**Installing RabbitMQ**](/docs/deployment/installing-stackbill-components/installing-rabbitmq.md)
   - [Installing and configuring RabbitMQ](/docs/deployment/installing-stackbill-components/installing-rabbitmq#installing-and-configuring-rabbitmq)

  - [**Installing MongoDB**](/docs/deployment/installing-stackbill-components/installing-mongodb.md)
    - [Installing and configuring MongoDB](/docs/deployment/installing-stackbill-components/installing-mongodb#installing-and-configuring-mongodb)
    - [**MongoDB Cluster Configuration**](/docs/deployment/installing-stackbill-components/installing-mongodb#mongodb-cluster-configuration)
      - [Primary Node Configuration](/docs/deployment/installing-stackbill-components/installing-mongodb#primary-node-configuration)
      - [Enable Replication in Primary Node](/docs/deployment/installing-stackbill-components/installing-mongodb#enable-replication-in-primary-node)
      - [Cluster Verification](/docs/deployment/installing-stackbill-components/installing-mongodb#cluster-verification)
  
  - [**Installing MYSQL**](/docs/deployment/installing-stackbill-components/installing-mysql.md)
     - [Installing and configuring MYSQL](/docs/deployment/installing-stackbill-components/installing-mysql#installing-and-configuring-mysql)
     - [**MYSQL Cluster Configuration**](/docs/deployment/installing-stackbill-components/installing-mysql#mysql-cluster-configuration)
        - [Configure the MySQL Cluster](/docs/deployment/installing-stackbill-components/installing-mysql#configure-the-mysql-cluster)

- [**Installing NFS**](/docs/deployment/installing-stackbill-components/installing-nfs.md)
  - [Installing and configuring NFS](/docs/deployment/installing-stackbill-components/installing-nfs#installing-and-configuring-nfs)

- [**Installing ISTIO & KUBECTL**](/docs/deployment/installing-stackbill-components/installing-istio-and-kubectl.md)
  - [Installing and configuring Kubectl](/docs/deployment/installing-stackbill-components/installing-istio-and-kubectl#installing-and-configuring-istio-and-kubectl)
  - [Istio Configuration](/docs/deployment/installing-stackbill-components/installing-istio-and-kubectl#istio-configuration)

- [**Installing HELM**](/docs/deployment/installing-stackbill-components/installing-helm.md)
  - [Installing & Configuring Helm](/docs/deployment/installing-stackbill-components/installing-helm#installing--configuring-helm)

- [Self-Signed SSL](/docs/deployment/installing-stackbill-components/self-signed-ssl.md)

#### 9 . [Integrating Stackbill with cloudstack](/docs/deployment/integrating-stackbill-with-cloudstack.md)

#### 10. [Installing Stackbill](/docs/deployment/installing-stackbill.md)

  - [Installing Steps](/docs/deployment/installing-stackbill#installing-steps)
  - [Post-Install Verification](/docs/deployment/installing-stackbill#post-install-verification)

#### 11. [Configuring Stackbill](/docs/deployment/configuring-stackbill.md)

  - [Configuring stackbill for first Time](/docs/deployment/configuring-stackbill#configuring-stackbill-for-first-time)
