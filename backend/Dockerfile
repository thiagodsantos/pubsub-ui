FROM node:lts-alpine

WORKDIR /usr/src/app

RUN npm i -g @nestjs/cli

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "start:dev"]