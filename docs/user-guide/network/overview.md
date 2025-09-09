---
title: Overview
sidebar_label: Overview
sidebar_position: 1
---

The **Basic Network** section in the Cloud Management Portal offers users a centralized interface to manage and configure different network types for their virtual machines (VMs) and services. Users can view the list of existing networks, their configurations, and easily create new networks (Isolated or Layer-2).

This module is designed to simplify network management by providing intuitive actions and visual summaries.

### Navigating to Basic Network

To access Basic Network:

- Log in to your **Cloud Management Portal**.
    
- From the **left-hand navigation menu**, select **Network** ➔ **Basic Network**.

<img src="/user-guide/network/overview/Image-01.JPG" width="30%" />

---

### Basic Network Dashboard

At the top of the dashboard, you will find quick statistics:

-   **Total Networks**: Number of all networks.
    
-   **Isolated Networks**: Private networks isolated from others.
    
-   **Shared Networks**: Networks that multiple accounts or VMs can access.
    
-   **L2 Networks**: Layer-2 networks without DHCP or routing services.

---

### Network Listing

Below displays key information about each network:

- Name & Client - Name of the network and associated client account.

- **CIDR** - The CIDR block defining the IP range.

- **Gateway** - Default gateway IP address for the network.

- **Type** - Type of network (Isolated / Shared).

- **Status** - Current status (e.g., Implemented, Allocated, Setup).

<img src="/user-guide/network/overview/Image-02.JPG" width="90%" />

---

### Action Buttons

Each network row includes action buttons for easy management:

-   **Edit Network**: Modify network properties.
    
-   **Delete Network**: Remove the network (after ensuring no dependencies).
    
-   **View Details**: See full network configuration.
    
-   **Change State**: Restart the network.
