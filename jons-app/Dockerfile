# pull official base image
FROM node:12.17.0-alpine

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent

# add bash to the image
# RUN apk add --no-cache bash

# add app
COPY . ./

# start app
CMD ["npm", "start"]
