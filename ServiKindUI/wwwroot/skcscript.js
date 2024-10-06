window.loadingOverlayHelper = {
    originalOverflow: '',
    show: function (loadingOverlay) {
        this.originalOverflow = document.body.style.overflow;
        loadingOverlay.style.display = 'flex';
        loadingOverlay.focus();
        document.body.style.overflow = 'hidden';
        document.addEventListener('focus', (event) => trapFocus(event, loadingOverlay), true);
    },
    hide: function (loadingOverlay) {
        loadingOverlay.style.display = 'none';
        document.body.style.overflow = this.originalOverflow;
        document.removeEventListener('focus', (event) => trapFocus(event, loadingOverlay), true);
    }
};

function trapFocus(event, loadingOverlay) {
    if (loadingOverlay && !loadingOverlay.contains(event.target)) {
        event.stopPropagation();
        loadingOverlay.focus();
    }
}

window.modalDialogHelper = {
    open: function (modalDialog) {
        modalDialog.showModal();
    },
    close: function (modalDialog) {
        modalDialog.close();
    }
};

window.addToBody = function (element) {
    document.body.appendChild(element);
}

