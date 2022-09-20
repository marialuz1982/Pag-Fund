(function() {
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.nav_link');
    const closeMenu = document.querySelector('.nav_close')

    // Agrega la clase nav_link--show
    openButton.addEventListener('click', () => {

        menu.classList.add('nav_link--show');

    });

    //Quita la clase cuando se hace click en el icono close
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav_link--show')
    });



})();