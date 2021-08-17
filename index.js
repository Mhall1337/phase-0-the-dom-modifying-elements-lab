const removeMain = document.getElementById("main")
removeMain.remove()

const newHeader = document.createElement('h1')
newHeader.setAttribute('id','victory')
document.body.append(newHeader);

const text = document.createTextNode('Mitchell is the champion');
newHeader.appendChild(text);