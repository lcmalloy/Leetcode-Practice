/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let row = obstacleGrid.length,
      col = obstacleGrid[0].length;
    
    if (obstacleGrid[0][0] === 1) {
        obstacleGrid[0][0] = 0;
    } else {
        obstacleGrid[0][0] = 1;
    }
    
    for (let i = 1; i < col; i++) {
        if (obstacleGrid[0][i] === 1) {
            obstacleGrid[0][i] = 0;
        } else {
            obstacleGrid[0][i] = obstacleGrid[0][i-1];
        }
    }
    for (let j = 1; j < row; j++) {
        if (obstacleGrid[j][0] === 1) {
            obstacleGrid[j][0] = 0;
        } else {
            obstacleGrid[j][0] = obstacleGrid[j-1][0];
        }
    }
    
    for (let allRow = 1; allRow < row; allRow++) {
        for (let allCol = 1; allCol < col; allCol++) {
            if (obstacleGrid[allRow][allCol] === 1) {
                obstacleGrid[allRow][allCol] = 0; 
            } else {
                obstacleGrid[allRow][allCol] = obstacleGrid[allRow-1][allCol] + obstacleGrid[allRow][allCol-1]
            }
        }
    }
    return obstacleGrid[row-1][col-1]
};


test = [[1]];
uniquePathsWithObstacles(test);