---
title: Create an Affinity Group
sidebar_label: Create an Affinity Group
sidebar_position: 2
---

The **Affinity Group** feature allows users to define placement rules for virtual machines (VMs) within their cloud infrastructure. Affinity groups help ensure that VMs are either placed together (affinity) or kept on separate hosts (anti-affinity), based on your specific workload, performance, and redundancy requirements.

This section provides a detailed, step-by-step guide on how to create a new affinity group in the Cloud Management Portal.

---

### Understanding Affinity Groups

Affinity groups enable you to control VM placement at a host level:

-   **Affinity**: Ensures that all VMs in the group are launched on the same host.
    
-   **Anti-Affinity**: Ensures that VMs in the group are distributed across different hosts to improve availability.
    

Proper use of affinity policies is important for achieving high availability, performance optimization, and fault tolerance.

#### 1. Accessing the Affinity Group Section :

-   **Log in** to your Cloud Management Portal using your authorized credentials.
    
-   From the left navigation pane, go to:  
  
    **Compute** → **Affinity Group**

<img src="/user-guide/affinity-groups/creating-an-affinity-group/Image-01.JPG" width="30%" />

-   Here, you’ll find a list of all affinity groups available under your account.

#### 2. Initiate the Creation of a New Affinity Group :

- Click the **Add** button located at the top-right or action area of the Affinity Group page.

<img src="/user-guide/affinity-groups/creating-an-affinity-group/Image-02.JPG" width="90%" />

#### 3. Configure the Affinity Group Details :

- A pop-up form will appear where you need to fill out the following fields:

  - **Name :** Provide a unique and descriptive name for your new affinity group.

  - **Description :** (Optional) Add a brief description to explain the purpose or use case of the group.

  - **Type :**Select the type of affinity policy from the dropdown list:  
     - **Affinity** (keep VMs together)  
     - **Anti-Affinity** (keep VMs separate)

<img src="/user-guide/affinity-groups/creating-an-affinity-group/Image-03.JPG" width="30%" />

#### 4. Finalize and Create:

-   Review all provided details carefully.
    
-   Click the **OK** button to create the affinity group.

If all information is valid, the system will confirm the creation and return you to the Affinity Group list view.


#### 5. After Creation :

-   Your new affinity group will be visible under the **Affinity Group** list.
    
-   You can now assign this affinity group when launching new virtual machines or updating existing VMs' configurations to apply the placement policy.
