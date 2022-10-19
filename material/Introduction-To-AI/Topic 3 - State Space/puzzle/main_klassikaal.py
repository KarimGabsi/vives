def matrix_example():
    print("Matrix Example:")

    matrix = [
        [0, 2],
        [1, 3]
    ]

    print("matrix: ", matrix)
    print("matrix[0][0]: ", matrix[0][0])
    matrix[0][0], matrix[1][0] = matrix[1][0], matrix[0][0]
    print("matrix (move up): ", matrix)
    print()

def numpy_example():
    import numpy as np

    print("Numpy Example:")

    matrix = [
        [1, 2],
        [0, 3]
    ]

    matrix = np.array(matrix)
    print("matrix: ", matrix)
    print("Top left square: ", matrix[0][0])
    irow, icol = np.where(matrix == 0) # Get our position of the empty square
    print((irow[0], icol[0]))
    matrix[1, 0], matrix[1, 1] = matrix[1, 1], matrix[1, 0] # move empty square to the right
    print("empty square right move: ", matrix)
    print()

from objects.puzzle import *
def puzzle():
    import numpy as np

    matrix = [[0, 2], [1, 3]]
    matrix = np.array(matrix)

    p1 = Puzzle(matrix)
    print("Puzzle 1: ")
    print(p1)
    p1.plot()
    print("Is Goal?: ", p1.is_goal())
    print()

    p2 = Puzzle([[1, 2], [3, 0]])
    print("Puzzle 2: ")
    print(p2)
    p2.plot()
    print("Is Goal?: ", p2.is_goal())
    print("p1 vs p2: ", p1 == p2)
    print()

    moves1 = p1.calculate_moves()
    print("moves p1: ", moves1)
    print()

    p3 = p1.apply_move(moves1[0])
    p3.plot()
    print("p2 vs p3: ", p2 == p3)
    print("p3 previous: ", p3.previous)

    moves3 = p3.calculate_moves()
    print("moves p3: ", moves3)
    print()

    p4 = p3.apply_move(moves3[-1])
    print(p4)
    p4.plot()

    print("p4 moves:")
    i = 1
    for p in p4.previous:
        print(f"move {i}: ", p)
        i += 1
        print()

    # p4.plot_moves()


if __name__ == '__main__':
    # matrix_example
    # numpy_example()
    puzzle()