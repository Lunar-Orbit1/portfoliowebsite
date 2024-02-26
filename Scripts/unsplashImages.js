const images = [
    {
        title: "A snowy tree in-front of a light orange sunrise",
        url: "https://unsplash.com/photos/a-snow-covered-tree-with-a-pink-sky-in-the-background-88Y3s3uJC8I",
        imageUrl: "https://images.unsplash.com/photo-1708463118737-0bdf21626cd8?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "A dark tree in-front of a pink, orange, and grey sunset",
        url: "https://unsplash.com/photos/a-tree-is-silhouetted-against-a-pink-and-purple-sky-zv0Au6q-x9Y",
        imageUrl: "https://images.unsplash.com/photo-1705610333654-75cf3fa4b15f?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "A frozen pond",
        url: "https://unsplash.com/photos/AnySDc1C9As",
        imageUrl: "https://images.unsplash.com/photo-1708462609373-c714eba89bef?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "A muscovy duck",
        url: "https://unsplash.com/photos/a-close-up-of-a-bird-with-a-red-head-7gs5A9nP0CI",
        imageUrl: "https://images.unsplash.com/photo-1705609810053-17ce7e7784d0?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Canadian goose drinks water",
        url: "https://unsplash.com/photos/a-black-and-white-duck-floating-on-top-of-a-body-of-water-QBGiknAt0mE",
        imageUrl: "https://images.unsplash.com/photo-1704155510260-f14eff3c065e?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "A soft yellow flower sits in-front of a blurred background",
        url: "https://unsplash.com/photos/36DH2XH1J3I",
        imageUrl: "https://images.unsplash.com/photo-1702053179603-e7f5969ab204?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "The orange sun sets behind a tree",
        url: "https://unsplash.com/photos/the-sun-is-setting-behind-a-tree-branch-zjUSwc9ACso",
        imageUrl: "https://images.unsplash.com/photo-1693584591668-052350af2348?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Powerlines against a dark background",
        url: "https://unsplash.com/photos/power-lines-and-telephone-poles-with-a-mountain-in-the-background-pUsLi19_Czs",
        imageUrl: "https://images.unsplash.com/photo-1700076427815-c43da7973b6e?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "A white BART train barrels down tracks",
        url: "https://unsplash.com/photos/a-white-and-blue-train-traveling-down-train-tracks-E-m9Dlzv-Jc",
        imageUrl: "https://images.unsplash.com/photo-1708557317704-c4cd2f2e41ae?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "A snowy moutain with pink clouds at sunrise",
        url: "https://unsplash.com/photos/a-mountain-covered-in-snow-and-clouds-at-sunset-qdR4S-hl0Fc",
        imageUrl: "https://images.unsplash.com/photo-1708463092859-3e59751e7e03?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

]


window.onload = function(){
    let list = document.getElementById("imageScroll")
    for (x in images){
        let image = images[x]
        let li = document.createElement("li")
        let img = document.createElement("img")
        let link = document.createElement("a")
        link.className = "viewOnUnsplash"
        link.target = "_blank"
        link.href = image.url
        link.innerHTML = "View on Unsplash"
        img.src = image.imageUrl
        img.title = image.title


        li.appendChild(img)
        li.appendChild(link)
        list.appendChild(li)
    }
}
  