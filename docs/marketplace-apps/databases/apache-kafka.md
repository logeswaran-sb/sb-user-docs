---
title: Apache Kafka
sidebar_label: Apache Kafka
---


|**`Version 3.5.0` `OS Ubuntu 22.04` `DATABASES`**|  |
|-------------------------------------------------|--|

### Description

Apache Kafka is a distributed data streaming platform that can publish, subscribe to, store, and process streams of records in real-time. It is designed to handle data streams from multiple sources and deliver them to multiple consumers. This  App automatically configures a single-node Kafka cluster, so you can spend less time configuring it and more time developing the software that uses it.


**Note:** This app should not be used in production environments. Since it consists of a single-node cluster, it does not offer high availability, scaling, or any form of data-loss prevention. This app serves to provide an easy way to get started in development environments.

### Software Included

Apache Kafka - 3.5.0

OpenJDK - 11

### Getting started after deploying APACHE KAFKA

Allow the ports in the firewall only SSH (port 22, rate limited), and Apache Kafka (port 9093).

You will be logged out of the instance and displayed with the below message until the instance is deployed.  **DO NOT LOG IN TO THE INSTANCE FOR 2 MINUTES AFTER THE CREATION.**

> Please wait until the installation is completed.... 
>
> Connection to $IPADDRESS closed.

### Once the APACHE KAFKA is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

Kafka shell user login credentials are stored under **/root/.shell_user_passwords**

Before starting, replace the private IP in the below files with the instance public IP,

**/opt/kafka/ssl/example.librdkafka.config**

> bootstrap.servers=$PRIVATE_IPADDRESS:9093

**/opt/kafka/config/server.properties**

> advertised.listeners=INTERNAL_PLAINTEXT://127.0.0.1:9092,PUBLIC_SSL://$PRIVATE_IPADDRESS:9093

Restart the services using the below command to apply changes,
~~~
systemctl restart kafka.service zookeeper.service
~~~

**Your Kafka server is configured with two listeners:**

> 127.0.0.1:9092 - PLAINTEXT and no authentication required
>
> 0.0.0.0:9093 - TLS/SSL using a self-signed certificate and SCRAM-SHA-256 authentication

PLAINTEXT connections are an easy way to get started, but transmitting PLAINTEXT data, especially login credentials, over the public internet leaves your information vulnerable. For security purposes, PLAINTEXT connections can only be established from inside the server:

1. Connect to your Instance using SSH and switch to root

2. Create a topic
~~~
/opt/kafka/bin/kafka-topics.sh \
  --create \
  --topic quickstart \
  --bootstrap-server localhost:9092
~~~
3. Produce your first event
~~~
echo 'Hello, CloudPortal!' | /opt/kafka/bin/kafka-console-producer.sh \
  --topic quickstart \
  --bootstrap-server localhost:9092
~~~
4. Consume the event
~~~
/opt/kafka/bin/kafka-console-consumer.sh \
  --from-beginning \
  --max-messages 1 \
  --topic quickstart \
  --bootstrap-server localhost:9092
~~~

The configuration for this Kafka broker can be found in **/opt/kafka/config/server.properties**.

The server's certificate authority (CA) certificate is self-signed, the CA certificate must be explicitly trusted by the client to properly verify the server's identity.


1. Copy the example configuration and CA root certificate from your new instance to your local machine
~~~
scp root@$IPADDRESS:'/opt/kafka/ssl/{ca.crt,example.librdkafka.config}' .
~~~

2. Install kafkacat on the local machine based on the OS. The below command is used in Ubuntu
~~~
apt install kafkacat -y
~~~

3. Produce a message
~~~
echo 'Hello, CloudPortal TLS!' | kafkacat -P -b $IPADDRESS:9093 \
  -F ./example.librdkafka.config \
  -X ssl.ca.location=./ca.crt \
  -t quickstart
~~~

4. Consume the message
~~~
kafkacat -C -b $IPADDRESS:9093 \
  -F ./example.librdkafka.config \
  -X ssl.ca.location=./ca.crt \
  -t quickstart
~~~

Exit the consumer by pressing **ctrl+c**.

The **/opt/kafka/ssl** directory contains the following:

|FILE                            |Contents                         |
|--------------------------------|---------------------------------------------|
|`.keystore_password`            |Password for Java KeyStores in this directory|
|`ca.crt`                        |Self-signed CA root certificate              |
|`ca.key`                        |Self-signed CA root certificate              |
|`example.librdkafka.config`     |Client authentication configuration          |
|`kafka.crt`                     |Kafka server certificate signed by CA        |
|`kafka.keystore.jks`            |Java KeyStore containing ca.crt and kafka.crt|