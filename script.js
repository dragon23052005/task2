
const courseInfo = {
    HTML: 'HTML is used to build the structure of a web page. You’ll work with things like headings, text, images, links, and forms.',
    CSS: 'CSS controls how a page looks, from its colors and fonts to spacing and layout. You’ll also learn how to make pages work on different screen sizes.',
    Bootstrap: 'Bootstrap gives you ready-made styles and components to build responsive pages without starting every detail from scratch.',
    JavaScript: 'JavaScript makes web pages interactive. Use it to respond to clicks, check forms, and update content on the page.'
};

// Course Details Modal
const modalEl = document.getElementById('courseModal');

if (modalEl) {
    document.querySelectorAll('[data-course]').forEach(btn => {
        btn.addEventListener('click', () => {
            const name = btn.dataset.course;

            document.getElementById('courseName').textContent = name;
            document.getElementById('courseDescription').textContent = courseInfo[name];

            bootstrap.Modal.getOrCreateInstance(modalEl).show();
        });
    });
}

// Show / Hide Password
const pass = document.getElementById('password');
const toggle = document.getElementById('togglePassword');

if (toggle && pass) {
    toggle.addEventListener('click', () => {
        pass.type = pass.type === 'password' ? 'text' : 'password';
        toggle.textContent = pass.type === 'password' ? 'Show' : 'Hide';
    });
}

// Login Form
const form = document.getElementById('loginForm');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = form.querySelector('input[type="email"]');
        const password = document.getElementById('password');

        if (email.value.trim() !== '' && password.value.trim() !== '') {
            window.location.href = 'courses.html';
        } else {
            alert('Enter your email and password to continue.');
        }
    });

    // Forgot Password and Sign Up
    for (const id of ['forgotLink', 'signupLink']) {
        const link = document.getElementById(id);

        if (link) {
            link.addEventListener('click', e => {
                e.preventDefault();

                alert('This link isn’t set up yet.');
            });
        }
    }
}
