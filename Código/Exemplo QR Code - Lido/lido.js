// Barra de pesquisa
function toggleSearchBar(event) {
    event.preventDefault(); // Evita comportamento padrão
    var searchBar = document.getElementById("searchBar");
    searchBar.style.display = (searchBar.style.display === "block") ? "none" : "block";
}

function toggleUserContent(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    var userContent = document.getElementById("userContent");
    userContent.style.display = (userContent.style.display === "block") ? "none" : "block";
}

// Ícone de filtro
function toggleFilterContent(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    var filterContent = document.getElementById("filterContent");
    // Alterna entre mostrar ou esconder o conteúdo
    filterContent.style.display = (filterContent.style.display === "block") ? "none" : "block";
}

// Ícone de perfil
 function toggleUserContent(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    var userContent = document.getElementById("userContent");
    userContent.style.display = (userContent.style.display === "block") ? "none" : "block";
}

window.onclick = function(event) {
    var userContent = document.getElementById("userContent");
    if (!event.target.matches('.fa-user') && !userContent.contains(event.target)) {
        userContent.style.display = "none";
    }
}
