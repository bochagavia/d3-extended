d3.selection.prototype.trigger = function(evtName, data) {
  this.on(evtName)(data);
  return this;
}