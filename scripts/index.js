
document.getElementById('btnFetch').addEventListener('click', testGS)

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

