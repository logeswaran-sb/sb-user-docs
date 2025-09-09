---
title: Prometheus
sidebar_label: Prometheus
---

|**`Version 2.42.0` `OS Ubuntu 22.04` `MONITORING`**|  |
|---------------------------------------------------|--|


### Description

Prometheus is a free software application used for event monitoring and alerting thus Prometheus is an open-source systems monitoring and alerting toolkit. Prometheus is open-source software that collects metrics from targets by "scraping" metrics HTTP endpoints.  Supported "targets" include infrastructure platforms, applications, and services. Together with its companion Alertmanager service, Prometheus is a flexible metrics collection and alerting tool.

### Software Included

Prometheus - 2.42.0

Node Exporter - 1.5.0

### Getting started after deploying PROMETHEUS

Allow the ports in the firewall only SSH (port 22, rate limited), Prometheus on port 9090 and node_exporter on port 9100 access

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the PROMETHEUS is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

Prometheus is configured via a config file which can be found at **/etc/prometheus/prometheus.yml** in the instance. You can add and configure which targets are scraped by Prometheus using the config file. 

Once you edit the config file, you can use the below command to run to pick up the new changes.
~~~
sudo systemctl reload prometheus.service
~~~

You can visit the Prometheus UI on **http://IPADDRESS:9090**

Prometheus by default is configured to monitor itself and node_exporter. You can add more targets by editing the config file located at **/etc/prometheus/prometheus.yml** on the instance.

### Production

When running in production, you should make sure that Prometheus is not exposed to the public but rather only to a few users protected by a reverse proxy/firewall.
