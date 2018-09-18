FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ADD package.json ./

COPY . .

RUN npm install

CMD ["npm", "start"]