FROM node:18-alpine as base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3652

CMD npm run dev