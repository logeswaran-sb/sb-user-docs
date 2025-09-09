---
title: Configuring Alerts
sidebar_label: Alerts Configuration
sidebar_position: 5
---

### Overview

Setting up alert notifications for your virtual machines (VMs) involves a simple two-step process:

1.  **Create an Alert Notification Group.**
    
2.  **Assign the Notification Group to a Monitoring Service.**

### Creating an Alert Notification Group

- Navigate to the **Monitoring** window and click on the **'Notification Group'** icon in the left-hand menu.

<img src="/user-guide/advance-monitoring/alerts-configuration/Image-01.JPG" width="90%" />

- Click the **'Create Notification Group'** button.
    
<img src="/user-guide/advance-monitoring/alerts-configuration/Image-02.JPG" width="90%" />

- Enter a **Name** and **Description** for the notification group.

- Enable or disable **email alerts** using the toggle button in the **E-mail Enabled** section.

- Provide a list of **email addresses** that will receive notifications whenever an issue occurs based on the configured alert rules.

- To receive alerts via **Slack**, enter your **Slack channel address** in the designated section to get VM service notifications directly in that channel.

- Click **'Create'** to finalize the setup.
    
<img src="/user-guide/advance-monitoring/alerts-configuration/Image-03.JPG" width="70%" />

-   The notification group is now successfully created.
    
<img src="/user-guide/advance-monitoring/alerts-configuration/Image-04.JPG" width="90%" />

---

### Configuring Alerts

- Once the notification group is created, select the appropriate **VM** from the **Server List**.
    
- In the **VM Monitoring Dashboard**, navigate to the **'Alerts Configuration'** tab.

<img src="/user-guide/advance-monitoring/alerts-configuration/Image-05.JPG" width="90%" />

-   There are **four types of alerts** available:
    
    -   **Memory Utilization**
        
    -   **Disk Usage**
        
    -   **CPU Load**
        
    -   **Host Down Status**

-   Select the **VM** for which you want to configure alerts, then choose the appropriate **Notification Group** from the drop-down list under the **'Notification Group'** section.
    
<img src="/user-guide/advance-monitoring/alerts-configuration/Image-06.JPG" width="90%" />

-   Click the **'Update'** button to save the changes.
    
<img src="/user-guide/advance-monitoring/alerts-configuration/Image-07.JPG" width="90%" />

-   Alert settings have been successfully configured.
    
<img src="/user-guide/advance-monitoring/alerts-configuration/Image-08.JPG" width="90%" />

-   Whenever an alert is triggered, you will receive an **email notification**, and the alert status will be visible under the **'Notifications'** tab.
    
<img src="/user-guide/advance-monitoring/alerts-configuration/Image-09.JPG" width="90%" />
