//Demon Data
const demons = [
  { name: "Balmet", sigils: ["sigil1", "sigil2", "sigil3", "sigil4"] },
  { name: "Anek", sigils: ["Sigil5", "Sigil6", "sigil7", "Sigil2"] },
];

let selectedSigils = [];

//functyion to add sigils
function addSigil(sigil) {
  if (!selectedSigils.includes(sigil)) {
    selectedSigils.push(sigil);
  }

  filterDemons();
}

//function to filter demons through selected sigils

function filterDemons() {
  const filterDemons = demons.filter((demon) => {
    return selectedSigils.some((sigil) => demon.sigils.includes(sigil));
  });

  displayDemons(filterDemons);
}

//function to display demon list

function displayDemons(demonList) {
  const demonNamesDiv = document.getElementById("demonNames");
  demonNamesDiv.innerHTML = "";

  demonList.forEach((demon) => {
    demonNamesDiv.innerHTML += `<p>${demon.name}</p>`;
  });
}
