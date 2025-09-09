---
title: Source NAT vs Static NAT
sidebar_label: Source NAT vs Static NAT
sidebar_position: 5
---

In cloud-based networking, **Network Address Translation (NAT)** is a critical function that enables virtual machines (VMs) within private, isolated networks to communicate with external systems. The **Cloud Management Portal** supports two types of NAT configurations: **Source NAT** and **Static NAT**. Each serves a distinct purpose and offers different connectivity behaviors based on your application and access requirements.

This guide will help you understand the differences between Source NAT and Static NAT, when to use them, and how they affect network traffic for your instances.

---

### What is Source NAT?

**Source NAT (SNAT)** allows multiple instances within a private, isolated network to **share a single public IP address** for outbound connectivity. It acts as a gateway for instances to **initiate connections** to external networks, such as the internet.

#### Key Characteristics:

-   **Outbound-Only Access**: Instances can **initiate traffic** to the outside world, but cannot receive incoming traffic directly.
    
-   **Shared Public IP**: All VMs in the network use **one public IP** (assigned to the network's virtual router) to access external services.
    
-   **Default Behavior**: When a new isolated network is created, the **Cloud Management Portal automatically assigns a Source NAT IP** to the network’s virtual router.
    
-   **Cost-Effective**: Ideal for use cases where many instances need internet access without the need for inbound access.

#### Use Case Example: 

- If you have several backend VMs that need to download updates or communicate with external APIs but **should not be exposed to the public internet**, Source NAT provides a secure and economical solution.

---

### What is Static NAT?

**Static NAT** provides a **one-to-one mapping** between a public IP address and a specific virtual machine. This configuration allows **direct inbound access** to the instance from the public internet or other external networks.

#### Key Characteristics :

-   **Inbound and Outbound Access**: The associated VM can both **send traffic to** and **receive traffic from** external sources.
    
-   **Dedicated Public IP**: A unique public IP is **permanently mapped** to one VM.
    
-   **Controlled Exposure**: Enables fine-grained access to specific services (e.g., a public web server or database API) by exposing select instances.
    
-   **Manual Configuration**: You must manually acquire a public IP and enable Static NAT through the Cloud Management Portal.

#### Use Case Example :

- If you're hosting a public-facing website or application that must be accessible over the internet (e.g., via HTTP/S), Static NAT is required to route external users directly to the corresponding instance.

---

### Summary of Differences

|S. No|Feature|Source NAT|Static NAT
|----|----|----|----|
|1|Public IP Usage|Shared among multiple instances|Dedicated to a single instance
|2|Traffic Direction|Outbound only|Both inbound and outbound
|3|Use Case|Internal instances needing internet access|Public-facing apps/services
|4|Configuration|Automatically assigned on network creation|Manually enabled for each instance
|5|Billing|Based on usage of shared public IP|Based on individual public IPs acquired

#### Choosing the Right NAT Type :

|S. No|Scenario|Recommended NAT Type
|----|----|----|
|1|You want to minimize public IP costs and only need outbound access for your VMs|Source NAT
|2|You need direct external access to a specific VM (e.g., web server, SSH)|Static NAT

---

### Important Notes :

-   Both NAT types are managed via the **Cloud Management Portal** under the **Network → Basic Network** section.
    
-   You can **acquire additional public IPs** as needed and assign them to instances for Static NAT configurations.
    
-   **Public IPs are billed per hour**, so managing their allocation carefully can help control operational costs.
