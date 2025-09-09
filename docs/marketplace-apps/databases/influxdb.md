---
title: InfluxDB
sidebar_label: InfluxDB
---


|**`Version 2.6.1` `OS Ubuntu 22.04` `DATABASES`**|  |
|-------------------------------------------------|--|

### Description

InfluxDB is a time-series database (TSDB) that is designed to handle high write and query loads. It is written in the Go programming language for storage and retrieval of time series data in fields such as operations monitoring, application metrics, Internet of Things sensor data, and real-time analytics.

### Software Included

InfluxDB -  2.6.1

### Getting started after deploying INFLUXDB

Allow the ports in the firewall only SSH (port 22, rate limited), and InfluxDB Web Interface (port 8086).

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the INFLUXDB is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

Access InfluxDB Web Interface through the web using http://IPADDRESS:8086. 

InfluxDB's initial configuration can be completed through the UI using the above URL.

InfluxDB initial configuration can also be performed through CLI using the below command
~~~
influx setup
~~~
[Click here to view the InfluxDB setup documentation](https://docs.influxdata.com/influxdb/v2.6/install/)

Refer to the section **Set up InfluxDB**. 

[Click here to view the InfluxDB CLI documentation ](https://docs.influxdata.com/influxdb/v2.6/reference/cli/influx/)
