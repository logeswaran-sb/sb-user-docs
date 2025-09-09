---
title: Kubernetes Resources
sidebar_label: Kubernetes Resources
sidebar_position: 4
---

The **Kubernetes Resources** section in the Cloud Management Portal provides a detailed overview and management interface for node pools, individual nodes, and persistent storage volumes associated with a Kubernetes cluster.

#### 1. Accessing Kubernetes Resources :

- **Login** to the Cloud Management Portal.

- Navigate to:  `Compute` → `Kubernetes` → Select a Cluster (e.g., _My-cluster-01_) → `Resources` Tab.

#### 2. Node Pools & Node Management :

The **Node Pools** section displays all the worker and control plane nodes associated with the selected cluster.

#### 3. Node Pool Summary :

-   Each node pool displays its name and current **status** (e.g., `RUNNING`).
    
-   Time of last update is also indicated for better visibility (e.g., "17 hours ago").

#### 4. Nodes List :

Each node includes:

-   **Node name** (e.g., `My-cluster-01-node-19639045b49`)
    
-   **Node status**: Running / Failed / Pending
    
-   **Last update timestamp**
    
-   **Actions**:  Stop, Restart & Delete

<img src="/user-guide/kubernetes/cluster-options/resources/Image-01.JPG" width="90%" />

#### 5. Volume Details :

- The **Storage** section provides a visual breakdown of persistent volumes (PVs) and their associated nodes.

Each volume card includes:

-   **Volume name** (e.g., `ROOT-4270`)
    
-   **Storage node association** (e.g., `My-cluster-01-control-19639042809`)
    
-   **Capacity usage** (e.g., `53.7%`)
    
-   **Total allocated size** (e.g., `8 GB`)

#### 6. Quick Actions :

Each volume offers the following options for easy management:

-   **Resize** – Adjust the storage capacity.
    
-   **Volume Snapshot** – Take a point-in-time snapshot for backup or cloning.
    
-   **Recurring** – Schedule automated snapshot policies for data resilience.

<img src="/user-guide/kubernetes/cluster-options/resources/Image-02.JPG" width="90%" />

#### 7. Volume Operations :

At the top of the storage section, you can:

-   **Add Volume**: Attach new persistent storage to the cluster
    
-   **Attach Volume**: Link existing volumes to specific nodes

<img src="/user-guide/kubernetes/cluster-options/resources/Image-03.JPG" width="90%" />
