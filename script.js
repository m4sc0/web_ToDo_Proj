Array.from(document.getElementsByClassName('task')).forEach(element => {
    element.addEventListener('click', function () {
        element.classList.toggle('task-done');
    });
});
