var text='';
document.querySelector('#main-text').innerHTML=localStorage.getItem('text')||text;
setInterval(()=>{text=document.querySelector('#main-text').value;localStorage.setItem('text',text)},10);
document.querySelector('#themes-btn').addEventListener('click',()=>{document.querySelector('#themes').classList.add('open');});
document.querySelector('.back').addEventListener('click',()=>{document.querySelector('#themes').classList.remove('open');});
