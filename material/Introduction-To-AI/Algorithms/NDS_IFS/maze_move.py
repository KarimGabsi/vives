from statespace.move import Move

class MazeMove(Move):

    def __init__(self, state, rule):
        super().__init__(state, rule)

    def __repr__(self):
        # We can represent a Move in the same way as the corresponding ProductionRule
        return str(self.rule)