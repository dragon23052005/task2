
const courseInfo = {
    HTML: 'HTML stands for HyperText Markup Language. It creates the structure of web pages using headings, paragraphs, images, links, tables, and forms.',
    CSS: 'CSS stands for Cascading Style Sheets. It controls colors, fonts, spacing, positioning, and responsive layouts to make websites beautiful.',
    Bootstrap: 'Bootstrap is a popular front-end framework that helps developers create responsive websites quickly using a grid system and ready-made components.',
    JavaScript: 'JavaScript adds interactivity to websites, including button clicks, form validation, animations, and dynamic content.'
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
            alert('Login successful!');
        } else {
            alert('Please enter your email and password!');
        }
    });

    // Forgot Password and Sign Up
    for (const id of ['forgotLink', 'signupLink']) {
        const link = document.getElementById(id);

        if (link) {
            link.addEventListener('click', e => {
                e.preventDefault();

                alert('This feature is not available yet.');
            });
        }
    }
}
