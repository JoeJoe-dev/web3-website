function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const body = document.querySelector(".body");
    if (!sidebar.classList.contains("show")) {
        sidebar.classList.add("show");
        body.classList.add("bodyColor");
    } else {
        sidebar.classList.remove("show");
        body.classList.remove("bodyColor");
    }
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const body = document.querySelector(".body");
    if (!sidebar.classList.contains("show")) {
        sidebar.classList.add("show");
        body.classList.add("bodyColor");
    } else {
        sidebar.classList.remove("show");
        body.classList.remove("bodyColor");
    }
}
