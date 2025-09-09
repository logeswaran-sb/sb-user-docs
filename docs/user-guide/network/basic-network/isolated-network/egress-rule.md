---
title: Egress Rule
sidebar_label: Egress Rule
sidebar_position: 3
---

Egress rules control **outbound network traffic** from virtual machines (VMs) in an **isolated guest network** to external destinations such as the internet. These rules are vital for maintaining a secure and controlled network environment by preventing unauthorized communication from your cloud instances to external networks.

This guide walks you through the process of **viewing and adding egress rules** in the Cloud Management Portal.

---

## What is an Egress Rule?

Egress traffic refers to **outbound packets**—data that originates from your private cloud network and exits to a public network or the internet. Implementing egress rules helps prevent:

-   **Data leakage** from your internal/private address space.
    
-   **Compromised VMs** from communicating with malicious external hosts.
    
-   **Unrestricted access** from internal systems to the internet or other external endpoints.
    

By using egress rules, you define **explicit boundaries** for how and where data from your guest VMs can travel.

#### 1. Accessing the Basic Network Section :

-   **Log in** to your Cloud Management Portal using your authorized credentials.
    
-   From the left navigation pane, go to:  
  
    **Network** → **Basic Network**

<img src="/user-guide/network/basic-network/isolated-network/egress-rule/Image-01.JPG" width="30%" />

-   You will see a list of all existing networks associated with your cloud account.

#### 2. Select the Target Network :

- Identify the **isolated network** where you want to apply the egress rule, and click on its **network name**.

- This will take you to the **Network Configuration** page.

<img src="/user-guide/network/basic-network/isolated-network/egress-rule/Image-02.JPG" width="90%" />

#### 3. Access the Egress Rules Tab :

- Within the network configuration view, click the **Egress Rules** tab. This section displays any existing outbound traffic control rules for the selected network.

#### 4. Click "Add Rule" :

- To create a new egress rule, click the **Add Rule** button.

<img src="/user-guide/network/basic-network/isolated-network/egress-rule/Image-03.JPG" width="90%" />

- A configuration pop-up window will appear.

#### 5. Egress Rule Configuration Fields :

Fill in the following fields to define your rule:

- **Source CIDR :** The IP address block that represents the source traffic. Use CIDR notation (e.g., `192.168.0.0/24`).

- **Destination CIDR :** The destination IP address block you wish to allow the traffic to reach (e.g., `0.0.0.0/0` for all internet addresses).

- **Protocol :** Choose the network protocol used for outbound traffic. Options include: **TCP** – Reliable, connection-based protocol for most data services. **UDP** – Lightweight, connectionless protocol for real-time data. **ICMP** – Used for ping and network error messages

- **Start Port / End Port** _(for TCP/UDP)_ : Define the port range for the traffic. If you need a single port, use the same value in both fields (e.g., 443 for HTTPS).

- **ICMP Type / ICMP Code** _(for ICMP only)_ : Specify the type and code to manage ICMP traffic, such as Echo Request (Type 8, Code 0).

<img src="/user-guide/network/basic-network/isolated-network/egress-rule/Image-04.JPG" width="50%" />

#### 6. Finalizing the Rule :

- After reviewing your configuration, Click the **Add** button to apply the rule.

- The newly created egress rule will now appear in the list of rules for the selected network.

- Any virtual machines attached to this network will now have the egress restrictions enforced based on the rule you've defined.

<img src="/user-guide/network/basic-network/isolated-network/egress-rule/Image-05.JPG" width="90%" />

---

### Notes and Best Practices

-   Use **specific CIDR blocks and port ranges** to limit unnecessary exposure.
    
-   Avoid using `0.0.0.0/0` as Destination CIDR unless absolutely necessary—it allows unrestricted outbound traffic.
    
-   Multiple rules can be created to serve different traffic types or destinations.
    
-   Egress rules only affect **outbound** traffic; for inbound control, refer to **Ingress Rules**.
