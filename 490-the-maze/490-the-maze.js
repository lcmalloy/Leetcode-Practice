/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
    maze[start[0]][start[1]] = 2;
    return dfs(maze, start, destination)
};

//0-down 1-up 2-right 3-left
const dests = [[-1,0], [1,0], [0,-1],[0,1]]

const dfs = (maze, start, destination) => {
    let [origRow, origCol] = start;
    for (let dest of dests) {
        let row = origRow,
            col = origCol;
        while (
            row + dest[0] >= 0
            && row + dest[0] < maze.length
            && col + dest[1] >= 0
            && col + dest[1] < maze[0].length
            && maze[row + dest[0]][col + dest[1]] !== 1
        ) {
            row += dest[0];
            col += dest[1];
            if (maze[row][col] === 2) break;
        }
        if (row === origRow && col === origCol || maze[row][col] === 2) continue;
        maze[row][col] = 2;
        if (row === destination[0] && col === destination[1]) {
            return true;
        }
        const possible = dfs(maze, [row,col], destination);
        if (possible) {
            return true;
        }   
    }
    return false;
}