let Panels = document.querySelectorAll('.panel');

Panels.forEach(panel => {
    panel.addEventListener('click', () => {
        RemoveActiveClasses();
        panel.classList.add('active');
    });
})

function RemoveActiveClasses() {
    Panels.forEach(panel => {
        panel.classList.remove('active');
    })
}