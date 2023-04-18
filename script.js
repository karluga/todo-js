function add() {
    const uzd = document.getElementById("ievade").value;
    const listItem = document.createElement("li");
    listItem.textContent = uzd;
    document.getElementById("list").appendChild(listItem);
    document.getElementById("ievade").value = "";
    console.log(uzd);

}