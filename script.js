/********** ELEMENTS **********/
var adding = document.querySelector('.adding')
var backfull = document.querySelector('.backfull')
var backfullnote = document.querySelector('.backfull-note')
var close = document.querySelector('.close')
var closenote = document.querySelector('.close-note')
var container = document.querySelector('.container')
var deleting = document.querySelector('.deleting')
var full = document.querySelector('.full')
var fullnote = document.querySelector('.full-note')
var launching = document.querySelector('.launching')
var launchpad = document.querySelector('.launchpad')
var navbar = document.querySelector('.navbar')
var note = document.querySelector('.note')
var notes = document.querySelector('.notes')
var opening = document.querySelector('.opening')
var openNote = document.querySelector('.openNote')
var terminal = document.querySelector('.terminal')
var typing = document.querySelector('.typing')
var calculator = document.querySelector('.calculator')
var opencalculator = document.querySelector('.open-cal')
var closecal = document.querySelector('.close-cal')
var opencalculator_lunchpad = document.querySelector('.open-cal-lunching') 
var point_terminal = document.querySelector('.point-terminal')
var point_launchpad = document.querySelector('.point-launchpad')
var point_cal = document.querySelector('.point-cal')
var point_note = document.querySelector('.point-note')

/*var maxcal = document.querySelector('.max-cal')
var mincal = document.querySelector('.min-cal')*/

/********** HANDLERS **********/
function handleAdding() {
  notes.style.display = 'flex'
}

function handleBackfull() {
  terminal.style.width = '70%'
  terminal.style.height = '430px'
}

function handleBackfullnote() {
  note.style.width = '70%'
  note.style.height = '430px'
}

function handleClose() {
  terminal.style.display = 'none'
  point_terminal.style.display = 'none'
}

function handleClosenote() {
  note.style.display = 'none'
  point_note.style.display = 'none'
}

function handleFull() {
  terminal.style.width = '90%'
  terminal.style.height = '90%'
}

function handleFullnote() {
  note.style.width = '90%'
  note.style.height = '90%'
}

function handleOpenLaunching() {
  launchpad.style.display = 'block'
  navbar.style.display = 'none'
  container.style.display = 'none'
  point_launchpad.style.display = 'block'
}

function handleOpening() {
  terminal.style.display = 'block'
  container.style.display = 'flex'
  navbar.style.display = 'flex'
  launchpad.style.display = 'none'
  point_terminal.style.display = 'block'
  point_launchpad.style.display = 'none'
}

function handleOpenNote() {
  note.style.display = 'block'
  container.style.display = 'flex'
  navbar.style.display = 'flex'
  launchpad.style.display = 'none'
  point_note.style.display = 'block'
  point_launchpad.style.display = 'none'
}

function handleDeleting() {
  notes.style.display = 'none'
  typing.style.display = 'none'
}

function handleNotes() {
  typing.style.display = 'block'
}
function handleOpenCal() {
  calculator.style.display = 'block'
  container.style.display = 'flex'
  navbar.style.display = 'flex'
  launchpad.style.display = 'none'
  point_cal.style.display = 'block'
  point_launchpad.style.display = 'none'
}
function handleCloseCal() {
  calculator.style.display = 'none'
  point_cal.style.display = 'none'
}
function handleOpenCal_lunchpad() {
  calculator.style.display = 'block'
  container.style.display = 'flex'
  navbar.style.display = 'flex'
  launchpad.style.display = 'none'
  point_cal.style.display = 'block'
  point_launchpad.style.display = 'none'
} 

/********** LISTENERS **********/
adding.addEventListener('click', handleAdding)
backfull.addEventListener('click', handleBackfull)
backfullnote.addEventListener('click', handleBackfullnote)
close.addEventListener('click', handleClose)
closenote.addEventListener('click', handleClosenote)
deleting.addEventListener('click', handleDeleting)
full.addEventListener('click', handleFull)
fullnote.addEventListener('click', handleFullnote)
launching.addEventListener('click', handleOpenLaunching)
notes.addEventListener('click', handleNotes)
opening.addEventListener('click', handleOpening)
openNote.addEventListener('click', handleOpenNote)
opencalculator.addEventListener('click', handleOpenCal)
closecal.addEventListener('click', handleCloseCal)
opencalculator_lunchpad.addEventListener('click' , handleOpenCal_lunchpad)

//calculator code 
// select all the buttons
const buttons = document.querySelectorAll('button');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');

// add eventListener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}
//App dragable
$(function () {
  $('.terminal').draggable()
  $('.note').draggable()
  $('.calculator').draggable()
})
//date and time
var d = new Date()
document.getElementById('date').innerHTML = d.toDateString()

/*function startTime() {
  var today = new Date()
  var h = today.getHours()
  var m = today.getMinutes()
  var s = today.getSeconds()
  m = checkTime(m)
  s = checkTime(s)
  document.getElementById('txt').innerHTML = h + ':' + m + ':' + s
  var t = setTimeout(startTime, 1000)
}*/
function digi() {
  var date = new Date(),
      hour = date.getHours(),
      minute = checkTime(date.getMinutes()),
      ss = checkTime(date.getSeconds());

  function checkTime(i) {
    if( i < 10 ) {
      i = "0" + i;
    }
    return i;
  }

if ( hour > 12 ) {
  hour = hour - 12;
  if ( hour == 12 ) {
    hour = checkTime(hour);
  document.getElementById("clock").innerHTML = hour+":"+minute+" AM";
  }
  else {
    hour = checkTime(hour);
    document.getElementById("clock").innerHTML = hour+":"+minute+" PM";
  }
}
else {
  document.getElementById("clock").innerHTML = hour+":"+minute+" AM";
}
var time = setTimeout(digi,1000);
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i
  } // add zero in front of numbers < 10
  return i
}