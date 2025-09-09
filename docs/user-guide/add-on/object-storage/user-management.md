---
title: User Management
sidebar_label: User Management
sidebar_position: 6
---

The **User Management** module in the Cloud Management Portal enables administrators to grant secure, role-based access to the Object Storage system. With this capability, you can delegate specific permissions—such as sharing, uploading, or downloading files—to sub-users within your organization, while maintaining strict control over what they can do and see.

This guide explains how to:

-   Create role privileges specific to object storage.
    
-   Assign those privileges to users.
    
-   Manage access controls and permissions from the Object Storage dashboard.

---

### Overview of Object Storage Access Flow

To ensure secure and granular access to your Object Storage, follow this three-step process:

- **Create Role Privileges** — Define what object storage actions users can perform.
    
- **Create Sub-Users** — Assign object storage–specific roles to individual users.
    
- **Manage Access** — Control user access through the Object Storage user management panel.

---

### Creating Object Storage Role Privileges

#### 1. Accessing the Role Privileges Section :

-   Log in to your Cloud Management Portal.
    
-   From the left-hand navigation bar, click on **Company > Role Privileges**.

<img src="/user-guide/add-on/object-storage/user-management/Image-01.JPG" width="30%" />

-  You will be redirected to the **Role Privileges** page where role privilege details are displayed.

#### 2. Create a Role Privilege :

- Click **Create New Role**

- Provide a **Name** (e.g., `ShareUser_S3`) and **Description** for the role.

- Navigate to the **Object Storage** tab within the role configuration.

<img src="/user-guide/add-on/object-storage/user-management/Image-02.JPG" width="90%" />

- Select the permissions you want to enable. Available options include:

|Permission|Description
|---|---|
|Enable object storage|Grants access to object storage UI
|Create/Delete bucket|Allows creation and removal of storage buckets
|Configure bucket list settings|Enables directory listing toggles
|Upload/Rename/Delete/Move files|Controls file manipulation
|Create folder|Allows folder creation inside buckets
|Manage permissions|Toggle file access between Public/Private
|Quick share|Enables time-limited external file sharing
|Enable/Disable/Regenerate CLI keys|CLI access lifecycle controls
|Manage sub-user|Create or delete object storage users
|Sub-user permission management|Assign permission scopes (read, write, full)
|Bucket policy|Allows creation and application of bucket-level policies

> **Important**: Always include **“Manage Object Storage”** permission along with other specific privileges. This is a required base permission for any object storage role to function correctly.
---
### Creating a User and Assigning a Role

#### 1. Accessing the users Section :

-   From the left-hand navigation bar, click on **Company > Users**.

<img src="/user-guide/add-on/object-storage/user-management/Image-03.JPG" width="30%" />

-   You will be redirected to the **Users** page where your details are displayed.

#### 2. Create a New User :

- Click **Add User**.

<img src="/user-guide/add-on/object-storage/user-management/Image-04.JPG" width="90%" />

- Enter all the required fields such as user’s full name, email, and password, etc..,

- Under the **Role** dropdown, select the role you created earlier (e.g., `ShareUser_S3`).

- Click **Add**.

> **Note:** For example, if your primary account (admin) is `cloudadmin@myemail.com`, and you create a user `Quickshare_user@gmail.com`, then `cloudadmin@myemail.com` is the billing admin, and `Quickshare_user@gmail.com` becomes a sub-user.

---

### Object Storage User Management

#### 1. Accessing the user management Section:

- From the cloud management portal, 

- Navigate to **Add-on > Object Storage**.

<img src="/user-guide/add-on/object-storage/user-management/Image-05.JPG" width="30%" />
    
- In the **Object Storage Dashboard**, click the **User Management** Tab.

<img src="/user-guide/add-on/object-storage/user-management/Image-06.JPG" width="90%" />

- The **User Management** tab allows you to view and control all users who have accessed Object Storage through the portal.

#### 2. How Object Storage User Creation Works :

- Initially, the **User Management** tab will be empty.

<img src="/user-guide/add-on/object-storage/user-management/Image-07.JPG" width="90%" />

- Once a sub-user logs in and navigates to **Object Storage**, they will see a welcome screen.

- After clicking **“Continue Object Storage”**, the system automatically:

<img src="/user-guide/add-on/object-storage/user-management/Image-08.JPG" width="90%" />

  - Creates an Object Storage user.

<img src="/user-guide/add-on/object-storage/user-management/Image-09.JPG" width="90%" />

  - Applies the permissions defined in the assigned role privilege.

>**Important:** Object Storage maintains a **separate user identity system** underneath the portal. The sub-user created in the portal is mirrored within the Object Storage backend with mapped permissions.

#### 3. Manage Sub-Users :

- From the **User Management** tab, the admin can:

|**Action**|**Description**
|---|---|
|**Enable/Disable**|Temporarily grant or revoke Object Storage access
|**Set Permissions**|Choose between `Read`, `Write`, or `All` for fine-grained access control
|**Delete User**|Remove the Object Storage user (does not affect portal account)

---

### End-User Experience: Accessing Object Storage

Once a sub-user is created and permissions are applied:

- The user logs in to the **Cloud Management Portal**.

- Navigates to **Add-on → Object Storage** and clicks **Continue Object Storage**.

- They gain access to the **Object Storage Dashboard**.

- Based on the assigned role:

  - The **Buckets tab** lists all accessible buckets.
    
  - Within any bucket, only **permitted actions** will be enabled.

- In our demo environment,  a user is assigned a role that only allows `quick share`.

- The file management menu will only show the **Quick Share** option.

<img src="/user-guide/add-on/object-storage/user-management/Image-10.JPG" width="90%" />

- Uploading, deleting, or renaming files will be restricted.

- This ensures tight access control, tailored to the user's responsibilities.
