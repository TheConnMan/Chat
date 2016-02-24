FROM alpine

RUN apk add --no-cache nodejs git
RUN npm install -g bower

WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app
RUN bower install --allow-root
RUN npm remove -g bower
RUN apk del git

EXPOSE 3000

CMD node app.js
