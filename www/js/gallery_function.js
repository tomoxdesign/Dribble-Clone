document.addEventListener('DOMContentLoaded', () => {
    let projectsPerPage = 6; // Defaultní hodnota
    let currentPage = 1;
    let currentCategory = 'all';
    let totalPages = Math.ceil(projects.length / projectsPerPage);
    let currentIndex = 0; // Přidáno pro správné přepínání obrázků

    const grid = document.getElementById('portfolio-grid');
    const pageDropdown = document.getElementById('page-dropdown');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const itemsPerPageDropdown = document.getElementById('items-per-page');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('#modal .close');
    const prevBtn = document.querySelector('#modal .prev');
    const nextBtn = document.querySelector('#modal .next');
    const modalDescription = document.getElementById('modal-description');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderProjects(page, category) {
        const filteredProjects = category === 'all' ? projects : projects.filter(p => p.category === category);
        const start = (page - 1) * projectsPerPage;
        const end = start + projectsPerPage;
        const paginatedProjects = filteredProjects.slice(start, end);

        grid.innerHTML = paginatedProjects.map((project, index) => `
            <div class="relative rounded-lg overflow-hidden shadow-lg project-card" data-category="${project.category}">
                <img src="${project.imgSrc}" alt="${project.title}" class="gallery-img w-full h-auto cursor-pointer">
                <div class="description-preview">
                    <div class="title">${project.title}</div>
                    <div class="text">${project.description}</div>
                    <div class="expand-btn" data-index="${index}">Zobrazit více</div>
                </div>
            </div>
        `).join('');

        updatePagination(filteredProjects.length);
    }

    function updatePagination(totalItems) {
        totalPages = Math.ceil(totalItems / projectsPerPage);
        pageDropdown.innerHTML = '';

        // Page dropdown
        if (totalPages > 1) {
            const select = document.createElement('select');
            select.id = 'page-select';
            select.style.maxHeight = '100px'; // Ujistit se, že max-height je aplikován
            select.style.overflowY = 'auto';  // Přidat scrollování
            for (let i = 1; i <= totalPages; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = `Stránka ${i}`;
                if (i === currentPage) option.selected = true;
                select.appendChild(option);
            }
            pageDropdown.appendChild(select);
        }

        updatePaginationButtons();
    }

    function updatePaginationButtons() {
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
    }

    function openModal(index) {
        currentIndex = index; // Uložení aktuálního indexu při otevření modálního okna
        modalImg.src = projects[currentIndex].imgSrc;
        modalDescription.textContent = projects[currentIndex].description;
        modal.style.display = "flex";
    }

    function closeModalFunc() {
        modal.style.display = "none";
    }

    function showPrevImg() {
        currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
        modalImg.src = projects[currentIndex].imgSrc;
        modalDescription.textContent = projects[currentIndex].description;
    }

    function showNextImg() {
        currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
        modalImg.src = projects[currentIndex].imgSrc;
        modalDescription.textContent = projects[currentIndex].description;
    }

    function setupEventListeners() {
        // Filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentCategory = button.getAttribute('data-filter');
                currentPage = 1;
                renderProjects(currentPage, currentCategory);
            });
        });

        // Pagination buttons
        prevPageBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderProjects(currentPage, currentCategory);
            }
        });

        nextPageBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderProjects(currentPage, currentCategory);
            }
        });

        // Page dropdown change
        pageDropdown.addEventListener('change', (e) => {
            const page = parseInt(e.target.value);
            if (!isNaN(page) && page >= 1 && page <= totalPages) {
                currentPage = page;
                renderProjects(currentPage, currentCategory);
            }
        });

        // Items per page change
        itemsPerPageDropdown.addEventListener('change', (e) => {
            projectsPerPage = parseInt(e.target.value);
            totalPages = Math.ceil(projects.length / projectsPerPage);
            currentPage = 1; // Reset na první stránku
            renderProjects(currentPage, currentCategory);
        });

        // Modal events
        grid.addEventListener('click', (e) => {
            if (e.target.classList.contains('expand-btn')) {
                const index = parseInt(e.target.getAttribute('data-index'));
                openModal(index);
            }
        });

        closeModal.addEventListener('click', closeModalFunc);
        prevBtn.addEventListener('click', showPrevImg);
        nextBtn.addEventListener('click', showNextImg);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModalFunc();
            }
        });
    }

    renderProjects(currentPage, currentCategory);
    setupEventListeners();
});
