/**
 *
 *  Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
 *
 *  Example 1:
 *  Input: "(()"
 *  Output: 2
 *  Explanation: The longest valid parentheses substring is "()"
 *
 *  Example 2:
 *  Input: ")()())"
 *  Output: 4
 *  Explanation: The longest valid parentheses substring is "()()"
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if (!s || s.length < 2) return 0

    let stack = [];
    let len = s.length;
    let i = 0;
    // 最后一个无配对的右括号
    let lastRight = -1;

    let start = -1;
    let end = -1;
    let max = [Infinity, 0];

    while (i < len) {
        if (s[i] == ')') {
            if (stack.length === 0) {
                lastRight = i;
                i++;
                continue;
            }

            stack.pop();
            start = head(stack) + 1;
            end = i;
            if (stack.length === 0) {
                start = lastRight + 1;
                end = i;
            }

            if (max[1] - max[0] < end - start) {
                max = [start, end];
            }
        } else {
            stack.push(i);
        }
        i++;
    }

    if (max[0] === Infinity) return 0;
    return max[1] - max[0] + 1;
};


/**
 * return the head of stack
 */
function head(stack) {
    if (stack.length < 1) return Infinity;
    return stack[stack.length -1];
}
