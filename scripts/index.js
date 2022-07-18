document.getElementById('btnLogin').addEventListener('click', doLogin)
document.getElementById('btnFetch').addEventListener('click', testGS)
document.getElementById('btnPost').addEventListener('click', addGS)

function doLogin(e) {

    e.preventDefault();

    console.log('BUTTON CLICKED');

    let data = Object.fromEntries(new FormData(document.getElementById('userpass')).entries());
    // console.log(data);
    const param0 = `${Object.keys(data)[0]}=${Object.values(data)[0]}`;
    const param1 = `${Object.keys(data)[1]}=${Object.values(data)[1]}`;
    const params = `?${param0}&${param1}`;

    let url = 'https://script.google.com/macros/s/AKfycbyYPuXZa4MjnpIH0Xopxtf5q1N_8j1FBgWuP2x7tElBQLeOuBvZD65oGaeYBPFVof5M3w/exec';
    url += params;
    // console.log(params)

    fetch(url)
        .then(r => r.json())
        .then(r => {
            console.log("Promise solved");
            console.log(r.tempID);
            console.log(r.status);
            document.getElementById('fetchResponse').textContent = r.status;
        })

    document.getElementById('userpass').reset();
}

function testGS() {

    console.log('BUTTON CLICKED');

    const url = 'https://script.google.com/macros/s/AKfycbyYPuXZa4MjnpIH0Xopxtf5q1N_8j1FBgWuP2x7tElBQLeOuBvZD65oGaeYBPFVof5M3w/exec';

    fetch(url)
        .then(r => r.json())
        .then(r => {
            console.log(r);
            document.getElementById('fetchResponse').textContent = r.status;
        })

}

const idb = window.indexedDB;

function addGS() {

    const url = 'https://script.google.com/macros/s/AKfycbyYPuXZa4MjnpIH0Xopxtf5q1N_8j1FBgWuP2x7tElBQLeOuBvZD65oGaeYBPFVof5M3w/exec';

    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'omit', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({name:"Carlos Toscano"}) // body data type must match "Content-Type" header
    })

}