const app = {
    draggableColor: null,

    init: function() {
        document.addEventListener('DOMContentLoaded', () => {
            const table = this.createTableCells();
            table.addEventListener('dragstart', this.handleDragStart, false);
            table.addEventListener('dragend', this.handleDragEnd, false);
            table.addEventListener('dragenter', this.handleDragEnter, false);
            table.addEventListener('dragleave', this.handleDragLeave, false);
            table.addEventListener('dragover', this.handleDragOver, false);
            table.addEventListener('drop', this.applyDragAndDropResult, false);
        });
    },

    createTableCells: function () {
        const table = document.getElementById('table');

        for (let rowNumber = 0; rowNumber < 4; rowNumber++) {
            const row = document.createElement('tr');

            for (let columnNumber = 0; columnNumber < 4; columnNumber++) {
                const cell = document.createElement('td');
                cell.style.backgroundColor = this.getRandomColor();
                cell.draggable = true;
                row.appendChild(cell);
            }

            table.appendChild(row);
        }

        return table;
    },

    getRandomColor: function() {
        return 'rgb('
            + this.getColorChannelRandomValue() + ','
            + this.getColorChannelRandomValue() + ','
            + this.getColorChannelRandomValue() + ')';
    },

    getColorChannelRandomValue: function () {
        return Math.floor(Math.random() * 255);
    },

    handleDragStart: function (e) {
        if (e.target.tagName !== 'TD') {
            return;
        }

        this.draggableColor = e.target.style.backgroundColor;
        e.target.style.opacity = '0.5';
    },

    handleDragEnd: function (e) {
        if (e.target.tagName !== 'TD') {
            return;
        }

        e.target.style.opacity = '';
        this.draggableColor = null;
    },

    handleDragEnter: function (e) {
        if (e.target.tagName !== 'TD') {
            return;
        }

        e.target.style.border = '1px solid red';
    },

    handleDragOver: function (e) {
        e.preventDefault();
    },

    handleDragLeave: function (e) {
        if (e.target.tagName !== 'TD') {
            return;
        }

        e.target.style.border = '1px solid black';
    },

    applyDragAndDropResult: function (e) {
        if (e.target.tagName !== 'TD') {
            return;
        }

        e.target.style.border = '1px solid black';

        if (this.draggableColor) {
            e.target.style.backgroundColor = this.draggableColor;
        }
    }
};

app.init();
