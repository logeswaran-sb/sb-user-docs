---
title: Installing RabbitMQ
sidebar_label: Installing RabbitMQ
sidebar_position: 3
---

## Introduction

RabbitMQ is a lightweight, open-source message broker software that facilitates communication between different applications or components of a distributed system. It uses the Advanced Message Queuing Protocol (AMQP) to send, receive, and route messages efficiently. RabbitMQ is widely used for asynchronous processing, load balancing, and decoupling services in microservices-based architectures.

### Installing and configuring RabbitMQ

Connect to the RabbitMQ virtual machine (VM) using the SSH credentials specific to your environment. For Stackbill, the default operating system for VMs is **Ubuntu 22.x**, and the default username is **ubuntu**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-rabbitmq/stackbill-setup-ubuntu-install.jpg" width="90%" />

- After logging in as the ubuntu user, switch to the root account to perform administrative tasks

**sudo -i**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-rabbitmq/stackbill-setup-sudo-info.jpg" width="90%" />

- Go to the /usr/local/src directory, where all scripts will be stored as temporary location.

**cd /usr/local/src**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-rabbitmq/stackbill-setup-local-source.jpg" width="90%" />

- Use the wget command to download the pre-configured RabbitMQ installation script from the centralized S3 repository.

**wget https://stacbilldeploy.s3.us-east-1.amazonaws.com/RabbitMQ/rabbitmq.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-rabbitmq/stackbill-setup-rabitmq-install.jpg" width="90%" />

- After downloading the script, grant it execution permission.

**chmod +x rabbitmq.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-rabbitmq/stackbill-setup-rabitmq-script.jpg" width="90%" />

- Start the installation process by executing the script.

**sh rabbitmq.sh**

- During the script execution, it will prompt you to configure the cloud.cfg file. Simply press Enter to proceed with the default settings.

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-rabbitmq/stackbill-setup-config-script.jpg" width="90%" />

- The installation process will also install Ubuntu kernel-level patches. This may restart some system services. If prompted to restart services, select **OK** and continue.

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-rabbitmq/stackbill-setup-kernel-upgrade.jpg" width="90%" />

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-rabbitmq/stackbill-setup-daemons-libraries.jpg" width="90%" />

- Toward the final stage, the script will ask you to set a **username** and **password** for RabbitMQ. For demo environment we set username as **mqadmin** and password as **MuyUzRc7t32R**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-rabbitmq/stackbill-setup-rabitmq-web-dispatch.jpg" width="90%" />

- After the installation completes, the script will display the RabbitMQ service status. Once the status is displayed, press the q key to exit and complete the process.

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-rabbitmq/stackbill-setup-rabitmq-status.jpg" width="90%" />

- Finally, reboot the VM.








