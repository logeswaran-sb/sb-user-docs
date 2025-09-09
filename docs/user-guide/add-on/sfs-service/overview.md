---
title: Overview
sidebar_label: Overview
sidebar_position: 1
---

The **Shared File Service (SFS)** within the **Cloud Management Portal** offers a robust, fully managed solution for provisioning **shared network storage** using **NFS (Network File System)**. This feature is designed to enable multiple virtual instances (VMs) under the same user account  to access a centralized file system simultaneously.

SFS is ideal for applications and workloads that require persistent, shared access to files—such as content repositories, software build environments, analytics frameworks, and clustered computing workloads.

---

### What is Shared File Service (SFS)?

The **Shared File Service** in the Cloud Management Portal delivers a cloud-native alternative to traditional **NAS appliances**, allowing users to:

-   Create a shared file system directly from the portal UI.
    
-   Automatically provision storage using standard NFS protocols.
    
-   Mount the storage across multiple instances without manual setup.
    
-   Choose between **XFS** or **EXT4** file systems for compatibility with various workloads.

---

### Key Features

#### 1.  NFS-Based Architecture

SFS utilizes the **Network File System (NFS)** protocol to deliver shared access. It supports the widely adopted **XFS** and **EXT4** file systems, making it compatible with most Linux-based workloads.

-   **Multi-instance access**: Attach the shared file system to multiple VMs.
    
-   **File-level concurrency**: Allow concurrent access and read/write operations.

#### 2. Fully Automated Provisioning

No need to manually deploy NAS devices or configure NFS services:

-   SFS is deployed and configured **automatically** via the Cloud Management Portal.
    
-   Users specify capacity and configuration during setup.
    
-   The system handles all underlying infrastructure tasks, such as volume mounting, export configuration, and network accessibility.

#### 3. Intuitive UI Integration

You can provision and manage SFS resources with just a few clicks from the **Cloud Management Portal UI**:

-   Launch shared storage under your selected network or instance group.
    
-   Choose storage size, file system type, and disk offering.
    
-   View storage status, metrics, and mount instructions within the portal.

#### 4. Scalability

SFS is designed to scale with your workload:

-   Increase storage size by updating your disk offering.
    
-   Add or remove instances that access the shared storage dynamically.

#### 5. Backup and Snapshots

To support **data protection and disaster recovery**, Shared File Service can be linked to **Backup Offerings**:

-   Schedule regular backups for your shared file system.
    
-   Capture snapshots for rollback or version control.

#### 6. Mounting Instructions Provided

For each provisioned SFS, the portal provides:

-   Mount point details (NFS endpoint).
    
-   File system format (XFS or EXT4).
    
-   Secure mounting options and command-line instructions to connect the instance to the SFS.

#### 7. Real-Time Metrics & Monitoring

Cloud Management Portal offers real-time visibility into your SFS environment:

-   **CPU Usage**: Track processing load of the shared storage host.
    
-   **Memory Usage**: Monitor RAM utilization related to the SFS instance.
    
-   **Disk Utilization**: Keep track of space consumption and IOPS activity.
