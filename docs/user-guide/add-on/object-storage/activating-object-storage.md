---
title: Activating Object Storage
sidebar_label: Activating Object Storage
sidebar_position: 2
---

The **Object Storage** feature in your Cloud Management Portal enables you to store, manage, and serve large volumes of unstructured data such as backups, logs, media files, and application data with high durability and scalability. Before using object storage services, users must first activate their object storage instance.

This guide walks you through the one-time setup and activation process and provides a functional overview of the object storage dashboard.

---

### Activating Object Storage

- **Log in** to your **Cloud Management Portal**.

- Navigate to **Add-on > Object Storage** in the left-hand menu.

<img src="/user-guide/add-on/object-storage/activating-object-storage/Image-01.JPG" width="30%" />

- If this is your **first time** using Object Storage, you’ll be prompted to:
    
    -   Enter a **Prefix Name** (this will be prepended to every bucket name created under your account for namespace uniqueness).
        
-   Click the **Activate Object Storage** button.

<img src="/user-guide/add-on/object-storage/activating-object-storage/Image-02.JPG" width="90%" />

- Upon successful activation, a confirmation message will appear and you will be automatically redirected to the **Object Storage Dashboard**.

---

### Object Storage Dashboard Overview

The dashboard is divided into three key tabs for management and monitoring:

#### Overview Tab

#### 1. Free Resource Usage Meter

   -   It tracks the usage of free tier resources allocated to your account. They are: **Free Storage Used** (in GB) and **Free Bandwidth Used** (in GB).

<img src="/user-guide/add-on/object-storage/activating-object-storage/Image-03.JPG" width="50%" />

#### 2. Additional Usage :

-   Shows how much **additional** storage and bandwidth has been used **after** the free tier is exhausted.
    
-   Helps with budget monitoring and capacity planning.

<img src="/user-guide/add-on/object-storage/activating-object-storage/Image-04.JPG" width="50%" />

#### 3. Additional Usage Charges :

-   Displays real-time costs associated with any additional storage and bandwidth.
    
-   Charges are calculated based on your configured **object storage plan**.

<img src="/user-guide/add-on/object-storage/activating-object-storage/Image-05.JPG" width="50%" />

#### 4. Storage Information Section :

- It provides the following details:

   - Storage Plan Name
   - Storage Price per GB
   - Bandwidth Price per GB

<img src="/user-guide/add-on/object-storage/activating-object-storage/Image-06.JPG" width="50%" />

#### 5. Object Storage Credentials :

-   Option to **enable CLI access** (Command Line Interface).
    
-   Credentials (Access Key and Secret Key) can be used to authenticate S3-compatible tools like `aws-cli`, `s3cmd`, or SDKs.

<img src="/user-guide/add-on/object-storage/activating-object-storage/Image-07.JPG" width="90%" />

---

#### User Management Tab

This tab allows administrators to create and manage **additional users** with access to object storage resources.

Key features:

-   Add new users with limited or full access to specific buckets.
    
-   Assign roles or access levels (e.g., read-only, read/write).
    
-   View and manage existing users and permissions.

<img src="/user-guide/add-on/object-storage/activating-object-storage/Image-08.JPG" width="90%" />

#### Buckets Tab

This is where you manage your actual object storage buckets and view data stored within.

-   View the **list of all buckets** associated with your object storage account.
    
-   Perform actions such as:
    
    -   **Create new buckets**
        
    -   **Upload and manage objects**
        
    -   **Set access permissions**
        
    -   **Monitor bucket-level usage**

<img src="/user-guide/add-on/object-storage/activating-object-storage/Image-09.JPG" width="90%" />

>Note: Each bucket name will include the **prefix name** defined during activation for global uniqueness across the object storage environment.
