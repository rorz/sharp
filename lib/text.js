"use strict";

const is = require("./is");

function text(
  text,
  textColor,
  textPosition,
  font,
  fontfile,
  width,
  height,
  align,
  dpi,
  spacing
) {
  if (is.defined(text) && is.string(text)) {
    console.log("Setting text");
    this.options.text = text;
    this.options.textColor = [250, 50, 50]; // Need to add alpha
    this.options.textPosition = [25, 25];
    this.options.font = "Kanit Regular 10";
    this.options.fontfile = "/Users/rorz/sharp/Kanit-Regular.ttf";
    // this.options.textWidth = 100;
    // this.options.textHeight = 100;
    this.options.textAlign = "centre";
    this.options.textJustify = false;
    this.options.textDpi = 300;
    this.options.lineSpacing = 16;
  }
  return this;
}

module.exports = function (Sharp) {
  Object.assign(Sharp.prototype, {
    text,
  });
};
