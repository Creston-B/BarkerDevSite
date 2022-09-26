//MVC Model
class Cell {
  //Connections
    _Yp: boolean;
    _Yn: boolean;
    _Xp: boolean;
    _Xn: boolean;

    get xp() {
      return(this._Xp)
    }
    get xn() {
      return(this._Xn)
    }
    get yp() {
      return(this._Yp)
    }
    get yn() {
      return(this._Yn)
    }
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

class Player {
  location: number[] = [0,0];
}

class Maze {
  MazeGrid: Cell[][];

  constructor(){
    this.MazeGrid = this.GenerateGrid();
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
      //pattern is based on # of tiles extending away from 0 above center tile, mirrored vertically and horizontally
      //pattern can always be read as the final row being centered on the player, or d being = to rows before center row
      //this pattern is hardcoded for the moment, but is based on a distance-test algorithm
      _pattern = [1,2,3,3];
    }
    //populate a new array of the visible grid around the player
      for(let iy=d;iy>-d;iy--){
        for(let ix=_pattern[iy];ix>-_pattern[iy];ix--) {
        _grid[iy][ix] = this.MazeGrid[iy+x][ix+y];
      }
    }
    return(_grid); //-> to be sent to view
  }
}

