FROM node:dubnium-alpine

WORKDIR /srv

COPY package*.json ./

RUN npm i

COPY . .