document.addEventListener('keydown',e=>{e.key==='Enter'&&(t=e.target).matches('input,textarea,[contenteditable]')&&fetch('API-LINK-HERE',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:(t.value||t.textContent).trim(),url:document.URL})})});