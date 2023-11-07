const numCellePerRiga = 10;
const numCelleTotali = 100;
const grid = document.getElementById("grid");
const creaGrigliaBtn = document.getElementById("creaGrigliaBtn");

creaGrigliaBtn.addEventListener("click", () => {
    grid.innerHTML = "";

    for (let i = 1; i <= numCelleTotali; i++) {
        const cella = document.createElement("div");
        cella.classList.add("square");
        cella.textContent = i;
        grid.appendChild(cella);

        cella.addEventListener("click", function() {
            console.log("Cella cliccata", i);
            cella.classList.toggle("highlight");
        });
    }
});
