
// Modules
const url = require('url');
const path = require('path');
const remote = require('@electron/remote')
const { app, dialog, BrowserWindow } = remote
const {ipcRenderer} = require('electron')

let addWindow


// Dom Nodes
let addItem = document.getElementById('add-item')

 // Handle create add Window
 function createAddWindow() {

  addWindow = new remote.BrowserWindow({
      width: 300,
      height: 200,
      title: '',
      parent: remote.getCurrentWindow(),
      autoHideMenuBar: true,
      modal: true,
      show: false
  });
  // Load html into window
  addWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'addWindow.html'),
      protocol:'file:',
      slashes: true
  }));

  addWindow.once('ready-to-show', () => {
    addWindow.show()
  })

  // Garbage collection handle
  addWindow.on('close',function(){
      addWindow = null;
  }); 

} 


// Show modal
addItem.addEventListener('click', e => {
  createAddWindow()
  console.log('test')

})

