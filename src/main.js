// Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')
    .then((response) => response.json())
    .then((json) => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

function createHTMLString(item) {
  return `
    <li class="item">
      <img class="item__thumbnail" src="${item.image}" alt="${item.type}" />
      <span class="item__desciprtion">${item.gender}, ${item.size}</span>
    </li>
  `;
}

loadItems()
  .then((items) => {
    displayItems(items);
    // setEventListeners(items);
  })
  .catch(console.log);
