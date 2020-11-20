export function uuid4() {
  let uuid = '',
    ii;
  for (ii = 0; ii < 32; ii += 1) {
    switch (ii) {
      case 8:
      case 20:
        uuid += '-';
        uuid += ((Math.random() * 16) | 0).toString(16);
        break;
      case 12:
        uuid += '-';
        uuid += '4';
        break;
      case 16:
        uuid += '-';
        uuid += ((Math.random() * 4) | 8).toString(16);
        break;
      default:
        uuid += ((Math.random() * 16) | 0).toString(16);
    }
  }
  return uuid;
}

export function contains(ancestorElement: HTMLElement, descendantElement: HTMLElement): boolean {
  if (descendantElement.parentElement === ancestorElement) {
    return true;
  } else if (!descendantElement.parentElement) {
    return false;
  } else {
    return contains(ancestorElement, descendantElement.parentElement);
  }
}
