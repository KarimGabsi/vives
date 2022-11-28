# klasse Maze met de doolhofconfiguratie
from time import sleep
import numpy as np
import matplotlib.pyplot as plt
from matplotlib import colors

from .position import Position

class Maze:
    symbols = ('*', '.', '#', 'o')  # start = *, free = ., wall = #, goal = o

    def __init__(self, grid):
        # grid is an integer array:
        # start = 0, free = 1, wall = 2, goal = 3
        self.grid = np.array(grid)
        self.size = self.grid.shape[0]  # n rows = n columns of the maze grid

    def get_start_position(self):
        # returns start position (= Position object)
        irow, icol = np.where(self.grid == 0)
        return Position(irow[0], icol[0])

    def get_goal_position(self):
        # returns end position (= Position object)
        irow, icol = np.where(self.grid == 3)
        return Position(irow[0], icol[0])

    def is_valid_position(self, position):
        # Checks if a position is valid: must be within the grid and not a barrier
        return (0 <= position.irow < self.size and
                0 <= position.icol < self.size and
                self.grid[position.irow, position.icol] != 2)

    def plot(self, solution_path=None):
        # Plot the maze
        cmap = colors.ListedColormap(['forestgreen', 'lightyellow', 'purple', 'red'])  # colormap
        bounds = np.linspace(-0.5, 3.5, 5)
        norm = colors.BoundaryNorm(bounds, cmap.N)
        # plot grid
        plt.matshow(self.grid, cmap=cmap, norm=norm)
        # axes
        xmax = self.size - 0.5
        ymax = self.size - 0.5
        ax = plt.gca()
        ax.set_aspect("equal")
        ax.set_xticks(np.linspace(-0.5, xmax, self.size + 1))
        ax.set_xticklabels([])
        ax.set_yticks(np.linspace(-0.5, ymax, self.size + 1))
        ax.set_yticklabels([])
        ax.tick_params(axis=u'both', which=u'both', length=0)

        if solution_path is not None:
            for i, p in enumerate(reversed(solution_path)):
                plt.text(p.position.icol, p.position.irow, f"{i+1}")
                # circle = plt.Circle((p.position.icol, p.position.irow), 0.2, color='k')
                # ax.add_patch(circle)

        # plot grid and set axis limits
        plt.grid()
        plt.xlim([-0.5, xmax])
        plt.ylim([ymax, -0.5])
        plt.show()
        #return plt.gcf()

    def __repr__(self):
        # String representation of the maze
        return "\n".join([''.join([self.symbols[item] for item in row]) for row in self.grid])

    @staticmethod
    def create(maze):
        # creates a grid based on the list of strings "maze"
        # Returns a maze object
        return Maze(grid=[[Maze.symbols.index(symbol) for symbol in row] for row in maze])