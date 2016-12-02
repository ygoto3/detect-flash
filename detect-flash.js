'use strict';

import swfobject from 'swfobject';

const TIMEOUT = 1000;
const ID = '__flash_detector';
const CALLBACK = `${ID}_call`;

function clear(el) {
  document.body.removeChild(el);
  delete window[CALLBACK];
};

export default function detectFlash(swfPath) {
  return new Promise((resolve, reject) => {
    const el = document.createElement('DIV');
    const wrapper = el.cloneNode();

    el.id = ID;
    wrapper.appendChild(el);
    document.body.appendChild(wrapper);

    const timeoutId = setTimeout(() => {
      clear(wrapper, el.id);
      reject();
    }, TIMEOUT);

    window[CALLBACK] = function () {
      clearTimeout(timeoutId);
      setTimeout(() => clear(wrapper), 0);
      resolve();
    };

    swfobject.embedSWF(swfPath, el.id, '0', '0', '10.0.0');
  });
}
