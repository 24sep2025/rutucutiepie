const PASSWORD='24092025';
const letters=Array.from({length:50},(_,i)=>({
 id:i+1,
 title:`Open when... #${i+1}`,
 text:`Dear love,\n\nThis is letter #${i+1}. Replace this with your message.\n\nLove, Aswin`,
 audio:`audio/${i+1}.mp3`
}));
const loginEl=document.getElementById('login'),appEl=document.getElementById('app'),gridEl=document.getElementById('grid'),modalRoot=document.getElementById('modal-root');
function buildGrid(){gridEl.innerHTML='';letters.forEach(l=>{const c=document.createElement('div');c.className='card';c.innerHTML=`<h3>${l.title}</h3><p>${l.text.slice(0,60)}...</p>`;c.onclick=()=>openLetter(l);gridEl.appendChild(c);});}
function openLetter(l){modalRoot.style.display='block';modalRoot.innerHTML=`<div class='modal-backdrop' onclick='closeModal(event)'><div class='modal' onclick='event.stopPropagation()'><button class='close' onclick='closeModal()'>✕</button><h3>${l.title}</h3><div class='body'><pre style='white-space:pre-wrap'>${l.text}</pre></div><div class='audio-row'><audio controls preload='none'><source src='${l.audio}' type='audio/mpeg'></audio><a download href='${l.audio}' style='color:#9fb0d6;text-decoration:none;font-size:13px'>Download</a></div></div></div>`;}
function closeModal(){modalRoot.style.display='none';modalRoot.innerHTML='';}
document.getElementById('unlock').onclick=()=>{const val=document.getElementById('pw').value;if(val===PASSWORD){loginEl.style.display='none';appEl.style.display='block';buildGrid();}else alert('Incorrect password — try again.')};
document.getElementById('pw').addEventListener('keypress',e=>{if(e.key==='Enter')document.getElementById('unlock').click()});
document.getElementById('logout').onclick=()=>{appEl.style.display='none';loginEl.style.display='flex';document.getElementById('pw').value='';};
