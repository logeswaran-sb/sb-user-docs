---
title: Delete SSH Key
sidebar_label: Delete SSH Key
sidebar_position: 5
---

The **Delete SSH Key** feature allows users to remove unused or outdated SSH keys from their cloud environment. This operation is crucial for maintaining security hygiene by ensuring only active and required SSH credentials exist within your cloud account.

This section walks you through the step-by-step process of deleting an SSH key using the Cloud Management Portal.

### Important Notes

-   **Irreversible Action**: Deleting an SSH key is **permanent** and **cannot be undone**. Ensure you no longer need the key or that a copy exists elsewhere if needed in the future.
    
-   **VM Association Check**: You cannot delete an SSH key that is currently **associated with an active virtual machine (VM)**. Detach the key from all associated VMs before proceeding with deletion.

#### 1. Accessing the SSH Key Manager Section :

-   **Log in** to your Cloud Management Portal using your authorized credentials.
    
-   From the left navigation pane, go to:  
  
    **Compute** → **SSH Key Manager**

-   Here, you’ll find a list of all SSH Keys available under your account.

#### 2. Identify the SSH Key for Deletion :

-   Review the list of available SSH keys and locate the key you want to delete.
    
-   Ensure the key is not linked to any active VM. If it is, detach it from the VM via the **Access & Security** section of the instance before proceeding.

#### 3. Initiate the Deletion Process :

-   Click the **Delete** icon next to the corresponding SSH key under the **Actions** column.

<img src="/user-guide/ssh-key-manager/delete-ssh-key/Image-01.JPG" width="90%" />

-   A confirmation dialog will appear with the message:
    
    > “Are you sure you want to delete this SSH key?”

<img src="/user-guide/ssh-key-manager/delete-ssh-key/Image-02.JPG" width="50%" />

#### 4. Confirm Deletion :

-   To proceed, click the **Delete** button.
    
-   If you decide not to delete the key, click **Cancel** to abort the operation.
