---
title: Overview
sidebar_label: Overview
sidebar_position: 1
---

The **Billing** module in the Cloud Management Portal provides a centralized dashboard to help users track usage, manage invoices, analyze billing trends, and set budget alerts to control cloud costs. This section gives you a detailed overview of how to interpret and use the features available in the **Billing Summary** and **Budget Alert** interfaces.

---

### Billing Summary Dashboard

- To access the **Billing Summary**, Log in to the **Cloud Management Portal**.

-  From the left-hand navigation menu, go to **Billing > Overview**.

<img src="/user-guide/billing/overview/Image-01.JPG" width="30%" />

- The **Billing Summary** tab is displayed by default, providing you with real-time insights into your cloud spending.

---

### Key Sections

#### 1. Current Month Usage :

Located at the top left, this section shows:

-   **Current Month-to-Date Spend**: Displays your real-time cost usage (e.g., ₹16,757.81 for May 2025).
    
-   This number reflects actual accrued costs so far in the current billing cycle.

<img src="/user-guide/billing/overview/Image-02.JPG" width="60%" />

#### 2. Monthly Spend Comparison Chart

- This bar chart visualizes:

  -   **Last Month's Spend** (April 2025)
    
  -   **Current Month-to-Date Spend** (May 2025)
    
  -   **Forecasted Spend** for the end of the current month
    
This helps you understand trends and anticipate if your spending is increasing or decreasing month-over-month.

#### 3. Top 5 Resource Usage :

A detailed donut chart breaks down your spending by resource type. Categories include:

-   **VM (Virtual Machines)** – e.g., ₹9,503.81
    
-   **Template License** – e.g., ₹4,206.22
    
-   **IP Addresses** – e.g., ₹1,203.81
    
-   **Network Offering** – e.g., ₹1,151.36
    
-   **Object Storage** – e.g., ₹420.00

> Note: Use this to identify where the bulk of your cloud budget is going.

<img src="/user-guide/billing/overview/Image-03.JPG" width="70%" />

#### 4. Billing Notifications :

This table lists your most recent invoices, showing:

|**Invoice No**.|**Due Date**|**Payable Amount**|**Status**
|---|---|---|---|
|IN/2025-26/1122|04/05/2025|₹16,757.81|UNPAID
|IN/2025-26/1005|04/05/2025|₹42,933.20|UNPAID
|IN/2024-25/1405|04/04/2025|₹15,681.65|UNPAID
|IN/2024-25/1370|04/03/2025|₹17,680.42|UNPAID
|IN/2024-25/1300|04/02/2025|₹49.84|UNPAID

<img src="/user-guide/billing/overview/Image-04.JPG" width="70%" />

---

### Budget Alert

The **Budget Alert** section helps you set up thresholds to stay within your allocated cloud budget and avoid unexpected costs.

#### 1. Budget Alert Overview :

- **Spend to Date** – The actual spend so far.

- **Expected Spend** – The threshold limit you've defined.

- **Spend Difference** – The difference between actual and expected spend, with percentage tracking.

- If no alert has been set, click the **Setup Alert** button to configure a new budget alert.

<img src="/user-guide/billing/overview/Image-05.JPG" width="50%" />

#### 2. Setup Budget Alert :

- When you click **Setup Alert**, a popup dialog will appear, allowing you to define your budget limits.

   - **Enter the Amount** - The total cost threshold you want to monitor.

   - **Threshold (%)** - The percentage of your budget at which the alert should be triggered (e.g., 80%).

#### 3. Email Recipients :

- Enter one or more email addresses (comma-separated) to receive notifications.

- You can add up to 10 email addresses.

- Once configured, click **Save** to activate the alert.

<img src="/user-guide/billing/overview/Image-06.JPG" width="50%" />
  
  >Note: Budget alerts are a proactive way to manage your spend. Once the threshold is exceeded, an email notification will be sent to the specified recipients.
