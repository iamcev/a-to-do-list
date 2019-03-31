var text=``;
function Theme(color, bgcolor, name) {
  this.color = color;
  this.bgcolor = bgcolor;
  this.name = name;
}
document.querySelector('#main-text').onkeydown = function(e){
  if(e.key.toLowerCase()=='tab'){
    e.preventDefault();
    s = this.selectionStart;
    this.value = this.value.substring(0,this.selectionStart) + " " + this.value.substring(this.selectionEnd);
    this.selectionEnd = s+"\t".length;
  }
}
var themes = [new Theme('white', '#111', 'Dark'), 
              new Theme('black', 'white', 'Light'), 
              new Theme('white', 'red', 'Red'), 
              new Theme('white', 'blue', 'Blue')
             ];
document.querySelector('#main-text').innerHTML=localStorage.getItem('text')||text;
setInterval(()=>{text=document.querySelector('#main-text').value;localStorage.setItem('text',text)},10);
document.querySelector('#themes-btn').addEventListener('click',()=>{document.querySelector('#themes').classList.add('open');});
document.querySelector('.back').addEventListener('click',()=>{document.querySelector('#themes').classList.remove('open');});
document.querySelector('#light').addEventListener('click',()=>{document.body.style.background="white";document.body.style.color="black";})
document.querySelector('#dark').addEventListener('click',()=>{document.body.style.background="#333";document.body.style.color="white";})
document.querySelector('#red').addEventListener('click',()=>{document.body.style.background=themes[2].bgcolor;document.body.style.color="white";})
document.querySelector('#blue').addEventListener('click',()=>{document.body.style.background="blue";document.body.style.color="white";})
