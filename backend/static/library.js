const endpoint = `http://127.0.0.1:5000/getids`
var audios = [];

function notify(title, text, duration){
    document.getElementById("ptitle").innerHTML = title;
    document.getElementById("ptext").innerHTML = text
    document.getElementById("pdur").style.width = "calc(100% + 10px)"
}
var audioListContainer;
function newListItem(Name, ID, Tags, favorited){
    var div = document.createElement('div')
    div.className = "audioItem";
    var nameBlock = document.createElement("p");
    nameBlock.style.display='inline-block';
    nameBlock.innerHTML = Name;
    div.appendChild(nameBlock);

    var openBtn = document.createElement("button");
    openBtn.className = 'open';
    openBtn.title = "Open in Roblox";
    div.appendChild(openBtn);

    var openBtn = document.createElement("button");
    openBtn.className = 'favorite';
    openBtn.title = "Click to favorite";
    div.appendChild(openBtn);

    var openBtn = document.createElement("button");
    openBtn.className = 'share';
    openBtn.title = "Copy share link";
    div.appendChild(openBtn);

    var openBtn = document.createElement("button");
    openBtn.className = 'copy';
    openBtn.title = "Copy ID to clipboard";
    div.appendChild(openBtn);

    audioListContainer.appendChild(div)
}

document.addEventListener("DOMContentLoaded", function(){
    // define elements
    audioListContainer = document.getElementById("audioList")
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const audioid = urlParams.get('id');
    //fetch audios
    const Http = new XMLHttpRequest();
    const url = endpoint;
    Http.open("POST", url);
    Http.send();
    Http.responseType = "json";
    Http.onload = () => {
    if (Http.readyState == 4 && Http.status == 200) {
        console.log(Http.response);
    } else {
        notify("Error", "Failed to fetch audios :(", 10)
    }
    };
})
