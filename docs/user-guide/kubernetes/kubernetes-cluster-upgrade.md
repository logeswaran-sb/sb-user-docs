---
title: Kubernetes Cluster Upgrade
sidebar_label: Kubernetes Cluster Upgrade
sidebar_position: 4
---

The **Kubernetes Cluster Upgrade** functionality in the Cloud Management Portal enables users to effortlessly upgrade their clusters to the latest stable version, ensuring security, compatibility, and feature improvements.

This section is designed with **simplicity, safety, and control** in mind, allowing cloud administrators and DevOps engineers to manage cluster lifecycle events without downtime or complex CLI processes.

#### 1. Accessing Kubernetes cluster summary  page :

- Login into the cloud management portal.

- Then navigate to **Compute > Kubernetes > Select Cluster > Summary Tab**

#### 2. Trigger Upgrade :

- Click the **"Upgrade K8S"** button in the Summary section to open the upgrade modal.

<img src="/user-guide/kubernetes/cluster-upgrade/Image-01.JPG" width="90%" />

#### 3. Version Selection :

A modal labeled **"Upgrade of Kubernetes Cluster"** will appear. You will be required to:

-   Select a new Kubernetes version from a dropdown (e.g., `v1.30.3`).
    
-   The selection field is **mandatory**, and leaving it unselected prompts a validation warning:
    
    > _“Please select the new Kubernetes Version.”_

<img src="/user-guide/kubernetes/cluster-upgrade/Image-02.JPG" width="50%" />

#### 4. Action Buttons :

-   **OK:** Proceeds with the upgrade once a valid version is selected.
    
-   **Cancel:** Aborts the upgrade process without making any changes.

#### 5. Upgrade Verification :

- You can verify the upgraded Kubernetes version in the Summary tab once the process completes.

<img src="/user-guide/kubernetes/cluster-upgrade/Image-03.JPG" width="90%" />
