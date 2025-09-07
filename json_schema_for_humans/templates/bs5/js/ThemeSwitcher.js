function toggle_theme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme ? theme : 'dark')
    document.getElementById('btnThemeSwitcher').innerHTML = theme[0].toUpperCase() + theme.slice(1)
    localStorage.setItem('data-bs-theme', theme)
}

document.addEventListener("DOMContentLoaded", (event) => {
    let theme = localStorage.getItem('data-bs-theme')
    toggle_theme(theme ? theme : 'dark')
});
