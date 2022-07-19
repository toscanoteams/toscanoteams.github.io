window.addEventListener('load', afterLoad);

async function afterLoad() {

    let url = dbUrl();

    const queryString = window.location.search;
    // console.log(queryString);
    // const tempID = new URLSearchParams(window.location.search).get('tempID');
    url += queryString
    
    // console.log(tempID);
    // shirt

    fetch(url)
        .then(response => response.json())
        .then(data => {manageDB(data.userDB); document.getElementById("beautified").innerHTML = JSON.stringify(data.userDB, undefined, 2);})
        .catch(error => console.log(error));

    // // await timeout(2000);
    // const loadingBanner = Array.from(document.getElementsByClassName('loadingBanner'))[0];

    // loadingBanner.style.top = '100%';
    // loadingBanner.style.bottom = '-100%';
    // loadingBanner.style.transition = '0.4s';
    // // await timeout(1000);
    // loadingBanner.style.display = 'none';
    // loadingBanner.style.transitionTimingFunction = "ease-out";
}


const idb = window.indexedDB;
function manageDB(userDB) {
    console.log('storing userinfo in indexedDB')
    console.log(userDB)

    if(idb) {
        let db;
        const request = idb.open('userDB', 1);

        request.onupgradeneeded = () => {
            db = request.result;
            console.log('CREATE', db);
            const objectStore = db.createObjectStore('userPersonal');
            const objectStore1 = db.createObjectStore('registroVacaciones');
        };

        request.onsuccess = () => {
            db = request.result;
            console.log('OPEN', db);
        };

        request.onerror = (error) => {
            console.log('Error', error);
        };
    }
}