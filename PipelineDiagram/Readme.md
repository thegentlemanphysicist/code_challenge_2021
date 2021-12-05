Pipeline Tech Choices

Build and deployment configurations are stored in bc.yaml and dc.yaml openshift templates.  One for each component (frontend, api, database, database backup). Since this a pipeline assignment I've left it app agnostic, but we ca use (React, Express, Postgres) as a place holder. As a potential impvement we could convert these templates to Helm charts. 

The workflows are scripted in ansible, allowing relevant parameters to be passed into the templates 