const currentTimeOffset = "-8";
document.addEventListener("DOMContentLoaded", function(){
    const discordBtn = document.getElementById("dbutton")
    discordBtn.addEventListener("click", function(){
        navigator.clipboard.writeText("claym1x");
        alert("Copied Discord username to clipboard")
    })
})

function setTime(offset) {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*offset));
  
    var hrs = nd.getHours();
    var mins = nd.getMinutes();
    if (mins < 10){ //Jenk!!!!!!!
        mins = `0${mins}`;
    }
  
    var setD = `${hrs}:${mins} (UTC ${currentTimeOffset})`;
    document.getElementById("clocktime").innerHTML = setD;
  }


  window.onload = function(){
    console.log("Loaded site. Version 4.0")
    setTime(currentTimeOffset)
    setInterval(function() { 
        setTime(currentTimeOffset)
    }, 1000);
  }
  
