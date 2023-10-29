//Demon Data
const demons = [
  { name: "Balmet", sigils: ["sigil1", "sigil2", "sigil3", "sigil4"] },
  { name: "Anek", sigils: ["sigil5", "sigil6", "sigil7", "sigil2"] },
];

let selectedSigils = [];

// function to add sigils
function addSigil(sigil) {
  console.log(`Adding sigil: ${sigil}`); // Debug log

  if (!selectedSigils.includes(sigil)) {
    selectedSigils.push(sigil);
  }

  filterDemons();
}

function clearSigils() {
  selectedSigils = [];
  displayDemons(demons);
}

// function to filter demons through selected sigils
function filterDemons() {
  console.log(`Filtering with sigils: ${selectedSigils.join(", ")}`); // Debug log

  const filteredDemons = demons.filter((demon) => {
    return selectedSigils.every((sigil) => demon.sigils.includes(sigil));
  });

  console.log(
    `Filtered demons: ${filteredDemons.map((d) => d.name).join(", ")}`
  ); // Debug log

  displayDemons(filteredDemons);
}

// function to display demon list
function displayDemons(demonList) {
  console.log(`Displaying demons: ${demonList.map((d) => d.name).join(", ")}`); // Debug log

  const demonNamesDiv = document.getElementById("demonNames");
  demonNamesDiv.innerHTML = "";

  demonList.forEach((demon) => {
    demonNamesDiv.innerHTML += `<p>${demon.name}</p>`;
  });
}

// Initial call to display all demons
displayDemons(demons);
