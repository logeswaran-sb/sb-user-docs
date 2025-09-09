---
title: Access Control List (ACL)
sidebar_label: Access Control List (ACL)
sidebar_position: 4
---

Access Control Lists (ACLs) in the Cloud Management Portal are an essential network security feature that governs how traffic flows between network tiers within a VPC and external networks. This guide provides an in-depth overview of ACLs, their purpose, and a step-by-step process to create and manage ACL rules.

----------

### Overview of Network ACLs

An **Access Control List (ACL)** in the Cloud Management Portal is a collection of network traffic filtering rules applied to a specific **network tier** within a **Virtual Private Cloud (VPC)**. These rules define whether to allow or deny **ingress (incoming)** and **egress (outgoing)** traffic based on parameters like source/destination CIDR, protocol, and port range.

Each ACL:

-   Is **associated with a VPC**.
    
-   Can be assigned to **one or more network tiers** within that VPC.
    
-   Controls traffic between tiers, the public internet, or other external networks.
    
-   Must be explicitly assigned to a network tier (only one ACL per tier is allowed).

---

### Default ACLs

When no custom ACL is defined, the portal provides two default ACLs:

|S. No|Name|Description|
|---|---|---|
|1|`default_allow`|Permits all incoming and outgoing traffic
|2|`default_deny`|Blocks all incoming and outgoing traffic


> **Note:** Default ACLs cannot be modified or deleted.

#### How ACL Rules Are Processed

-   **Rule Order Matters:** ACL rules are evaluated in order, starting with the **lowest rule number**. The first match determines the action (allow or deny).
    
-   **Unidirectional:** Ingress and egress rules are independent. An ingress rule to allow traffic **does not automatically permit** the response to that traffic via egress. 

For example:

-   An ingress rule that allows TCP traffic on port 80 does not imply egress traffic on the same port is allowed.
    
-   You must define **both ingress and egress rules** if bidirectional communication is required.

---

### Behavior of Newly Created ACLs

-   By default, a newly created ACL:
    
    -   **Denies all incoming traffic**
        
    -   **Allows all outgoing traffic**
        
To adjust this behavior:

-   Add an **"allow all ingress"** rule (e.g., CIDR `0.0.0.0/0`)
    
-   Add a **"deny all egress"** rule if stricter controls are needed.

---

### Creating an ACL and ACL Rule 

#### 1. Accessing the VPC Section :

-   **Log in** to your Cloud Management Portal using your authorized credentials.
    
-   From the left navigation pane, go to:  
  
    **Network** → **VPC**

<img src="/user-guide/network/vpc/access-control-list/Image-01.JPG" width="30%" />

-   You will see a list of all existing VPC networks associated with your cloud account.

#### 2. Access ACL Management :

- Click the **VPC name** to view its details.

<img src="/user-guide/network/vpc/access-control-list/Image-02.JPG" width="90%" />

- On the VPC details page, click the **`Configure`** button.

<img src="/user-guide/network/vpc/access-control-list/Image-03.JPG" width="90%" />

- Under the **Router Section**, click **`Network ACL List`**

<img src="/user-guide/network/vpc/access-control-list/Image-04.JPG" width="90%" />

#### 3. Create a New ACL List :

- Click the **`Add ACL List`** button.

<img src="/user-guide/network/vpc/access-control-list/Image-05.JPG" width="90%" />

- In the popup:
   -    **Name:** Enter a descriptive name (e.g., `Web-Tier-Allow-All`)
    
  -   **Description:** Optionally describe the purpose of this   ACL.

- Click **`Add`**

<img src="/user-guide/network/vpc/access-control-list/Image-06.JPG" width="30%" />

- Your new ACL list will now appear in the ACL list view.

#### 4. Add Rules to the ACL List :

- Click the **name** of your newly created ACL to manage its rules.

- Navigate to the **`ACL List Rules`** tab.

- Click the **`Add Rule`** button.

<img src="/user-guide/network/vpc/access-control-list/Image-07.JPG" width="90%" />

#### 5. Configure ACL Rule Details :

- In the popup window, fill in the required fields:

   - **Rule Number :** Determines the order of rule evaluation. Lower numbers are evaluated first.

   - **CIDR :** CIDR block for source (ingress) or destination (egress).
     - Use `0.0.0.0/0` to apply to all IPs
     - E.g., `192.168.0.0/24`
  
  - **Action :** Choose `Allow` or `Deny` to permit or block matching traffic.

  - **Protocol :** Select protocol: `TCP`, `UDP`, `ICMP`, or `All`.
    - You can also specify a custom protocol number.

   - **Start Port / End Port :** For TCP/UDP: define port range. Use same port number in both fields for a single port (e.g., `22` for SSH).

   - **ICMP Type / Code :** For ICMP rules only: define the ICMP type and code (e.g., Type 8 for Echo Request).

   - **Traffic Type :** Select `Ingress` (incoming) or `Egress` (outgoing).

- **Example Rule :** Allow all HTTP inbound traffic to a web tier:
  - Rule Number: `100`
 
  - CIDR: `0.0.0.0/0`
 
  - Action: `Allow`
 
  - Protocol: `TCP`
 
  - Start Port: `80`, End Port: `80`
 
  - Traffic Type: `Ingress`

#### 6. Save the Rule :

-   Once all fields are filled, click **`Add`**
    
-   The rule will now appear in the **ACL Rules list** under the ACL List Rules tab.

<img src="/user-guide/network/vpc/access-control-list/Image-08.JPG" width="50%" />
