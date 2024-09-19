    function toggleSection(sectionId) {
        const section = document.getElementById(sectionId);
        const icon = document.getElementById('icon' + sectionId.replace('section', ''));

        if (section.classList.contains('hidden')) {
            section.classList.remove('hidden');
            icon.style.transform = 'rotate(180deg)';
        } else {
            section.classList.add('hidden');
            icon.style.transform = 'rotate(0deg)';
        }
    }