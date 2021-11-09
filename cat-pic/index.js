'use strict'

const pic = require('cat-picture');
const image = require('lightning-image-poly');
var remote = require('electron').remote;
var fs = require('fs');

//get cat-pic source
const src= pic.src;
pic.remove();

//Allow annotations
const viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});

//Save PDF
//This is the workshop's solution, but it doesn't work for some reason. I don't get any specific error, it just doesn't do anything
/* function save () {
  remote.getCurrentWebContents().printToPDF({
    portrait: true
  }, function (err, data) {
    fs.writeFile('annotation.pdf', data, function (err) {
      if (err) alert('error generating pdf! ' + err.message)
      else alert('pdf saved!')
    })
  })
} */

//One issue was getting errors handling callbacks, so they had success using promises. That worked for me, but I wasn't getting the same error
//in short, I don't know why this works but it does.
function save () {
  remote.getCurrentWebContents().printToPDF({
    portrait: true
  }).then(data => {
    fs.writeFile('annotation.pdf', data, err => {
      if (err) alert('error generating pdf! ' + err.message)
      else alert('pdf saved!')
    })
  }).catch(err => console.log(err));
}

window.addEventListener('keydown', function (e) {
  //workshop uses deprecated keyCode
  if(e.code === 'KeyP') save()
});