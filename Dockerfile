FROM node:9.3.0-alpine

RUN apk add --no-cache tzdata

# Commands will run in this directory
WORKDIR /app
# Add all our code inside that directory that lives in the container
ADD . /app

# Install dependencies and make builds
RUN cd client && \
    yarn install && \
    yarn build && \
    cd .. &&\
    \
    yarn install && \
    yarn build

# ARG NODE_ENV=production
# ENV NODE_ENV=$NODE_ENV
# Set environment variables
ENV NODE_ENV production

# The command to run our app when the container is run
CMD ["yarn", "start"]
