---
title: Pay-as-You-Go Instance
sidebar_label: Pay-as-You-Go Instance
sidebar_position: 10
---

The **Pay-as-You-Go** plan is a dynamic billing option that allows you to pay **only for the hours your virtual machine (VM) is actively used**. Unlike fixed-cost plans, this model provides **maximum flexibility**, making it ideal for:

-   Short-term projects
    
-   Testing and development environments
    
-   Spiky or unpredictable workloads
    
-   Cost-conscious users seeking granular billing control

With no upfront commitments and on-demand pricing, you are always in control of your cloud expenses.

#### 1. Log In to the Cloud Management Portal :

-   Open your web browser and go to the **Cloud Portal login page**.
    
-   Enter your **username and password**, then click **Sign In**.

#### 2. Navigate to Compute Services :

From the main dashboard, go to:  

- **Compute → Create Instance**

#### 3. Configure Your VM :

- Set up the basic configuration for your new instance:

   - **Zone :** Choose the geographic region for your VM.
 
   - **OS Type :** Select the operating system, such as Linux or Windows.

   - **Template :** Choose from a list of available OS templates (e.g., Ubuntu 20.04, Windows Server 2019).

#### 4. Pay-as-You-Go Billing Option :

Under the **"Choose Your Instance Plan"** section, you’ll see two billing models:

-   **Pay-as-You-Go**  _(Select this option)_
    
-   **Fixed/Bundle Plan**
    
Click on **Pay-as-You-Go** to proceed.

#### 5. Pay-as-You-Go Offering :

A list of available offerings will appear, displaying different combinations of **vCPUs**, **RAM**, and **storage**. Choose a plan that best fits your performance needs.

The portal will show:

-   **Estimated Hourly Rate** (e.g., `$0.10/hour`)
    
-   **Monthly Equivalent** – Approximate cost if the instance is active for the full month.

#### 6. Confirm and Launch :

-   Review all configuration settings and pricing details.
    
-   Click **Create Instance** to deploy your VM with Pay-as-You-Go billing.
    
Your VM will be provisioned, and billing will begin **only when the VM enters the running state**.

#### 7. Billing Details :

- **Hourly Billing :** Charges are based on actual hours of VM usage (running/stopped).

- **Granular Tracking :** Usage is monitored in real-time and billed accordingly.

- **No Commitment :** Stop or delete the instance at any time to pause billing.

  - **Example**: If your VM is active for 10 hours at `$0.10/hour`, your total charge will be **$1.00**.

---

### Pay-as-You-Go vs. Bundle Plan Comparison

| S. No | Feature | Pay-as-You-Go |Bundle/Reserved Plan |
|---|---|---|---
|1|Billing Model|Hourly (usage-based)|Monthly (fixed upfront fee)
|2|Flexibility|Start/stop anytime|Locked into a 1-month term
|3|Best For|Temporary/testing needs|Long-term/stable workloads
|4|Cost Efficiency|Great for short bursts|More economical for 24x7 use

The **Pay-as-You-Go** plan offers unmatched flexibility and cost control for cloud users. Whether you're testing a new app, running a training lab, or spinning up a temporary workload, this billing model helps you:

-   Pay only for what you use
    
-   Scale usage dynamically
    
-   Avoid unnecessary long-term commitments

Start optimizing your cloud spending today by choosing **Pay-as-You-Go** when creating your next virtual machine.
