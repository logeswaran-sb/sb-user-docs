---
title: Ant Media Server
sidebar_label: Ant Media Server
---

|**`Version 2.5.3` `OS Ubuntu 20.04` `MEDIA`**|  |
|---------------------------------------------|--|

### Description

Ant Media Server Enterprise Edition provides a real-time streaming platform with Ultra-Low Latency Live Streaming WebRTC, Adaptive Bitrate, Auto-Scaling Capability, and support for RTMP, MP4, HLS, RTSP, and more!

### Software Included

Ant Media Community Edition - 2.5.3

### Getting started after deploying AMS

Allow the ports in the firewall only SSH (port 22, rate limited), TCP: 80 (SSL), TCP: 5080 (HTTP), TCP: 5443 (HTTPS), UDP: 4200 (SRT), TCP: 1935 (RTMP)

UDP: 50000-60000 (WebRTC. The default range is 50000-60000 in v2.4.3 & above. Before 2.4.3, the default value was 5000-65000. Note that you can change the port range in all releases.

TCP: 5000 (You need to open this port in only cluster mode for the internal network communication. It should not be open to the public)

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the AMS is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

You can access the AMS Web interface at **http://IPADDRESS:5080** and setup the first account to start using AMS.

To setup a domain name and configure SSL, [click here](https://antmedia.io/docs/guides/installing-on-linux/Setting-up-SSL/)

If you need to access the AMS Web interface at **http://IPADDRESS** instead of **http://IPADDRESS:5080** configure port forwarding from 5080 --> 80 and 5443 --> 443. [click here](https://docs.stackbill.com/docs/Network/basic-network#configure-port-forwarding) to configure port forwarding in StackBill.

To setup OBS video recording and live streaming, [click here](https://antmedia.io/how-to-use-obs-with-ant-media-server/)

For more information,[please refer to the AMS documentation](https://antmedia.io/docs/)