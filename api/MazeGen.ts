//Does logic to generate a maze
/**
 * begin at 0,0
 *
 * For each tile:
 *
 * 70% attempt to continue in the current direction
 * direction determined by last tile connected
 * 20% attempt to generate a split into a new tile
 * if tile is occupied, 10% chance to merge
 *
 * filling "dead" tiles:
 * currently none
 *
 */
class MazeGen {
  _grid: Cell[][];

  MazeStart(): Cell[][] {
    //returns a 3x3 grid of interconnected tiles
    return([
      [new Cell(false, true, true, false), new Cell(false, true, true, true), new Cell(false, true, false, true)],
      [new Cell(true, true, true, false), new Cell(true, true, true, true), new Cell(true, true, false, true)],
      [new Cell(true, false, true, false), new Cell(true, false, true, true), new Cell(true, false, false, true)]
    ])
  }
}
