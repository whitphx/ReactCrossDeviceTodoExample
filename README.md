# ReactCrossDeviceTodoExample

A sample project to build a cross-device application over iOS / android / web (+ electron) using React, React native, Redux.

# Try it
## Download
```
$ git clone git@github.com:yuichiroTCY/ReactCrossDeviceTodoExample.git
```

## Install dependencies
```
$ cd ReactCrossDeviceTodoExample
$ npm install
```

## Run iOS / android app
First, run react-native-server.
```
$ npm start
```
Next, run apps.
```
$ react-native run-ios
$ react-native run-android
```

## Run web app
First, build it.
```
$ gulp build
```
The output files are stored in `public` directory.

Then, run `webpack-dev-server` (if not installed, run `npm install -g webpack-dev-server`)
```
$ webpack-dev-server
```

## Run electron app
First, build the web app.
```
$ gulp build
```
Then, run electron app
```
$ npm run electron
```
