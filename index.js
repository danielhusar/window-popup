'use strict';

var root;

if (module && module.exports) {
  root = module.exports;
} else if (jQuery) {
  root = jQuery;
} else {
  root = window;
}

root.windowPopup = function (width, height, url, title, win) {

  if (typeof width !== 'number' || typeof height !== 'number') {
    throw new TypeError('Width and hegiht must be numbers');
  }

  if (typeof url !== 'string') {
    throw new TypeError('url must be string');
  }

  if ( (typeof title !== 'string') && (typeof title !== 'undefined') ) {
    throw new TypeError('Title must be strinf');
  }

  win = win || window;
  title = title || '';

  var left = (win.outerWidth / 2) + (win.screenX || win.screenLeft || 0) - (width / 2);
  var top = (win.outerHeight / 2) + (win.screenY || win.screenTop || 0) - (height / 2);

  win.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);

};
