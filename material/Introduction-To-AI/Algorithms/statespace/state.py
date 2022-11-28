from abc import ABC, abstractmethod

class State(ABC):
    rules = []  # list with ProductionRule objects

    def apply_production_rules(self):
        # On a state this method is called with the production rules om
        # calculate the moves that can bring the problem to a new state.
        # So this function returns a list of moves.
        return [rule.apply(self) for rule in self.rules]

    @abstractmethod
    def is_valid_move(self, move):
        # Applying a move to a state can result in an invalid state.
        # This function checks whether or not a state is a valid state of the problem.
        # So returns a boolean.
        pass

    @abstractmethod
    def apply_move(self, move):
        # A move can be applied to a state to move to the next state.
        # So this function returns a new state.
        pass

    @abstractmethod
    def is_goal(self):
        # Checks whether a state is the `goal state`.
        # So returns a boolean value.
        pass

    @abstractmethod
    def __eq__(self, other):
        # Compares state self with another state other
        # needed to check whether or not there are loops in a path
        pass


