/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
   maze[start[0]][start[1]] = 2;
    return dfs(maze, start, destination);
};

//0-up, 1-down, 2-left, 3-right
const dirs = [[-1,0],[1,0],[0,-1],[0,1]];

const dfs = (maze, start, destination) => {
    const [origRow, origCol] = start;
    for (let dir of dirs) {
        let row = origRow,
            col = origCol;
    
        while (
            row + dir[0] >= 0
            && row + dir[0] < maze.length
            && col + dir[1] >= 0
            && col + dir[1] < maze[0].length
            && maze[row + dir[0]][col + dir[1]] !== 1
        ) {
            row += dir[0];
            col += dir[1];
            if (maze[row][col] === 2) {
                break;
            }
        }
        if (row === origRow && col === origCol || maze[row][col] === 2) {
            continue;
        }
        maze[row][col] = 2;
        if (row === destination[0] && col === destination[1]) {
                return true;
        }
        const possible = dfs(maze, [row, col], destination);
        if (possible) {
            return true;
        }
    }
    return false;
} 




//can only go in 1 direction and must hit a 1 before changing directions;
    //once it hits a 1 it can move in another direction
        //if no possible direction to move in current location except for backwards :: not a valid path
        //can move left, right, up down
//DFS approach
    //DFS is a stack
        //we put in valid direction can check values of left right up down of current ball location
            //for each direction that has value of 0 add to stack.
            //pop from the stack
            //add to object to record location that we have been to
            //continue adding coordinated to the queue until you hit a 1
            //then we can add all 0 values in each direction
                //if the only current possible solution is in the record then not a valid path: continue;
            //if we reach destination return true;
//if we are unable to find a valid path and the while loop ends return false;
        