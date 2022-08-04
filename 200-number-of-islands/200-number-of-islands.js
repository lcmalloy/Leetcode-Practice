/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let q = [], pair = [];
    let island = 0;
    let row = grid.length, column = grid[0].length, first, second;
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (grid[i][j] === '1') {
                q.push([i, j]);
                grid[i][j] = 'x';
                while (q.length !== 0) {
                    pair =  q.shift();
                    first = pair[0];
                    second = pair[1];
                    
                    if (first-1 >= 0 && grid[first-1][second] === '1') {
                        q.push([first-1, second]);
                        grid[first-1][second] = 'x';
                    }
                    if (first+1 <= row-1 && grid[first+1][second] === '1') {
                        q.push([first+1, second]);
                        grid[first+1][second] = 'x';
                    }
                    if (second-1 >= 0 && grid[first][second-1] === '1') {
                        q.push([first, second-1]);
                        grid[first][second-1] = 'x';
                    }
                    if (second+1 <= column-1 && grid[first][second+1] === '1') {
                        q.push([first, second+1]);
                        grid[first][second+1] = 'x';
                    }
                }
                q.pop();
                island += 1;
            }
        }
    }
    return island;
};