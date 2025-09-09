---
title: Volume Snapshot
sidebar_label: Volume Snapshot
sidebar_position: 8
---

The **Volume Snapshot** feature in your Cloud Management Portal enables you to create point-in-time backups of your cloud volumes. These snapshots are essential for protecting data, supporting disaster recovery, and creating new volumes based on existing ones.

This guide walks you through the process of taking a volume snapshot for both root and data disks directly from the cloud portal.

#### 1. Accessing the Volume Section :

-   **Log in** to your Cloud Management Portal using your authorized credentials.
    
-   From the left navigation pane, go to:  
    **Compute** → **Volume**
    
    <img src="/user-guide/volumes/volume-snapshot/Image-01.JPG" width="30%" />
    
-   A list of all root and data volumes associated with your cloud account will be displayed.

#### 2. Snapshot Eligibility Rules

Before proceeding, it’s important to understand the conditions under which snapshots can be taken:

-   **Root Disks**:  
    Snapshots can be taken whether the associated virtual machine (VM) is **running** or **stopped**.
    
-   **Data Disks**:  
    The associated VM must be in a **stopped** state, or the disk must be **detached** from any VM to take a snapshot.

#### 3. Taking a Volume Snapshot :

ollow the steps below to create a snapshot. For demonstration purposes, we will take a snapshot of a root disk.

- Locate the volume you wish to snapshot from the **Volumes** list.
    
- Under the **Actions** column, click on the **snapshot icon**.
    
    <img src="/user-guide/volumes/volume-snapshot/Image-02.JPG" width="90%" />
    
- A **popup window** will appear:
    
    -   The **Volume Name** field will be pre-filled with the name of the selected disk.
        
    -   Enter a descriptive **Snapshot Name** to identify this snapshot for future reference.
        
    -   The **Snapshot Pricing** (e.g., cost per GB per hour) will also be displayed to help you understand ongoing costs.
        
- Once you've reviewed all details, click the **Create** button to initiate snapshot creation.

<img src="/user-guide/volumes/volume-snapshot/Image-03.JPG" width="50%" />

#### 4. Snapshot Completion and Status :

-   The time required to complete the snapshot process depends on the **size of the volume**.
    
-   Once the snapshot creation is complete, it will be visible under the **Volume Snapshot** section of the portal.

<img src="/user-guide/volumes/volume-snapshot/Image-04.JPG" width="90%" />

---

### Best Practices

-   Take snapshots **before making major changes** to your system or application.
    
-   Regularly snapshot **critical data volumes** to maintain current backups.
    
-   Always **verify snapshot completion** before performing any dependent tasks.
