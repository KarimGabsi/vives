from .move import Move

class ProductionRule:

    def apply(self, state) -> Move:
        # method that returns a Move object to apply ProductionRule self to self.state
        return Move(state, self)