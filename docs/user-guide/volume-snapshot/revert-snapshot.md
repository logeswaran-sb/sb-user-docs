---
title: Reverting a Volume Snapshot
sidebar_label: Reverting a Volume Snapshot
sidebar_position: 4
---

The **Revert Snapshot** feature in the Cloud Management Portal allows you to roll back a **root volume** to a previous state using an existing volume snapshot. This is especially useful when you need to restore a VM to a known working configuration after an update failure, system misconfiguration, or other changes that affected the VM's performance or stability.

---

### Prerequisites

Before initiating the revert process, ensure the following:

-   You have at least one **snapshot of a root volume** available.
    
-   The **virtual machine (VM)** associated with the root volume is in a **stopped state**.

#### 1. Accessing the Volume Snapshot Section :

-   **Log in** to your Cloud Management Portal using your authorized credentials.
    
-   From the left navigation pane, go to:  
  
    **Compute** → **Volume Snapshots**

-   Here, you’ll find a list of all volume snapshots available under your account.

<img src="/user-guide/volume-snapshot/revert-snapshot/Image-01.JPG" width="30%" />

#### 2. Identify the Snapshot :

- Locate the snapshot associated with the **root volume** you wish to revert.

- Make sure the corresponding **VM is stopped** before proceeding.

- You will see the **Revert to Snapshot** option under the **Actions** menu for eligible snapshots.

<img src="/user-guide/volume-snapshot/revert-snapshot/Image-02.JPG" width="90%" />

#### 3. Revert to the Snapshot :

- Click on **Revert to Snapshot** under the Actions menu.

- A confirmation dialog will appear with the message:

> “Please confirm that you want to revert the owning Volume to this Snapshot.”

- Click **OK** to proceed with the revert.

- Click **Cancel** if you wish to abort the operation.

<img src="/user-guide/volume-snapshot/revert-snapshot/Image-03.JPG" width="50%" />

#### 4. Revert Process Execution :

- Once confirmed, the portal will begin reverting the root volume to the selected snapshot.

- The duration of this process may vary depending on the **snapshot size** and **disk I/O** performance.

#### 5. Start the Virtual Machine :

After the revert operation is successfully completed:

- Start the virtual machine associated with the reverted volume.

- Log in to the VM to verify that the data and system state have been restored to the snapshot’s point-in-time version.

---

### Important Notes

-   The **revert operation is non-destructive** in terms of snapshot integrity — the snapshot itself is retained even after the revert.
    
-   However, any **changes made to the volume after the snapshot was taken will be lost** once the revert is completed.
    
-   Always ensure you’ve backed up any important data before initiating a revert.
