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
        .then(data => console.log(data.userDB))
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