---
title: Accessing Shared File Service (SFS) from a Linux Virtual Machine
sidebar_label: Accessing SFS from a Linux VM
sidebar_position: 5
---

This section provides a step-by-step walkthrough for mounting and accessing your Scalable File System (SFS) from a Linux-based VM within the Cloud Management Portal.

### Prerequisites

Before proceeding, ensure the following:

-   You have a **Linux Virtual Machine** running in your cloud environment.
    
-   You have an **active SFS service** already provisioned under your account.

----
#### 1. Login to the Cloud Management Portal

-   Log in to your **Cloud Management Portal** using your authorized credentials.
    
-   Navigate to the **“Addon”** section in the sidebar menu.
    
-   Click on **“SFS”** to view all provisioned SFS instances available under your account.

<img src="/user-guide/add-on/sfs-service/accessing-sfs-from-linux-vm/Image-01.JPG" width="40%" />

#### 2. Attach the SFS Service to Your Linux VM

-   From the SFS dashboard, locate and click on the specific **SFS service name** you want to associate with your VM.
    
-   Once inside the SFS service detail page, click on the **“VM List”** tab.

<img src="/user-guide/add-on/sfs-service/accessing-sfs-from-linux-vm/Image-02.JPG" width="40%" />
    
-   Click the **“Add VMs”** button.

<img src="/user-guide/add-on/sfs-service/accessing-sfs-from-linux-vm/Image-03.JPG" width="90%" />
    
-   From the pop-up, select your **target Linux VM**.
    
-   Click the **“Attach”** button.
    
-   Within a few moments, the selected VM will be successfully attached to the SFS service.
    
-   You can verify this mapping under the **Storage** section of the VM details page.

<img src="/user-guide/add-on/sfs-service/accessing-sfs-from-linux-vm/Image-04.JPG" width="90%" />

#### 3. Prepare the Linux VM

Log in to your Linux VM using an SSH client or console and perform the following commands:

- Update the package repositories:

  `sudo apt update`

<img src="/user-guide/add-on/sfs-service/accessing-sfs-from-linux-vm/Image-05.JPG" width="80%" />

- Install the NFS kernel server package:

  `sudo apt install nfs-common -y`

<img src="/user-guide/add-on/sfs-service/accessing-sfs-from-linux-vm/Image-06.JPG" width="80%" />

#### 4. Mount the SFS in the Linux VM

- Return to the **SFS dashboard** in the portal.

- Locate the **Mount Point Information** section and copy the mount command.

  **Example:**
  
  `mount -t nfs 172.27.117.34:/export /mnt`

- Paste and run the command in the Linux terminal. This will mount the SFS storage to the `/mnt` directory.

- To verify the mount:

  `df -hT`

<img src="/user-guide/add-on/sfs-service/accessing-sfs-from-linux-vm/Image-07.JPG" width="80%" />

- This will list all mounted file systems and their types, including the newly mounted SFS.

#### 5. Start Using the SFS Storage

- You can now begin storing files directly into the SFS mount point (`/mnt` or your specified path). This mounted storage behaves like a local directory but is backed by scalable network storage.
