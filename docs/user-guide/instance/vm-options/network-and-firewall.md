---
title: Network & Firewall
sidebar_label: Network & Firewall
sidebar_position: 4
---

The **Network & Firewall** section in the Cloud Management Portal allows you to configure and manage the networking aspects of your virtual machine (VM). This includes assigning networks, managing public and private IPs, configuring firewalls, port forwarding, and integrating load balancers.

### Network Configuration

The **Network** tab provides a detailed view of the network interfaces (NICs) attached to the VM. Each NIC is associated with a specific virtual network and includes key configuration details such as IP addresses, gateway, and network type.

#### 1. Network Interface Configuration :

- **Network Name**: Example: `default-network1` 

- **Type**: _Isolated_ – A secure, private virtual network isolated from other tenants.

- **Network ID**: Example:`d8eca6a2-c20b-480a-b69a-bbbbda121548` – Unique identifier of the virtual network.

- **Public IP**: Example: `154.61.173.182` – Public-facing IP address assigned to the VM.

- **Private IP (IP Address)**: Example: `10.1.1.23` – Internal address used within the virtual network.

- **Secondary IPs**: Option available to add more IPs for advanced configurations.

- **Gateway**: Example: `10.1.1.1` – Default route for outbound traffic within the network.

- **Netmask**: Example: `255.255.255.0` – Subnet mask defining IP range for the network.

- **Default**: `true` – Indicates this is the primary network interface for the VM.

<img src="/user-guide/instance/vm-options/network-and-firewall/Image-01.JPG" width="70%" />

#### 2. Edit Secondary IP Address :

- Modify or assign additional IP addresses to the current network interface.

#### 3. Add Network to VM :

- Attach additional virtual networks to the VM. This is useful for multi-homed configurations or segmenting traffic across different networks.


#### 4. Navigation Tabs :

In addition to the main network configuration, this section includes additional tabs for more granular control:

   - **Firewall :** Define security rules that control incoming and outgoing traffic to and from the VM.

<img src="/user-guide/instance/vm-options/network-and-firewall/Image-02.JPG" width="90%" />

   - **Port Forwarding :** Map external ports to internal VM ports for services such as SSH, HTTP, or RDP access.

<img src="/user-guide/instance/vm-options/network-and-firewall/Image-03.JPG" width="90%" />

   - **Load Balancer :** Configure and manage load balancing across multiple VMs to ensure high availability and performance of applications.

<img src="/user-guide/instance/vm-options/network-and-firewall/Image-04.JPG" width="90%" />
