(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const startTimestamp = performance.now();
        const table = document.getElementById('table');
        const isDelegationMode = Math.random() > 0.5;

        const pageHeader = document.getElementById('header');
        pageHeader.innerText = isDelegationMode ? 'Event delegation mode' : 'Each cell listener mode';

        for (let rowNumber = 0; rowNumber < 100; rowNumber++) {
            const row = document.createElement('tr');

            for (let colNumber = 0; colNumber < 100; colNumber++) {
                const cell = document.createElement('td');
                cell.innerText = '' + rowNumber + ':' + colNumber;

                if (!isDelegationMode) {
                    cell.addEventListener('click', () => console.log(cell.innerText + ' (Cell listener)'), false);
                }

                row.appendChild(cell);
            }

            table.appendChild(row);
        }

        if (isDelegationMode) {
            table.addEventListener('click', e => {
                if (e.target.tagName === 'TD') {
                    console.log(e.target.innerText + ' (Delegation listener)');
                }
            }, false);
        }

        const endTimestamp = performance.now();

        console.log(endTimestamp - startTimestamp);
    });
})();
