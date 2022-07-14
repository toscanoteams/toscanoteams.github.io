
document.getElementById('btnFetch').addEventListener('click', testGS)

function testGS() {

    console.log('BUTTON CLICKED');

    const url = 'https://script.google.com/macros/s/AKfycbzQszoOcc7kAhfDiwG4JCn7qgJ3S3Pclz60SWxaqsV9sETj5HWgIUmYraGUGyTofzXYOg/exec';

    fetch(url)
        .then(r => r.json())
        .then(r => {
            console.log(r);
            console.log(r[0].status);
            document.getElementById('fetchResponse').textContent = r[0].status;
        })

}

