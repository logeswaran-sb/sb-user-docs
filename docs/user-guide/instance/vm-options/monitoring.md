---
title: Monitoring
sidebar_label: Monitoring
sidebar_position: 5
---

The **Monitoring** tab in the Cloud Management Portal provides real-time insights into the performance of virtual machines (VMs). This feature helps users track CPU usage, memory consumption, disk activity, and network performance, ensuring optimal resource utilization and timely issue resolution.

### Accessing the Monitoring Dashboard

- Login into your cloud management portal.

- Navigate to **Instance** from the left-side menu.

<img src="/user-guide/instance/vm-options/monitoring/Image-01.JPG" width="30%" />

- Select the desired **VM instance**.

- Click on the **Monitoring** tab to access real-time performance metrics.

<img src="/user-guide/instance/vm-options/monitoring/Image-02.JPG" width="90%" />

- The dashboard provides graphical insights into various aspects of VM performance, allowing users to make informed decisions about system optimization.

### Monitoring Features Overview

#### 1. Time-Based Monitoring Selection :

- Users can select different time intervals for monitoring:
   - 1 Hour - Displays resource utilization within the last 1 hour.

   - 6 Hours - Provides an overview of performance trends for the last 6 hours.
 
   - 12 Hours - Analyzes performance over half a day.
  
   - 24 Hours - Offers a full-day performance overview.

<img src="/user-guide/instance/vm-options/monitoring/Image-03.JPG" width="90%" />

- This allows users to analyze short-term or long-term performance trends.

#### 2. CPU Usage Monitoring :

<img src="/user-guide/instance/vm-options/monitoring/Image-04.JPG" width="90%" />

- The CPU usage graph displays the percentage of CPU consumption over time.

- Spikes and dips in CPU utilization indicate workload variations.

- Consistently high CPU usage may suggest that the VM requires additional resources.

- Monitoring CPU trends helps diagnose performance bottlenecks, optimize workload distribution, and scale resources accordingly.

#### 3. Memory Usage Monitoring :

<img src="/user-guide/instance/vm-options/monitoring/Image-05.JPG" width="90%" />

- Memory usage is visualized in two key indicators:
  
  - **Memory Used (Red Section)** – Represents the amount of memory actively consumed by processes.

  - **Memory Allocated (Blue Section)** – Indicates the total memory assigned to the VM.

- A consistently high **Memory Used** value compared to allocated memory suggests a potential memory bottleneck, requiring either workload optimization or resource scaling.

- Monitoring memory trends helps in ensuring stable application performance and preventing out-of-memory errors.

#### 4. Disk Performance Monitoring :

The monitoring dashboard provides insights into disk activity using two key metrics:

**IOPS (Input/Output Operations Per Second) :**

<img src="/user-guide/instance/vm-options/monitoring/Image-06.JPG" width="90%" />

-   The IOPS graph tracks disk read/write operations per second.
    
-   Spikes in IOPS may indicate increased workload activity.
    
-   Low IOPS performance over time might suggest disk bottlenecks, requiring disk optimization or upgrades.

**Read & Write Operations**

<img src="/user-guide/instance/vm-options/monitoring/Image-07.JPG" width="90%" />

-   This section tracks data read and written to the disk.
    
-   **Read Operations (Blue Section)** – Represents the amount of data read from the disk.
    
-   **Write Operations (Green Section)** – Indicates the amount of data written to the disk.
    
-   A high number of read/write operations suggests increased disk activity, which may impact performance if the storage system is not optimized.

#### 5. Network Performance Monitoring :

<img src="/user-guide/instance/vm-options/monitoring/Image-08.JPG" width="90%" />

-   Network monitoring provides insights into data transfer rates, helping users track bandwidth consumption.
    
-   **Download (Blue Section)** – Measures incoming network traffic.
    
-   **Upload (Green Section)** – Measures outgoing network traffic.
    
-   Fluctuations in network activity may indicate system updates, application traffic, or potential security threats.
    
-   Users can analyze network trends to optimize bandwidth allocation and troubleshoot connectivity issues.
