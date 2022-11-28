from statespace.productionrule import ProductionRule

class MazeProductionRule(ProductionRule):

    def __init__(self, drow=0, dcol=0):
        # A production rule in this case is moving one square to the left, right, above or below
        # The new position has coordinate (irow+drow, icol+dcol)
        super().__init__()
        self.drow = drow
        self.dcol = dcol

    def __repr__(self):
        # We represent the production rule as 'left', 'right', 'up' or 'down'.
        if self.dcol == -1:
            return 'left'
        if self.dcol == 1:
            return 'right'
        if self.drow == -1:
            return 'up'
        if self.drow == 1:
            return 'down'

class Left(MazeProductionRule):
    def __init__(self):
        super().__init__(0, -1)

class Right(MazeProductionRule):
    def __init__(self):
        super().__init__(0, 1)

class Up(MazeProductionRule):
    def __init__(self):
        super().__init__(-1, 0)

class Down(MazeProductionRule):
    def __init__(self):
        super().__init__(1, 0)