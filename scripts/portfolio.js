(function() {
    let projectsButton = document.getElementById('nav-projects');
    let projectsDropdown = document.getElementById('projects-dropdown');
    let projectsExpand = document.getElementById('projects-expand');
    let projectsMinimize = document.getElementById('projects-minimize');

    function addCSS() {
        let projectsDropdownHeight = window.getComputedStyle(projectsDropdown, null).getPropertyValue('height');
        let projectDropdownCSS = document.createElement('style');

        projectDropdownCSS.innerHTML = `#projects-dropdown.visible { height: ${projectsDropdownHeight} !important; }`;
        document.head.appendChild(projectDropdownCSS);
        projectsDropdown.style.height = 0;
    }

    function addListeners() {
        projectsButton.addEventListener('click', () => toggleDropdown());
    }

    function toggleDropdown() {
        projectsButton.classList.toggle('active');
        projectsDropdown.classList.toggle('visible');
        projectsExpand.classList.toggle('visible');
        projectsMinimize.classList.toggle('visible');
    }

    addCSS();
    addListeners();
})();