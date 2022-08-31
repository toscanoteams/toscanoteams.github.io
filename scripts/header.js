

function manageHeader(userPersonal) {

    console.log('userPersonal', userPersonal);

    // WRITE USER NAME
    document.getElementById("nombreUser").textContent = userPersonal.nombre;

    document.getElementById("nombre").textContent = userPersonal.nombre;
    document.getElementById("apellidos").textContent =
        userPersonal.apellido1 + ' ' + userPersonal.apellido2;
    document.getElementById('fechaNacimiento').textContent = userPersonal.fechaNacimiento;
    document.getElementById('correo').textContent = userPersonal.correo;
    document.getElementById('phone').textContent = userPersonal.phone;
    const accountClose = document.getElementById('accountClose');
    accountClose.addEventListener('click', () => {
        
        const userPanel = document.getElementById('userPanel');        
        const w = userPanel.offsetWidth;
        userPanel.style.transform = 'translateX(calc(' + w +'px))'
        const accountIcon = document.getElementById('accountIcon');
        accountIcon.style.transform = 'translateX(0rem)';

    })

    // LOAD PERSONAL MENU
    const account = document.getElementById('accountIcon');
    account.addEventListener('click', e => {

        showUserMenu(userPersonal);
    })
}

function showUserMenu(userPersonal) {

    // console.log('showUserMenu');
    // const main = document.querySelector('main');

    const userPanel = document.getElementById('userPanel');
    const w = userPanel.offsetWidth;
    userPanel.style.transform = 'translateX(calc(' + -w +'px))'

    const accountIcon = document.getElementById('accountIcon');
    accountIcon.style.transform = 'translateX(3rem)'

    const accountClose = document.getElementById('accountClose');

}
