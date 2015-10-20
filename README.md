Jellyfish
=====

A simple and interesting Framework7 hybrid app.With PhoneGap you can easily convert it to native iOS app.

## Build Tools

Jellyfish use different build tools to build the same project, Hope it will helps you select a suitable build tool.

* `gulp & webpack` at origin/master
* `fis3 & mod.js` at [origin/fis3](https://github.com/BelinChung/Jellyfish/tree/fis3)
* `[DEPRECATED] grunt & requireJS` at [origin/grunt](https://github.com/BelinChung/Jellyfish/tree/grunt)

## Requirements

* gulp `^3.9.0`
* webpack `^1.10.1`
* cordova `^5.0.0`
* framework7 `^1.2.0`

## Dependencies

Jellyfish use `gulp` and `webpack` to build a production versions,

First you need to have `gulp` and `webpack` which you should install globally.

Jellyfish also use `bower` to manage third-party packages, global install it as same as `gulp` and `webpack`.

```
$ npm install -g gulp
$ npm install -g webpack
$ npm install -g bower
```

Then install all dependencies, in repo's root:

```
$ npm install 
$ bower install
```

## PhoneGap App Guides

Install the cordova module using npm utility of Node.js.

```
$ npm install -g cordova
```

### Create App

Go to the directory where you maintain your source code, and run a command such as the following:

```
$ cordova create Jellyfish com.Jellyfish.Jellyfish Jellyfish
```

### Check out source code

Because the PhoneGap app directory should not already exist, so check out the Jellyfish source code in this step.

```
$ cd Jellyfish  
$ git init   
$ git remote add origin git@github.com:BelinChung/Jellyfish.git  
$ git pull origin master  
$ git reset --hard origin/master  
```

### Add Platforms

Before you can build the project, you need to specify a set of target platforms.

```
$ cordova platform add ios
```

### Add Plugins

You need to add plugins that provide access to core Cordova APIs.

```
$ cordova plugin add cordova-plugin-whitelist cordova-plugin-camera cordova-plugin-geolocation cordova-plugin-file-transfer cordova-plugin-inappbrowser cordova-plugin-network-information
```

### Build the App

Run the following command to iteratively build the project:

```
$ cordova build ios
```

### Test the App on an iOS Device with Xcode

Double-click to open the `platforms/ios/Jellyfish.xcodeproj` file

Press the `Run` button to deploy the application in the emulator

## Web App Preview

Jellyfish use webpack dev server to develop, Just run it in repo's root:

```
$ gulp build-dev
```

WebApp will be available on `http://localhost:3000/`

## Web App Release / PhoneGap App Release

```
$ gulp build
```

The result is available in `www/` folder.

## Demo

[http://hi.dearb.me/]

[![App Store](http://dearb.u.qiniudn.com/appstore-button.png)](https://itunes.apple.com/us/app/hi-liao-gao-xiao-shu-dong/id917320045?mt=8)

## License

Copyright (c) 2014-2015 Belin Chung. MIT Licensed, see [LICENSE] for details.

[http://hi.dearb.me/]: http://hi.dearb.me/
[LICENSE]:https://github.com/BelinChung/Jellyfish/blob/master/LICENSE.md
