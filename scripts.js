document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickMeButton');
    const message = document.getElementById('message');

    button.addEventListener('click', function() {
        message.textContent = 'Button was clicked!';
        message.style.color = 'green';
    });
});
