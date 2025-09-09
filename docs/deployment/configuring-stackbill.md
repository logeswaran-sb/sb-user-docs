---
title: Configuring Stackbill
sidebar_label: Configuring Stackbill
sidebar_position: 12
---

## Introduction

After successfully deploying the necessary backend services and Kubernetes cluster, the next step is to configure the Stackbill application. The configuration process involves setting up the application environment, ensuring proper connectivity with the backend services, and enabling required functionality.

### Configuring stackbill for first Time

- Open your preferred web browser.

- Use the following URL format to access the Stackbill admin portal.

**http://portal-domain-name.com/admin**

**Example:** http://democloud.com/admin

<img alt="Apache CloudStack setup" src="/deployment/configuring-stackbill/
apache-cloudstack-installation-admin-login.jpg" width="90%" />

- This URL is specific to your deployment and should match the domain name or load balancer IP configured during installation.

- Use the default credentials provided below for the first-time login.

**Username:** stackbill@assistanz.com
**Password:** @Password17

<img alt="Apache CloudStack setup" src="/deployment/configuring-stackbill/apache-cloudstack-installation-admin-login-view.jpg" width="90%" />

- After logging in successfully, you will be redirected to the welcome page. On the welcome page, click the "Let's Start" button to begin the configuration process. The wizard will guide you through the steps required to set up Stackbill.

<img alt="Apache CloudStack setup" src="/deployment/configuring-stackbill/apache-cloudstack-installation-stackbill-cmp-view.jpg" width="90%" />

- In the first step of the wizard, fill out the required details such as Default Language Type, Your Name, Email, Currency format & Currency Symbol. After entering all details, click the "Next" button to proceed.

<img alt="Apache CloudStack setup" src="/deployment/configuring-stackbill/apache-cloudstack-installation-basic-initial-setup.jpg" width="90%" />

- On the next screen, provide the **Stackbill License Key.** The license key will be sent to you by the Stackbill team based on your subscription plan. If you have not received the key, contact **support@stackbill.com** to request it. Paste the license key into the designated field and click the Next button.

<img alt="Apache CloudStack setup" src="/deployment/configuring-stackbill/apache-cloudstack-installation-license-initial-setup.jpg" width="90%" />

- In the final step, configure the integration between Stackbill and CloudStack. Provide the following details.

**CloudStack API URL:** The URL of the CloudStack management server's API endpoint.

**CloudStack Root Admin API Key:** The API key of the root administrator account in CloudStack.

**CloudStack Root Admin Secret Key:** The corresponding secret key for the API key.

Click **"Validate"** to ensure that the credentials and API connection are correct. If validation is successful, click **"Finish"** to complete the setup wizard.

<img alt="Apache CloudStack setup" src="/deployment/configuring-stackbill/apache-cloudstack-installation-cloudstack-discovery.jpg" width="90%" />

<img alt="Apache CloudStack setup" src="/deployment/configuring-stackbill/apache-cloudstack-installation-cloudstack-discovery-view.jpg" width="90%" />

- After completing the configuration, you can now log in to the Stackbill application using your CloudStack credentials.

- Make sure the email address is added to the cloudstack root admin account.

<img alt="Apache CloudStack setup" src="/deployment/configuring-stackbill/apache-cloudstack-installation-cloudstack-user-view.jpg" width="90%" />
