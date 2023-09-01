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

];


app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('index', { tableData });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
