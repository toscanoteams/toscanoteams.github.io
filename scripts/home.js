

window.addEventListener('load', afterLoad);



// let addData;

// let readData;

async function afterLoad() {

    // if (indexedDB) {
    //     let db;
    //     let request = indexedDB.open('userDB', 1);

    //     request.onsuccess = () => {
    //         db = request.result;
    //         console.log('OPEN', db);
    //         // readData();
    //     };

    //     request.onupgradeneeded = () => {
    //         db = request.result;
    //         console.log('CREATE', db);
    //         const objectStore = db.createObjectStore('userData', {
    //             autoIncrement: true
    //         });
    //         console.log(db);

    //     };

    //     request.onerror = (error) => {
    //         console.log('ERROR', error);
    //     };

    //     // let data = { test: 'yes' };

    //     addData = (data) => {
    //         // let result
    //         // readData();
    //         // console.log(result)

    //         console.log('ADD', db);
    //         const transaction = db.transaction('userData', 'readwrite');
    //         const objectStore = transaction.objectStore('userData');

    //         let request = objectStore.openCursor();

    //         request.onsuccess = (e) => {
    //             console.log('RESULT', e.target.result.value);
    //             console.log('RESULT', data);
    //             let storedData = e.target.result.value;
    //             if(JSON.stringify(storedData).split('').sort().join('') === JSON.stringify(data).split('').sort().join('')) {
    //                 console.log('OBJECTS ARE THE SAME');
    //                 return
    //             }

    //             let request1 = objectStore.add(data);
    //             console.log('OBJECT WAS ADDED TO THE DATABASE');
    //         }


    //     }

    //     readData = () => {
    //         console.log('READ CURSOR');

    //         const transaction = db.transaction('userData', 'readonly');
    //         const objectStore = transaction.objectStore('userData');
    //         request = objectStore.openCursor();

    //         request.onsuccess = (e) => {
    //             console.log('RESULT', e.target);
    //             // console.log('RESULT', e.target.result.value);
    //         }
    //     }



    //     let url = dbUrl();

    //     const queryString = window.location.search;
    //     // console.log(queryString);
    //     // const tempID = new URLSearchParams(window.location.search).get('tempID');
    //     url += queryString

    //     // console.log(tempID);
    //     // shirt
    //     // manageDB();
    // }

    let url = dbUrl();

    const queryString = window.location.search;
    // console.log(queryString);
    // const tempID = new URLSearchParams(window.location.search).get('tempID');
    url += queryString

    // console.log(tempID);

    fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log('data', data.userDB);

            // addData(data.userDB);

            manageHeader(data.userDB.userPersonal)
            
            document.getElementById("beautifiedV").innerHTML = JSON.stringify(data.userDB.registroVacaciones, undefined, 2);


        })
        .catch(error => console.log(error));

}
