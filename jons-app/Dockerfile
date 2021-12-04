# pull official base image
FROM node:12.17.0-alpine

# set working directory
# WORKDIR /jons-app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY jons-app/package.json ./
COPY jons-app/yarn.lock ./
RUN yarn install --silent

# add bash to the image
# RUN apk add --no-cache bash

# add app
COPY . ./

# start app
CMD ["npm", "start"]
