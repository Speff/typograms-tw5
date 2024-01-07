(function() {
  /* jslint node: true, browser: true */
  /* global $tw: false */
  'use strict';

  let TypogramParser = function(type, text, options) {
    this.tree = [{
      type: "typogram",
      tag: "$typogram",
      attributes:{
        source: text
      }
    }];
  };

  exports["text/vnd.tiddlywiki.typogram"] = TypogramParser;
})();