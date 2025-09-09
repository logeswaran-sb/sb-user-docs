---
title: Opensearch
sidebar_label: Opensearch
---

|**`Version 2.7.0` `OS Ubuntu 20.04` `DATABASES`**|
|-------------------------------------------------|

### Description

OpenSearch is a scalable, flexible, and extensible open-source software suite for search, analytics, and observability applications driven by the OpenSearch Project community, OpenSearch offers a vendor-agnostic toolset you can use to build secure, high-performance, cost-efficient applications. Use OpenSearch as an end-to-end solution or connect it with your preferred open-source tools or partner projects.

Note: 8GB of RAM is the required minimum memory size and 4CPUs to run this app. 

### Software Included

OpenSearch - 2.7.0

OpenSearch Dashboards - 2.7.0

### Getting started after deploying OPENSEARCH

Allow the ports in the firewall only SSH (port 22, rate limited) and OpenSearch Dashboards(5601) access.

Sets the OpenSearch admin and OpenSearch Dashboards login credentials.

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the OPENSEARCH is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

The Opensearch admin login credential is stored under  **/root/.opensearch_admin_password**

The OpenSearch Dashboard login credential is stored under  **/root/.opensearch_kibanaserver_admin_password**

You can access the OpenSearch Dashboard using http://$IPADDRESS:5601 and log in using the OpenSearch Dashboard login credentials.

This instance uses a self-signed TLS certificate so you'll have to either disable TLS certificate checks on your OpenSearch clients or get it from the instance and configure it on your clients. The file lives at /opt/opensearch/config/certs/root-ca.pem.