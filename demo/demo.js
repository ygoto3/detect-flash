'use strict';

const detectFlash = require('../lib/detect-flash').default;

function message(text) {
  console.log(text);
  document.getElementById('message').innerText = text;
}

detectFlash('lib/FlashDetector.swf')
  .then(
    () => message('flash is alive.'),
    err => message('flash is not alive.')
  );
