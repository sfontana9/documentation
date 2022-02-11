---
id: changelog
title: CHANGELOG
sidebar_label: CHANGELOG
---
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## 1.2.0

### Changed
- handle form builder updated with a body with `$set` and `$unset` objects

### Added
- add isEditable management in form visualizer page and add formAssignmentId on new assignments post
- add error message for 403 errors in form visualizer page
- add route to handle assignments and update form visualizer accordingly
- add isEditable, isPrivate and enabledUserGroups management in form builder

### Fixed
- - update CORS to fix form visualizer date/time component visualization
## 1.1.0

### Added

- added `/visualizer/print-form/:id` route that always display forms and remove submit button (component with key `submit` and type `button`) from formSchema first level components

- add redirect after form submission and update in form visualizer using `onSubmitRedirect` query parameter 

- handle optional form options for already submitted form in the form visualizer

### Fixed

- Fix notification toast position in frontend micro-lc integration

- Copy fonts to fix form builder and visualizer font awesome icons not shown in **form-service-frontend** integrated in micro-lc. An endpoint `/form-service-frontend-fonts` with *Rewrite Base Path* `/form-service-frontend-fonts` to the **form-service-frontend** microservice is required.

## 1.0.0
### Added

- first release