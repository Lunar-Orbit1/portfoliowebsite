var currentTimeOffset = "-8"
const images = [
  {
    Description: "A red sun sets behind a small branch",
    ImageURL: "https://images.unsplash.com/photo-1693584591668-052350af2348?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    UnsplashURL: "https://unsplash.com/photos/the-sun-is-setting-behind-a-tree-branch-zjUSwc9ACso"
  },
  {
    Description: "A red sun sets behind a small branch",
    ImageURL: "https://images.unsplash.com/photo-1693584591668-052350af2348?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    UnsplashURL: "https://unsplash.com/photos/the-sun-is-setting-behind-a-tree-branch-zjUSwc9ACso"
  },
]
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
  setTime("-8")
  var interval = setInterval(function() { 
      setTime(currentTimeOffset)
  }, 10000);
}
