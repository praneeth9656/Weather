FROM node:18-slim

WORKDIR /weatherapp

CMD ["node", "server.js"]

COPY package.json .

COPY package-lock.json .

RUN npm ci

COPY . .

EXPOSE 3000

RUN npm start