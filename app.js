const btnAjouter = document.getElementById("btn-ajouter");
const btnEffacer = document.getElementById("btn-effacer");
const inpIntitule = document.getElementById("intitule");
const inpSomme = document.getElementById("somme");
const listDep = document.getElementById("list-dep");
const allDep = document.getElementById("allDep");

let SommeGlobale = 0;

btnAjouter.addEventListener("click", () => {
  let inp1 = inpIntitule.value;
  let inp2 = inpSomme.value;
  console.log(inp1, inp2);

  if (!inp1.trim().length || !inp2.trim().length) {
    createAlert();
    return;
  }
  //   console.log(typeof inp1);
  //   console.log(typeof inp2);

  let newLabel = document.createElement("ion-label");
  //newLabel.textContent = inp1 + " : " + inp2;
  newLabel.textContent = `${inp1} : ${inp2} $`; // template string

  let newItem = document.createElement("ion-item");
  newItem.appendChild(newLabel);
  listDep.appendChild(newItem);
  SommeGlobale += +inp2;
  allDep.textContent = `${SommeGlobale} $`;
  effacerContenu();
});

function effacerContenu() {
  inpIntitule.value = "";
  inpSomme.value = "";
}
btnEffacer.addEventListener("click", effacerContenu);

function createAlert() {
  console.log("aaaaa");
  let newAlert = document.createElement("ion-alert");
  newAlert.header = "Erreur";
  newAlert.subHeader = "Veuillez saisir des données";
  newAlert.buttons = ["OK", "NO", "YES"];
  newAlert.present();
  document.body.appendChild(newAlert);
}
