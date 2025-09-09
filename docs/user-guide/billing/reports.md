---
title: Reports
sidebar_label: Reports
sidebar_position: 5
---

The **Usage Report** module in the Cloud Management Portal enables users to track resource consumption across zones, analyze usage trends, and identify idle or underutilized resources. This feature is especially useful for cost tracking, internal auditing, and optimizing cloud spend.

---

### Accessing Usage Report

-   Log in to the **Cloud Management Portal**.
    
-   In the left-hand menu, go to **Billing > Reports**.
    
<img src="/user-guide/billing/reporting/Image-01.JPG" width="30%" />
    
-   You will be directed to the **Usage Report** page, which includes three primary tabs:
    
    -   **Usage Summary**
        
    -   **Usage Detail**
        
    -   **Cost Optimizer**

---

### Tab 1: Usage Summary

The **Usage Summary** tab provides a high-level overview of your cloud resource consumption across a selected time period and data center zone.

|Field|Description
|---|---|
|**Zone**|Choose a data center zone (e.g., Mumbai, Hyderabad).
|**From Date**|Select the start date for the report.
|**To Date**|Select the end date for the report.

- Once all filters are selected, click **Generate** to view the summarized report.

This section gives you quick visibility into how much you've used and helps compare usage across different zones and time frames.

<img src="/user-guide/billing/reporting/Image-02.JPG" width="90%" />

---

### Tab 2: Usage Detail

The **Usage Detail** tab provides a deeper look into your resource usage, displaying itemized data for VMs, storage, network, and more.

|Field|Description
|---|---|
**Zone**|Select from available zones like Mumbai or Hyderabad.
|**From Date**|Choose the starting date for the detailed report.
|**To Date**|Choose the end date for the detailed report.

- Click **Generate** to produce a detailed breakdown that may include:

   - Instance types
    
   - Uptime hours
    
  - Bandwidth consumed
    
  - Volume of storage attached
    
  - Associated charges (if applicable)

<img src="/user-guide/billing/reporting/Image-03.JPG" width="90%" />

---

### Tab 3: Cost Optimizer

The **Cost Optimizer** tab is designed to identify underutilized or idle resources, helping you reduce unnecessary spending.

|Field|Description
|---|---|
|**Idle Days Filter**|Choose condition: `Greater`, `Equal`, or `Lesser`.
|**Idle Days**|Specify the number of idle days to evaluate resources against.

**Example:**

-   **Greater than 10 idle days** will return a list of resources that haven’t been used for over 10 days.

- Click **Generate** to run the analysis.

> Note: This helps identify resources like unused VMs, idle volumes, or inactive public IPs that can be deleted or reconfigured to optimize cloud usage.

<img src="/user-guide/billing/reporting/Image-04.JPG" width="90%" />
