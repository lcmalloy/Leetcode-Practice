/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let q = [], pairQue = [];
    
    let islandCount = 0;
    
    let row = grid.length, col = grid[0].length, first, second;
    
    for(let i = 0; i<row; i++) {
        for(let j = 0; j<col; j++) {
            
            if (grid[i][j] == '1') {
                
                q.push([i,j]);
                
                // Visited land
                grid[i][j] = 'X';
                
                while(q.length != 0) {
                    pairQue = q.shift();
                
                    first = pairQue[0];
                    second = pairQue[1];
       
                    if(first-1 >= 0 && grid[first-1][second] == '1') {
                            q.push([first-1, second]);
                            grid[first-1][second] = 'X';
                    }
                    if(first+1 <= row-1 && grid[first+1][second] == '1') {
                            q.push([first+1, second]);
                            grid[first+1][second] = 'X';
                    }
                    if(second-1 >=0 && grid[first][second-1] == '1') {
                            q.push([first, second-1]);
                            grid[first][second-1] = 'X';
                    }
                    if(second+1 <= col-1 && grid[first][second+1] == '1') {
                            q.push([first, second+1]);
                           grid[first][second+1] = 'X';
                    }
                }
                q.pop();
                islandCount++;          
            }   
        } 
    }
    return islandCount;
};