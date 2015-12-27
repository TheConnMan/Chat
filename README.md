# Chat
Simple non-persistent chat app to test out websockets

## Install
**Chat** requires Node.js, NPM, and Bower to be installed locally.

```bash
git clone git@github.com:TheConnMan/Chat.git
cd Chat
npm install
bower install
node app.js
```

Then navigate to [http://localhost:3000](http://localhost:3000).

## Docker
**Chat** can also be run with Docker with the following commands:

```bash
docker build -t theconnman/chat .
docker run -d -p 80:3000 --name chat theconnman/chat
```
