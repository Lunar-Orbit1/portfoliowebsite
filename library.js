const endpoint = `http://127.0.0.1:5000/getids`
function notify(title, text, duration){
    document.getElementById("ptitle").innerHTML = title;
    document.getElementById("ptext").innerHTML = text
    document.getElementById("pdur").style.width = "calc(100% + 10px)"
}
console.log(endpoint)
document.addEventListener("DOMContentLoaded", function(){
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
        setCookie("username", testusername, 1)
        const data = Http.response;
        setCookie("sessiontoken", data['response'], 1);
        setCookie('loggedin', true, 1);
        login();
    } else if (Http.status == 403) {
        alert("Incorrect username or password")
    }
    };
})
