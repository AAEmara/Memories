# specifying node base image with version: 20.9.0
FROM node:20.9.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# exposing the application's default port no.: 5000
EXPOSE 5000

CMD ["npm", "start"]
