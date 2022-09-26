//MVC-Controller

import {
  NextApiRequest,
  NextApiResponse,
} from "../node_modules/next/dist/shared/lib/utils";

/**
 * Getting the current position:
 *
 * iteration 1
 * Server determines start at [0,0]
 * Server displays radius of 4(?) around player
 * Tiles are always obscured by fog of war, no persistent reveal
 * player requests a move
 * if move is possible, update model, report new view
 *
 */

export default function gameHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {}

class Movement {
  _player: Player;
  _maze: Maze;
  constructor(player, grid) {
    this._player = player;
    this._maze = grid;
  }

  AttemptMoveXP = async (req: Request, res: Response) => {
    if (
      this._maze.MazeGrid[this._player.location[1]][this._player.location[0]].xp
    ) {
      this._player.location[1]++;
      res.status(200);
    }
  };
}
