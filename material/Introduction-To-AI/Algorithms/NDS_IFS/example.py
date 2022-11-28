from time import time
from random import randint, seed
from NDS_IFS.maze import Maze
from NDS_IFS.maze_state import MazeState
from statespace.path import Path


def dfs_bfs(initial_path, method='dfs'):
    # initial_path is Path object containing the initial state
    # method is 'dfs' or 'bfs'

    # start time
    starttime = time()

    # keep track of the number of iterations
    nr_iterations = 0

    # 1. queue <- path only containing the root
    queue = [initial_path]

    # initialize length queue
    length_queue = [len(queue)]

    # 2. while (queue is not empty and goal is not reached)
    goal_is_reached = initial_path.reaches_goal()
    path_to_goal = None
    while queue and not goal_is_reached:

        # augment number of iterations
        nr_iterations = nr_iterations + 1

        # length queue
        length_queue.append(len(queue))

        # remove the first path from the queue
        first_path = queue.pop(0)

        # create new paths (to all children)
        # reject the new paths with loops
        new_paths = [path for path in first_path.calculate_children() if not path.has_loop()]

        # if method is DFS: add the new paths to the FRONT of the queue
        if method.lower() == 'dfs':
            queue = new_paths + queue
        # if method is BFS: add the new paths to the BACK of the queue
        elif method.lower() == 'bfs':
            queue = queue + new_paths

        # update goal_is_reached
        for path in new_paths:
            if path.reaches_goal():
                goal_is_reached = True
                path_to_goal = path
                break

    # 3. if (goal reached) then success else failure
    print("SUCCES" if goal_is_reached else "FAILURE")

    # print elapsed time, number of iterations, and maximum length of queue
    print("Elapsted time:", time() - starttime, 'seconds')
    print('Number of iterations:', nr_iterations)
    print('Maximum length of queue:', max(length_queue))

    # return path to goal if goal is reached and None otherwise
    return path_to_goal

def nds(initial_path):
    # initial_path is Path object containing the initial state

    # start time
    starttime = time()

    # keep track of the number of iterations
    nr_iterations = 0

    # 1. queue <- path only containing the root
    queue = [initial_path]

    # initialize length queue
    length_queue = [len(queue)]

    # 2. while (queue is not empty and goal is not reached)
    goal_is_reached = initial_path.reaches_goal()
    path_to_goal = None
    while queue and not goal_is_reached:

        # augment number of iterations
        nr_iterations = nr_iterations + 1

        # length queue
        length_queue.append(len(queue))

        # remove the first path from the queue
        first_path = queue.pop(0)

        # create new paths (to all children)
        # reject the new paths with loops (which is also done by method calculate_moves)
        new_paths = [path for path in first_path.calculate_children() if not path.has_loop()]

        # update queue
        for path in new_paths:
            # add child in RANDOM place in queue
            index = randint(0, len(queue))
            queue.insert(index, path)

        # update goal_is_reached
        for path in new_paths:
            if path.reaches_goal():
                goal_is_reached = True
                path_to_goal = path
                break

    # 3. if (goal reached) then success else failure
    print("SUCCES" if goal_is_reached else "FAILURE")

    # print elapsed time, number of iterations, and maximum length of queue
    print("Elapsted time:", time() - starttime, 'seconds')
    print('Number of iterations:', nr_iterations)
    print('Maximum length of queue:', max(length_queue))

    # return path to goal if goal is reached and None otherwise
    return path_to_goal

def depth_limited_dfs(initial_path, depth):
    # initial_path is Path object containing the initial state
    # depth is integer

    # start time
    starttime = time()

    # keep track of the number of iterations
    nr_iterations = 0

    # 1. queue <- path only containing the root
    queue = [initial_path]

    # initialize length queue
    length_queue = [len(queue)]

    # 2. while (queue is not empty and goal is not reached)
    goal_is_reached = initial_path.reaches_goal()
    path_to_goal = None

    while queue and not goal_is_reached:

        # augment number of iterations
        nr_iterations = nr_iterations + 1

        # length queue
        length_queue.append(len(queue))

        # remove the first path from the queue
        first_path = queue.pop(0)

        # if path has length smaller than depth
        if first_path.length < depth:

            # create new paths (to all children)
            # reject the new paths with loops
            new_paths = [path for path in first_path.calculate_children() if not path.has_loop()]

            # add the new paths to the FRONT of the queue
            queue = new_paths + queue

            # update goal_is_reached
            for path in new_paths:
                if path.reaches_goal():
                    goal_is_reached = True
                    path_to_goal = path
                    break

    # print depth
    print('Depth:', depth)

    # 3. if (goal reached) then success else failure
    print("    SUCCES" if goal_is_reached else "    FAILURE")

    # print elapsed time, number of iterations, and maximum length of queue
    print('    Elapsted time:', time() - starttime, 'seconds')
    print('    Number of iterations:', nr_iterations)
    print('    Maximum length of queue:', max(length_queue))

    # return path to goal if goal is reached and None otherwise
    return path_to_goal

def ids(initial_path):
    # 1. DEPTH = 1
    depth = 1

    # 2. WHILE goal is not reached
    goal_is_reached = False
    while not goal_is_reached:
        # perform Depth-limited search
        path = depth_limited_dfs(initial_path, depth)

        # check if goal is reached
        goal_is_reached = path is not None

        # DEPTH = DEPTH + 1
        depth = depth + 1

    return path

def run_algorithms(maze, seed_n=None):
    if seed_n is not None:
        seed(seed_n)
    # print()
    # print("DFS SOLUTION")
    # initial_state = MazeState(maze, maze.get_start_position())
    # initial_path = Path(initial_state)
    # path_to_goal = dfs_bfs(initial_path, 'dfs')
    # maze.plot(solution_path=path_to_goal.get_current_solution())
    #
    # print()
    # print("BFS SOLUTION")
    # initial_state = MazeState(maze, maze.get_start_position())
    # initial_path = Path(initial_state)
    # path_to_goal = dfs_bfs(initial_path, 'bfs')
    # maze.plot(solution_path=path_to_goal.get_current_solution())
    #
    # print()
    print("NDS SOLUTION")
    initial_state = MazeState(maze, maze.get_start_position())
    initial_path = Path(initial_state)
    nds_path_to_goal = nds(initial_path)
    maze.plot(solution_path=nds_path_to_goal.get_current_solution())

    # print()
    # print("DL DFS SOLUTION")
    # initial_state = MazeState(maze, maze.get_start_position())
    # initial_path = Path(initial_state)
    # nds_path_to_goal = depth_limited_dfs(initial_path, depth=12)
    # maze.plot(solution_path=nds_path_to_goal.get_current_solution())

    # print()
    # print("IDS SOLUTION")
    # initial_state = MazeState(maze, maze.get_start_position())
    # initial_path = Path(initial_state)
    # nds_path_to_goal = ids(initial_path)
    # maze.plot(solution_path=nds_path_to_goal.get_current_solution())


if __name__ == '__main__':

    # maze = Maze.create(['o....',
    #                     '.###.',
    #                     '.#*#.',
    #                     '.#...',
    #                     '.....'])
    # maze.plot()
    # run_algorithms(maze)

    maze2 = Maze.create(['....#...o',
                         '.........',
                         '#........',
                         '.#...#...',
                         '..#......',
                         '.........',
                         '.........',
                         '......#..',
                         '*......#.'])
    maze2.plot()
    run_algorithms(maze2)