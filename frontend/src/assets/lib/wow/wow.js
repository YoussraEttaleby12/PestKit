(function (global) {
  'use strict';

  var WOW = function () {
      function WOW(options) {
          this.defaults = {
              boxClass: 'wow',
              animateClass: 'animated',
              offset: 0,
              mobile: true,
              live: true,
              callback: null,
              scrollContainer: null,
              resetAnimation: true
          };
          this.animate = function animateFactory() {
              if ('requestAnimationFrame' in window) {
                  return function (callback) {
                      return window.requestAnimationFrame(callback);
                  };
              }
              return function (callback) {
                  return callback();
              };
          }();
          this.vendors = ['moz', 'webkit'];
          this.start = this.start.bind(this);
          this.resetAnimation = this.resetAnimation.bind(this);
          this.scrollHandler = this.scrollHandler.bind(this);
          this.scrollCallback = this.scrollCallback.bind(this);
          this.scrolled = true;
          this.config = this.extend(options, this.defaults);
          if (options.scrollContainer != null) {
              this.config.scrollContainer = document.querySelector(options.scrollContainer);
          }
          this.animationNameCache = new WeakMap();
          this.wowEvent = this.createEvent(this.config.boxClass);
      }

      WOW.prototype.init = function () {
          this.element = window.document.documentElement;
          if (this.isIn(document.readyState, ['interactive', 'complete'])) {
              this.start();
          } else {
              this.addEvent(document, 'DOMContentLoaded', this.start);
          }
          this.finished = [];
      };

      WOW.prototype.start = function () {
          this.stopped = false;
          this.boxes = [].slice.call(this.element.querySelectorAll('.' + this.config.boxClass));
          this.all = this.boxes.slice(0);
          if (this.boxes.length) {
              if (this.disabled()) {
                  this.resetStyle();
              } else {
                  for (var i = 0; i < this.boxes.length; i++) {
                      var box = this.boxes[i];
                      this.applyStyle(box, true);
                  }
              }
          }
          if (!this.disabled()) {
              this.addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
              this.addEvent(window, 'resize', this.scrollHandler);
              this.interval = setInterval(this.scrollCallback, 50);
          }
          if (this.config.live) {
              var mut = new MutationObserver((function (records) {
                  for (var j = 0; j < records.length; j++) {
                      var record = records[j];
                      for (var k = 0; k < record.addedNodes.length; k++) {
                          var node = record.addedNodes[k];
                          this.doSync(node);
                      }
                  }
                  return undefined;
              }).bind(this));
              mut.observe(document.body, {
                  childList: true,
                  subtree: true
              });
          }
      };

      WOW.prototype.stop = function () {
          this.stopped = true;
          this.removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
          this.removeEvent(window, 'resize', this.scrollHandler);
          if (this.interval != null) {
              clearInterval(this.interval);
          }
      };

      WOW.prototype.sync = function () {
          if (MutationObserver.notSupported) {
              this.doSync(this.element);
          }
      };

      // Autres méthodes omises pour la concision...

      return WOW;
  }();

  global.WOW = WOW;
})(this);
