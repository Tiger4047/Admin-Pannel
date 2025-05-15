// Sidebar Toggle
const sidebarToggle = document.querySelector('.sidebar-toggle');
const adminSidebar = document.querySelector('.admin-sidebar');

sidebarToggle.addEventListener('click', function() {
    adminSidebar.classList.toggle('active');
});

// Admin Profile Dropdown
const adminProfile = document.querySelector('.admin-profile');
const profileDropdown = document.querySelector('.admin-profile .dropdown-menu');

adminProfile.addEventListener('click', function(e) {
    e.stopPropagation();
    profileDropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', function() {
    profileDropdown.classList.remove('active');
});

// Navigation between sections
const menuItems = document.querySelectorAll('.sidebar-menu li');
const contentSections = document.querySelectorAll('.content-section');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all menu items
        menuItems.forEach(i => i.classList.remove('active'));
        
        // Add active class to clicked menu item
        this.classList.add('active');
        
        // Get the section to show
        const sectionId = this.getAttribute('data-section');
        
        // Hide all content sections
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show the selected section
        document.getElementById(`${sectionId}-section`).classList.add('active');
        
        // Update page title
        document.querySelector('.page-title').textContent = this.querySelector('span').textContent;
        
        // Close sidebar on mobile
        if (window.innerWidth < 992) {
            adminSidebar.classList.remove('active');
        }
    });
});

// Settings Tabs
const settingsTabs = document.querySelectorAll('.settings-sidebar .tab');
const settingsContents = document.querySelectorAll('.settings-content .tab-content');

settingsTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        settingsTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Get the content to show
        const tabId = this.getAttribute('data-tab');
        
        // Hide all content sections
        settingsContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Show the selected content
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
});

// Messages Toggle
const messageItems = document.querySelectorAll('.message-item');

messageItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all message items
        messageItems.forEach(i => i.classList.remove('active'));
        
        // Add active class to clicked message item
        this.classList.add('active');
    });
});

// Initialize Charts
document.addEventListener('DOMContentLoaded', function() {
    // Enrollment Chart
    const enrollmentCtx = document.getElementById('enrollmentChart').getContext('2d');
    const enrollmentChart = new Chart(enrollmentCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'New Students',
                data: [45, 60, 75, 90, 110, 130],
                borderColor: 'rgba(42, 157, 143, 1)',
                backgroundColor: 'rgba(42, 157, 143, 0.1)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    // Courses Chart
    const coursesCtx = document.getElementById('coursesChart').getContext('2d');
    const coursesChart = new Chart(coursesCtx, {
        type: 'doughnut',
        data: {
            labels: ['Tajweed', 'Hifz', 'Translation', 'Kids Program', 'Ijazah'],
            datasets: [{
                data: [45, 32, 18, 42, 12],
                backgroundColor: [
                    'rgba(42, 157, 143, 0.8)',
                    'rgba(233, 196, 106, 0.8)',
                    'rgba(231, 111, 81, 0.8)',
                    'rgba(76, 201, 240, 0.8)',
                    'rgba(108, 117, 125, 0.8)'
                ],
                borderColor: [
                    'rgba(42, 157, 143, 1)',
                    'rgba(233, 196, 106, 1)',
                    'rgba(231, 111, 81, 1)',
                    'rgba(76, 201, 240, 1)',
                    'rgba(108, 117, 125, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                }
            }
        }
    });
});

// Teacher Filter
document.addEventListener("DOMContentLoaded", function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const teacherCards = document.querySelectorAll(".tutor-card");

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Active button toggle
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const category = this.textContent.trim();

            // Show/hide cards based on selected category
            teacherCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                if (category === "All" || cardCategory === category) {
                  card.style.display = "block";
                } 
                
                else {
                  card.style.display = "none";
                }
            });
        });
    });
});

// Responsive adjustments
window.addEventListener('resize', function() {
    if (window.innerWidth > 992) {
        adminSidebar.classList.remove('active');
    }
});

// Logout functionality
const logoutBtns = document.querySelectorAll('.logout');
logoutBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        // In a real application, you would handle logout here
        alert('Logout functionality would be implemented here');
        window.location.href = '../index.html';
    });
});