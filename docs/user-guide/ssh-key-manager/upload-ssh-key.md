---
title: Upload SSH Key
sidebar_label: Upload SSH Key
sidebar_position: 3
---

The **Upload SSH Key** feature in the Cloud Management Portal allows you to securely import and manage your existing SSH keys for use with virtual machines (VMs). This is particularly useful if you already have a key pair you prefer to use for authentication, instead of generating a new one.

### Important Note:

 - SSH keys can only be used with **Linux-based virtual machines**.    Windows VMs are not supported.

---

#### 1. Accessing the SSH Key Manager Section :

-   **Log in** to your Cloud Management Portal using your authorized credentials.
    
-   From the left navigation pane, go to:  
  
    **Compute** → **SSH Key Manager**

-   Here, you’ll find a list of all SSH Keys available under your account.

#### 2. Upload a New SSH Key :

-   Click on the **Upload** button.

<img src="/user-guide/ssh-key-manager/upload-ssh-key/Image-01.JPG" width="90%" />
    
-   A new popup window will appear prompting you to provide the following details:
    
    -   **Key Name**: Enter a name to identify your SSH key.
        
    -   **Description**: (Optional) Add a description to help you recognize the purpose of this key.

-   **Public Key**: Paste the contents of your `.pub` file (e.g., `id_rsa.pub`).
    
-   **Private Key**: Paste the contents of your private key file (e.g., `id_rsa`).
    
    > **Important**: Ensure your private key is stored securely and never shared with others.

<img src="/user-guide/ssh-key-manager/upload-ssh-key/Image-02.JPG" width="40%" />

#### 3. Review and Confirm :

-   Double-check the provided information for accuracy.
    
-   Click **Add** to upload the key to your cloud account.

#### 4. Use the Uploaded SSH Key :

-   Once uploaded, the key will be visible in the SSH Key Manager.
    
-   You can now assign this SSH key to a VM either during instance creation or by updating the access settings of an existing Linux VM.
    
    >  **Note**: When assigning the key to an existing VM, ensure the VM is in a **stopped state** before attaching the SSH key.
