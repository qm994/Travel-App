function openForm() {
    let openButton = document.getElementById("open-button");
    openButton.addEventListener("click", function(){document.getElementById("myForm").style.display = "block"});
}

export { openForm };
