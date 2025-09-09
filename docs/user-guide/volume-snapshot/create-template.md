---
title: Creating a Template from a Volume Snapshot
sidebar_label: Create Template
sidebar_position: 3
---

Creating a **template** from an existing **volume snapshot** allows you to turn a pre-configured disk image into a reusable system image for future virtual machine (VM) deployments. This process saves time, ensures consistency across VMs, and enables faster provisioning by eliminating repetitive OS installations and configuration steps.

This section walks you through how to create a template from a volume snapshot in the Cloud Management Portal.

#### 1. Accessing the Volume Snapshot Section :

-   **Log in** to your Cloud Management Portal using your authorized credentials.
    
-   From the left navigation pane, go to:  
  
    **Compute** → **Volume Snapshots**

<img src="/user-guide/volume-snapshot/create-template/Image-01.JPG" width="30%" />

-   Here, you’ll find a list of all volume snapshots available under your account.

#### 2. Initiate Template Creation :

- Identify the snapshot you want to convert into a template.

- Click the **Create Template** icon under the **Actions** column.

<img src="/user-guide/volume-snapshot/create-template/Image-02.JPG" width="90%" />

#### 3. Fill in Template Details :

A new popup window will appear. Provide the following details:

- **Template Name** - Enter a name that clearly identifies the template.

- **Template Description** - Add a short description to specify what this template includes or is used for.

- **OS Category** - Choose the appropriate OS category (e.g., Linux, Windows).

- **OS Type** - Select the specific OS version, such as _Windows Server 2019_ or _Ubuntu 22.04_.

#### 4. Additional Settings :

- **Password Enabled** (Optional) - Enable this check box if you want the system to auto-generate a random password for the VM’s root or administrator user. This password will be set during VM provisioning using this template.

- **Quota Information** - This section displays the current usage and available quota for template creation in your cloud account.

#### 5. Create the Template :

- Review all entered details.

- Click the **Create** button to initiate the template creation process.

<img src="/user-guide/volume-snapshot/create-template/Image-03.JPG" width="50%" />

#### 6. Post-Creation :

- After clicking **Create**, you will be automatically redirected to the **Apps Marketplace**.

- Navigate to: **Apps Marketplace → My Images & ISOs**

- Your newly created template will be listed with a status of **In Progress**.

- Template creation time may vary based on the snapshot size.

- Once the status changes from **In Progress** to **Completed**, your template is ready for use.

- Click the **Launch** button next to the template to spin up a new virtual machine using the selected configuration.

<img src="/user-guide/volume-snapshot/create-template/Image-04.JPG" width="30%" />
