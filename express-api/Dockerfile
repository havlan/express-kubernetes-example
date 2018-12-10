FROM node:alpine

RUN mkdir -p /var/log/express-k8s-example

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ADD package.json ./

COPY . .

RUN npm install

CMD ["npm", "start"]