# express-load-config

![NPM version](https://badge.fury.io/js/express-load-config.svg)
![Downloads](http://img.shields.io/npm/dm/express-load-config.svg?style=flat)

## Install

```
npm i express-load-config --save
```

## Define global variables: config
```js
//app.js
// load all config
// default config path: ./config
global.config = require('express-load-config')();
// config path: ./path/to/config
global.config = require('express-load-config')('./path/to/config');
// custom mode,run "mode=tesing npm start" on your Commad or Terminal
global.config = require('express-load-config')('./path/to/config', {
    env: process.env.mode
});
```

## How to use
```js
//./config/config.js
module.exports = {
    db: {
        mysql: {
            host: '127.0.0.1',
            port: '',
            database: 'database_name',
            user: 'user_name',
            password: '123123123',
            prefix: '',
            encoding: 'utf8'
        }
    },
    jsonp: {
        callback_name: 'cb'
    }
    //and more...
};
```
```js
//./config/db.js
module.exports = {
    mysql: {
        host: '127.0.0.1',
        port: '',
        database: 'database_name',
        user: 'user_name',
        password: '123123123',
        prefix: '',
        encoding: 'utf8'
    }
};
```
```js
//./config/jsonp.js
module.exports = {
    callback_name: 'cb'
};
```