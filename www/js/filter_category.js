document.addEventListener('DOMContentLoaded', function() {
    const switchButtons = document.querySelectorAll('.switch-button');
    const sections = document.querySelectorAll('.category-section');

    switchButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedCategory = this.id.replace('Category', '');
            
            // Move the indicator
            switchButtons.forEach(btn => btn.classList.remove('active-button'));
            this.classList.add('active-button');
            
            // Show the selected section
            sections.forEach(section => {
                if (section.id === selectedCategory + 'Section') {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        });
    });
});