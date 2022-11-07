// declaring necessary global variables

let startBtn = document.getElementById("timer-btn");

let timer;
startBtn.addEventListener("click", () => {
  timer = true;
  startBtn.classList.toggle('active_btn')
  runTimer();
});


startBtn.addEventListener("click", () => {
  
});

var select = "";
for (i = 0; i <= 12; i++) {
  select += "<option val=" + i + ">" + i + "</option>";
}
$("#hr").html(select);

var minSec = "";
for (i = 0; i <= 59; i++) {
  minSec += "<option val=" + i + " > " + i + "</option>";
}
$("#min").html(minSec);
$("#sec").html(minSec);

function checker() {
  if (min == 0 && sec == 0 && hr == 0) {
    timer = false;
  }
}


function runTimer() {
  
  if(startBtn.classList.contains('active_btn')){
    timer = true;
    startBtn.innerText = "Change";
    startBtn.style.backgroundColor = "Red";
  }
  else {
    startBtn.innerText = "Set";
    startBtn.style.backgroundColor = "Green";
    document.getElementById("hr")[0].setAttribute('selected','true');
    document.getElementById("min")[0].setAttribute('selected','true');
    document.getElementById("sec")[0].setAttribute('selected','true');
  timer = false;
  }
  
 
  var hour = +document.getElementById("hr").value;
  var minute = +document.getElementById("min").value;
  var second = +document.getElementById("sec").value;
  var count = 0;

  function setVal() {

    let hrString = hour;
  let minString = minute;
  let secString = second;
  let countString = count;

  if (hour < 10) {
    hrString = "0" + hrString;
  }

  if (minute < 10) {
    minString = "0" + minString;
  }

  if (second < 10) {
    secString = "0" + secString;
  }

  if (count < 10) {
    countString = "0" + countString;
  }

  document.getElementById("dispHr").innerHTML = hrString;
  document.getElementById("dispMin").innerHTML = minString;
  document.getElementById("dispSec").innerHTML = secString;


  
}

setVal();
  
  function run() {
    
    if (timer) {
      count++;

      if (hour == 0 && minute == 0 && (second == 0|| second == 1)) {
        timer = false;
        setTimeout(()=>{
          document.getElementById("dispHr").innerHTML = "00";
          document.getElementById("dispMin").innerHTML = "00";
          document.getElementById("dispSec").innerHTML = "00";

          var audio = new Audio('alarm.mp3');
          audio.play();
          startBtn.innerText = "Start";
        startBtn.style.backgroundColor = "Green";
        startBtn.classList.toggle('active_btn')
        },1000)
        
        
      } else {
        
          if(second!=0){
            second--;

          }
          
          count = 0;

          if (second == 0) {
            if(minute!=0){
                minute--;
                second = 59;
            }

            if (minute == 0 && second ==0) {
                minute =0;
                second=0;
              if(hour!=0){
                hour--;
              }
              minute = 59;
              second = 59;
            }
         
        }
        setVal();
      }
      setTimeout(run, 1050);
    }
  }
  return run();
}

runTimer();