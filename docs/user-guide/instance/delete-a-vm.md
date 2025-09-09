---
title: Delete a Virtual Machine
sidebar_label: Delete a Virtual Machine
sidebar_position: 7
---

This section outlines the steps required to delete a virtual machine (VM) from your cloud management portal. Use this action when a VM is no longer required, keeping in mind that deletion is irreversible and will result in permanent loss of the VM and its associated data.

#### 1. Portal Login

- Navigate to the **Cloud Management Portal**.
    
- Enter your credentials and log in to your account. 

#### 2. Access the Compute Section :

- From the main dashboard, navigate to **Compute**.
    
- Click on **Instances** to view the existing instances.

#### 3. Accessing Destroy button :

- On the **VM List** page, locate and click on the name of the VM you wish to delete. This will open the instance summary page.

- Click the **Destroy** button available on the instance summary page to initiate the deletion process.

<img src="/user-guide/instance/delete-a-vm/Image-01.JPG" width="80%" />

#### 4. Confirmation Prompt :

- When initiating a delete operation, the system prompts the user with a confirmation dialog to avoid accidental deletion. The prompt includes:

   - **Associated Resources Table**: Displays a list of linked resources (e.g., root volumes) that may be affected.

   - **Expunge Option**: A critical choice that determines whether the deletion is reversible or permanent.

<img src="/user-guide/instance/delete-a-vm/Image-02.JPG" width="60%" />

#### 5. Associated Resources :

- A toggle option **“Show Associated Resources”** is available to view all dependencies attached to the VM, such as volumes or network interfaces.

   - The table lists:
      -   **Name**: Identifier of the resource (e.g., `ROOT-4205`)
    
      -   **Plan**: The disk plan selected during disk creation (e.g., `Size-10`)
    
     -   **Type**: Resource type (e.g., Volume)

- You can still restore the VM if the **Expunge** option is NOT selected.  

-  Resource dependencies are deleted ONLY if Expunge is selected.

#### 6. Expunge (Irreversible Deletion)

- Selecting the **Expunge** checkbox will:
    
    - Permanently delete the VM and all associated root volumes.

    - Make all data **irretrievable**.

    - Prevent any possibility of restoration
    
#### 7. Confirmation Step :

- To proceed with deletion:

  - Enter the **exact VM name** shown on the screen (e.g., `ubuntu-monitoring`)

  - Click **Destroy** to finalize the action

- This manual name confirmation helps prevent unintentional deletions.

#### 8. Cancel Option :

- Click **Cancel** to abort the deletion process and return to the previous screen.
