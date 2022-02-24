export function printDataTable(content: string, title: string) {
  const win = window.open();
  const styleSheets =
    Array.from(document.head.getElementsByTagName('link'))
      .map(el => el.outerHTML)
      .reduce((previousValue, currentValue) => previousValue + currentValue, '') +
    Array.from(document.head.getElementsByTagName('style'))
      .map(el => el.outerHTML)
      .reduce((previousValue, currentValue) => previousValue || '' + currentValue, '');

  win?.document.write(`<head><title>${title}</title>${styleSheets}</head><body class='chi'>${content}</body>`);
  win?.document.close();

  win?.setTimeout(() => {
    win.print();
    win.close();
  }, 0);
}
