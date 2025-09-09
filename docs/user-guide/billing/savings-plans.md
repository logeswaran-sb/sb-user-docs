---
title: Savings Plans
sidebar_label: Savings Plans
sidebar_position: 3
---

The **Savings Plans** module in the Cloud Management Portal enables users to reduce overall cloud costs by committing to consistent usage over a predefined period. It offers reserved pricing models and bundled VM subscriptions that help optimize spending while maintaining predictable monthly expenses.

This section walks you through understanding, managing, and purchasing savings plans available in the portal.

---

### Accessing Savings Plans

-   Log in to the **Cloud Management Portal**.
    
-   Navigate to **Billing > Savings Plans** from the left-hand menu.

<img src="/user-guide/billing/saving-plans/Image-01.JPG" width="30%" />

- The **Savings Plans** page will open, showing available tabs for:

-   **Reserved Plan**
    
-   **Bundle VM**

---

### Reserved Plan Tab

The **Reserved Plan** tab includes cost-saving options based on reserving specific compute resources for a longer period.

#### 1. Savings Plans Summary

This section highlights your current savings activity:

-   **Active Plans**: Number of currently active savings plans.
    
-   **Savings**: Total savings achieved so far (e.g., ₹0.00 if none).
    
-   **Plans Expire This Month**: Number of active plans nearing expiration.

> Note: All values are dynamically updated based on your current usage and active subscriptions.

#### 2. Current Active Plans Table

|S. No|Column|Description
|---|---|---|
|1|Offering Name|The name of the reserved plan offering (e.g., VM, Network, Storage types).
|2|Instance Name|The instance associated with the plan.
|3|Active Plans|Number of active commitments under this offering.
|4|Utilization (%)|How much of your committed usage is being utilized.
|5|Savings|The amount saved by using the plan compared to on-demand pricing.
|6|Actions|Options to renew, view, or manage the plan (e.g., cancel)

<img src="/user-guide/billing/saving-plans/Image-02.JPG" width="90%" />

#### 3. Purchase Savings Plan :

- Click the **Purchase Savings Plan** button to explore and subscribe to new cost-saving offerings.

- The available options are:

   - **Purchased Offering** – This section displays the list of savings plan offerings that were purchased under your account but are no longer associated with an active VM (i.e., the VM has been deleted). Even after the associated VM is removed, the offering remains valid and available until its scheduled expiry date. ou can reassign these offerings to other virtual machines within your account as needed.
    
   -   **Reserved Instance Offering** – Discounts specifically tied to long-running VM instances.

- Use the **Quick Search** feature to filter plans by resource type or offering name.

---

### Bundle VM Tab

The **Bundle VM** tab shows cost-saving bundles that may include compute, storage, and networking resources combined into one discounted plan.

#### 1. Bundle VM Summary :

- Just like the Reserved Plan tab, this section shows **Active Plans**, **Total Savings** and **Plans Expiring This Month**.

#### 2. Current Active Bundle Plans Table :

|S. No|Column|Description
|---|---|---|
|1|Offering Name|The name of the bundle offering (e.g., Dev VM Pack, Web App Pack).
|2|Instance Name|VM instance that the bundle is applied to.
|3|Subscription Cycle|The billing cycle (e.g., monthly, quarterly).
|4|Plan Renewal Date|Date on which the bundle plan will renew.
|5|Actions|Manage or renew the bundle subscription.

<img src="/user-guide/billing/saving-plans/Image-03.JPG" width="90%" />
