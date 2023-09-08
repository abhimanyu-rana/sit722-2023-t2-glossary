const express = require('express');
const app = express();
const port = 3001;


const tableData = [
  { id: 1, term: 'Infrastructure as Code (IaC)', description: 'IaC revolves around utilizing code and configuration files to handle the setup and allocation of infrastructure resources. This streamlines the process of deploying and expanding resources in a uniform and automated manner.', references: '“What is Infrastructure as Code (IaC)?,” www.redhat.com. https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac#:~:text=Infrastructure%20as%20Code%20(IaC)%20is' },

  { id: 2, term: 'Kubernetes', description: 'Kubernetes, an open-source tool for orchestrating containers, takes care of the automatic management, scaling, and oversight of applications that are containerized.', references: '“Overview,” Kubernetes. https://kubernetes.io/docs/concepts/overview/#:~:text=Kubernetes%20is%20a%20portable%2C%20extensible' },

  { id: 3, term: 'Version Control', description: 'Version control systematically monitors and administers changes in code and files, fostering collaborative development and preserving a chronological record of code modifications.', references: 'Atlassian, “What is version control | Atlassian Git Tutorial,” Atlassian. https://www.atlassian.com/git/tutorials/what-is-version-control#:~:text=Version%20control%2C%20also%20known%20as' },

  { id: 4, term: 'Continuous Integration (CI)', description: 'CI streamlines the process of merging code into a common repository multiple times a day, ensuring frequent and early verification through automated testing.' , references: '“What is Continuous Integration? – Amazon Web Services,” Amazon Web Services, Inc. https://aws.amazon.com/devops/continuous-integration/#:~:text=Continuous%20integration%20refers%20to%20the' },

  { id: 5, term: 'Microservices', description: 'The concept of microservices entails a design strategy wherein an application is deconstructed into separate, self-governing services that communicate via APIs. This methodology provides multiple advantages, including increased adaptability, enhanced scalability, and streamlined maintenance for complex systems.', references: '“What are Microservices? | AWS,” Amazon Web Services, Inc. https://aws.amazon.com/microservices/#:~:text=Microservices%20are%20an%20architectural%20and' },

  { id: 6, term: 'DevOps Culture', description: 'The DevOps Culture signifies a cooperative and synchronized approach that promotes efficient collaboration between development and operations groups. This culture underscores the importance of transparent communication, joint responsibilities, and a firm dedication to providing software products of superior quality.', references: 'Atlassian, “DevOps Culture,” Atlassian. https://www.atlassian.com/devops/what-is-devops/devops-culture#:~:text=DevOps%20Trends%20Survey-' },

  { id: 7, term: 'Deployment Pipeline', description: 'A deployment pipeline encompasses automated phases that span from initial development to final production deployment, covering testing, packaging, and the final rollout.', references: '“What is a Deployment Pipeline?,” PagerDuty. https://www.pagerduty.com/resources/learn/what-is-a-deployment-pipeline/#:~:text=In%20software%20development%2C%20a%20deployment' },

  { id: 8, term: 'Docker', description: 'Docker, a platform for containerization, encapsulates applications along with their dependencies in self-contained units known as containers, ensuring uniformity across different computing environments.', references: '“What is Docker? | AWS,” Amazon Web Services, Inc. https://aws.amazon.com/docker/#:~:text=Docker%20is%20a%20software%20platform' },

  { id: 9, term: 'Continuous Delivery (CD)', description: 'CD automates the process of releasing code modifications upon successful integration, enabling consistent and frequent software releases that can be relied upon.', references: 'Atlassian, “Continuous Delivery - Get Started with CI/CD,” Atlassian. https://www.atlassian.com/continuous-delivery#:~:text=Continuous%20delivery%20is%20an%20approach (accessed Aug. 10, 2023).' },

  { id: 10, term: 'Incident Management', description: 'Incident Management involves a set of procedures and methods designed to handle and rectify disruptions or occurrences within the production environment. Its core aim is to promptly reinstate normal operations while minimizing any negative impact on users.', references: 'Asana, “What is Incident Management? Tips and Best Practices [2023] • Asana,” Asana. https://asana.com/resources/incident-management# (accessed Aug. 10, 2023).' },
 
  { id: 11, term: 'Infrastructure as a Service (IaaS)', description: 'IaaS represents a cloud computing service that delivers virtualized IT resources via the internet. It grants on-demand access to servers, storage, networking, and other infrastructure elements, eliminating the need for physical hardware while enabling scalable resource provisioning.', references: 'M. Boisvert, “What is IaaS? Infrastructure as a Service Definition,” SearchCloudComputing, Nov. 2022. https://www.techtarget.com/searchcloudcomputing/definition/Infrastructure-as-a-Service-IaaS' },

  { id: 12, term: 'Agile Manifesto', description: 'The Agile Manifesto comprises a set of fundamental principles and values guiding agile software development. It prioritizes customer collaboration, adaptability to change, and the regular delivery of functional software in short development cycles.', references: '“What Is the Agile Manifesto? | Wrike Agile Guide,” www.wrike.com. https://www.wrike.com/agile-guide/agile-manifesto/' },

  { id: 13, term: 'Git', description: 'Git stands as a distributed version control system extensively employed in software development. It facilitates collaboration among multiple developers by meticulously tracking code changes and managing various versions efficiently.', references: 'A. Panda, “Understanding GIT: Meaning, Definition and Purpose,” myHQ Digest, Jan. 13, 2023. https://digest.myhq.in/git-full-form/#:~:text=In%20conclusion%2C%20the%20GIT%20full (accessed Sep. 01, 2023).' },

  { id: 14, term: 'Sprint', description: 'In the context of agile development, a sprint is a defined, time-limited iteration during which a specific set of tasks is completed. These sprints, typically spanning two to four weeks, result in a potentially deployable product increment and are integral to the Scrum methodology.' , references: 'V.-L. Brunskill, “What is a Sprint (Agile Software Development)? Definition from WhatIs.com,” SearchSoftwareQuality. https://www.techtarget.com/searchsoftwarequality/definition/Scrum-sprint' },

  { id: 15, term: 'Code Repository', description: 'A code repository, often known as a repo, serves as a centralized location where source code is stored, organized, and versioned. It fosters collaboration among developers and maintains an audit trail of code alterations.', references: '“What is a Source Code Repository | Sonatype,” www.sonatype.com. https://www.sonatype.com/launchpad/what-are-code-repositories' },

  { id: 16, term: 'Backlog', description: 'A backlog constitutes a prioritized inventory of tasks or user stories that demand attention within a software project. It serves as a dynamic blueprint, with items transitioning into sprints based on their importance and complexity.', references: 'D. Radigan, “Product Backlog Grooming,” Atlassian, 2019. https://www.atlassian.com/agile/scrum/backlogs' },

  { id: 17, term: 'User Acceptance Testing (UAT)', description: 'UAT denotes the concluding phase of software testing wherein end-users assess the software\'s alignment with their requirements and functionality. It serves as the final validation stage before production deployment.', references: '“What is User Acceptance Testing (UAT): A Complete Guide,” Software Testing Help, Oct. 02, 2014. https://www.softwaretestinghelp.com/what-is-user-acceptance-testing-uat/#:~:text=User%20Acceptance%20Testing%20(UAT)%2C%20also%20known%20as%20beta%20or' },

  { id: 18, term: 'Load Balancing', description: 'Load balancing involves the technique of evenly distributing network traffic or workloads across multiple servers or resources. Its aim is to boost application performance, availability, and reliability by averting overburdening of any single server.', references: '“What is Load Balancing? - Load Balancing Algorithm Explained - AWS,” Amazon Web Services, Inc. https://aws.amazon.com/what-is/load-balancing/#:~:text=Load%20balancing%20is%20the%20method' },

  { id: 19, term: 'Cloud Native', description: 'Cloud-native signifies the approach of developing and designing applications optimized explicitly for cloud environments. It leverages microservices architecture, containerization, and dynamic scaling to harness the full benefits of cloud computing.', references: '“What is Cloud Native? - Everything you need to know - AWS,” Amazon Web Services, Inc. https://aws.amazon.com/what-is/cloud-native/#:~:text=The%20term%20cloud%20native%20refers (accessed Sep. 01, 2023)' },

  { id: 20, term: 'Root Cause Analysis (RCA)', description: 'RCA is a systematic investigative process employed to pinpoint the fundamental causes of issues or incidents in software systems. It aids in preventing the recurrence of similar problems by addressing the core underlying factors.', references: 'American Society for Quality, “What is root cause analysis (RCA)?,” Asq.org, 2019. https://asq.org/quality-resources/root-cause-analysis' },

  { id: 21, term: 'Scalability', description: 'Scalability pertains to a systems capacity to handle increased workloads and growing demands while maintaining performance, typically by adding more resources or nodes as needed.', references: '“Scalability,” Investopedia. https://www.investopedia.com/terms/s/scalability.asp#:~:text=Scalability%20refers%20to%20the%20ability' },

  { id: 22, term: 'Immutable Infrastructure', description: 'Immutable infrastructure is an approach where instead of making changes to existing infrastructure, the entire infrastructure, including servers and their configurations, is replaced with new versions. This approach ensures uniformity and reduces the risk associated with modifying configurations.', references: '“What Is Immutable Infrastructure? | DigitalOcean,” www.digitalocean.com. https://www.digitalocean.com/community/tutorials/what-is-immutable-infrastructure' },

{ id: 23, term: 'Serverless Computing', description: 'Serverless computing is a cloud computing model in which cloud providers handle the underlying infrastructure, allowing developers to concentrate solely on writing application code. It eliminates the need for server management.', references: '“What Is Serverless Computing? | Serverless Definition | Cloudflare UK,” Cloudflare. Available: https://www.cloudflare.com/en-gb/learning/serverless/what-is-serverless/' },

  { id: 24, term: 'API Gateway', description: 'An API Gateway is a specialized server that functions as a front-end for APIs, managing tasks such as receiving API requests, enforcing security measures and rate limiting, forwarding requests to the appropriate back-end service, and returning responses to the requester.' , references: '“What Is an API Gateway? A Quick Learn Guide | NGINX Learning,” NGINX. https://www.nginx.com/learn/api-gateway/#:~:text=An%20API%20gateway%20is%20a (accessed Sep. 08, 2023).' },

  { id: 25, term: 'Container Orchestration', description: 'Container orchestration entails automating the deployment, scaling, and administration of containerized applications. Kubernetes is a widely used tool for orchestrating containers.', references: '“What is container orchestration?,” www.redhat.com. https://www.redhat.com/en/topics/containers/what-is-container-orchestration' },

  { id: 26, term: 'Infrastructure Automation', description: 'Infrastructure automation is the practice of utilizing code and automation tools to provision and manage infrastructure resources, enhancing consistency and reducing manual configuration efforts.', references: '“Infrastructure Automation - Running Containerized Microservices on AWS,” docs.aws.amazon.com. https://docs.aws.amazon.com/whitepapers/latest/running-containerized-microservices/infrastructure-automation.html' },

  { id: 27, term: 'Blue-Green Deployment', description: 'Blue-Green Deployment is a strategy for releasing software updates by maintaining two identical environments, one for the current version (blue) and the other for the new version (green). This approach facilitates updates without causing downtime.', references: '“What is blue green deployment?,” www.redhat.com. https://www.redhat.com/en/topics/devops/what-is-blue-green-deployment' },

  { id: 28, term: 'Zero Downtime Deployment', description: 'Zero downtime deployment is a technique for updating or deploying software without causing interruptions or downtime for end-users. It is often achieved through methods like load balancing and gradual rollout.', references: '“What Is Zero Downtime Deployment?,” www.pingidentity.com. https://www.pingidentity.com/en/resources/blog/post/what-is-zero-downtime-deployment.html (accessed Sep. 08, 2023).' },

  { id: 29, term: 'Latency', description: 'Latency refers to the time delay experienced between sending a request and receiving a response. In software and network contexts, it represents the time taken for data to travel from its source to its destination.', references: '“What is Latency? How to Reduce Latency? | Fortinet,” Fortinet, 2023. https://www.fortinet.com/resources/cyberglossary/latency#:~:text=Latency%20Definition (accessed Sep. 08, 2023).' },

  { id: 30, term: 'High Availability', description: 'High availability (HA) is an architectural approach that ensures a system remains operational and accessible to users even in the face of hardware or software failures. It typically involves redundancy and failover mechanisms to maintain continuous service availability.', references: 'S. C. Apps, “What Is High Availability? Definition & How It Works,” Spanning, Mar. 21, 2023. https://spanning.com/blog/high-availability/.' },
 
  { id: 31, term: 'Infrastructure Orchestration', description: 'Infrastructure orchestration refers to the automated arrangement, coordination, and management of various infrastructure components and resources to efficiently deliver services and applications.', references: 'S. Work, “What is IT Infrastructure Orchestration,” Pliant - The Orchestration Platform, Oct. 27, 2022. https://pliant.io/what-is-it-infrastructure-orchestration/' },

  { id: 32, term: 'Chaos Engineering', description: 'Chaos engineering is a practice of intentionally injecting controlled failures and chaos into a system to test its resilience and identify vulnerabilities. It helps improve system reliability and availability.', references: '“What Is Chaos Engineering? | OpenText,” www.microfocus.com. https://www.microfocus.com/en-us/what-is/chaos-engineering (accessed Sep. 08, 2023).' },

  { id: 33, term: 'Continuous Deployment (CD)', description: 'CD is an extension of continuous delivery, where code changes are automatically deployed to production after passing automated tests and checks.', references: '“What is continuous deployment? | IBM,” www.ibm.com. https://www.ibm.com/topics/continuous-deployment#:~:text=Continuous%20deployment%20is%20a%20strategy (accessed Sep. 08, 2023).' },

  { id: 34, term: 'Change Management', description: 'Change management is a systematic process for managing and controlling changes to infrastructure and software to ensure that they are implemented smoothly and with minimal disruption.' , references: 'wrike, “What is Change Management in Project Management?,” Wrike. https://www.wrike.com/project-management-guide/faq/what-is-change-management-in-project-management/' },

  { id: 35, term: 'Failover', description: 'Failover is a high availability technique where traffic is automatically redirected to a backup system or resource in the event of a primary system failure, ensuring uninterrupted service.', references: '“What is a failover? Definition and related FAQs,” www.druva.com. https://www.druva.com/glossary/what-is-a-failover-definition-and-related-faqs#:~:text=Failover%20is%20the%20ability%20to' },

  { id: 36, term: 'Monitoring and Alerting', description: 'Monitoring involves the continuous tracking of system performance and availability, while alerting involves notifying relevant parties when predefined thresholds or issues are detected.', references: '“Designing a metrics monitoring and alerting system,” www.statcan.gc.ca. https://www.statcan.gc.ca/en/data-science/network/monitoring-alerting-system (accessed Sep. 08, 2023).' },

  { id: 37, term: 'Service Level Agreement (SLA)', description: 'An SLA is a formal agreement that outlines the level of service a provider guarantees to deliver to its customers. It typically includes performance metrics and expectations.', references: '“What Is a Service Level Agreement (SLA)? And How To Write One,” Coursera. https://www.coursera.org/articles/sla' },

  { id: 38, term: 'Log Aggregation', description: ' Log aggregation is the process of collecting, centralizing, and storing log data from various sources to facilitate troubleshooting, analysis, and auditing.', references: 'Datadog, “Log Aggregation: What It Is & How It Works | Datadog,” Log Aggregation: What It Is & How It Works, Aug. 03, 2021. https://www.datadoghq.com/knowledge-center/log-aggregation/#:~:text=Log%20aggregation%20is%20the%20process' },

  { id: 39, term: 'Capacity Planning', description: 'Capacity planning involves forecasting and allocating resources to meet current and future demands, ensuring that systems can handle expected workloads.', references: '“What Is Capacity Planning? Definition, Methodologies, Benefits,” Simplilearn.com, Mar. 29, 2021. https://www.simplilearn.com/capacity-planning-article#:~:text=A%20capacity%20planning%20process%20involves (accessed Apr. 14, 2023).' },

  { id: 40, term: 'Service Level Objective (SLO)', description: 'SLO is a specific, measurable target that defines the level of service quality and performance that a service provider aims to deliver to customers.', references: 'Atlassian, “SLA vs. SLO vs. SLI - Differences,” Atlassian. https://www.atlassian.com/incident-management/kpis/sla-vs-slo-vs-sli#:~:text=What%20is%20an%20SLO%3F (accessed Sep. 08, 2023).' },
 
];


app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('index', { tableData });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
