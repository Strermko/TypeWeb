class Board {
    cells: Cell[];
    currentSymbol = 1;

    constructor(size: number){
        this.cells = new Array(size);
        let table = <HTMLTableElement>document.getElementById("tictactoe");
        let i = 0;
        for (let r = 0; r < size/3; r++) {
            let row = table.insertRow(r);
            for (let c = 0; c < size/3; c++) {
                let cell = <HTMLTableDataCellElement>row.insertCell(c);
                cell.className = 'cell';
                const newCell = new Cell(cell);
                this.cells[i] = newCell;
                cell.addEventListener("click", () =>
                    this.makeMove(newCell), false);
                i++;
                
            }
        }
    }

    makeMove(cell: Cell): void {
        cell.setCellValue(this.currentSymbol);
        this.currentSymbol == 1 ? this.currentSymbol = -1 : this.currentSymbol = 1;
    };
}

class Cell {
    cellValue: number;
    htmlElement: HTMLElement;
    constructor(cell: HTMLElement) {
    this.htmlElement = cell;
    }

    setCellValue(value: number) {
        this.cellValue = value;
        switch(value){
            case(-1):
                this.htmlElement.textContent = "O";
                break;
            case(0):
                this.htmlElement.textContent = " ";
                break;
            case(1):
                this.htmlElement.textContent = "X";
                break;
            default:
                break;
        }
    }
}

export default Board;