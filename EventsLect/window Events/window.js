function loadEvent() {
    alert("addEventListener method is loading");
    document.write("addEventListener Page is loading")
    console.log(" addEventListener window is loading");
}

window.addEventListener('load', loadEvent);
