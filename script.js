

const toggleBtn = document.getElementById("theme-toggle");


if(localStorage.getItem('dark-mode') === 'dark') {
    document.body.classList.add("dark-mode");
}


toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode"); // true/false

    localStorage.setItem("dark-mode", isDarkMode ? 'dark' : ' ');

});