---
title: Accessing Linux Virtual Machines
sidebar_label: Accessing Linux VM
sidebar_position: 3
---

### Overview

This section provides detailed instructions on how to access a Linux Virtual Machine (VM) from both Windows and Linux environments using built-in and third-party tools.

### Accessing Linux VM from a Windows Environment

#### 1. Retrieve the Public IP Address :

-   Navigate to the **Instance Summary** page in the Cloud Management Portal.
    
-   Copy the **Public IP Address** assigned to your Windows VM.

<img src="/user-guide/instance/launching-linux-vm/accessing-linux-vm/Image-01.JPG"
width="70%" />

#### 2. Install PuTTY (if not already installed)

If PuTTY is not available on your Windows system:

-   Visit the official download page:  
    [https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
    
-   Download and install the latest version of PuTTY.
    
-   Once installed, locate the **PuTTY** icon on your desktop or in the Start menu.

#### 3. Launch PuTTY

-   Double-click the **PuTTY** icon to open the application.


#### 4. Configure the Connection

-   In the **Host Name (or IP address)** field, paste the **Linux VM Public IP** copied earlier.
    
-   Confirm the **Port** is set to `22` (default SSH port).
    
-   Ensure **Connection Type** is set to **SSH**.

<img src="/user-guide/instance/launching-linux-vm/accessing-linux-vm/Image-02.JPG"
width="50%" />

#### 5. Connect to the VM

- Click the **Open** button.
    
- A new terminal window will appear prompting for login credentials.

#### 6. Enter Login Credentials

- You will be prompted for a **username** and **password**:

<img src="/user-guide/instance/launching-linux-vm/accessing-linux-vm/Image-03.JPG"
width="70%" />
  
 - The **default username** can be found on the **VM Summary** page in the portal.
        
- The **VM password** is available under the **Details** section of the same page.

<img src="/user-guide/instance/launching-linux-vm/accessing-linux-vm/Image-04.JPG"
width="40%" />

#### 7. Successful Connection

Once valid credentials are entered, you will be logged into your **Linux VM** terminal session. You can now begin managing your virtual server through the command line.

<img src="/user-guide/instance/launching-linux-vm/accessing-linux-vm/Image-05.JPG"
width="80%" />

---

## Accessing Linux VM via SSH Key using PuTTY

The **Cloud Management Portal** offers secure access to your **Linux Virtual Machines (VMs)** using **SSH key authentication** — a safer alternative to traditional password-based login. This guide outlines how to generate, configure, and use an SSH key with **PuTTY** to access your VM.


#### 1. Assigning an SSH Key to a VM

-   When creating a new VM, you can assign an **SSH Key** under the **Add SSH Key Pair** section.

<img src="/user-guide/instance/launching-linux-vm/accessing-linux-vm/Image-06.JPG"
width="80%" />
    
-   For existing VMs, navigate to the **Instance Summary > Access & Security** tab and attach a new SSH key.

<img src="/user-guide/instance/launching-linux-vm/accessing-linux-vm/Image-07.JPG"
width="80%" />
    
>  **Tip**: Make sure to **download the SSH Key** and store it securely. The file will be in `.PEM` format.

#### 2. Convert PEM to PPK Using PuTTYgen

- Download PuTTYgen from [https://www.puttygen.com/download-putty](https://www.puttygen.com/download-putty)

- Launch **PuTTYgen**.

- Click **Load** and select your `.PEM` key file.

<img src="/user-guide/instance/launching-linux-vm/accessing-linux-vm/Image-08.JPG"
width="50%" />

- A confirmation will appear:  
_"Successfully imported foreign key (OpenSSH format)..."_. Click **OK**.

<img src="/user-guide/instance/launching-linux-vm/accessing-linux-vm/Image-09.JPG"
width="50%" />

- Click **Save private key** to export as a `.PPK` file.

<img src="/user-guide/instance/launching-linux-vm/accessing-linux-vm/Image-10.JPG"
width="50%" />

- You’ll be asked whether to save without a passphrase. Choose **Yes** to continue.

<img src="/user-guide/instance/launching-linux-vm/accessing-linux-vm/Image-11.JPG"
width="50%" />

- Choose a filename and save the file to your local machine.

You now have a `.PPK` file ready to use with PuTTY.

#### 3. Configure PuTTY to Use the SSH Key

- Open **PuTTY** from your desktop

- In the **Host Name** field, enter your **VM’s Public IP**.

- Set **Port** to `22` and ensure **Connection Type** is **SSH**.

- To set the PPK file, In the **left-hand menu**, go to:  
`Connection > SSH > Auth`

- Click **Browse** under **Private key file for authentication**.

- Select your newly created `.PPK` file.

<img src="/user-guide/instance/launching-linux-vm/accessing-linux-vm/Image-12.JPG"
width="50%" />

#### 4. Connect to Your VM 

- Return to the **Session** tab.

- Review all settings (IP, Port, SSH Key).

- Click **Open** button.

<img src="/user-guide/instance/launching-linux-vm/accessing-linux-vm/Image-13.JPG"
width="50%" />

- If your SSH key is valid, you’ll be logged in directly without being prompted for a password.

<img src="/user-guide/instance/launching-linux-vm/accessing-linux-vm/Image-14.JPG"
width="80%" />
