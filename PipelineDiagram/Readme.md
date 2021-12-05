Pipeline Tech Choices

Build and deployment configurations are stored in bc.yaml and dc.yaml openshift templates.  One for each component (frontend, api, database, database backup). Since this a pipeline assignment I've left it app agnostic, but we ca use (React, Express, Postgres) as a place holder. As a potential impvement we could convert these templates to Helm charts. The templates are used to build docker images that are run inside openshift pods.  They also configure the routes between these pods.

The workflows are scripted in ansible, allowing relevant parameters to be passed into the templates.

The workflows are triggered by github actions ( a simple release based deployment action was set up in the coding excersize attached to this project).  Github actions are also used for linting and unit testing.  Security and stability can be improved by implenting branch protection, this is a built in feature of github, not an action.

The roll back strategy involves retriggering the deployment to prod using a previous, stable image tagged by release.