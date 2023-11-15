---
id: configuration
title: Configuration
sidebar_label: Configuration
---
## Flow Manager Service

The application includes by default two [flow manager services](../../runtime_suite/flow-manager-service/overview) with a basic configuration, one used as the `main flow` and the other one as the `sub flow`.

It is possible to customize the main flow configuration as well as the sub flow one in order to match your required flow; if you need to create a new sub flow you need to:
1. create a new flow manager service from the marketplace
2. edit the configuration file to define the steps of the processes
3. define a new [CRUD collection](../../development_suite/api-console/api-design/crud_advanced) to collect the data related to the new process
    

## Flow Manager Router

The [flow manager router](../../runtime_suite/flow-manager-router/overview) manages the communication between external services and the set of `sub flows`. The plugin comes in the application with only one default rule that holds information about the used process, but it is possible to add more rules in order to add more processes to the application. 

## Communication Modes

The services defined in the application can communicate relying on `REST` or `KAFKA`. Switching from a mode to another is simple:
- change the `COMMUNICATION_MODE` public variable value to `REST` or `KAFKA`,
- change the `FLOW_MANAGER_CONFIG_PATH` public variable value to the path of the file holding the Flow Manager configurations with the REST/Kafka communication protocols. Default values are
  - `/sagaConfiguration/rest.json`
  - `/sagaConfiguration/kafka.json`

### Kafka Topics

Here we provide a suggestion for topic management:
- two topics for the flow manager router
- one topic for the `main flow`
- one topic **for each** `sub flow`