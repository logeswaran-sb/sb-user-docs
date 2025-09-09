---
title: Add VM Snapshot
sidebar_label: Add VM Snapshot
sidebar_position: 2
---

The **VM Snapshot** feature allows you to preserve the current state of a virtual machine (VM), enabling you to restore it later if needed. This is especially useful before performing updates, installations, or any configuration changes that may impact system stability.

This guide walks you through the steps to create a **VM snapshot** via the **Cloud Management Portal**.

---

### Purpose of a VM Snapshot

A **VM snapshot** captures:

-   The **VM disk state** (all data stored on the disk).
    
-   Optionally, the **VM memory state** (current memory content for runtime recovery).
    
With VM snapshots, you can:

-   Instantly roll back to a previous working state.
    
-   Maintain a stable recovery point before applying critical changes.
    
-   Improve system resilience and minimize downtime.

#### 1. Accessing the VM Snapshots Section :

-   **Log in** to your Cloud Management Portal using your authorized credentials.
    
-   From the left navigation pane, go to:  
  
    **Compute** → **VM Snapshots**

<img src="/user-guide/vm-snapshot/add-vm-snapshot/Image-01.JPG" width="30%" />

-   Here, you’ll find a list of all VM snapshots available under your account.

#### 2. Initiate Snapshot Creation :

-   Click on the **`Add VM Snapshot`** button.
    
<img src="/user-guide/vm-snapshot/add-vm-snapshot/Image-02.JPG" width="90%" />

-   A new pop-up window will appear with configuration options.

#### 3. Configure the Snapshot :

In the pop-up window, perform the following steps:

-   **Select a Virtual Machine**:  
    Choose the VM for which you want to take a snapshot from the drop-down list.

<img src="/user-guide/vm-snapshot/add-vm-snapshot/Image-03.JPG" width="50%" />
    
-   **Enter a Name and Description**:  
    Provide a unique name and an optional description to help identify the snapshot later.

<img src="/user-guide/vm-snapshot/add-vm-snapshot/Image-04.JPG" width="50%" />
    
-   **Snapshot Memory Option** _(Optional)_:
    
    -   Enable the **`Snapshot Memory`** checkbox if you want the snapshot to include the current in-memory state of the VM.
        
    -   This allows for complete runtime restoration (similar to a suspended state).
        
    -   Note: This may increase the snapshot size and time taken.
        
-   **View Pricing Information**:  
    The system will display the **per-GB, per-hour** pricing details associated with the snapshot storage.

#### 4. Create the Snapshot :

-   Once all required fields are filled and verified, click the **`Create`** button.

<img src="/user-guide/vm-snapshot/add-vm-snapshot/Image-05.JPG" width="50%" />
    
-   The snapshot creation process will begin.

>Note: The time required to complete the snapshot depends on the VM size and whether memory is included.

#### 5. Post-Creation :

-   Upon successful creation, the snapshot will appear in the **VM Snapshots list**.
    
-   You can manage or revert to this snapshot anytime from this section.

<img src="/user-guide/vm-snapshot/add-vm-snapshot/Image-06.JPG" width="90%" />
