
(() => {

let head = document.querySelector("head");

let link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");
link.setAttribute("href", "https://mjosip72.github.io/foi-elf/style.css");

console.log(link);

link.onload = () => {
    let content = document.querySelector("#elf-html-block");
    content.style.display = "block";
};

head.appendChild(link);

})();
