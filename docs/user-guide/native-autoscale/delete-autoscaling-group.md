---
title: Delete Autoscaling group
sidebar_label: Delete Autoscaling group
sidebar_position: 4
---

Autoscale Groups are critical components that manage dynamic scaling of compute resources based on workload demands. If an Autoscale Group is no longer required, you can delete it through the **Cloud Management Portal**. This section provides step-by-step instructions on how to safely delete an Autoscale Group.

#### 1. Accessing the **Native Autoscale** Section :

-   **Log in** to your Cloud Management Portal using your authorized credentials.
    
-   From the left navigation pane, go to:  
  
    **Compute** → **Native Autoscale**

-   Here, you’ll find a list of all Autoscale groups available under your account.

#### 2. Deleting Auto scaling Group

- Identify the **Autoscale Group** that you wish to delete from the list.

- In the **Actions** column corresponding to the selected Autoscale Group, click the **Delete** icon.

<img src="/user-guide/native-autoscale/delete-autoscaling-group/Image-01.JPG" width="90%" />

- A confirmation popup will appear with the message:  
**"Are you sure you want to delete?"**

- To proceed with deletion:

  -   Click **OK** to confirm and permanently delete the Autoscale Group.

- If you decide not to proceed:

   -   Click **Cancel** to abort the deletion process. 

<img src="/user-guide/native-autoscale/delete-autoscaling-group/Image-02.JPG" width="50%" />

---

### Important Considerations

-   **Irreversible Action**:  
  
    Deleting an Autoscale Group is a **permanent action**. Once deleted, the group and its associated configurations cannot be recovered.
    
-   **Impact Awareness**:  

    Ensure that no critical services or applications are actively dependent on the Autoscale Group before proceeding with deletion. Deleting a group could disrupt the availability and scalability of your applications.
