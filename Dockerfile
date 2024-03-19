FROM node:18-slim

WORKDIR /weatherapp


COPY package.json .

COPY package-lock.json .


COPY . .

EXPOSE 3000

RUN npm start