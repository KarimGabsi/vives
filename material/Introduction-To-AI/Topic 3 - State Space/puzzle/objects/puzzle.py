import matplotlib.pyplot as plt
from matplotlib import colors
from IPython.display import clear_output
from time import sleep


from objects.state import State
from objects.slide import *
import numpy as np

class Puzzle(State):

    # constructor
    def __init__(self, matrix, previous=None):
        if previous is None:
            previous = []
        self.matrix = np.array(matrix)  # matrix omzetten naar NumPy array
        self.size = len(matrix)  # aantal rijen = aantal kolommen
        self.empty = np.where(self.matrix == 0)  # (irow, icol) van lege vakje
        self.previous = previous  # vorige states

    # berekent de mogelijke posities van het zwarte vakje
    def calculate_moves(self):
        moves = [Left(self), Right(self), Up(self), Down(self)]
        return [move for move in moves if move.is_valid()]

    # verschuift het zwarte vakje en retourneert nieuwe state
    def apply_move(self, move):
        return Puzzle(move.new_matrix(), self.previous + [self])

    # checkt of alle vakjes in de juiste volgorde liggen
    def is_goal(self):
        goal = np.arange(1, self.size ** 2 + 1)
        goal[-1] = 0  # goal is de matrix met alle cijfers in de juiste volgorde (en nul op het einde)
        return np.all(self.matrix.flatten() == goal)

    # plot matrix
    def plot(self):
        cmap = colors.ListedColormap(['black', 'lightblue'])
        norm = colors.BoundaryNorm([-0.5, 0.5, 1.5], cmap.N)
        grid = self.matrix.copy()
        grid[grid > 0] = 1
        fig, ax = plt.subplots(1, 1)
        ax.matshow(grid, cmap=cmap, norm=norm)
        xx = np.arange(0, self.size)
        xx, yy = np.meshgrid(xx, xx)
        xx = xx.flatten()
        yy = yy.flatten()
        b = (grid > 0).flatten()
        matrix = self.matrix.flatten()
        font = dict(weight='bold', size=40)
        for x, y, i in zip(xx[b], yy[b], matrix[b]):
            ax.text(x, y, i, ha="center", va="center", fontdict=font)
        ax.set_aspect("equal")
        ticks = np.linspace(-0.5, self.size - 0.5, self.size + 1)
        ax.set_xticks(ticks)
        ax.set_xticklabels([])
        ax.set_yticks(ticks)
        ax.set_yticklabels([])
        ax.tick_params(axis=u'both', which=u'both', length=0)
        ax.grid(linewidth=3, color="white")
        ax.set_xlim((ticks[0], ticks[-1]))
        ax.set_ylim((ticks[-1], ticks[0]))
        plt.show()

    # plot opeenvolgende posities
    def plot_moves(self, wait=1):
        for puzzle in self.previous + [self]:
            clear_output()
            puzzle.plot()
            sleep(wait)

    # omzetten naar string
    def __repr__(self):
        return "\n".join([" ".join(map(str, row)) for row in self.matrix]).replace("0", '.')

    # 2 objecten zijn gelijk als hun matrices gelijk zijn
    def __eq__(self, other):
        return np.all(self.matrix == other.matrix)
