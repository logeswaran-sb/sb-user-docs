---
title: Summary
sidebar_label: Summary
sidebar_position: 1
---

The **VM Autoscale Summary** section provides a comprehensive view of the configuration and operational status of your Autoscale setup within the Cloud Management Portal. It consolidates essential details like network settings, autoscaling thresholds, VM instance profiles, and load balancer configurations, helping you quickly monitor and manage the autoscaling environment.

---

### Summary Panel

#### Autoscale Group Information :

-   **Name**: Displays the name of your Autoscale group (e.g., `My-autoscale-01`).
    
-   **Status**: Indicates if the autoscaling feature is **Enabled** or **Disabled**.
    
-   **Actions**:
    
    -   **Disable**: Temporarily suspend the autoscaling operations.
        
    -   **Delete**: Permanently remove the autoscale configuration.

---

### Details Section

|S. No|Field|Description
|----|----|---|
|1|Network Name|Name of the associated network (e.g., `My-autoscale-01`).
|2|Public IP|The public IP address assigned to the load balancer (e.g., `154.210.166.61`).
|3|Zone|The data center or region where the autoscale setup resides (e.g., `Mumbai`).
|4|UUID|Unique identifier for the autoscale entity.
|5|Public Port|The port exposed to external traffic (e.g., `80`).
|6|Private Port|The internal port on which VMs listen (e.g., `80`).
|7|VM Count|Current number of VMs running under this autoscale group.
|8|Minimum Instances|Minimum number of VMs that should always run (e.g., `1`).
|9|Maximum Instances|Maximum VMs allowed for scaling (e.g., `2`).
|10|Polling Interval|Interval (in seconds) to monitor VM performance and trigger scaling actions (e.g., `60 seconds`).
|11|Created Date|Timestamp when the autoscale configuration was created.
|12|Last Updated|Timestamp of the most recent configuration change.

- **Edit Autoscale Details**: Update network, port, polling interval, and scaling thresholds.

---

### Autoscale Profile

The Autoscale Profile describes the template and configuration used for creating and managing virtual machine instances during scaling events.

|S. No|Field|Description
|----|----|---|
|1|Template Name|The base image used for new instances (e.g., `Ubuntu 20.04 LTS`).
|2|OS Type|Operating system type (e.g., `Ubuntu 20.04 LTS`).
|3|Compute Offer|The instance size and resource package (e.g., `GC_2C4R`).
|4|SSH Key Pair|Link to view the associated SSH key for secure instance access.
|5|Root Disk Size|Storage size allocated for the VM's root disk (e.g., `10 GB`).
|6|Expunge VM Grace Period (in sec)|Time period after which a VM is permanently removed after being expunged (e.g., `60 seconds`).
