const endpoint = `http://127.0.0.1:5000/getids`
var audios = [];

function notify(text, duration){
    document.getElementById("ptext").innerHTML = text
    document.getElementById('popup').style.top = '2em';
    window.setTimeout(() => {
        document.getElementById('popup').style.top = '-7em';
    }, duration*1000);
}

function openAboutFiltersPage(){
    document.getElementById("abt").style.display='block';
    document.getElementById('mp').style.display = 'none';
}
function closeAboutFiltersPage(){
    document.getElementById("abt").style.display='none';
    document.getElementById('mp').style.display = 'block';
}

function convertListToString(list){
    var ns = ""
    for (var item in list){
        ns = ns+`${list[item]}, `;
    }
    return ns.slice(0, -2);
}
function ltrim(str) {
    if(!str) return str;
    return str.replace(/^\s+/g, '');
  }

function showId(id, hideothers){
    var children = document.getElementById('audiolist').children;
    if (id!=0){
        // there is an id specified, show that card
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child.getAttribute('audioId') == String(id)){
                child.style.display = 'block';
            } else {
                if (hideothers == true){
                    child.style.display = 'none'; 
                }
            }
        }
    } else if (id==1){
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            child.style.display = 'none'
        }
    } else {
        // No ID specified, show all cards
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            child.style.display = 'block'
        }
    }
}

function contains(base, str){
    if (base.toLowerCase().search(str) != -1){
        return true;
    } else {
        return false;
    }
}
function searchList(ar, term){
    for (var x in ar){
        if (contains(ar[x], term)==true){
            return true
        }
    }
    return false;
}

function search_st2(inputTerm){
    showId(1, true);
    //The secondary search function
    // First one converts input to lower and seperates by comma
    if (inputTerm[0] == "!"){
        //Not term
        inputTerm=inputTerm.substring(1)
        for (var x in audios){
            x = audios[x];
            var namer = contains(x['name'], inputTerm);
            var idr = contains(String(x['id']), inputTerm);;
            var tagr = searchList(x['tags'], inputTerm);
        
            if (namer==false&&tagr==false&&idr==false){
                showId(x['id'], false);
            }
        }
    } else if (inputTerm.indexOf("=")!=-1) {
        //specific value 
        var vsplit = inputTerm.split('=');
        if (vsplit[1]!=null){
            if(vsplit[0]=="name"){
                //Find song with name equal to vsplit[1]
                for (var x in audios){
                    if (audios[x]['name'].toLowerCase() == vsplit[1]){
                        showId(audios[x]['id'], false);
                    }
                }
            } else if (vsplit[0]=="id"){
                for (var x in audios){
                    if (Number(audios[x]['id']) == Number(vsplit[1])){
                        showId(audios[x]['id'], false);
                    }
                }
            } else if (vsplit[0]=="tags" || vsplit[0] == "tag"){
                for (var x in audios){
                    for (var tag in audios[x]['tags']){
                        if (audios[x]['tags'][tag].toLowerCase()==vsplit[1]){
                            showId(audios[x]['id'], false);
                        }
                    }
                }
            }
        } else {
            //Show none, they wrote the search incorrectly
            showId(1, true);
        }
    } else {
        //General search, name, id, tags, etc
        for (var x in audios){
            x = audios[x];
            var namer = contains(x['name'], inputTerm);
            var idr = contains(String(x['id']), inputTerm);;
            var tagr = searchList(x['tags'], inputTerm);
        
            if (namer==true || tagr==true ||idr==true){
                showId(x['id'], false);
            }
        }
    }
}

function search_st1(inputTerm){
    //Main search function, first convert the string to lowercase
    //Split the string by commas, and then run the search function on each
    if (inputTerm=="" || inputTerm==" "){
        showId(0);
        return;
    }
    inputTerm = inputTerm.toLowerCase();
    var splt = inputTerm.split(',');
    for (var x in splt){
        search_st2(ltrim(splt[x]));
    }

}


var audioListContainer;
function newListItem(Name, ID, Tags){
    var div = document.createElement('div')
    div.className = "audioItem";
    div.setAttribute('audioId', ID)

    var nameBlock = document.createElement("p");
    nameBlock.style.display='inline-block';
    nameBlock.innerHTML = Name;
    div.appendChild(nameBlock);

    var openBtn = document.createElement("button");
    openBtn.className = 'open';
    openBtn.title = "Open in Roblox";
    openBtn.target='blank';
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

    var nameBlock = document.createElement("h3");
    nameBlock.innerHTML = ID;
    div.appendChild(nameBlock);

    var nameBlock = document.createElement("p");
    nameBlock.style.display='inline-block';
    nameBlock.innerHTML = convertListToString(Tags);
    div.appendChild(nameBlock); 

    audioListContainer.appendChild(div)
}

document.addEventListener("DOMContentLoaded", function(){
    // define elements
    audioListContainer = document.getElementById("audiolist")
    document.getElementById("search").addEventListener('input', ()=>{
        search_st1(document.getElementById("search").value);
    })
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
        audios = Http.response['data'];
        for (var i in Http.response['data']){
            newListItem(audios[i]['name'], audios[i]['id'], audios[i]['tags'])
        };
        if (audioid!=null){
            document.getElementById("search").value=`id=${audioid}`
            search_st1(document.getElementById("search").value);
        }

    } else {
        notify("Error", "Failed to fetch audios :(", 10)
    }
    };
})
