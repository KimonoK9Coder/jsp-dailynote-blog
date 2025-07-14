---
title: Hello world
tags:
  - example
draft: "false"
---

hello obsidian quartz

```mermaid
flowchart TD
  A[<img src="https://raw.githubusercontent.com/aws-samples/aws-icons-for-plantuml/main/dist/AWS-Cloud.svg" width="30"/> AWS Cloud]
  B[<img src="https://raw.githubusercontent.com/aws-samples/aws-icons-for-plantuml/main/dist/Amazon-EC2.svg" width="30"/> EC2 Instance]
  A --> B
```

```plantuml
@startuml Hello World
' Uncomment the line below for "dark mode" styling
'!$AWS_DARK = true

!define AWSPuml https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/v20.0/dist
!include AWSPuml/AWSCommon.puml
!include AWSPuml/BusinessApplications/all.puml
!include AWSPuml/Storage/SimpleStorageService.puml

actor "Person" as personAlias
WorkDocs(desktopAlias, "Label", "Technology", "Optional Description")
SimpleStorageService(storageAlias, "Label", "Technology", "Optional Description")

personAlias --> desktopAlias
desktopAlias --> storageAlias

@enduml

```
