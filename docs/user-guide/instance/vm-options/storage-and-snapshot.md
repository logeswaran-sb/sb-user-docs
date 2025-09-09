---
title: Storage & Snapshot
sidebar_label: Storage & Snapshot
sidebar_position: 3
---

The **Storage & Snapshot** page of the Cloud Management Portal provides a comprehensive interface for managing storage volumes associated with your virtual machine (VM). It offers full visibility and control over attached volumes, snapshot policies, and volume lifecycle actions. This module is essential for managing data persistence, scaling storage, and implementing backup strategies.

#### 1. Instance Storage Manager :

The **Instance Storage Manager** visually maps the storage hierarchy of a selected VM instance. Each storage component is shown in relation to the VM, making it easier to understand which volumes are actively mounted and how they are used.

   - **VM Name**: Example: `ubuntu-mumbai-01`
  
   - **Primary Storage**: The root volume attached to the instance. It holds the operating system and core application data.
   - **Volume ID**: Example:`ROOT-4201`
   
   - **Size**: Example: `10 GB`
  
   - **Compute Offering**: Example: `GC_4C8R` (4 vCPU, 8192 MB RAM)

The storage visualization helps quickly identify the types of volumes and their status at a glance, whether it’s a primary root volume or additional attached volumes.

#### 2. Quick Actions :

- **Resize :**

   - The Cloud Management Portal provides flexibility to **resize volumes** attached to your virtual machines. Please review the following guidelines before proceeding:

   - **Root Volume Resize :** When resizing the root volume of a VM, the system will automatically expand the volume. No manual intervention is required within the VM.

   - **Data Volume Resize :** For data volumes, after resizing the volume from the portal, you must log in to the respective VM and manually extend the disk partition within the guest OS to utilize the new space.

   - **Resize Limitations:** Volume resizing supports only **expansion**. Reducing the volume size (downsizing) from its current allocation is not permitted to avoid data loss or corruption.

   <img src="/user-guide/instance/vm-options/storage-and-snapshot/Image-01.JPG" width="50%" />
 
 - **Detach / Attach :** 

    - The Cloud Management Portal allows you to manage storage volumes by attaching or detaching them from your virtual machines (VMs).

    - **Attaching and Detaching Volumes:** Users can attach or detach volumes to and from their VMs directly through the portal interface.

    - **Root Volume Restrictions:** The **root volume cannot be detached** while the VM is in a running state. To detach the root volume, ensure the VM is powered off first.

    - **Data Volume Flexibility:** Data volumes can be detached even while the VM is running, offering flexibility for dynamic storage management.

 - **Delete :** 
  
    - The **Delete Volume** function allows you to permanently remove a storage volume and all associated data from your cloud environment.

    - **Permanent Action:** Deleting a volume is irreversible. Ensure the volume is no longer needed and that all necessary data has been backed up prior to deletion.

    - **Deletion Restrictions:** You **cannot delete a root or data volume** if it is currently attached to a running virtual machine.  To delete such volumes, **stop the associated VM** first.

    - **Automatic Detachment and Deletion:** Once the VM is in a stopped state, clicking the **Delete** button will automatically detach the volume and proceed with deletion.

    - This is a critical operation. It is strongly recommended to validate the volume's usage and backup any required data before performing a delete action.


 - **Volume snapshot :** 

    - The **Volume Snapshot** feature enables users to create a one-time, point-in-time backup of a selected volume. This is particularly useful for safeguarding data before performing system upgrades, configuration changes, or maintenance activities

    - **Non-Disruptive Backup:** Snapshots can be created **while the virtual machine is running**, ensuring minimal disruption to services.

    - **Snapshot Naming:** You must assign a **unique name** to each snapshot at the time of creation for easy identification and management.

    - **Cost Visibility:** Snapshot creation incurs a **per GB cost**, which is clearly displayed on the right side of the snapshot creation interface.

   <img src="/user-guide/instance/vm-options/storage-and-snapshot/Image-02.JPG" width="50%" />

 - **Recurring :** 

    - The **Recurring Snapshots** feature allows you to automate the backup of your volumes by scheduling snapshots at regular intervals. This helps in implementing a reliable and consistent backup strategy for critical workloads.

    - **Automated Scheduling:** Configure snapshots to run at predefined intervals — **hourly, daily, weekly, or monthly** — based on your backup requirements.

    - **Snapshot Retention:** Define the **total number of snapshots** to retain for each schedule. Older snapshots will be rotated out based on this limit.

    - **Usage Charges:** Recurring snapshots may **incur charges** depending on the pricing configured by the cloud administrator. Ensure to review cost implications before enabling.

   <img src="/user-guide/instance/vm-options/storage-and-snapshot/Image-03.JPG" width="60%" />

 - **Create Template :**

    - The **Create Template** feature allows you to convert an existing volume into a reusable template. This simplifies and accelerates the deployment of future virtual machines with similar configurations.

    - **Reusable Image Creation:** Capture the current state of the volume, including OS and configurations, to use as a template for future VM deployments. This ensures consistency and reduces setup time.

    - **Basic Information Required:** When creating a template, you must provide **Name of the template**, **Description**, **OS Category** and **OS Type**.

    - **Dynamic Scalability:** Enable the _Dynamic Scalable_ toggle to allow the template to be used for auto-scaling purposes.

    - **Password Injection Support:** If the volume contains the necessary application to support password injection, you can enable the _Password Enabled_ toggle. Once enabled, the platform will auto-generate a secure random password and assign it to the root (Linux) or administrator (Windows) account during VM deployment.

    - **Quota Monitoring:** The system displays the number of templates you are allowed to create under your current quota, helping you manage your resources effectively.

   <img src="/user-guide/instance/vm-options/storage-and-snapshot/Image-04.JPG" width="60%" />
