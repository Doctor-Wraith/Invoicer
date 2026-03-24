let rowId = 0;

function addProduct(name = '', model = '', quantity = '', price='') {
    const id = rowId++;
    const row = document.createElement("div");

    row.id = `row-${id}`;
    row.className = "product-row"

    row.innerHTML = `
    <input style="flex: 6;" style="min-width: 0;" placeholder="Name" value="${name}" />
    <input style="flex: 4;" style="min-width: 0;" placeholder="Model" value="${model}" />
    <input style="flex: 4;" style="min-width: 0;" placeholder="Quanity" value="${quantity}" />
    <input style="flex: 4;" style="min-width: 0;" placeholder="Price" value="${price}" />
    <button onclick="removeRow(${id})" class="remove-button" style="flex: 1;"><img src="icons/trash.svg" alt="Delete" width="20" height="20"></button>
    `

    document.getElementById("rows").appendChild(row);
}

function removeRow(id) {
    document.getElementById(`row-${id}`)?.remove();
}