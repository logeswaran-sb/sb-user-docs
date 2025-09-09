---
title: Creating Cluster
sidebar_label: Creating Cluster
sidebar_position: 2
---

### Creating Cluster in StackBill CMP

- Log in into **StackBill** portal using your account.
- click on Compute and select Kubernetes from the dropup.

<img alt="StackBill Kubernetes as a service" src="/plugins/kubernetes/creating-cluster/stackbill-kubernetes-as-a-service.png" width="40%" />

- Then click on **create cluster** button.

<img alt="StackBill Kubernetes as a service" src="/plugins/kubernetes/creating-cluster/stackbill-compute-kubernetes-create-cluster.png" width="100%" />

### Cluster Identification in StackBill CMP

<img alt="StackBill Kubernetes as a service" src="/plugins/kubernetes/creating-cluster/stackbill-compute-kubernetes-identify-cluster.png" width="100%" />

- To create a new cluster, provide the cluster name and the description.

### Cluster Image Selection in StackBill CMP

<img alt="StackBill Kubernetes as a service" src="/plugins/kubernetes/creating-cluster/stackbill-compute-kubernetes-image-selection.png" width="100%" />

- **Stackbill** will support last three version of Kubernetes images for user deployment.
- Select the corresponding image for your requirement.

### Plan selection 

<img alt="StackBill Kubernetes as a service" src="/plugins/kubernetes/creating-cluster/stackbill-compute-kubernetes-plan-selection.png" width="100%" />

- We need to select the appropriate plan for our Kubernetes cluster. 

### Networking in StackBill CMP

<img alt="StackBill Kubernetes as a service" src="/plugins/kubernetes/creating-cluster/stackbill-compute-kubernetes-select-network.png" width="100%" />

- By default, Kubernetes networking will be created automatically by **stackbill** and there is no user intervention is required for network creation.

### Configuring High Availability

<img alt="StackBill Kubernetes as a service" src="/plugins/kubernetes/creating-cluster/stackbill-compute-kubernetes-select-ha.png" width="100%" />

- Kubernetes will provide you extra reliability for your cluster environment by adding more control nodes. Also, we can able to specify external load balancer address for your control nodes.

### SSH Key pair in StackBill CMP

<img alt="StackBill Kubernetes as a service" src="/plugins/kubernetes/creating-cluster/stackbill-compute-kubernetes-ssh-select.png" width="100%" />

- We can assign the SSH key pair to the nodes creating on your cluster.

### Image Repository

<img alt="StackBill Kubernetes as a service" src="/plugins/kubernetes/creating-cluster/stackbill-compute-kubernetes-image.png" width="100%" />

- We can also configure private registry for your Kubernetes cluster.

