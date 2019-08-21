/**
 *  这里用的是回溯法
 * 
 *  也可以使用 dp，但是没看懂：https://leetcode.com/problems/generate-parentheses/discuss/10127/An-iterative-method
 */
function generateParenthesis(n) {
    const ret = [];
    // 0 代表左括号
    // 1 代表右括号
    const handle = function (c0, c1, path, stack) {
      if (c0 === 0 && c1 === 0 && stack.length === 0) {
        ret.push(path);
        return;
      }
      if (c0 > 0) {
        handle(c0 - 1, c1, path + '(', [...stack, 0]);
      }
      if (c1 > 0) {
        if (stack.length === 0) return;
        handle(c0, c1 - 1, path + ')', stack.slice(0, -1));
      }
    }
  
    handle(n, n, '', []);
    return ret;
  }