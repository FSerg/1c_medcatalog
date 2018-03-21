FROM node:9.4

# Commands will run in this directory
WORKDIR /usr/src/app
# Copy source code to image
COPY . .

# Install dependencies
RUN cd client && \
    yarn install && \
    cd .. &&\
    \
    yarn install

# ARG NODE_ENV=production
# ENV NODE_ENV=$NODE_ENV
# Set environment variables
ENV NODE_ENV production

RUN chmod +x run

# Build app and start server from script
CMD ["/usr/src/app/run"]
