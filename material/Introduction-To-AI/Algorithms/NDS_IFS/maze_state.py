from statespace.state import State
from maze_productionrule import *
from position import Position

class MazeState(State):

    rules = [Left(), Right(), Up(), Down()]  # all possible actions, in that order!

    def __init__(self, maze, position):
        # A state is characterized by position in the maze
        # hence attributes maze and position
        super().__init__()
        self.maze = maze
        self.position = position

    def is_valid_move(self, move):
        # Checks if move leads to a valid position in self.maze
        new_position = Position(self.position.irow + move.rule.drow,
                                self.position.icol + move.rule.dcol)
        return self.maze.is_valid_position(new_position)

    def apply_move(self, move):
        # Applies move to State self to get a new State
        new_position = Position(self.position.irow + move.rule.drow,
                                self.position.icol + move.rule.dcol)
        return MazeState(self.maze, new_position)  # new state

    def is_goal(self):
        # Checks whether State self is the final state
        return self.maze.get_goal_position() == self.position

    def __eq__(self, other):
        # State self equals State other if their positions are equal
        return self.position == other.position

    def __repr__(self):
        # String representation of the State self is the position
        return str(self.position)