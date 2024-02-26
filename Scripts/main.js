function discord(){
    var copyText = "claym1x"
    navigator.clipboard.writeText(copyText).then(function() {
      console.log('Async: Copying to clipboard was successful!');
      alert("Copied Discord username to clipboard")
    }, function(err) {
    alert("Error while copying user to clipboard, contact Clay. Error text: ",err)
      console.error('Async: Could not copy text: ', err);
    });
}


function setTime(offset) {
  var d = new Date();
  var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  var nd = new Date(utc + (3600000*offset));

  var hrs = nd.getHours();
  var mins = nd.getMinutes();
  if (mins < 10){ //Jenk!!!!!!!
      mins = `0${mins}`;
  }

  var setD = `UTC -8 (${hrs}:${mins})`;
  document.getElementById("LOCALCURRENTTIMEFOREMMA").innerHTML = setD;
}

window.onload = function(){
  console.log("Loaded site. Version 3.0")
  setTime("-8")
  var interval = setInterval(function() { 
      setTime("-8")
  }, 10000);
}
