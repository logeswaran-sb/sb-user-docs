---
title: Notes
sidebar_label: Notes
sidebar_position: 7
---

The **Notes** section of the Cloud Management Portal is a lightweight, yet powerful feature that allows users to **attach custom annotations** to their Kubernetes clusters. This is particularly useful for operational handoffs, audit trails, tracking configuration changes, or simply sharing insights within a DevOps team.

### **Purpose of Notes**

The Notes section is designed to provide a centralized area for storing user-defined annotations that are specific to the selected cluster. It can be used for a variety of purposes, including:

-   Tracking changes or updates made to the cluster.
    
-   Logging maintenance tasks or configuration changes.
    
-   Communicating handover details between team members.
    
-   Recording troubleshooting actions or issues encountered.

### **Interface Overview**

The Notes section comprises two main components:

#### **1. Notes List Panel**

-   Displays all previously added notes associated with the cluster.
    
-   Notes are listed chronologically with the most recent entries shown first.
    
-   If no notes have been added, the panel will display the message:  
    **"No records found!"**

<img src="/user-guide/kubernetes/cluster-options/notes/Image-01.JPG" width="90%" />

#### **2. Add Notes Panel**

-   Allows users to input new notes.
    
-   The **Note** field is mandatory and accepts free-text input.
    
-   A tool-tip icon provides additional guidance on what to enter.
    
-   After writing the note, click the **"Add"** button to save it.
 
<img src="/user-guide/kubernetes/cluster-options/notes/Image-02.JPG" width="50%" />
 
Once saved, the note appears in the Notes List Panel and is associated permanently with the cluster until manually removed.
