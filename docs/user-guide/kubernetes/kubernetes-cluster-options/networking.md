---
title: Networking
sidebar_label: Networking
sidebar_position: 5
---

## Kubernetes Cluster – Networking

The **Kubernetes Networking** section provides a comprehensive interface for managing and configuring the networking components of a Kubernetes cluster. It includes Public and Private IP assignments, Firewall rules, Port Forwarding, and Load Balancer configurations, ensuring seamless communication and secure accessibility.

#### 1. Network Configuration :

This panel displays the network layout for the selected Kubernetes cluster, including the public network configuration and internal node communication details.

<img src="/user-guide/kubernetes/cluster-options/networking/Image-01.JPG" width="50%" />

**Private Network (Cluster Nodes)**

- Each node in the Kubernetes cluster is assigned a unique private IP address within the same subnet.

<img src="/user-guide/kubernetes/cluster-options/networking/Image-02.JPG" width="60%" />

#### 2. Firewall Rules :

- This section provides a list of open ports and communication protocols allowed through the cluster firewall, ensuring only authorized traffic is permitted.

- You can modify existing rules or add new rules as needed using the **“Add Rule”** button.

<img src="/user-guide/kubernetes/cluster-options/networking/Image-03.JPG" width="90%" />

#### 3. Port Forwarding :

- The Port Forwarding tab enables mapping of internal ports from cluster nodes to external/public ports, allowing external systems to securely access services within the Kubernetes cluster.

- Click **“Add VM”** to configure port forwarding for additional nodes.

<img src="/user-guide/kubernetes/cluster-options/networking/Image-04.JPG" width="90%" />

#### 4. Load Balancer :

- The Load Balancer tab allows users to view and manage existing load balancer configurations associated with the cluster. Each load balancer is associated with a public IP and operates based on a chosen algorithm.

- You can manage each load Balancer’s configuration or remove it using the associated action buttons.

<img src="/user-guide/kubernetes/cluster-options/networking/Image-05.JPG" width="90%" />
