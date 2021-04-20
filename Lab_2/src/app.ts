import Board from "./ts/TicTacToe";
import "./styles/main.scss";

class App {
    constructor(){
        this.initializer();
    }

    initializer() {
        let mainMenu = <HTMLDivElement>document.createElement('div');
        const board = new Board(9);
    }
}

const app = new App();