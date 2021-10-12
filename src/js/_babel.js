
    var pathController = siteUrl + shopUrl;

    var xhr = new XMLHttpRequest();

    xhr.open('GET', pathController + 'webasystcache-downloadwebpage/' + siteUrl + uri);

    xhr.send();

    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log('Webasyst cache error ' +  xhr.status + ': ' + xhr.statusText); 
        }
    };

    xhr.onerror = function () {
        console.log("Webasyst cache request failed");
    };

