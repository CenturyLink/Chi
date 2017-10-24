/* eslint no-bitwise:0 */

function sorter(order = []) {
  return (one, two) => {
    let a = one.sidebar || one.title;
    let b = two.sidebar || two.title;

    if (!a && !b) {
      return 0;
    } else if (!a) {
      return 1;
    } else if (!b) {
      return -1;
    }

    const i = order.indexOf(a);
    const j = order.indexOf(b);

    if (~i && ~j) {
      if (i < j) {
        return -1;
      } else if (j < i) {
        return 1;
      }

      return 0;
    }

    if (~i) {
      return -1;
    } else if (~j) {
      return 1;
    }

    a = a.toLowerCase();
    b = b.toLowerCase();

    if (a[0] === '.') {
      return 1;
    } else if (b[0] === '.') {
      return -1;
    } else if (a < b) {
      return -1;
    } else if (b < a) {
      return 1;
    }

    return 0;
  };
}

export default sorter;
