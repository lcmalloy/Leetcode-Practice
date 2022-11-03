/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const areaOfIsland = (grid, x, y, store) => {
     if (
        x < 0 ||
         x > grid.length-1 ||
         y < 0 ||
         y > grid[0].length-1 ||
         grid[x][y] === 0
     ) {
         return;
     } else if (grid[x][y] === 1) {
            store.maxSum += 1;
            grid[x][y] = 0;
              areaOfIsland(grid, x-1, y, store)  //top 
              areaOfIsland(grid, x+1, y, store)  //down
              areaOfIsland(grid, x, y-1, store)  //left
              areaOfIsland(grid, x, y+1, store)  //right
        }
        return store;
    }
    let row = grid.length,
        col = grid[0].length,
        maxArea = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let sum = 0;
            if (grid[i][j] === 0) {
                continue;
            } else {
               let area = areaOfIsland(grid, i, j, {maxSum : 0});
                maxArea = Math.max(area.maxSum, maxArea);
            }
        }
    }
    return maxArea;
};


//find islands
    //loop thru grid
        //if value is 0 continue
        //if value is 1 : hit start of island = areaOfIsland(grid, [x,y], {maxSum : 0}, area = 0)
//find areaOfIsland
   //maxSum += 1;
    //make currentLocation = 0
    //check left right up down
    //if out of bound or zero
        //return result.maxSum = Math.max(result.maxSum, area)