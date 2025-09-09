---
title: Overview
sidebar_label: Overview
sidebar_position: 1
---

The **Object Storage** feature in the Cloud Management Portal provides users with a powerful and flexible way to store, access, and manage unstructured data such as images, videos, backups, logs, datasets, and application binaries. Unlike traditional file or block storage, object storage organizes data into **buckets** and allows it to be accessed via web-based interfaces or APIs.

---

### Key Features

|S. No|Feature|Description
|---|---|---|
|1|**Unlimited Scalability**|Seamlessly handle petabytes of data without volume or filesystem limits.
|2|**Bucket-Based Structure**|Data is stored as objects inside user-defined buckets.
|3|**High Durability**|Designed for data redundancy and fault tolerance.
|4|**Secure Access Control**|Set granular permissions for buckets and objects using access policies.
|5|**REST API Access**|Integrate with applications via S3-compatible APIs.
|6|**Metadata Tagging**|Add custom metadata to stored objects for categorization and tracking.

---

### Bucket-Based Architecture

-   **Buckets** are logical containers used to organize objects (files).
    
-   Users can create multiple buckets to group related objects by application, project, team, or purpose.
    
-   Each bucket can have its own **access controls**, lifecycle policies, and usage limits (if configured).

---

### Unlimited Object Storage

-   Store **virtually unlimited** files, regardless of size or count.
    
-   Ideal for big data, IoT, backups, video libraries, and archiving.
    
-   Files are stored as discrete **objects**, each with its own metadata and unique identifier.

---

### Granular Access Control

-   Access to buckets and individual objects can be controlled at multiple levels:
    
    -   **Bucket-Level ACLs** (e.g., public read, private, authenticated users).
        
    -   **Object-Level ACLs** to override bucket-level rules.
        
    -   **Role-Based Access Control (RBAC)** using admin-defined user roles.
        
-   Supports **signed URLs** for time-bound, secure sharing of private files.
