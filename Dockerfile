FROM node:20-alpine

WORKDIR /weatherapp

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN npm start