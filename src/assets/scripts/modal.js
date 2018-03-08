var modal = (function (modalClass) {
    // elements targeted
    var modal = document.querySelector(modalClass)
    var modalContent = document.querySelector('.modal .modal-content')
    var overlayModal = document.querySelector('.modal .modal-background')

    // Function ShowModal
    function showModal() {
        modal.classList.add('is-active')
        // contentModal
        modalContent.classList.add('animated')
        if (modalContent.classList.contains('fadeOutUp')
        ) {
            modalContent.classList.remove('fadeOutUp')
        }
        modalContent.classList.add('fadeInDown')
        //Overlay
        overlayModal.classList.remove('fadeOut')
        overlayModal.classList.add('animated')
        overlayModal.classList.add('fadeIn')
    }
    function hideModal() {
        if (modal.classList.contains('is-active')) {
            // contentModal
            modalContent.classList.remove('fadeInDown')
            modalContent.classList.add('fadeOutUp')
            //Overlay
            overlayModal.classList.remove('fadeIn')
            overlayModal.classList.add('fadeOut')
            setTimeout(() => {
                modal.classList.remove('is-active')
            }, 700);
        }
    }
    overlayModal.addEventListener('click', function (e) {
        e.preventDefault()
        hideModal()
    })
    window.addEventListener("keydown", function (event) {
        if (event.keyCode == 27) {
            hideModal()
        }
    })
})