class Position:

    def __init__(self, irow, icol):
        # We define a position based on row index irow and column index icol of the cell
        self.irow = irow
        self.icol = icol

    def __eq__(self, other):
        # Two positions are the same if their row and column indices are equal
        return self.irow == other.irow and self.icol == other.icol

    def __repr__(self):
        # String representation of the position: (irow, icol)
        return "({}, {})".format(self.irow, self.icol)