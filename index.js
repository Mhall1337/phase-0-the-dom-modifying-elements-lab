const removeMain = document.getElementById("main")
removeMain.remove()

const newHeader = document.createElement('h1')
newHeader.setAttribute('id','victory')

const text = document.createTextNode('Mitchell is the champion');
newHeader.appendChild(text);