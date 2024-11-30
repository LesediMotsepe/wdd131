document.addEventListener("DOMContentLoaded", function () {
    const lastModified = document.lastModified;
    document.getElementById("last-modified").innerHTML = "Last modified: " + lastModified;
});