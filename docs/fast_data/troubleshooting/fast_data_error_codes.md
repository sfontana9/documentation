---
id: fast_data_error_codes
title: Fast Data Error Codes
sidebar_label: Fast Data Error Codes
---

In this page are collected all the codes associated to errors that may be generated by Fast Data core components.  
Each error code is grouped under a specific category to help understanding which component operation may have raised the error.
Moreover, for each of them is provided a brief explanation of what caused it and which are the steps that should be taken
to potentially resolve the encountered issue.

### Real-Time Updater

Coming soon

### Single View Trigger Generator

In case of any doubt, please refer to service documentation, which can be found [here](/fast_data/configuration/single_view_trigger_generator.md).

| Error code    | Category                   | Cause                                                             | Action                                                                                                                                                                                                                                                                                                                                                        |
|---------------|----------------------------|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FD_SVTG_E0001 | Configuration              | failed loading one of the service config map                      | verify that files provided in `KAFKA_PROJECTION_UPDATES_FOLDER`, `ER_SCHEMA_FOLDER` and `PROJECTION_CHANGES_SCHEMA_FOLDER` folders are all JSON files respecting their schema structure                                                                                                                                                                       |
| FD_SVTG_E0002 | Configuration              | one or more strategy is invalid                                   | in the config map loaded from `KAFKA_PROJECTION_UPDATES_FOLDER` verify that the value of _identifier_ property in each strategy path matches one among `__automatic__`, `__fromFile[<filename>]__` and `__lookup__`                                                                                                                                           |
| FD_SVTG_E0003 | Configuration              | single view does not have any strategy path                       | in the config map loaded from `KAFKA_PROJECTION_UPDATES_FOLDER` verify that specified single view exists and it has at least one strategy path associated with                                                                                                                                                                                                |
| FD_SVTG_E0004 | Configuration              | no manual strategy folder has been provided                       | specify a value for environmental variable `MANUAL_STRATEGIES_FOLDER`, representing the folder path where manual strategies files can be found                                                                                                                                                                                                                |
| FD_SVTG_E0005 | Configuration              | manual strategy identifier is malformed                           | in the config map loaded from `KAFKA_PROJECTION_UPDATES_FOLDER` ensure that each _identifier_ configured as `__fromFile[<strategy-identifier>]__` has a `<strategy-identifier>` defined                                                                                                                                                                       |
| FD_SVTG_E0006 | Configuration              | manual strategy has not been found or was not possible to load it | in the config map loaded from `KAFKA_PROJECTION_UPDATES_FOLDER` ensure that each _identifier_ configured as `__fromFile[<strategy-identifier>]__` has a `<strategy-identifier>` pointing to an existing javascript file (containing an async generator function exported by default) in the folder defined in environment variable `MANUAL_STRATEGIES_FOLDER` |
| FD_SVTG_E1001 | Runtime - Batch Processing | no strategy associated to topic                                   | in the config map loaded from `KAFKA_PROJECTION_UPDATES_FOLDER` verify that each topic the service is subscribed to is mapped to one or more strategies                                                                                                                                                                                                       |
| FD_SVTG_E2001 | Runtime - Message Parsing  | a message with empty key has been received                        | verify the topic on which such event happened to understand whether this event was generated from the events producers or it was received by mistake                                                                                                                                                                                                          |
| FD_SVTG_E2002 | Runtime - Message Parsing  | a message with empty payload has been received                    | verify the topic on which such event happened to understand whether this event was generated from the events producers or it was received by mistake                                                                                                                                                                                                          |
| FD_SVTG_E2003 | Runtime - Message Parsing  | before and after properties in message payload are empty          | verify the topic on which such event happened to understand whether this event was generated from the events producers or it was received by mistake                                                                                                                                                                                                          |
| FD_SVTG_E2004 | Runtime - Message Parsing  | primaryKeys property in message payload is empty                  | verify the topic on which such event happened to understand whether this event was generated from the events producers or it was received by mistake                                                                                                                                                                                                          |


### Single View Creator

Coming soon