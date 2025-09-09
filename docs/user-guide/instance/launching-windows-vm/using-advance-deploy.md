---
title: Deploying a Windows Instance using Advance Deploy
sidebar_label: Using Advance Deploy
sidebar_position: 2
---

### Overview

This guide provides a step-by-step process for deploying a Windows virtual machine (VM) using the Cloud Management Portal. Users can configure the instance based on their business requirements, including network settings, firewall rules, SSH authentication, and cost estimation.

#### 1. Portal Login

- Navigate to the **Cloud Management Portal**.
    
- Enter your credentials and log in to your account. 

#### 2. Access the Compute Section

- From the main dashboard, navigate to **Compute**.
    
- Click on **Instances** to view the existing instances.

<img src="/user-guide/instance/launching-windows-vm/using-advance-deploy/Image-01.JPG" width="30%" />
    
- Click the **Add Instance** button to initiate a new VM deployment.

<img src="/user-guide/instance/launching-windows-vm/using-advance-deploy/Image-02.JPG" width="90%" />

#### 3. Choose Deployment Type

- Select **Advanced Deploy** as the deployment type.

<img src="/user-guide/instance/launching-windows-vm/using-advance-deploy/Image-03.jpeg" width="50%" />
    
- It will redirects to the VM creation page.

#### 4. Select Instance Location :

- Choose the desired **Instance location** where the VM will be deployed.

<img src="/user-guide/instance/launching-windows-vm/using-advance-deploy/Image-04.JPG" width="80%" />
    
#### 5. Choose the Platform and Operating System

- Select **Windows** as the preferred platform.

<img src="/user-guide/instance/launching-windows-vm/using-advance-deploy/Image-05.JPG" width="80%" />
    
- Choose the appropriate **OS version** based on your business requirements.

<img src="/user-guide/instance/launching-windows-vm/using-advance-deploy/Image-06.JPG" width="80%" />

#### 6. Select an Instance Plan

- Pick an instance configuration that meets your resource requirements. 
    
- Available options include various CPU, RAM, and storage configurations.

<img src="/user-guide/instance/launching-windows-vm/using-advance-deploy/Image-07.JPG" width="80%" />

#### 7. Configure Network Settings

- In the advanced deployment network selection, if you enable the **"Create Instance with Public IP"** option, a new network will need to be added for your VM. 

<img src="/user-guide/instance/launching-windows-vm/using-advance-deploy/Image-08.JPG" width="90%" />

- If you disable this option, the portal will display a list of available networks from which you can choose for your new VM.

<img src="/user-guide/instance/launching-windows-vm/using-advance-deploy/Image-09.JPG" width="90%" />

#### 8. Configure Firewall Settings

- If the **"Create Instance with Public IP"** option is enabled, the **Cloud Firewall** section becomes available.
    
- Select a **built-in firewall template** to pre-configure port rules for the VM.

<img src="/user-guide/instance/launching-windows-vm/using-advance-deploy/Image-10.JPG" width="90%" />

- Additionally, if the firewall is disabled, all ports will be open for your VM by default.

<img src="/user-guide/instance/launching-windows-vm/using-advance-deploy/Image-11.JPG" width="90%" />

#### 9. Adding Block Storage

- You have the option to add additional block storage to your VM during creation. This feature is optional.

<img src="/user-guide/instance/launching-windows-vm/using-advance-deploy/Image-12.JPG" width="80%" />

#### 10. Define Instance Name and Quantity

- Enter a name for the VM.
    
- Specify the number of instances to deploy (default is **1**).

<img src="/user-guide/instance/launching-windows-vm/using-advance-deploy/Image-13.JPG" width="80%" />

#### 11. Review Cost Estimation

- Click **Total Estimate** to view an approximate cost estimation for deploying the VM.

<img src="/user-guide/instance/launching-windows-vm/using-advance-deploy/Image-14.JPG" width="80%" />
<img src="/user-guide/instance/launching-windows-vm/using-advance-deploy/Image-15.JPG" width="80%" />

#### 12. Deploy the Instance

- Click the **Deploy** button to create the instance.
    
- The provisioning process may take **5-10 minutes** to complete.

#### 13. Monitor Instance Status

- Navigate back to the **Instances** list.
    
- Click the **Console** button to access and monitor the status of your VM.

<img src="/user-guide/instance/launching-windows-vm/using-advance-deploy/Image-16.JPG" width="80%" />