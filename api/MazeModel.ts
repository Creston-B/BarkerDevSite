import { NumericLiteral } from "../node_modules/typescript/lib/typescript";

//MVC Model
class Cell {
  //Connections
    _Yp: boolean;
    _Yn: boolean;
    _Xp: boolean;
    _Xn: boolean;

    get connections() {
      return ([this._Yp, this._Yn, this._Xp, this._Xn]);
    }

  constructor(yp: boolean, yn: boolean, xp: boolean, xn: boolean) {
   this._Yp = yp;
   this._Yn = yn;
   this._Xp = xp;
   this._Xn = xn;
  }
}

class MazeGrid {
  _MazeGrid: Cell[][];
  _PlayerPos: number[];

  constructor(){
    this._MazeGrid = this.GenerateGrid();
    this._PlayerPos = [0,0];
  };

  GenerateGrid(): Cell[][]{
  let grid: Cell[][];
  //call mazegen?
  return (grid)
  }

   GetGrid(x: number, y:number, d:number = 3): Cell[][]  {
    let _pattern: number[];
    let _r:number = d+.5;
    let _grid:Cell[][];
    if (_r == 3.5) {
      //pattern can always be read as the final row being centered on the player, or d being = to rows before center row
      //this pattern is hardcoded for the moment, but is based on a distance-test algorithm
      _pattern = [1,2,3,3];
    }
    //populate a new array of the visible grid around the player
      for(let iy=d;iy>-d;iy--){
        for(let ix=_pattern[iy];ix>-_pattern[iy];ix--) {
        _grid[iy][ix] = this._MazeGrid[iy+x][ix+y];
      }
    }
    return(_grid); //-> to be sent to view
  }
}

