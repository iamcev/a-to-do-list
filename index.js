var text='';
document.querySelector('#main-text').innerHTML=localStorage.getItem('text')||text;
setInterval(()=>{text=document.querySelector('#main-text').value;localStorage.setItem('text',text)},10);
document.querySelector('#themes-btn').addEventListener('click',()=>{document.querySelector('#themes').classList.add('open');});
document.querySelector('.back').addEventListener('click',()=>{document.querySelector('#themes').classList.remove('open');});
document.querySelector('#light').addEventListener('click',()=>{document.body.style.background="white";document.body.style.color="black";})
document.querySelector('#dark').addEventListener('click',()=>{document.body.style.background="#333";document.body.style.color="white";})
document.querySelector('#red').addEventListener('click',()=>{document.body.style.background="red";document.body.style.color="white";})
document.querySelector('#blue').addEventListener('click',()=>{document.body.style.background="blue";document.body.style.color="white";})
