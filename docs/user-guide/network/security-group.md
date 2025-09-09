---
title: Security Group
sidebar_label: Security Group
sidebar_position: 5
---

Security Groups act as virtual firewalls for your cloud infrastructure, allowing you to define and manage firewall policies for virtual machines (VMs). These policies are essential for controlling both **inbound (ingress)** and **outbound (egress)** network traffic to ensure secure, compliant, and isolated environments.

---

### Functional Features

#### 1. Security Group List View

-   Displays all the available Security Groups with the following columns:
    
    -   **Name**
        
    -   **Description**
        
    -   **Status** (Enabled/Disabled)
        
    -   **Actions** (Manage button to edit/view rules)
        
-   A **quick search** feature allows users to find specific firewall groups quickly.

#### 2. Add Security Group

To create a new Security Group:

-   Click the **“Add”** button.
    
-   Fill in:
    
    -   **Name** (Required)
        
    -   **Description** (Optional)
        
    -   **Status** (Enable/Disable)
        
-   Click **“Add”** to save the group.

---
### Security Group Management

After creating a group, you can manage its detailed firewall rules by clicking the **“Manage”** icon. The management view is organized into three tabs:

#### 1. Egress Rule Tab :

- Defines **outbound rules** from the virtual machine to other destinations.

|Protocol|Start Port / ICMP Type|End Port / ICMP Code|Actions
|---|---|---|---|
|All|All|All|Delete

- Default behavior allows all outbound traffic unless customized.

#### 2. Firewall Tab :

- Used to define **inbound rules** (i.e., what type of traffic is allowed **to** the VM).

|Source CIDR|Protocol|Start Port|End Port|Actions
|---|---|---|---|---|
|0.0.0.0/0|TCP|3389|3389|Delete
|0.0.0.0/0|TCP|80|80|Delete
|0.0.0.0/0|TCP|443|443|Delete

**Example:** The above rules allow access to RDP (3389), HTTP (80), and HTTPS (443) from all sources.

#### 3. Port Forwarding Tab :

- Used for mapping **private VM ports** to **publicly accessible ports**, if required.

|Private Start Port|Private End Port|Public Start Port|Public End Port|Protocol|Actions
|---|---|---|---|---|---|
|80|80|80|80|TCP|Delete

#### 4. Using Security Groups :

- All security groups listed under the **Security Groups** section will be available for selection during VM creation.

<img src="/user-guide/network/security-group/Image-01.JPG" width="90%" />

- You can use these groups as built-in rule sets when launching a VM. Additionally, you can define and apply custom rules alongside the selected security group during the VM setup process.
