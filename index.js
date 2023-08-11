const express = require('express');
const app = express();
const port = 3001;


const tableData = [
  { id: 1, term: 'Infrastructure as Code (IaC)', description: 'IaC revolves around utilizing code and configuration files to handle the setup and allocation of infrastructure resources. This streamlines the process of deploying and expanding resources in a uniform and automated manner.', references: '“What is Infrastructure as Code (IaC)?,” www.redhat.com. https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac#:~:text=Infrastructure%20as%20Code%20(IaC)%20is' },

  { id: 2, term: 'Kubernetes', description: 'Kubernetes, an open-source tool for orchestrating containers, takes care of the automatic management, scaling, and oversight of applications that are containerized.', references: '“Overview,” Kubernetes. https://kubernetes.io/docs/concepts/overview/#:~:text=Kubernetes%20is%20a%20portable%2C%20extensible' },

  { id: 3, term: 'Version Control', description: 'Version control systematically monitors and administers changes in code and files, fostering collaborative development and preserving a chronological record of code modifications.', references: '[1]Atlassian, “What is version control | Atlassian Git Tutorial,” Atlassian. https://www.atlassian.com/git/tutorials/what-is-version-control#:~:text=Version%20control%2C%20also%20known%20as' },

  { id: 4, term: 'Continuous Integration (CI)', description: 'CI streamlines the process of merging code into a common repository multiple times a day, ensuring frequent and early verification through automated testing.' , references: '[1]“What is Continuous Integration? – Amazon Web Services,” Amazon Web Services, Inc. https://aws.amazon.com/devops/continuous-integration/#:~:text=Continuous%20integration%20refers%20to%20the' },

  { id: 5, term: 'Microservices', description: 'The concept of microservices entails a design strategy wherein an application is deconstructed into separate, self-governing services that communicate via APIs. This methodology provides multiple advantages, including increased adaptability, enhanced scalability, and streamlined maintenance for complex systems.', references: '[1]“What are Microservices? | AWS,” Amazon Web Services, Inc. https://aws.amazon.com/microservices/#:~:text=Microservices%20are%20an%20architectural%20and' },

  { id: 6, term: 'DevOps Culture:', description: 'The DevOps Culture signifies a cooperative and synchronized approach that promotes efficient collaboration between development and operations groups. This culture underscores the importance of transparent communication, joint responsibilities, and a firm dedication to providing software products of superior quality.', references: '[1]Atlassian, “DevOps Culture,” Atlassian. https://www.atlassian.com/devops/what-is-devops/devops-culture#:~:text=DevOps%20Trends%20Survey-' },

  { id: 7, term: 'Deployment Pipeline', description: 'A deployment pipeline encompasses automated phases that span from initial development to final production deployment, covering testing, packaging, and the final rollout.', references: '[1]“What is a Deployment Pipeline?,” PagerDuty. https://www.pagerduty.com/resources/learn/what-is-a-deployment-pipeline/#:~:text=In%20software%20development%2C%20a%20deployment' },

  { id: 8, term: 'Docker', description: 'Docker, a platform for containerization, encapsulates applications along with their dependencies in self-contained units known as containers, ensuring uniformity across different computing environments.', references: '[1]“What is Docker? | AWS,” Amazon Web Services, Inc. https://aws.amazon.com/docker/#:~:text=Docker%20is%20a%20software%20platform' },

  { id: 9, term: 'Continuous Delivery (CD)', description: 'CD automates the process of releasing code modifications upon successful integration, enabling consistent and frequent software releases that can be relied upon.', references: '[1]Atlassian, “Continuous Delivery - Get Started with CI/CD,” Atlassian. https://www.atlassian.com/continuous-delivery#:~:text=Continuous%20delivery%20is%20an%20approach (accessed Aug. 10, 2023).' },

  { id: 10, term: 'Incident Management', description: 'Incident Management involves a set of procedures and methods designed to handle and rectify disruptions or occurrences within the production environment. Its core aim is to promptly reinstate normal operations while minimizing any negative impact on users.', references: '[1]Asana, “What is Incident Management? Tips and Best Practices [2023] • Asana,” Asana. https://asana.com/resources/incident-management# (accessed Aug. 10, 2023).' },

];


app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('index', { tableData });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
