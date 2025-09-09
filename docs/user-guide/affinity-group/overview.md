---
title: Overview
sidebar_label: Overview
sidebar_position: 1
---

Affinity Groups in the Cloud Management Portal enable users to manage the physical distribution of their instances across hypervisor hosts. These groups ensure that instances are either co-located on the same host (Affinity) or distributed across different hosts (Anti-Affinity) according to application workload requirements.

With **Adaptive Affinity Groups**, users now have additional flexibility: instances can be deployed even when strict affinity rules cannot be fully met, ensuring better resource utilization and improved deployment success rates.

---

### Affinity Group Types

#### 1. Host Affinity Group (Strict) :
Ensures that selected instances are deployed together on the same hypervisor host.  

 **Benefit:**

-   Reduced network latency and improved bandwidth.  
  
  **Limitation:**
  
  -   Deployment fails if the target host lacks sufficient capacity.

#### 2. Host Anti-Affinity Group (Strict) :

Ensures that selected instances are deployed across different hypervisor hosts.  

**Benefit:**

-   Increased application availability during host failures.  
  
**Limitation:**
    
-   Deployment fails if sufficient distinct hosts are unavailable.

---

### Adaptive Affinity Group Types

#### 1. Non-Strict Host Affinity Group :

-   Attempts to deploy instances together on the same host when possible.
    
-   If the host lacks capacity, deployment still proceeds to an available host without failing.


#### 2. Non-Strict Host Anti-Affinity Group :

-   Tries to spread instances across different hosts.
    
-   If the capacity is limited, instances can be placed on the same host to ensure successful deployment.

---

### Deployment Behavior: Strict vs Non-Strict Groups

|Behavior|Strict Affinity/Anti-Affinity|Non-Strict Affinity/Anti-Affinity
|----|---|---
Failure on Capacity Issues|Yes|No
Flexibility to Deploy|No|Yes
Allocation Based on Priority|No|Yes

**Note:**  

- When non-strict groups are used, the Cloud Management Portal applies a **priority-based algorithm** to determine the most suitable host based on the current resource availability and affinity rules.

---

### Host Selection Logic for Non-Strict Affinity Groups

-   Each host starts with a base priority of `0`.
    
-   For **Non-Strict Anti-Affinity Groups**, if a host already runs related instances, its priority decreases.
    
-   For **Non-Strict Affinity Groups**, if a host already runs related instances, its priority increases.
    
-   Hosts are ordered by priority, and the best available host is selected.

---

### Best Practices

-   Use **Strict Affinity Groups** when your application demands rigid placement for latency or fault-tolerance reasons.
    
-   Use **Adaptive (Non-Strict) Affinity Groups** when flexibility is acceptable and high deployment success rates are desired.
    
-   Regularly monitor host capacity to optimize affinity rule effectiveness.
