---
title: Enabling Advanced Monitoring for Linux VM
sidebar_label: Enabling Advanced Monitoring for Linux VM
sidebar_position: 4
---

This section provides step-by-step instructions to enable advanced monitoring for a Linux VM.

**Steps to Enable Advanced Monitoring:**

- Log in to the **cloud management portal**.

- Select the VM where you want to enable **advanced monitoring**, then click on it.

- Navigate to the **Monitoring** section. You will see the **"Configure Advanced Monitoring"** button in the top-right corner of the portal. Click on it.

<img src="/user-guide/advance-monitoring/enabling-advanced-monitoring-for-linux-vm/Image-01.JPG" width="90%" />

- Clicking the **"Configure Advanced Monitoring"** button will open a new tab in your browser.  

<img src="/user-guide/advance-monitoring/enabling-advanced-monitoring-for-linux-vm/Image-02.JPG" width="90%" />

- The activation process consists of three steps:

-   **Installing the Agent**
-   **Checking Port Status**
-   **Finalizing Activation**

- Begin by installing the monitoring agent inside the VM. Click the **"Generate"** button on the **Configure Agent** screen.  

<img src="/user-guide/advance-monitoring/enabling-advanced-monitoring-for-linux-vm/Image-03.JPG" width="90%" />

- Once the agent installation link is generated, click the **"Copy"** button to copy the link.  

<img src="/user-guide/advance-monitoring/enabling-advanced-monitoring-for-linux-vm/Image-04.JPG" width="90%" />

- Log in to the **Linux VM**, paste the copied link into the terminal, and ensure the command is executed with **sudo** privileges.  

<img src="/user-guide/advance-monitoring/enabling-advanced-monitoring-for-linux-vm/Image-05.JPG" width="90%" />

- The agent installation process will begin and may take a few minutes to complete.  

<img src="/user-guide/advance-monitoring/enabling-advanced-monitoring-for-linux-vm/Image-06.JPG" width="90%" />

- Once installed, the monitoring agent will be successfully activated on your VM.  

<img src="/user-guide/advance-monitoring/enabling-advanced-monitoring-for-linux-vm/Image-07.JPG" width="90%" />

- Ensure that **port 9100** is allowed in the **firewall settings** of your cloud portal and configure **port forwarding** to route traffic to the corresponding VM.

<img src="/user-guide/advance-monitoring/enabling-advanced-monitoring-for-linux-vm/Image-08.JPG" width="90%" />

- After configuring the Linux VM, switch back to the **Advanced Monitoring Portal** and click the **"Check"** button to validate the agent installation.  

<img src="/user-guide/advance-monitoring/enabling-advanced-monitoring-for-linux-vm/Image-09.JPG" width="90%" />

- Upon successful validation, a confirmation message will be displayed, and the page will automatically redirect to the **VM Advanced Monitoring Dashboard**.  

<img src="/user-guide/advance-monitoring/enabling-advanced-monitoring-for-linux-vm/Image-10.JPG" width="90%" />
<img src="/user-guide/advance-monitoring/enabling-advanced-monitoring-for-linux-vm/Image-11.JPG" width="90%" />
