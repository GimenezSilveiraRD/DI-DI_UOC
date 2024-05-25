// Sample data for courses
const courses = [
    { title: "Introduction to AI", duration: "short", certification: "yes", contentType: "video", image: "images/course1.jpg", description: "Learn the basics of artificial intelligence and its applications." },
    { title: "Advanced Programming", duration: "long", certification: "no", contentType: "course", image: "images/course2.jpg", description: "Master advanced programming techniques and concepts." },
    { title: "Marketing Essentials", duration: "medium", certification: "yes", contentType: "article", image: "images/course3.jpg", description: "Understand the fundamentals of marketing and its importance in business." },
    { title: "Leadership Skills", duration: "short", certification: "no", contentType: "video", image: "images/course4.jpg", description: "Develop essential leadership skills for career advancement." },
    { title: "Project Management", duration: "medium", certification: "yes", contentType: "course", image: "images/course5.jpg", description: "Learn effective project management strategies and practices." }
];

const additionalCourses = [
    { title: "Data Science Basics", duration: "medium", certification: "yes", contentType: "course", image: "images/course6.jpg", description: "Get started with data science and learn the basics." },
    { title: "Graphic Design Fundamentals", duration: "short", certification: "no", contentType: "video", image: "images/course7.jpg", description: "Understand the principles of graphic design." },
    { title: "Cybersecurity Essentials", duration: "long", certification: "yes", contentType: "course", image: "images/course8.jpg", description: "Learn how to protect yourself online." },
    { title: "Financial Management", duration: "medium", certification: "no", contentType: "article", image: "images/course9.jpg", description: "Manage your finances effectively." },
    { title: "Digital Marketing", duration: "short", certification: "yes", contentType: "video", image: "images/course10.jpg", description: "Explore the world of digital marketing." }
];

// Function to search and filter courses
function searchCourses() {
    const searchBar = document.getElementById('search-bar').value.toLowerCase();
    const durationFilter = document.getElementById('duration').value;
    const contentTypeFilter = document.getElementById('content-type').value;
    const certificationFilter = document.getElementById('certification').value;

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchBar);
        const matchesDuration = durationFilter === 'all' || course.duration === durationFilter;
        const matchesContentType = contentTypeFilter === 'all' || course.contentType === contentTypeFilter;
        const matchesCertification = certificationFilter === 'all' || course.certification === certificationFilter;

        return matchesSearch && matchesDuration && matchesContentType && matchesCertification;
    });

    displayCourses(filteredCourses, 'course-list');
}

// Function to display courses
function displayCourses(courseList, elementId) {
    const courseListElement = document.getElementById(elementId);
    courseListElement.innerHTML = '';

    courseList.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');
        courseElement.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <h3>${course.title}</h3>
            <p>Duration: ${course.duration}</p>
            <p>Certification: ${course.certification === 'yes' ? 'Certified' : 'Not Certified'}</p>
        `;
        courseElement.onclick = () => showCourseDetails(course);
        courseListElement.appendChild(courseElement);
    });
}

// Function to show course details
function showCourseDetails(course) {
    const courseDetailsElement = document.getElementById('course-details');
    const recommendationsElement = document.getElementById('recommendations');
    const additionalCoursesElement = document.getElementById('additional-courses');
    const courseDetailsContent = document.getElementById('course-details-content');

    courseDetailsContent.innerHTML = `
        <h2>${course.title}</h2>
        <img src="${course.image}" alt="${course.title}" style="max-width: 300px; height: auto; margin-bottom: 20px;">
        <p>${course.description}</p>
        <p>Duration: ${course.duration}</p>
        <p>Certification: ${course.certification === 'yes' ? 'Certified' : 'Not Certified'}</p>
    `;

    courseDetailsElement.classList.remove('hidden');
    recommendationsElement.classList.add('hidden');
    additionalCoursesElement.classList.add('hidden');
}

// Function to go back to the menu
function backToMenu() {
    const courseDetailsElement = document.getElementById('course-details');
    const recommendationsElement = document.getElementById('recommendations');
    const additionalCoursesElement = document.getElementById('additional-courses');

    courseDetailsElement.classList.add('hidden');
    recommendationsElement.classList.remove('hidden');
    additionalCoursesElement.classList.remove('hidden');
}

// Function to toggle the chatbot
function toggleChatbot() {
    const chatbotContent = document.querySelector('.chatbot-content');
    chatbotContent.style.display = chatbotContent.style.display === 'block' ? 'none' : 'block';
}

// Function to send a message in the chatbot
function sendMessage(event) {
    event.preventDefault();
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    if (message) {
        displayMessage(message, 'user-message');
        input.value = '';
        setTimeout(() => {
            displayMessage('Hello, how can I help you?', 'bot-message');
        }, 1000);
    }
}

// Function to display a message in the chatbot
function displayMessage(message, messageType) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageElement = document.createElement('p');
    messageElement.className = messageType;
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

document.getElementById('back-to-menu-button').addEventListener('click', backToMenu);

// Initial display of recommended courses and additional courses
displayCourses(courses, 'course-list');
displayCourses(additionalCourses, 'additional-course-list');
