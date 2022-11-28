# superklasse Path
class Path:

    def __init__(self, *states):
        self.states = states  # a path is a sequence of states

    @property
    def length(self):
        # Returns the length of the path, which is the number of nodes on the path,
        # so the number of states reached on the path
        return len(self.states)

    def get_current_solution(self):
        return [state for state in self.states]

    def has_loop(self):
        # A path contains a loop if two states on the path are equal
        # since the search algorithms keep removing 'loops' from the queue
        # can only form a loop if the path is expanded,
        # so it suffices only to compare the last added state on the path with the previous one.
        return any([self.states[-1] == other for other in self.states[:-1]])

    def reaches_goal(self):
        # Checks if the path leads to the goal state.
        # So calls the is_goal() method on the last state on the path.
        return self.states[-1].is_goal()

    def calculate_children(self):
        # Activates the "production rules" on the last state, to create new descendants
        # to generate. The paths to those new descendants are the children of the current path (self).
        # NB! Those paths can contain loops!
        moves = self.states[-1].apply_production_rules()
        return [self.add(move.apply()) for move in moves if move.is_valid()]

    def add(self, state):
        # Adds a state to the current path.
        # Thus, returns a new path leading to the specified state.
        return Path(*self.states, state)

    def __repr__(self):
        # A path is a sequence of states.
        # So the generic string representation of a path is the string representation of those states.
        states = ", ".join([str(state) for state in self.states])
        return f"[{states}]"