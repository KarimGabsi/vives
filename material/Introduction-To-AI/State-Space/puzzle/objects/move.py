class Move:
    def __init__(self, state):
        self.state = state

    def apply(self):
        return self.state.apply_move(self)
