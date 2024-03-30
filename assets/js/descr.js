window.addEventListener('scroll', function() {
    var line = document.querySelector('.description__line');
    var lineBottom = line.offsetTop + line.offsetHeight;
    var offset = 200;
    var maxScroll = lineBottom - offset;
    var scrollPosition = window.scrollY;

    var date = document.querySelector('.description__date');
    var dateTop = scrollPosition - line.offsetTop; // Вычисляем новую позицию .description__date относительно верхнего края .description__line

    // Обновляем позицию .description__date, учитывая ограничение до конца .description__line
    if (dateTop >= 0 && dateTop <= maxScroll) {
        date.style.top = dateTop + 'px';
    } else if (dateTop > maxScroll) {
        date.style.top = maxScroll + 'px'; // Фиксируем .description__date в конце .description__line
    } else {
        date.style.top = '0px'; // Фиксируем .description__date в начале .description__line
    }
});
