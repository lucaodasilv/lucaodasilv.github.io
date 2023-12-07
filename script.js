
$(document).ready(function () {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme || 'light');

    $('#toggleSwitch').click(function () {
        const currentTheme = $('body').hasClass('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    function setTheme(theme) {
        if (theme === 'dark') {
            $('body').addClass('dark-theme');
        } else {
            $('body').removeClass('dark-theme');
        }
    }
});
