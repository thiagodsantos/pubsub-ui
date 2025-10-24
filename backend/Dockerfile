FROM node:lts-alpine

RUN npm i -g @nestjs/cli

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "start:dev"]