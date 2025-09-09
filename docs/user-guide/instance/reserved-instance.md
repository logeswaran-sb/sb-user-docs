---
title: Reserved Instance
sidebar_label: Reserved Instance
sidebar_position: 9
---

### Overview

The **Reserved Instance (RI) Offering** provides a cost-effective way to reserve computing capacity over a defined term. Unlike pay-as-you-go models, reserved instances are ideal for predictable workloads where consistent usage is expected, allowing customers to save on long-term costs.

### Accessing Reserved Instance Offerings

#### 1. Portal Login

- Navigate to the **Cloud Management Portal**.
    
- Enter your credentials and log in to your account. 

#### 2. Access the Compute Section :

- From the main dashboard, navigate to **Compute**.

#### 3. Choose Deployment Type

- Select **Advance Deploy** as the deployment type.

<img src="/user-guide/instance/reserved-instance/Image-01.JPG" width="90%" />

#### 4. Offering Selection :

- Enable the **Reserved Instance** checkbox to filter and view available reserved instance plans.

- Choose the required **Reserved Instance Offering** based on your resource and scalability needs.

<img src="/user-guide/instance/reserved-instance/Image-02.JPG" width="80%" />

---

### Types of Reserved Instances

Reserved instances are categorized into two types:

-   **Standard Reserved Instance**
    
    -   Fixed resource configuration.
        
    -   **No resizing** is allowed after deployment.
        
-   **Scalable Reserved Instance**
    
    -   Supports **upgrading** the VM configuration (e.g., increasing RAM or vCPU).
        
    -   **Note:** Downgrading to a smaller configuration is **not** supported.

<img src="/user-guide/instance/reserved-instance/Image-03.JPG" width="80%" />

---

### Cancellation Policy

#### 1. Voluntary Cancellation :

-   You may cancel the reserved offering at any time.
    
-   The associated VM and plan will remain active **until the end of the current term**.
    
-   After expiry, both the VM and plan will be automatically removed.

#### 2. VM Deletion :

-   If the VM is deleted before the plan expires, the **reserved plan remains active** until its original end date.
    
-   You can **redeploy a new VM** under the same plan **without incurring additional plan charges**.

<img src="/user-guide/instance/reserved-instance/Image-04.JPG" width="80%" />

---

### Converting Reserved Instances

If you wish to transition to a more flexible billing model:

-   You can convert a **Reserved Instance** to a **Pay-as-you-Go instance**.
    
-   This can be done by selecting the **"Convert RI to Normal Offering"** option from the instance settings.
    
-   After conversion, the VM will follow standard pay-as-you-go billing and behavior.

<img src="/user-guide/instance/reserved-instance/Image-05.JPG" width="80%" />

---

### Creating a VM from an Existing Reserved Plan

You can reuse a reserved plan that is still valid, even if the original VM was deleted. To do so:

- Navigate to:  
    **Compute** → **Instance** → **Create Instance** → **Advanced Deploy**
    
- Enable the **Reserved Instance** checkbox.
    
- Under the **Purchased Offering** section, select the active plan you previously purchased.

<img src="/user-guide/instance/reserved-instance/Image-06.JPG" width="80%" />
    
> **Note:** While the plan cost is covered, **other components** such as public IP, bandwidth, and network usage **will incur additional charges**.

---

### Pricing & Billing

-   **Billing Start Date:** Charges begin from the **date of purchase**.
    
-   **Pro-Rated Billing:** If purchased mid-cycle, billing is **prorated** until the end of the current plan validity.
    
-   **Auto-Renewal:** At the end of the plan period, it will be automatically renewed for the next cycle. In such cases, the **full amount** for the next term will be charged starting from the **first day of the month**.
