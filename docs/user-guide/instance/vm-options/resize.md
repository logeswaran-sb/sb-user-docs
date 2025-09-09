---
title: Instance Resize
sidebar_label: Instance Resize
sidebar_position: 2
---

The **Resize** feature in the Cloud Management Portal allows users to scale their virtual machines (VMs) vertically by changing the compute offering based on current or future workload demands. Whether you're optimizing for performance or cost-efficiency, this module enables quick, seamless adjustments to VM configurations.

#### 1. Current VM Configuration

- At the top of the **Resize** tab, the portal displays your **current VM configuration**, including:

   - **Compute Offering**: ex: `GC_4C8R`
   - **CPU**: ex: 4 vCPUs
   - **Memory**: ex: 8192 MB (8 GB RAM)

- This helps you assess the baseline before choosing a new configuration.

<img src="/user-guide/instance/vm-options/resize/Image-01.JPG" width="90%" />

#### 2. Resize Options

The portal offers three major **Compute Categories** to tailor your resources:

-  **General Compute**
    
-  **Compute Intensive**
    
-  **Memory Intensive**

Use the **category tabs** to filter plans based on your specific needs or keep it on “All” to see the full range.

Each plan displays:

-   **Monthly and Hourly Cost**
    
-   **Memory Allocation (GB)**
    
-   **CPU Allocation (vCPU)**


Example Configurations :

| Offering | Memory | vCPU | Price (Monthly / Hourly)
|---|---|---|---
|M1_1C8R|8 GB|1|₹ 1,596.672 / ₹ 2.218
|M1_2C16R|16 GB|2|₹ 6,374.592 / ₹ 8.854
|M1_4C16R|16 GB|4|₹ 8,793.792 / ₹ 12.214



- Use the **Quick Search** to filter plans based on keywords or specifications quickly.

<img src="/user-guide/instance/vm-options/resize/Image-02.JPG" width="90%" />

- Once you’ve selected the desired offering, click the **Resize** button to apply changes. If needed, select **Cancel** to exit without making updates.

---

### Purchase Savings Plans

The **Savings Plans** section offers users a cost-effective solution for long-term resource usage by enabling flexible pricing based on usage commitments. Rather than paying standard on-demand prices, users can lock in **discounted rates** by committing to a consistent usage pattern (measured hourly) over a defined period.

This section helps users:

-   **Monitor cost savings**
    
-   **Track usage efficiency**
    
-   **Manage plan commitments**

#### 1. Saving plan overview :

- A **Savings Plan** is a flexible billing model that provides **lower hourly rates** compared to on-demand pricing.

- In exchange, the user commits to using a specific instance for a certain duration.

- This is ideal for workloads with predictable and continuous usage patterns, such as production systems or enterprise applications.

#### 2. Current Active Plans Table :

This table displays all active savings plans associated with your instance(s). Key columns include:

| Column Type | Description |
|---|---
|Saving type|Type of savings plan applied
|Instance Name|The name of the VM associated with the plan
|Active Plans|Number of active savings plans applied to the instance
|Utilization (%)|Percentage of actual usage compared to the committed plan; helps identify over/underutilization
|Savings|Total monetary savings achieved through the active plan(s)
|Actions|Options to manage, update, or cancel the savings plan (if applicable)

#### 3. Purchasing a Savings Plan

- Click the **Purchase Savings Plans** button to browse and activate new plans tailored to your usage requirements.

- While configuring a plan, you may be prompted to :

    - Choose the offering type
    
    - Select a commitment term (e.g., 1 month, 6 months, 1 year)
    
    - Review estimated cost savings

    - Confirm and apply the plan

<img src="/user-guide/instance/vm-options/resize/Image-03.JPG" width="90%" />
