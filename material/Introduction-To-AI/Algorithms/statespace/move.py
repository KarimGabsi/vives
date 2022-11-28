class Move:

    def __init__(self, state, rule, cost=1):
        # state is a State object
        # rule is a ProductionRule object
        self.state = state
        self.rule = rule
        self.cost = cost

    def is_valid(self):
        # Checks whether the Move self is valid.
        # Returns True or False.
        return self.state.is_valid_move(self)

    def apply(self):
        # Applies Move self to state and returns a new State object
        return self.state.apply_move(self)