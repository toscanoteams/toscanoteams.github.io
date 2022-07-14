
document.getElementById('btnFetch').addEventListener('click', testGS)
document.getElementById('btnPost').addEventListener('click', addGS)

function testGS() {

    console.log('BUTTON CLICKED');

    const url = 'https://script.google.com/macros/s/AKfycbxIzgVLoQdiXryRw_pglluvYkEAAydrriFwxSf_DtrgqwAWbG-E09-dTy1TmwFecgsEAw/exec';

    fetch(url)
        .then(r => r.json())
        .then(r => {
            console.log(r);
            console.log(r[0].status);
            document.getElementById('fetchResponse').textContent = r[0].status;
        })

}

function addGS() {

    const url = 'https://script.google.com/macros/s/AKfycbxIzgVLoQdiXryRw_pglluvYkEAAydrriFwxSf_DtrgqwAWbG-E09-dTy1TmwFecgsEAw/exec';

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