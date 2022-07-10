FROM node:lts-slim

WORKDIR /usr/src/sec-passwd-api

COPY package*.json ./
COPY model ./model/
COPY server.js ./

# install dependencies
RUN npm install

EXPOSE $PORT
CMD ["npm", "start"]