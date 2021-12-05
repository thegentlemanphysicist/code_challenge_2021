# Code challenge 2021:
This is a repos for the IS 27 coding challenge.

There will be 3 artifacts that will be included in this coding challenge

## 1) CI/CD pipleline design

The pipeline image is [Here](PipelineDiagram/pipeline.drawio.png).  With further reading included [PipelineDiagram/Readme.md] (PipelineDiagram/Readme.md).  I desided to include it in a side document because the diagram was becoming crowded.

## 2) A running deployment of a part of the pipeline – 

The app being deployed is a simple dockerized react app.  Local development can be managed through the usual `docker-compose build` and `docker-compose up` command on a local machine.

This a GitHub actions pipeline.  On creation of a release, a user with write access can trigger a deployment of a react app to heroku.  [Live App](https://jon-code-challenge.herokuapp.com/)

There are two actions.  

### Manifest generation

The [Manifest Generation](/.github/workflows/manifest-genration.yml) action runs whenever a release is created and appends the [manifest.md](/manifest.md) with the folloing release metadata: Release number, Release date, Release publisher.  More fields could be added and we could modify fields in the project's `package.json`, but this is purely an MVP.

### Build and Deployment

The [Deployment](.github/workflows/manifest-genration.yml) action is manually triggered and requires a release tag as input (v1.0.2 for example).  This will build and deploy the Dockerfile to Heroku. 

Currently there are no checks in place ensuring valid release numbers, but github actions can be tweaked to insure the proper behaviour.  

This allows a very simple roll back stratgy of simply building and deploying an older release

## 3) SRE Implementation Strategy

The SRE strategy can be found in the docs folder [Here](docs/SREImplementationStrategyDocument.md)