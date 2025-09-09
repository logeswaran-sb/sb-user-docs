---
title: Adding a Network Tier to a VPC
sidebar_label: Adding a Network Tier to a VPC
sidebar_position: 3
---

Network tiers are fundamental components within a Virtual Private Cloud (VPC) that enable you to segment your virtual network environment into logical subnets. Each tier can host a group of virtual machines (VMs) with its own isolated network settings, firewall rules, and routing controls.

This section walks you through the process of creating a **new network tier** within an existing VPC using the **Cloud Management Portal**.

#### 1. Accessing the VPC Section :

-   **Log in** to your Cloud Management Portal using your authorized credentials.
    
-   From the left navigation pane, go to:  
  
    **Network** → **VPC**

<img src="/user-guide/network/vpc/adding-network-tiers-to-vpc/Image-01.JPG" width="30%" />

-   You will see a list of all existing VPC networks associated with your cloud account.

#### 2. Select and Configure the Target VPC :

-   Identify the VPC to which you wish to add a new network tier.
    
-   Click on the **VPC name** to open its configuration view.

<img src="/user-guide/network/vpc/adding-network-tiers-to-vpc/Image-02.JPG" width="90%" />
    
-   On the VPC details page, click the **`Configure`** button to enter the VPC topology view.

<img src="/user-guide/network/vpc/adding-network-tiers-to-vpc/Image-03.JPG" width="90%" />

#### 3. Initiate Network Tier Creation :

-   In the VPC topology view, click on the **`Create Network`** button.

<img src="/user-guide/network/vpc/adding-network-tiers-to-vpc/Image-04.JPG" width="90%" />
    
-   A popup window will appear prompting you to enter the tier’s configuration details.

#### 4. Provide Network Tier Configuration :

- Fill in the following fields in the popup form:

  - **Name :** Enter a unique name for the network tier. Use meaningful names based on workload, environment, or function (e.g., `Web-Tier`, `Database-Tier`).

  - **Network Offering :** Select the desired network offering for this tier. The portal typically includes options such as:

     - `Internal LB` (for internal load balancing).

     - `DefaultIsolatedNetworkOfferingForVpcNetworksNoLB` (standard isolated network without load balancing)

     - `DefaultIsolatedNetworkOfferingForVpcNetworks` (includes basic network services with LB support)

  - **Gateway :** Specify the gateway IP address for this tier. Ensure the IP is within the **VPC CIDR block** and **does not overlap** with other existing network tiers.  
For example, if your VPC CIDR is `10.0.0.0/16`, your network tier can use `10.0.1.1` as a gateway.

  - **Netmask :** Define the subnet mask that defines the size of the network tier.  

    For example, `255.255.255.0` for a `/24` subnet allows up   to 254 usable IPs.

  - **ACL :** Choose a **Network Access Control List** (ACL) to control both **inbound (ingress)** and **outbound (egress)** traffic for the network tier.  
  
    ACLs enable fine-grained firewall policies between VPC tiers and the internet.  

    For demo or open access, select the predefined **`Default_Allow`** ACL.

#### 5. Confirm and Create :

-   Review all entered details carefully.
    
-   Click the **`Add`** button to initiate the creation of the network tier.

<img src="/user-guide/network/vpc/adding-network-tiers-to-vpc/Image-05.JPG" width="50%" />

#### 6. Verify Network Tier Status :

- After a few moments, the new network tier will be added and displayed visually within the VPC topology view.

<img src="/user-guide/network/vpc/adding-network-tiers-to-vpc/Image-06.JPG" width="90%" />
