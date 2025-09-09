---
title: Installing ISTIO & KUBECTL
sidebar_label: Installing ISTIO & KUBECTL
sidebar_position: 7
---

## Introduction

Istio is an open-source service mesh platform that simplifies managing microservices architectures by providing a unified way to connect, secure, control, and monitor services. It operates at the application layer, managing service-to-service communication within a distributed system.

kubectl is the command-line tool used to interact with Kubernetes clusters. It allows users to manage Kubernetes resources, deploy applications, inspect and debug workloads, and perform administrative tasks within the cluster.

### Installing and configuring Istio and Kubectl

> **Note:** In a typical deployment, it is recommended to use a separate virtual machine (VM) as a "build VM" for connecting to the Kubernetes cluster and managing application build activities. For the demo environment, the NFS VM is used as the build machine.

- Connect to the NFS VM using the SSH credentials specific to your environment. For Stackbill, the default operating system for VMs is Ubuntu 22.x, and the default username is ubuntu

- Once logged in as the ubuntu user, switch to the root account for elevated privileges. Use the following command.

**sudo -i**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-sudo.jpg" width="90%" />

- Go to the /usr/local/src directory, where all scripts will be stored as temporary location.

**cd /usr/local/src**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-change-directory.jpg" width="90%" />

- Run the following commands to download the latest version of kubectl and its checksum file.

**curl -LO https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl**

**curl -LO https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-curl.jpg" width="90%" />

- Verify the checksum

**echo "$(cat kubectl.sha256) kubectl" | sha256sum –check**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-echo.jpg" width="90%" />


- Install kubectl using below command

**install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-kubectl-installation.jpg" width="90%" />

- Provide execution permissions

**chmod +x kubectl**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-chmod-kubectl.jpg" width="90%" />


- Create a local directory

**mkdir -p ~/.local/bin**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-mkdir.jpg" width="90%" />

- Move the kubectl binary

**mv ./kubectl ~/.local/bin/kubectl**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-move-kubectl.jpg" width="90%" />

- Verify the installation

**kubectl version –client**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-kubectl-client-version.jpg" width="90%" />

- Create a directory to store kubernetes configuration file.

**mkdir /root/.kube**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-kube-make-directory.jpg" width="90%" />

- Copy the kubeconfig file from the Kubernetes master node to .kube directory. To do that, login into kubernetes master VM and execute the below command.

**vi /root/.kube/config**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-vi.jpg" width="90%" />

- Copy the config file and paste it in the .kube folder.

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-list-kube.jpg" width="90%" />

- Validate Kubernetes access using below command.

**Kubectl get nodes**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-get-nodes.jpg" width="90%" />

- If you see a list of nodes, the kubectl configuration is correct.

### Istio Configuration

- Use the following command to download Istio

**curl -L https://istio.io/downloadIstio | ISTIO_VERSION=1.20.3 sh -**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-istio-configuration.jpg" width="90%" />

- Navigate to the bin directory within the Istio installation folder.

**cd istio-1.20.3/bin**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-istio-bin.jpg" width="90%" />

- Copy the istioctl binary to /usr/local/bin

**cp istioctl /usr/local/bin**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-istio-ctl-bin.jpg" width="90%" />

- Execute the below command to install Istio component

**istioctl install**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-istio-ctl-install.jpg" width="90%" />

- After the installation, retrieve the Ingress Gateway service details using below command.

**kubectl get svc -n istio-system**

<img alt="Apache CloudStack installation" src="/deployment/installing-stackbill-components/installing-istio-and-kubectl/stackbill-installation-istio-system.jpg" width="90%" />

- Identify the HTTP and HTTPS ports from the Ingress Gateway output. 

- Update your load balancer to allow these ports, enabling public traffic to flow to the Kubernetes environment. For example, the ports might be 30219 for HTTP and 32347 for HTTPS in your environment.






