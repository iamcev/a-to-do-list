var text=``;
$=function(d){return document.querySelector(d)};
function Theme(color, bgcolor, name) {
  this.color = color;
  this.bgcolor = bgcolor;
  this.name = name;
}
setInterval(()=>{
  var rxp=/~{([^}]+)}~/g,curMatch;
  while(curMatch=rxp.exec(text)) {
    try{eval(curMatch[1])}catch(err){console.log(err)};
  }
},1000)
document.querySelector('#main-text').onkeydown = function(e){
  if(e.key.toLowerCase()=='tab'){
    e.preventDefault();
    s = this.selectionStart;
    this.value = this.value.substring(0,this.selectionStart) + " " + this.value.substring(this.selectionEnd);
    this.selectionEnd = s+"\t".length;
  }
  if (e.ctrlKey && e.key == 'b') {document.execCommand('Bold');console.log('hi')};
  if (e.ctrlKey && e.key == 'i') document.execCommand('italic');
  if (e.ctrlKey && e.key == 'u') document.execCommand('underline');
};
function printDoc() {
  var oPrntWin = window.open("","_blank","width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
  oPrntWin.document.open();
  oPrntWin.document.write("<!doctype html><html><head><title>Print<\/title><\/head><body onload=\"print();\">" + $('#main-text').innerHTML + "<\/body><\/html>");
  oPrntWin.document.close();
}
var themes = [
  new Theme('white', '#111', 'Dark'),
  new Theme('black', 'white', 'Light'),
  new Theme('white', 'red', 'Red'),
  new Theme('white', 'blue', 'Blue')
];
$('#main-text').innerHTML=localStorage.getItem('text')||text;
setInterval(()=>{
  text=$('#main-text').innerHTML;
  localStorage.setItem('text',text);
},10);
$('#bold').addEventListener('click',()=>{document.execCommand('bold');$('#main-text').focus()});
$('#ital').addEventListener('click',()=>{document.execCommand('italic');$('#main-text').focus()});
$('#undr').addEventListener('click',()=>{document.execCommand('underline');$('#main-text').focus()});
$('#themes-btn').addEventListener('click',()=>{document.querySelector('#themes').classList.add('open');});
$('.back').addEventListener('click',()=>{document.querySelector('#themes').classList.remove('open');});
$('#light').addEventListener('click',()=>{document.body.style.background="white";document.body.style.color="black";})
$('#dark').addEventListener('click',()=>{document.body.style.background="#333";document.body.style.color="white";})
$('#red').addEventListener('click',()=>{document.body.style.background=themes[2].bgcolor;document.body.style.color="white";})
$('#blue').addEventListener('click',()=>{document.body.style.background="blue";document.body.style.color="white";})
