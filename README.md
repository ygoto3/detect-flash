# detect-flash

A library to detect if Adobe Flash plugin is really alive in a web browser

This library actually runs a SWF file and then receives a signal from it.  Therefore, you can detect if Adobe Flash is actually available and working in the browser.

You can detect if Adobe Flash is installed in the browser by `navigator.plugins["Shockwave Flash"]`.  However, if you block a site from running Adobe Flash plugin like the image below, the plugin will not work.  This is the reason why I made this little library.

![Block sites from running Flash](./assets/chrome-settings-content.png)

## Install

Install detect-flash via npm.

```sh
$ npm install detect-flash --save
```

## Usage

Pass the path to FlashDetector.swf and detect-flash returns a promise;  It is resolved only if Adobe Flash Plugin is actually alive.

```javascript
import detectFlash from 'detect-flash';

detectFlash('path-to-swf/FlashDetector.swf')
  .then(
    () => message('flash is alive.'),
    err => message('flash is not alive.')
  );
```

## Try a Demo

```sh
$ npm run demo
```
