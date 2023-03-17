
function bold() {
  document.execCommand("bold", false, null);
}
function italic() {
  document.execCommand("italic", false, null);
}
function underline() {
  document.execCommand("underline", false, null);
}
function fontSize(size) {
  document.execCommand("fontSize", false, size);
}
function fontColor(color) {
  document.execCommand("foreColor", false, color);
}
function textAlign(align) {
  document.execCommand("justify" + align, false, null);
}
function saveFile() {
  var name = document.querySelector(".name").innerHTML
  var content = document.querySelector(".content").innerHTML;
  var jsonContent = JSON.stringify({ content: content });
  var jsonName = JSON.stringify({ name: name });
  localStorage.setItem(jsonName, jsonContent);
  alert("File saved.");
}
function loadFile() {
  var name = document.querySelector(".name").innerHTML
  var jsonName = JSON.stringify({ name: name });
  var jsonContent = localStorage.getItem(jsonName);
  if (jsonContent) {
    var content = JSON.parse(jsonContent).content;
    document.querySelector(".content").innerHTML = content;
    alert("File loaded.");
  }
  else {
    alert("No such file found.");
  }
}
