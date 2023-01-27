module.exports = function check(str, bracketsConfig) {
  debugger;

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let current_brt = str[i];

    for (let j = 0; j < bracketsConfig.length; j++) {
      let open_brt = bracketsConfig[j][0];
      let close_brt = bracketsConfig[j][1];

      if (open_brt != close_brt) {
        if (current_brt == open_brt) {
          stack.push(close_brt);
        } else if (current_brt == close_brt) {
          let stack_last_brt = stack.pop();
          if (close_brt != stack_last_brt) return false;
        }
      } else {
        let stack_last_brt = stack[stack.length - 1];
        if (current_brt == open_brt && current_brt != stack_last_brt) {
          stack.push(close_brt);
        } else if (current_brt == open_brt && current_brt == stack_last_brt) {
          stack.pop();
        }
      }
    }
  }
  return stack.length === 0;
};
