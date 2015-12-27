FROM node

RUN npm install -g bower

ADD . /usr/src/app
WORKDIR /usr/src/app

RUN npm install
RUN bower install --allow-root

EXPOSE 3000

CMD node app.js
