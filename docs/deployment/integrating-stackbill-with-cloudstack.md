---
title: Integrating Stackbill with cloudstack
sidebar_label: Integrating Stackbill with cloudstack
sidebar_position: 10
---

## Introduction

Integrating Stackbill with Apache CloudStack involves connecting the Stackbill platform to your CloudStack environment to enable smooth management and orchestration of cloud resources. This process ensures that Stackbill can interact with CloudStack APIs, manage infrastructure, and provision resources.

- Login into the cloudstack environment using your admin account.

Go to Configuration, select Global Settings, then update the configuration below.

` usage.aggregation.timezone = <your location time zone>
usage.execution.timezone = <your location time zone>
use.secret.key.in.response = true
usage.stats.job.aggregation.range = 1440
usage.stats.job.exec.time = 00:15`

- Create a folder as below in cloudstack management servers and inside create a file named "**spring-event-bus-context.xml**".

**/etc/cloudstack/management/META-INF/cloudstack/core/**

<img alt="StackBill Setup" src="/deployment/integrating-stackbill-with-cloudstack/stackbill-setup-list.jpg" width="90%" />

- Update the below details inside spring-event-bus-context.xml. 

``` <beans xmlns="http://www.springframework.org/schema/beans"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xmlns:context="http://www.springframework.org/schema/context"
 xmlns:aop="http://www.springframework.org/schema/aop"
 xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
        http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop-3.0.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context-3.0.xsd">
   <bean id="eventNotificationBus" class="org.apache.cloudstack.mom.rabbitmq.RabbitMQEventBus">
     <property name="name" value="eventNotificationBus"/>
     <property name="server" value=""/>
     <property name="port" value="5672"/>
     <property name="username" value=""/>
     <property name="password" value=""/>
     <property name="exchange" value="cloudstack-events"/>
   </bean>
</beans>
 ```

- Make sure you've updated the rabbitmq server information in the appropriate columns.

<img alt="StackBill Setup" src="/deployment/integrating-stackbill-with-cloudstack/stackbill-setup-spring-event-bus.jpg" width="90%" />

- Restart the cloudstack service using below command.

**systemctl restart cloudstack-management.service**
