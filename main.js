ace.config.set("basePath", "https://cdnjs.cloudflare.com/ajax/libs/ace/1.6.0/");
let editor = ace.edit("editor",{
  "theme": "ace/theme/monokai",
  "mode": "ace/mode/javascript",
  "minLines": 20,
  // "maxLines": 20,
  "wrap": true,
});
// editor.setTheme("ace/theme/monokai");
// editor.session.setMode("ace/mode/javascript");
// editor.setOption("maxLines", 100);
editor.setAutoScrollEditorIntoView(true);
editor.session.setTabSize(2);


let tabSize=2;
let incTabSizeButton = document.querySelector("#incTabSizeButton");
let decTabSizeButton = document.querySelector("#decTabSizeButton");
let tabSizeSpan = document.querySelector("#tabSizeSpan");
tabSizeSpan.innerHTML = tabSize;
decTabSizeButton.addEventListener("click", (e) => {
  if(tabSize > 2){
    editor.session.setTabSize(--tabSize);
    tabSizeSpan.innerHTML = tabSize;
  }
});
incTabSizeButton.addEventListener("click", (e) => {
  if(tabSize < 8){
    editor.session.setTabSize(++tabSize);
    tabSizeSpan.innerHTML = tabSize;
  }
});


let fontSize=20;
let incFontSizeButton = document.querySelector("#incFontSizeButton");
let decFontSizeButton = document.querySelector("#decFontSizeButton");
let fontSizeSpan = document.querySelector("#fontSizeSpan");
fontSizeSpan.innerHTML = fontSize;
decFontSizeButton.addEventListener("click", (e) => {
  if(fontSize > 10){
    fontSize--;
    document.querySelector("#editor").style.fontSize = fontSize+"px";
    fontSizeSpan.innerHTML = fontSize;
  }
});
incFontSizeButton.addEventListener("click", (e) => {
  if(fontSize < 40){
    fontSize++;
    document.querySelector("#editor").style.fontSize = fontSize+"px";
    fontSizeSpan.innerHTML = fontSize;
  }
});