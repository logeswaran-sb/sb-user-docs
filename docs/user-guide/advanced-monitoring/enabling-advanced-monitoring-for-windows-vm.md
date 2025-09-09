---
title: Enabling Advanced Monitoring for Windows VM
sidebar_label: Enabling Advanced Monitoring for Windows VM
sidebar_position: 3
---

This section provides step-by-step instructions to enable advanced monitoring for a Windows VM.

**Steps to Enable Advanced Monitoring:**

- Log in to the cloud management portal.

- Select the VM you want to enable advanced monitoring for and click on it.

- Navigate to the **Monitoring** section. On the top right corner, you will find the **"Configure Advanced Monitoring"** button. Click on it.

<img src="/user-guide/advance-monitoring/enabling-advance-monitoring-for-windows-vm/Image-01.JPG" width="90%" />

- Clicking the **"Configure Advanced Monitoring"** button will open a new tab in your browser.  

<img src="/user-guide/advance-monitoring/enabling-advance-monitoring-for-windows-vm/Image-02.JPG" width="90%" />

- The activation process consists of three steps:

  -   **Installing the Agent**
  -   **Checking Port Status**
  -   **Finalizing Activation**

- Start by installing the monitoring agent inside the VM. Click the **"Generate"** button on the agent configuration screen.  

<img src="/user-guide/advance-monitoring/enabling-advance-monitoring-for-windows-vm/Image-03.JPG" width="90%" />

- Once the agent installation link is generated, click the **"Copy"** button to copy the link.  

<img src="/user-guide/advance-monitoring/enabling-advance-monitoring-for-windows-vm/Image-04.JPG" width="90%" />

- Log in to the Windows VM, open **PowerShell** as an administrator.  

<img src="/user-guide/advance-monitoring/enabling-advance-monitoring-for-windows-vm/Image-05.JPG" width="90%" />

- Paste the copied agent installation link into the PowerShell window and press **Enter**.  

<img src="/user-guide/advance-monitoring/enabling-advance-monitoring-for-windows-vm/Image-06.JPG" width="90%" />

- The agent installation will begin, and it may take a few minutes to complete.  

<img src="/user-guide/advance-monitoring/enabling-advance-monitoring-for-windows-vm/Image-07.JPG" width="90%" />

- After a few minutes, the monitoring agent will be successfully installed on the VM.  

<img src="/user-guide/advance-monitoring/enabling-advance-monitoring-for-windows-vm/Image-08.JPG" width="90%" />

- Ensure that **port 9100** is added to the Windows VM firewall for monitoring.  

<img src="/user-guide/advance-monitoring/enabling-advance-monitoring-for-windows-vm/Image-09.JPG" width="90%" />

- Ensure that **port 9100** is allowed in the **firewall settings** of your cloud portal and configure **port forwarding** to route traffic to the corresponding VM.

<img src="/user-guide/advance-monitoring/enabling-advance-monitoring-for-windows-vm/Image-10.JPG" width="90%" />

- Once all configurations are set up on the Windows VM, switch back to the **Advanced Monitoring Portal** and click the **"Check"** button to validate the agent installation.  

<img src="/user-guide/advance-monitoring/enabling-advance-monitoring-for-windows-vm/Image-11.JPG" width="90%" />

- Upon successful validation, a confirmation message will be displayed. The page will then automatically redirect to the **VM Advanced Monitoring Dashboard**.  

<img src="/user-guide/advance-monitoring/enabling-advance-monitoring-for-windows-vm/Image-12.JPG" width="90%" />
<img src="/user-guide/advance-monitoring/enabling-advance-monitoring-for-windows-vm/Image-13.JPG" width="90%" />
