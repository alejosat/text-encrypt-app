function updateHistory(action, text) {
    const historyItem = document.createElement('li');
    historyItem.className = 'list-group-item';
    historyItem.textContent = `${action}: ${text}`;
    historyList.prepend(historyItem);

    let history = JSON.parse(localStorage.getItem('history')) || [];
    history.push(`${action}: ${text}`);
    localStorage.setItem('history', JSON.stringify(history));
}

function loadHistory() {
    let history = JSON.parse(localStorage.getItem('history')) || [];
    history.forEach(item => {
        const historyItem = document.createElement('li');
        historyItem.className = 'list-group-item';
        historyItem.textContent = item;
        historyList.prepend(historyItem);
    });
}

function clearHistory() {
    localStorage.removeItem('history');
    historyList.innerHTML = '';
    Swal.fire('Historial Limpiado', 'El historial ha sido eliminado correctamente.', 'success');
}
