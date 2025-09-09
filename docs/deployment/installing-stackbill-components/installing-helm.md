---
title: Installing HELM
sidebar_label: Installing HELM
sidebar_position: 8
---

## Introduction

Helm is a powerful package manager for Kubernetes that simplifies the process of deploying, managing, and updating applications within a Kubernetes cluster. It uses "Helm Charts," which are pre-configured templates that define how an application should be deployed. These charts contain Kubernetes manifests, allowing users to easily configure and deploy complex applications with minimal effort.

### Installing & Configuring Helm

- Connect to the NFS VM using the SSH credentials specific to your environment. For Stackbill, the default operating system for VMs is Ubuntu 22.x, and the default username is ubuntu

- Once logged in as the ubuntu user, switch to the root account for elevated privileges. Use the following command.

**sudo -i**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-helm/apache-cloudstack-installation-sudo.jpg" width="90%" />

- Go to the /usr/local/src directory, where all scripts will be stored as temporary location.

**cd /usr/local/src**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-helm/apache-cloudstack-installation-change-directory.jpg" width="90%" />

- Use the following command to download the installation script for Helm.

**curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-helm/apache-cloudstack-installation-download-script.jpg" width="90%" />

- Make the downloaded script executable

**chmod 700 get_helm.sh**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-helm/apache-cloudstack-installation-change-mode.jpg" width="90%" />

- Execute the script to install Helm

**./get_helm.sh**

The script downloads and installs the latest version of Helm, making it available for Kubernetes management tasks.

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-helm/apache-cloudstack-installation-get-ssh.jpg" width="90%" />

- Contact the Stackbill support team for the latest deployment chart URL. This URL contains the package needed to deploy Stackbill applications.

**Syntax:** helm install sb-deployment-controller &lt;Deployment chart URL&gt;
**Example:** helm install sb-deployment-controller https://sb-deployment-controllers.s3.ap-south-1.amazonaws.com/charts/sb-deployment-controller-0.1.0.tgz

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-helm/apache-cloudstack-installation-deployment-controller.jpg" width="90%" />

- Once the chart is deployed successfully, access the application via the public IP of your Kubernetes load balancer. Example: Open a web browser and navigate to http://&lt;LoadBalancerIP&gt;. In the demo environment, the IP is http://154.61.173.167.
