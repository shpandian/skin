window.setTimeout(function() {

    var classList = [];
    var queryString = window.location.search;
    var h1 = document.getElementsByTagName('h1')[0];

    if (h1 && queryString.indexOf('skin-large=on') != -1 ) {
        classList.push('skin-large');
        h1.innerText += " - skin-large";
        document.getElementById('skin-large').checked = true;
    }

    if (h1 && queryString.indexOf('skin-legacy=on') != -1 ) {
        classList.push('skin-legacy');
        h1.innerText += " - skin-legacy";
        document.getElementById('skin-legacy').checked = true;
    }

    document.getElementsByTagName('body')[0].className = classList.join(' ');
}, 32);
