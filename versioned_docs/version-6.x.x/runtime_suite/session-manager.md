---
id: session-manager
title: Session Manager
sidebar_label: Session Manager
---
The Session Manager microservice manages the users session within the platform, saving the information in session and managing Cookies and JSON Web Tokens.

The Session Manager also collaborates with the user management services for the authentication part. The control that this microservice does is currently quite sophisticated and the logical expression evaluates more parameters:

1. the **group**, a variable that identifies the group to which the caller belongs. The group must be written as "group-group". For more information see the following [link] (<https://docs.mia-platform.eu/configurator/conf_cms/#5-controllo-accessi-sui-gruppi-acl-sui-groups>).

2. **isBackOffice**, a Boolean variable that evaluates whether the call comes from the Back-Office or not.

3. **clientType**, which identifies where the call comes from (ex CMS, site, ...).