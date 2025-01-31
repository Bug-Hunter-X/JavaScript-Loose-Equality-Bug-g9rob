# JavaScript Loose Equality Bug

This repository demonstrates a common, yet subtle bug in JavaScript related to loose equality (`==`). The bug involves incorrect handling of `0` values when using loose equality for comparisons.

## Bug Description
The function `foo` intends to add two numbers. However, it uses loose equality (`==`) to check for `null` or `undefined` inputs.  This leads to an unexpected behavior when one of the inputs is `0`, as `0 == null` evaluates to `false`, resulting in incorrect addition.

## Bug Solution
The solution uses strict equality (`===`) to precisely check for `null` and `undefined` values, resolving the issue and accurately handling `0` as a valid input.

## How to Run
1. Clone the repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js` to see the buggy behavior.
4. Run `node bugSolution.js` to see the corrected behavior.