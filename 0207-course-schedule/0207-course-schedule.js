/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let graph = new Map(),
        visiting = new Set(),
        visited = new Set();
    for (let [req, course] of prerequisites) {
        if (graph.has(req)) {
            let edges = graph.get(req);
            edges.push(course);
            graph.set(req, edges);
        } else {
            graph.set(req, [course]);
        }
    }
    
    const dfs = (req) => {
        visiting.add(req);
        let edges = graph.get(req);
        if (edges) {
            for (let e of edges) {
                if (visited.has(e)) {
                    continue;
                }
                if (visiting.has(e)) {
                    return true;
                }
                if (dfs(e)) {
                    return true;
                }
            }
        }
        visiting.delete(req);
        visited.add(req);
        return false;
    }
    
    for (const [req, course] of graph) {
        if (dfs(req)) {
            return false;
        }
    }
    return true;
};