# Transient
Simple non-persistent chat app to test out websockets

## Install
**Transient** requires Node.js, NPM, and Bower to be installed locally.

```bash
git clone git@github.com:TheConnMan/Transient.git
cd Transient
npm install
bower install
node app.js
```

Then navigate to [http://localhost:3000](http://localhost:3000).

## Docker
**Transient** can also be run with Docker with the following commands:

```bash
docker run -d -p 80:3000 --name transient theconnman/transient
```

or built locally with:

```bash
docker build -t theconnman/transient .
```

then run with the same command as above.
