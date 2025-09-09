---
title: Scaling Policy
sidebar_label: Scaling Policy
sidebar_position: 3
---

Scaling policies are essential for controlling how your Autoscale Group adjusts resources dynamically based on real-time demand. This section provides a detailed guide to **view and manage Scaling Policies** through the **Cloud Management Portal**.

#### 1. Accessing the **Native Autoscale** Section :

-   **Log in** to your Cloud Management Portal using your authorized credentials.
    
-   From the left navigation pane, go to:  
  
    **Compute** → **Native Autoscale**

-   Here, you’ll find a list of all Autoscale groups available under your account.

#### 2. Navigate to Scaling Policy Page :

- Locate the desired **Autoscale Group** and click on it to open its **summary page**.

- In the summary page, click on the **Scaling Policy** tab.

#### 3. Viewing and Understanding Scaling Policies :

Within the **Scaling Policy** tab, you can find detailed information about the group's configured policies, categorized into two types:

-   **Scale-Up Policies**: Define the conditions under which additional instances will be automatically provisioned to handle increased load.
    
-   **Scale-Down Policies**: Define the conditions under which instances will be removed when the load decreases.
    
Each policy includes parameters such as counters, thresholds, duration, quiet time, and the specific scaling action (scale up or scale down).

#### 4. Modifying Scaling Policies :

You can modify the existing scale-up and scale-down policies directly from this interface:

-   **Modifying Scale-Up Policies**:
    
    -   Update the conditions, counters, thresholds, or actions as required.
        
    -   Once changes are made, click on the **Update Scaling Up Policy** button to save the updates.

<img src="/user-guide/native-autoscale/autoscale-options/scaling-policy/Image-01.JPG" width="90%" />
        
-   **Modifying Scale-Down Policies**:
    
    -   Similarly, update the conditions for scaling down.
        
    -   After making the necessary changes, click on the **Update Scaling Down Policy** button to apply and save your updates.

<img src="/user-guide/native-autoscale/autoscale-options/scaling-policy/Image-02.JPG" width="90%" />
