---
title: Policy Editor
sidebar_label: Policy Editor
sidebar_position: 7
---

The **Policy Editor** in the Cloud Management Portal allows users to define precise permissions for their Object Storage resources by writing and managing **bucket-level access control policies**. With this tool, administrators can ensure secure, compliant, and scalable access to buckets and objects across multiple users and teams.

This guide covers:

-   How to access and use the Policy Editor.
    
-   Understanding bucket file listing and its impact on policy behavior.
    
-   Writing custom policies using supported S3-compatible actions.

---

### What is a Policy?

A **policy** is a formal document, written in JSON, that specifies which operations are **allowed** or **denied** on specific resources under specific conditions. These policies are essential to enforce access boundaries and control the behavior of users, services, or systems interacting with object storage.

|**Element**|**Description**
|---|---|
|`Effect`|Defines whether the rule **allows** or **denies** access (`"Allow"` or `"Deny"`).
|`Action`|Specifies the S3-compatible API operation(s) that the policy applies to (e.g., `s3:GetObject`).
|`Resource`|Identifies the target resource (e.g., a specific bucket or object path).
|`Principal`|Indicates the user or entity the policy applies to (often implicit in context).
|`Condition`|(Optional) Adds filters like IP ranges, time-of-day, or request type.

---

### Understanding Bucket File Listing

When creating a bucket in Object Storage, you are prompted to choose one of two **file listing options**:

<img src="/user-guide/add-on/object-storage/policy-editor/Image-01.JPG" width="60%" />

-   **Enable Listing**  
    Publicly lists the contents of the bucket when accessed through the browser or endpoint.
    
-   **Disable Listing**  
    Hides bucket content from being listed, returning an “Access Denied” response unless explicitly permitted.

> **Note**: Regardless of the setting, a default bucket policy is applied in the background, which can be viewed and modified using the **Policy Editor**.

---

### Accessing the Policy Editor

- **Login** to the **Cloud Management Portal**.

- Navigate to **Add-on > Object Storage**.

- Click the **Buckets** tab.

- Select the desired bucket from the list to open the **Bucket Dashboard**.

- From the left-side menu, click **Policy Editor**.

<img src="/user-guide/add-on/object-storage/policy-editor/Image-02.JPG" width="90%" />

---

### Viewing and Editing Bucket Policies

Upon opening the Policy Editor:

-   You will see the **current JSON policy** applied to the bucket.
    
-   The default policy reflects your selected **file listing setting**:
    
    -   **Enable Listing** policy allows public `s3:ListBucket` access.
 
<img src="/user-guide/add-on/object-storage/policy-editor/Image-03.JPG" width="90%" />
 
-   **Disable Listing** policy restricts `s3:ListBucket`, showing an “**Access Denied**” message.

<img src="/user-guide/add-on/object-storage/policy-editor/Image-04.JPG" width="90%" />

---

### Editing or Adding Custom Policies

-   You may **add custom policy blocks** below the default settings to fine-tune access controls.
    
-   **Important**: If you change the **file listing option** after adding custom policies, your custom configurations will be **overwritten** by the default policy. Always back up custom policies before making such changes.

<img src="/user-guide/add-on/object-storage/policy-editor/Image-05.JPG" width="50%" />

- Use the official AWS policy generator to build valid policy blocks:

https://awspolicygen.s3.amazonaws.com/policygen.html

---

### Supported Policy Actions

The object storage engine supports a broad range of S3-compatible permissions categorized into **bucket management**, **object management**, and **multipart upload actions**.

#### Bucket Management Actions

-   `s3:CreateBucket`
    
-   `s3:DeleteBucket`
    
-   `s3:PutBucketPolicy`
    
-   `s3:GetBucketPolicy`
    
-   `s3:DeleteBucketPolicy`
    
-   `s3:ListBucket`
    
-   `s3:ListAllMyBuckets`
    
-   `s3:GetBucketAcl`
    
-   `s3:PutBucketAcl`
    
-   `s3:GetBucketCORS`, `s3:PutBucketCORS`
    
-   `s3:GetBucketVersioning`, `s3:PutBucketVersioning`
    
-   `s3:GetBucketLocation`
    
-   `s3:GetBucketLogging`, `s3:PutBucketLogging`
    
-   `s3:GetBucketTagging`, `s3:PutBucketTagging`
    
-   `s3:GetBucketWebsite`, `s3:PutBucketWebsite`, `s3:DeleteBucketWebsite`

#### Object Management Actions

-   `s3:PutObject`
    
-   `s3:GetObject`
    
-   `s3:DeleteObject`
    
-   `s3:GetObjectAcl`, `s3:PutObjectAcl`
    
-   `s3:GetObjectTagging`, `s3:PutObjectTagging`, `s3:DeleteObjectTagging`
    
-   `s3:GetObjectVersion`, `s3:DeleteObjectVersion`
    
-   `s3:ListMultipartUploadParts`
    
-   `s3:AbortMultipartUpload`

#### Multipart Upload Actions

-   `s3:ListBucketMultipartUploads`
    
-   `s3:RestoreObject`
