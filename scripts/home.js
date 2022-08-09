window.addEventListener('load', afterLoad);

const indexedDB = window.indexedDB;

let addData;

let readData;

async function afterLoad() {
    console.log('function: manageDB()')

    if (indexedDB) {
        let db;
        let request = indexedDB.open('userDB', 1);

        request.onsuccess = () => {
            db = request.result;
            console.log('OPEN', db);
            readData();
        };

        request.onupgradeneeded = () => {
            db = request.result;
            console.log('CREATE', db);
            const objectStore = db.createObjectStore('userData', {
                autoIncrement: true
            });
            console.log(db);
            
        };

        request.onerror = (error) => {
            console.log('ERROR', error);
        };

        let data = { test: 'yes' };

        addData = (data) => {
            // let db;
            // let request = indexedDB.open('userDB', 1);
            // db = request.result;
            console.log('ADD', db);
            const transaction = db.transaction('userData', 'readwrite');
            const objectStore = transaction.objectStore('userData');
            request = objectStore.add(data);
        }

        readData = () => {
            console.log('READ CURSOR');
            const transaction = db.transaction('userData', 'readonly');
            const objectStore = transaction.objectStore('userData');
            request = objectStore.openCursor();

            request.onsuccess = (e) => {
                console.log(e.target);
            }
        }



        let url = dbUrl();

        const queryString = window.location.search;
        // console.log(queryString);
        // const tempID = new URLSearchParams(window.location.search).get('tempID');
        url += queryString

        // console.log(tempID);
        // shirt
        // manageDB();

        fetch(url)
            .then(response => response.json())
            .then(data => {

                // manageDB();
                console.log('data', data.userDB);
                // manageDB();
                addData(data.userDB);
                document.getElementById("beautifiedV").innerHTML = JSON.stringify(data.userDB.registroVacaciones, undefined, 2);
                document.getElementById("beautifiedP").innerHTML = JSON.stringify(data.userDB.userPersonal, undefined, 2);

                // document.getElementById("beautified").innerHTML = JSON.stringify(data.userDB, undefined, 2);
            })
            .then()
            .catch(error => console.log(error));

    }
}







// const addData = (data) => {
//     let db;
//     let request = indexedDB.open('userDB', 1);
//     db = request.result;
//     console.log(`db: ${db}`);
//     const transaction = db.transaction('userData', 'readwrite');
//     const objectStore = transaction.objectStore('userData');
//     request = objectStore.add(data);
// }
