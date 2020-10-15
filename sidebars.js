module.exports = {
  overview: [
    {
      type: "doc",
      id: "overview/mia_platform_overview",
    },
    {
      type: "doc",
      id: "info/how_to_install",
    },
    {
      type: "doc",
      id: "info/bug_policy",
    },
    {
      type: "doc",
      id: "info/supported_browser",
    },
    {
      type: "doc",
      id: "info/oss",
    },
    {
      type: "doc",
      id: "info/subprocessor",
    },
    {
      type: "doc",
      id: "info/mia_service_level_agreement",
    },
    {
      type: "doc",
      id: "info/audit_process",
    },
    {
      collapsed: true,
      type: "category",
      label: "Release notes",
      items: [
        "release_notes/release_notes",
        {
          collapsed: false,
          type: "category",
          label: "Versions",
          items: [
            {
              type: "doc",
              id: "release_notes/v6.1.0",
            },
            {
              type: "doc",
              id: "release_notes/platform_6-0-0_releasenotes",
            },
          ],
        },
        {
          type: "doc",
          id: "info/version_policy",
        },
        {
          type: "doc",
          id: "info/migrate_from_v4_to_v5",
        },
        {
          type: "doc",
          id: "release_notes/support-policy",
        },
      ],
    },
  ],
  devOpsConsole: [
    {
      collapsed: true,
      type: "category",
      label: "Overview",
      items: [
        {
          type: "doc",
          id: "development_suite/overview-dev-suite",
        },
        {
          type: "doc",
          id: "development_suite/api-console/api-design/quick_rest_api",
        },
      ],
    },
    {
      collapsed: true,
      type: "category",
      label: "Setup infrastructure",
      items: [
        {
          type: "doc",
          id: "development_suite/set-up-infrastructure/create-project",
        },
        {
          type: "doc",
          id: "development_suite/Console levels and permits management",
        },
        {
          type: "doc",
          id: "development_suite/set-up-infrastructure/auth-0-setup",
        },
        {
          type: "doc",
          id: "development_suite/api-console/api-design/how_to_enable_auth0",
        },
        {
          type: "doc",
          id: "development_suite/set-up-infrastructure/env-var",
        },
      ],
    },
    {
      collapsed: true,
      type: "category",
      label: "Design your projects",
      items: [
        {
          type: "doc",
          id: "development_suite/api-console/api-design/crud_advanced",
        },
        {
          collapsed: true,
          type: "category",
          label: "Create Services",
          items: [
            {
              type: "doc",
              id: "development_suite/api-console/api-design/services",
            },
            {
              type: "doc",
              id:
                "development_suite/api-console/api-design/microservice-memory-resources",
            },
            {
              type: "doc",
              id:
                "development_suite/api-console/api-design/microservices-cpu-resources",
            },
            {
              type: "doc",
              id:
                "development_suite/api-console/api-design/custom_microservice_get_started",
            },
            {
              type: "doc",
              id: "development_suite/api-console/api-design/templates_conf",
            },
          ],
        },
        {
          type: "doc",
          id: "development_suite/api-console/api-design/jobs-cronjob",
        },
        {
          type: "doc",
          id: "development_suite/api-console/api-design/decorators",
        },
        {
          type: "doc",
          id: "development_suite/api-console/api-design/endpoints",
        },
      ],
    },
    {
      collapsed: true,
      type: "category",
      label: "Deploy what you have created",
      items: [
        {
          type: "doc",
          id: "development_suite/deploy/deploy",
        },
        {
          type: "doc",
          id: "development_suite/deploy/configuration",
        },
      ],
    },
    {
      collapsed: true,
      type: "category",
      label: "Advance configuration",
      items: [
        {
          collapsed: true,
          type: "category",
          label: "DevOps Console Configuration",
          items: [
            {
              type: "doc",
              id:
                "development_suite/api-console/advanced-section/dev-console-config/advanced_name_core",
            },
            {
              type: "doc",
              id:
                "development_suite/api-console/advanced-section/dev-console-config/replicas",
            },
          ],
        },
        {
          collapsed: true,
          type: "category",
          label: "API Gateway",
          items: [
            {
              type: "doc",
              id:
                "development_suite/api-console/advanced-section/api-gateway/config-map",
            },
            {
              type: "doc",
              id:
                "development_suite/api-console/advanced-section/api-gateway/request-size",
            },
          ],
        },

        {
          type: "doc",
          id:
            "development_suite/api-console/advanced-section/authorization-service/configuration",
        },
        {
          type: "doc",
          id:
            "development_suite/api-console/advanced-section/auth0-client/configuration",
        },
      ],
    },
    {
      collapsed: true,
      type: "category",
      label: "Debug",
      items: [
        {
          type: "doc",
          id: "development_suite/debugging/telepresence",
        },
      ],
    },
    {
      collapsed: true,
      type: "category",
      label: "Log & monitor your Pods",
      items: [
        {
          type: "doc",
          id: "development_suite/monitoring/monitoring",
        },
        {
          type: "doc",
          id: "development_suite/monitoring/configuration",
        },
      ],
    },
    {
      collapsed: true,
      type: "category",
      label: "API Portal: Test & documentation",
      items: [
        {
          type: "doc",
          id: "development_suite/api-portal/api-documentations",
        },
        {
          type: "doc",
          id: "development_suite/api-portal/swagger_conf",
        },
        {
          type: "doc",
          id:
            "development_suite/api-console/advanced-section/swagger-aggregator/configuration",
        },
      ],
    },
  ],
  marketplace: [
    {
      type: "doc",
      id: "marketplace/overview_marketplace",
    },
    {
      collapsed: false,
      type: "category",
      label: "Templates",
      items: [
        {
          type: "doc",
          id: "marketplace/templates/mia_templates",
        },
        {
          type: "doc",
          id: "marketplace/templates/template_create",
        },
      ],
    },
    "marketplace/examples/mia_examples",
    {
      collapsed: false,
      type: "category",
      label: "Libraries",
      items: [
        {
          collapsed: true,
          type: "category",
          label: "Custom Microservices",
          items: [
            {
              type: "doc",
              id: "libraries/overview_service_libraries",
            },
            {type: "doc", id: "libraries/create-new-library"},
          ],
        },
        {
          collapsed: true,
          type: "category",
          label: "Kafka",
          items: [
            {
              type: "doc",
              id: "libraries/kafka2rest",
            },
            {
              type: "doc",
              id: "libraries/rest2kafka",
            },
          ],
        },
      ],
    },
  ],
  cms: [
    {
      type: "doc",
      id: "business_suite/overview-business-suite",
    },
    {
      collapsed: false,
      type: "category",
      label: "CMS",
      items: [
        {
          type: "doc",
          id: "business_suite/guide_cms",
        },
        {
          type: "doc",
          id: "development_suite/api-console/api-design/api_console_configcms",
        },
        {
          type: "doc",
          id: "business_suite/conf_cms",
        },
        {
          type: "doc",
          id: "business_suite/colorare_il_cms",
        },
        {
          type: "doc",
          id: "business_suite/update_cms",
        },
        {
          type: "doc",
          id: "business_suite/custom-frontends-integration-CMS",
        },
      ],
    },
    {
      collapsed: false,
      type: "category",
      label: "Analytics",
      items: [
        {
          type: "doc",
          id:
            "development_suite/api-console/api-design/api_console_configanalytics",
        },
        {
          type: "doc",
          id: "business_suite/conf_analytics",
        },
      ],
    },
    {
      collapsed: false,
      type: "category",
      label: "Data visualization",
      items: [
        {
          type: "doc",
          id: "business_suite/data-visualization",
        },
        {
          type: "doc",
          id: "business_suite/timeline",
        },
      ],
    },
  ],
  fastData: [{type: "doc", id: "fast_data/overview"}],
  microservices_ecosystem: [
    {
      type: "doc",
      id: "runtime_suite/overview-runtime-suite",
    },
    {
      collapsed: false,
      type: "category",
      label: "API & Microservice Ecosystem",
      items: [
        {
          type: "doc",
          id: "runtime_suite/api-gateway",
        },
        {
          type: "doc",
          id: "runtime_suite/microservice-gateway",
        },
        {
          type: "doc",
          id: "runtime_suite/crud-service",
        },

        {
          collapsed: true,
          type: "category",
          label: "File Manager Service",
          items: [
            {
              type: "doc",
              id: "runtime_suite/files-service/usage",
            },
            {
              type: "doc",
              id: "runtime_suite/files-service/configuration",
            },
          ],
        },
        {
          collapsed: true,
          type: "category",
          label: "Notifications",
          items: [
            {
              type: "doc",
              id: "runtime_suite/mail-notification",
            },
            {
              type: "doc",
              id: "runtime_suite/notifications-manager",
            },
          ],
        },
        {
          type: "doc",
          id: "runtime_suite/sdk_ios",
        },
        {
          type: "doc",
          id: "runtime_suite/sdk_android",
        },
        {
          type: "doc",
          id: "runtime_suite/pdf-service",
        },
        {
          collapsed: true,
          type: "category",
          label: "Doctor Service",
          items: [
            {
              type: "doc",
              id: "runtime_suite/doctor-service/services_status",
            },
            {
              type: "doc",
              id: "runtime_suite/doctor-service/configure_doctor_service",
            },
          ],
        },
        {
          collapsed: true,
          type: "category",
          label: "Data Management",
          items: [
            {
              type: "doc",
              id: "runtime_suite/sql-reader",
            },
            {
              type: "doc",
              id: "runtime_suite/event-source-management",
            },
            {
              type: "doc",
              id: "runtime_suite/secure-data-exchange-service",
            },
            {
              type: "doc",
              id: "runtime_suite/soap-to-rest",
            },
            {
              type: "doc",
              id: "runtime_suite/mongo2kafka",
            },
          ],
        },
        {
          type: "doc",
          id: "runtime_suite/cron",
        },
        {
          collapsed: true,
          type: "category",
          label: "Mongo DB Reader",
          items: [
            {
              type: "doc",
              id: "runtime_suite/mongodb-reader/service-configuration",
            },
            {
              type: "doc",
              id: "runtime_suite/mongodb-reader/filters",
            },
            {
              type: "doc",
              id: "runtime_suite/mongodb-reader/aclrows",
            },
          ],
        },
        {
          collapsed: true,
          type: "category",
          label: "Timer Service",
          items: [
            {
              type: "doc",
              id: "runtime_suite/timer-service/time_service_introduction",
            },
            {
              type: "doc",
              id: "runtime_suite/timer-service/configuration",
            },
            {
              type: "doc",
              id: "runtime_suite/timer-service/usage",
            },
          ],
        },
        {
          collapsed: true,
          type: "category",
          label: "Flow Manager",
          items: [
            {
              type: "doc",
              id: "runtime_suite/flow-manager/index",
            },
            {
              type: "doc",
              id: "runtime_suite/flow-manager/how-it-works",
            },
            {
              type: "doc",
              id: "runtime_suite/flow-manager/configuration",
            },
          ],
        },
        {
          type: "doc",
          id: "runtime_suite/function-service/configuration",
        },
      ],
    },
    {
      collapsed: true,
      type: "category",
      label: "Privacy & Security",
      items: [
        {
          type: "doc",
          id: "runtime_suite/auth-service",
        },
        {
          type: "doc",
          id: "runtime_suite/user-service",
        },
        {
          type: "doc",
          id: "runtime_suite/acl-service",
        },
        {
          type: "doc",
          id: "runtime_suite/session-manager",
        },
        {
          collapsed: true,
          type: "category",
          label: "Auth0 Client",
          items: [
            {
              type: "doc",
              id: "runtime_suite/auth0-client/how_to_use",
            },
            {
              type: "doc",
              id: "runtime_suite/auth0-client/configuration",
            },
          ],
        },
        {
          collapsed: true,
          type: "category",
          label: "Authorization Service",
          items: [
            {
              type: "doc",
              id: "runtime_suite/authorization-service/how_to_use",
            },
            {
              type: "doc",
              id: "runtime_suite/authorization-service/configuration",
            },
          ],
        },
        {
          collapsed: true,
          type: "category",
          label: "Client Credentials",
          items: [
            {
              type: "doc",
              id: "runtime_suite/client-credentials/how-to-use",
            },
            {
              type: "doc",
              id: "runtime_suite/client-credentials/configuration",
            },
            {
              type: "doc",
              id:
                "runtime_suite/client-credentials/jwt-private-public-key-generation",
            },
          ],
        },
      ],
    },
  ],
  learn: [
    {
      collapsed: false,
      type: "category",
      label: "Create Services",
      items: [
        {
          type: "doc",
          id: "development_suite/api-console/api-design/plugin_baas_4",
        },
      ],
    },
    {
      collapsed: false,
      type: "category",
      label: "Guidelines",
      items: [
        {
          type: "doc",
          id: "dev_ops_guide/git_vademecum",
        },
        {
          type: "doc",
          id: "guidelines/rest_api_vademecum",
        },

        {
          type: "doc",
          id: "guidelines/microservice_vademecum",
        },
        {
          type: "doc",
          id: "guidelines/communication_between_services_mp4",
        },
        {
          type: "doc",
          id: "guidelines/docker_vademecum",
        },
        {
          type: "doc",
          id:
            "development_suite/monitoring-dashboard/dev_ops_guide/business_continuity",
        },
        {
          type: "doc",
          id:
            "development_suite/monitoring-dashboard/dev_ops_guide/disaster_recovery",
        },
        {
          type: "doc",
          id:
            "development_suite/monitoring-dashboard/dev_ops_guide/autoscaling",
        },
        {
          type: "doc",
          id: "development_suite/monitoring-dashboard/dev_ops_guide/log",
        },
        {
          type: "doc",
          id: "development_suite/performance-test/performance-test",
        },
      ],
    },
  ],
};
