An incident revealed a monitoring solution was necessary to improve the team’s estimated time to detection (ETTD). Describe in a free text format a recovery plan that will initiate project work to mitigate this large source of risk. The plan must include a recommended approach to monitoring the health and the

performance of a sample application, which includes a list of metrics/signals that should be collected in the production environment. Provide an explanation for what each metric is for, how they might be used to create a Service Level Indicator (SLI) and what tool/technology/approach can be used to collect each metric.

Lastly, include a list of recommended Service Level Objectives (SLO) into the plan that is informed by the SLI work in the previous task. For this exercise, the assumption should be made that this is an active production environment with a high user load and a low tolerance for downtime. The plan should clearly outline prioritized reliability work and explain what steps can be automated. Include considerations for potential pain-points during the implementation of the monitoring solution and how they can possibly be mitigated to minimize impact on end-users and to reduce service disruption.


# Step Zero: Make sure the app is running

If the incident is ongoing, fix it.  Copy any relevant logs that may not persist after a redeployment, but make certain the app is running and as stable as possible.  Since our government apps are tied into the openshift platform jumping onto Rocket chat and checking in to see if other teams are impacted is fairly critical.  Especially for a service as integrated as say Keycloak.

# Step One: Configure Sysdig

The first step I would implement is configuring the Sysdig monitoring provided through the platform services.  A simple and somewhat obvious SLI is the number of healthy pods present in the prod environment.  Sysdig alows users to monitor these pods and configure alerts when the pods that host the app drop below a minimum number (usually 3 on the horizontally scaled apps I've worked with.)  It is also advisable to set usage alerts one the pods below the failure point.  I.e. if the memory limit on a pod is one Gig, a medium priority alert when memory consumption hits 0.5 Gigs may be advised.

Logging is also an important source for a service level indicator.  Tracking numbers of warnings and errors produced by an application over time may be useful. I have used Kibana as it allows us to display logs in an easy to interpret way.  Setting a goal of decreasing number of errors over time is a useful SLO as well.

# Step Two:  Service Level Objectives

### SLO i: Ensure there is always someone on duty

All the alerts and monitorin in the world are worth nothing if no one is around to pick up the phone.
A critiacl SLO is geting the team to the point of having someone on duty 24/7 who can tackle the unforseable emergencies.  If our service is a critical piece of infrastructure, we need to work with our business stakeholders so they understand that and provide the resources needed for a person to be accessible and on duty.

### SLO ii: Prevent knowledge silos of critical information by setting up post even post mortem meetings.

Tear down knowledge silos.  Make sure as many team members as possible are able to recover from outages.  This can be done with proper documentation of recovery actions.  Each time there is an outage the team should have a postmortem once it is resolved. The goals of which are 

- create a plan to prevent it from hapening again.
- set up some kind of monitoring that alerts the team if it does.
- document the steps taken to resolve it.

### SLO iii: Set goals for getting client teams migrated away from a depracated product.

Over the past two years there have been several large scale tech migrations in BC public service.  Openshift 3 to 4, and migrating keycloak users away from each having their individual realms.  If our app requieres such a large scale migration, breaking it up into short term goals may be ideal.  Getting 100% change over can be incredibly difficult but may be critical to our app's security and stability.  

Having a clear goals of migrating client apps is a simple SLO that allows us to track the process.  i.e if 100 apps need to get migrated in a year, a SLO of migrating 10 a month prevents a last minute migration panic. 

A benifit breaking a migration up like this is that it gives our tech team a chance to support any of our clients that may be lacking the dev/devops expertice to safely and securely migrate their applications.