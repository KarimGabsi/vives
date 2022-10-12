from abc import abstractmethod
from objects.move import Move


class Slide(Move):

    # constructor
    def __init__(self, state, drow=0, dcol=0):
        super().__init__(state)
        self.drow = drow
        self.dcol = dcol

    # checks if slide is valid, taking into account the edges of the puzzle
    @abstractmethod
    def is_valid(self):
        pass

    # calculates the new position matrix
    def new_matrix(self):
        if self.is_valid():
            irow1, icol1 = self.state.empty  # (irow, icol) of empty cell
            irow2, icol2 = irow1 + self.drow, icol1 + self.dcol  # (irow, icol) of square being switched
            new_matrix = self.state.matrix.copy()
            new_matrix[irow1, icol1], new_matrix[irow2, icol2] = new_matrix[irow2, icol2], new_matrix[irow1, icol1]
            return new_matrix

            # string representation object

    def __repr__(self):
        if self.dcol == -1:
            return 'L'
        elif self.dcol == 1:
            return 'R'
        elif self.drow == -1:
            return 'U'
        elif self.drow == 1:
            return 'D'


class Left(Slide):
    def __init__(self, state):
        super().__init__(state, dcol=-1)

    def is_valid(self):
        return self.state.empty[1] > 0


class Right(Slide):
    def __init__(self, state):
        super().__init__(state, dcol=1)

    def is_valid(self):
        return self.state.empty[1] < self.state.size - 1


class Up(Slide):
    def __init__(self, state):
        super().__init__(state, drow=-1)

    def is_valid(self):
        return self.state.empty[0] > 0


class Down(Slide):
    def __init__(self, state):
        super().__init__(state, drow=1)

    def is_valid(self):
        return self.state.empty[0] < self.state.size - 1
