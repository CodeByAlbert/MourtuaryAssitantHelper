const demons = [
  { name: "Balmet", sigils: ["sigil1", "sigil2", "sigil3", "sigil4"] },
  { name: "Anek", sigils: ["sigil5", "sigil6", "sigil7", "sigil2"] },
  { name: "Telduk", sigils: ["sigil8", "sigil9", "sigil6", "sigil10"] },
  { name: "Sebbos", sigils: ["sigil2", "sigil11", "sigil5", "sigil7"] },
  { name: "Shadat", sigils: ["sigil9", "sigil4", "sigil2", "sigil10"] },
  { name: "Azel", sigils: ["sigil3", "sigil11", "sigil8", "sigil10"] },
  { name: "Kovos", sigils: ["sigil3", "sigil12", "sigil9", "sigil11"] },
  { name: "Maset", sigils: ["sigil7", "sigil10", "sigil5", "sigil13"] },
  { name: "Variketh", sigils: ["sigil4", "sigil8", "sigil5", "sigil6"] },
  { name: "Fermok", sigils: ["sigil4", "sigil5", "sigil11", "sigil7"] },
  { name: "Teshak", sigils: ["sigil11", "sigil4", "sigil3", "sigil2"] },
  { name: "Uzkaret", sigils: ["sigil3", "sigil9", "sigil2", "sigil10"] },
];

let selectedSigils = [];

// function to add sigils
function addSigil(sigil) {
  const buttonElement = document.querySelector(`[data-sigil='${sigil}']`);

  if (!selectedSigils.includes(sigil)) {
    selectedSigils.push(sigil);
    buttonElement.classList.add("btn-success");
  } else {
    const index = selectedSigils.indexOf(sigil);
    selectedSigils.splice(index, 1);
    buttonElement.classList.remove("btn-success");
  }

  filterDemons();
}

function clearSigils() {
  selectedSigils = [];
  const buttons = document.querySelectorAll("[data-sigil]");
  buttons.forEach((button) => {
    button.classList.remove("btn-success");
  });
  filterDemons();
}

// function to filter demons through selected sigils
function filterDemons() {
  const filteredDemons = demons.filter((demon) => {
    return selectedSigils.every((sigil) => demon.sigils.includes(sigil));
  });
  displayDemons(filteredDemons);
}

// function to display demon list
function displayDemons(demonList) {
  const demonNamesDiv = document.getElementById("demonNames");
  demonNamesDiv.innerHTML = "";
  demonList.forEach((demon) => {
    demonNamesDiv.innerHTML += `<p>${demon.name}</p>`;
  });
}

// Initial call to display all demons
displayDemons(demons);

// Demon Houses View

document.addEventListener("DOMContentLoaded", function () {
  let demonHousesNav = document.getElementById("demonHousesNav");
  let demonHouses = document.getElementById("demonHouses");
  let sigilHelperNav = document.getElementById("sigilHelperNav");
  let sigilHelper = document.getElementById("sigilHelper");

  demonHousesNav.addEventListener("click", toggleView);
  sigilHelperNav.addEventListener("click", toggleView);

  function toggleView(event) {
    if (demonHousesNav.contains(event.target)) {
      demonHouses.style.display = "block";
      sigilHelper.style.display = "none";
    } else if (sigilHelperNav.contains(event.target)) {
      demonHouses.style.display = "none";
      sigilHelper.style.display = "block";
    }
  }
});

toggleView();
