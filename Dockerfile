FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json .

COPY package-lock.json .

RUN npm ci --prefer-offline --no-audit

COPY . .

EXPOSE 3009

CMD [ "npm", "start" ]