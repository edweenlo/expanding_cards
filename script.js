// put all panels in a nodelist
const panels = document.querySelectorAll('.panel');

// loop throught each panel
panels.forEach(panel => {
    //add event listener that removes active class from each, but adds active to specific one clicked
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

//function that removes active class from all panels
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}