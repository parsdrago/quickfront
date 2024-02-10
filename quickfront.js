function parseJSONtoTable(json, table) {
    const data = JSON.parse(json);
    const headers = Object.keys(data[0]);
    const tableHeader = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headers.forEach((header) => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(tableHeader);
    tableHeader.appendChild(headerRow);
    const tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
    data.forEach((row) => {
        const tr = document.createElement('tr');
        headers.forEach((header) => {
            const td = document.createElement('td');
            td.textContent = row[header];
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
    return table.outerHTML;
}

function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

const quickFrontTables = document.querySelectorAll('table[data-src]');

quickFrontTables.forEach((table) => {
    // fetch data from the table's data-src attribute
    const url = table.dataset.src;
    if (!isValidURL(url)) {
        console.error('Invalid URL:', url);
        return;
    }
    fetch(url)
        .then((response) => response.text())
        .then((html) => {
            // replace the table's content with the fetched HTML
            parseJSONtoTable(html, table);
        })
        .catch((error) => {
            console.error(error);
        });
});
