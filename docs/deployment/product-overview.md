---
title: Product Overview
sidebar_label: Product Overview
sidebar_position: 5
---

### About stackbill application

StackBill is a comprehensive self-service Cloud Management Portal built on top of Apache CloudStack®. It simplifies the delivery of public, private, or hybrid cloud services for data centers, enterprises, telecoms, and cloud service providers. StackBill offers features like automated billing, advanced monitoring, self-service capabilities, and multi-zone support, making it a scalable and efficient solution for managing cloud infrastructure. Its integrated tools allow for seamless VM provisioning, networking, storage management, and more, enabling businesses to streamline their cloud operations while maintaining cost efficiency and reliability​.

### High Level application flow

<img alt="StackBill Setup" src="/deployment/product-overview/stackbill-setup-config-architecture.jpg" width="90%" />

**WORKFLOW PROCESS**

The StackBill workflow diagram provides a detailed representation of how user requests are processed and the internal system interactions within the StackBill platform. Below is a step-by-step explanation of the workflow:

1.  **User Access via Browser**  

When a user accesses your portal, such as portal.mydomain.com, through their browser, the request first goes through the **Web Application Firewall (WAF)**. The WAF ensures the incoming traffic is secure by filtering out malicious activity and protecting the system against threats like SQL injections and cross-site scripting (XSS).

2.  **Public to Private IP Translation**

After passing through the WAF, the public IP associated with the user’s request undergoes Destination Network Address Translation (DNAT), converting it to a private IP. The request is then forwarded to the internal Load Balancer (LB) for distribution.

3. **Load Balancer Forwarding**  

Upon reaching the **Load Balancer**, the incoming request is distributed to the appropriate backend services. Specifically, the LB forwards the request to the **Kubernetes Master API**, which manages the orchestration and deployment of containerized services.

4. **Processing by Kubernetes Nodes**  

The **Kubernetes Master** processes the request by delegating it to the appropriate **worker nodes**. These nodes handle the actual workload, process the request, and generate the required response, which is then sent back to the user via the same workflow.

5. **Database Management**  

The workflow incorporates two databases for data management:

-   **MSSQL**: This database is used to store critical data related to StackBill, such as user information, configurations, and platform-specific data.
-   **MongoDB**: This is used to store payment details and client usage statistics, offering a high-performance solution for handling dynamic and transactional data.

6. **Messaging System**  

A **RabbitMQ** messaging server is integrated into the workflow. It facilitates communication between **StackBill** and **CloudStack**, ensuring reliable delivery of service messages for operations like provisioning, billing, and service updates.

7. **File Storage and Logging**  

An **NFS Server** (Network File System) is utilized for centralized storage. It stores files related to the **marketplace** and **help center**, along with application-related logs. This ensures efficient file management and robust logging for debugging and analysis.

This architecture ensures a seamless, secure, and efficient processing of user requests while leveraging robust components for storage, messaging, and load balancing. It highlights the platform's scalability and adaptability to handle diverse cloud management.
