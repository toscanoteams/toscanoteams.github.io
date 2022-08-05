window.addEventListener('load', afterLoad);

async function afterLoad() {

    let url = dbUrl();

    const queryString = window.location.search;
    // console.log(queryString);
    // const tempID = new URLSearchParams(window.location.search).get('tempID');
    url += queryString
    
    // console.log(tempID);
    // shirt
    manageDB();

    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            console.log(data.userDB);
            // addData(data.userDB);
            document.getElementById("beautifiedV").innerHTML = JSON.stringify(data.userDB.registroVacaciones, undefined, 2);
            document.getElementById("beautifiedP").innerHTML = JSON.stringify(data.userDB.userPersonal, undefined, 2);


            // document.getElementById("beautified").innerHTML = JSON.stringify(data.userDB, undefined, 2);
        })
        .catch(error => console.log(error));

    
}


const idb = window.indexedDB;
function manageDB() {
    // console.log('storing userinfo in indexedDB')
    // console.log(userDB)

    if(idb) {
        let db;
        const request = idb.open('userDB', 1);

        request.onupgradeneeded = () => {
            db = request.result;
            console.log('CREATE', db);
            const objectStore = db.createObjectStore('userData', {
                autoIncrement: true
            });
            console.log(db);
            // addData(userDB)
        };

        request.onsuccess = () => {
            db = request.result;
            console.log('OPEN', db);
        };

        request.onerror = (error) => {
            console.log('Error', error);
        };

        // const addData = (data) => {
        //     let db;
        //     let request = idb.open('userDB', 1);
        //     db = request.result;
        //     console.log(db)
        //     const transaction = db.transaction('userData','readwrite');
        //     const objectStore = transaction.objectStore('userData');
        //     request = objectStore.add(data);
        // }

        // addData(userDB)
    }
}

const addData = (data) => {
    let db;
    let request = idb.open('userDB', 1);
    db = request.result;
    console.log(db)
    const transaction = db.transaction('userData','readwrite');
    const objectStore = transaction.objectStore('userData');
    request = objectStore.add(data);
}
