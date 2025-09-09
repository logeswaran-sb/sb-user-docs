---
title: Overview
sidebar_label: Overview
sidebar_position: 1
---

The **VM Autoscale** feature in the Cloud Management Portal allows you to automatically manage the scaling of your Virtual Machine (VM) instances based on demand. It dynamically adjusts the number of active VM instances in a group, ensuring that the system meets performance expectations while optimizing resource usage and controlling costs.

Autoscaling helps maintain application availability and can scale resources both **out** (increase instances) and **in** (reduce instances) automatically according to the conditions you define.

---

### Key Features

-   **Automated Scaling**: Scale VM resources based on CPU usage, memory usage, or network traffic thresholds.
    
-   **Flexible Policies**: Set minimum and maximum VM limits to control resource allocation.
    
-   **Load Optimization**: Respond to changes in workload without manual intervention.
    
-   **Cost Management**: Scale resources intelligently to avoid over-provisioning and unnecessary costs.
    
-   **Real-Time Monitoring**: View and manage scaling activity directly from the portal.

---

### Accessing VM Autoscale

-   Log in to your **Cloud Management Portal**.
    
-   From the sidebar, navigate to **Compute** → **Native Autoscale**.
    
-   The VM Autoscale dashboard displays all existing autoscale configurations, if any.

---

### VM Autoscale Dashboard Overview

|S. No|Field|Description|
|---|---|---|
|1|Name|The name assigned to the Autoscale policy.
|2|Account|The account that owns the autoscaling policy.
|3|Network Name & IP Address|The network and associated IP addresses where scaling occurs.
|4|Public & Private Port|Ports used for communication and monitoring.
|5|Min & Max Members|Minimum and maximum number of VM instances allowed.
|6|Available VMs|Number of currently available VM instances.
|7|State|Indicates if autoscaling is **Enabled** or **Disabled**.
|8|Actions|Options to Edit or Delete the Autoscale configuration.



