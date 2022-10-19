from abc import ABC, abstractmethod


class State(ABC):

    @abstractmethod
    def calculate_moves(self):
        # Op een state wordt deze methode aangeroepen om volgens de production rules
        # de moves te berekenen die het probleem in een nieuwe toestand kunnen brengen.
        # Deze functie geeft dus een lijst van moves terug (eventueel leeg).
        pass

    @abstractmethod
    def apply_move(self, move):
        # Op een state kan een move toegepast worden om naar een volgende state over te gaan.
        # Deze functie geeft dus een nieuwe state terug.
        pass

    @abstractmethod
    def is_goal(self):
        # Controleert of een state de `goal state` is.
        # Retourneert dus een booleaanse waarde.
        pass