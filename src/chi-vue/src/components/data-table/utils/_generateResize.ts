import { DATA_TABLE_CLASSES } from '../../../constants/classes';

export const generateColumnResize = (elem: HTMLElement) => {
  const columnHeaders = elem.querySelectorAll(`.${DATA_TABLE_CLASSES.HEAD} .${DATA_TABLE_CLASSES.CELL}`);
  let thElm: any;
  let startOffset: any;

  Array.prototype.forEach.call(
    columnHeaders,
    function (th) {
      th.style.position = 'relative';
      const grip = document.createElement('div');
      grip.innerHTML = "&nbsp;";
      grip.style.top = '0';
      grip.style.right = '0';
      grip.style.bottom = '0';
      grip.style.width = '5px';
      grip.style.position = 'absolute';
      grip.style.cursor = 'col-resize';
      grip.classList.add('resize-handle');
      grip.addEventListener('mousedown', function (e) {
        thElm = th;
        startOffset = th.offsetWidth - e.pageX;
      });
      th.appendChild(grip);
    });
  document.addEventListener('mousemove', function (e) {
    let columnCellsToResize;
    if (thElm) {
      thElm.setAttribute('style', `width: ${startOffset + e.pageX + 'px'} !important; flex: none !important;`);
      for (let i = 0; i < columnHeaders.length; ++i) {
        if (columnHeaders[i] === thElm) {
          columnCellsToResize = elem
            .querySelectorAll(`.${DATA_TABLE_CLASSES.BODY} .chi-data-table__row .chi-data-table__cell:nth-child(${i + 1})`);
        }
      }
      Array.prototype.forEach.call(
        columnCellsToResize,
        function (column) {
          column.setAttribute('style', `width: ${thElm.style.width} !important; flex: none !important`);
        });
    }
  });
  document.addEventListener('mouseup', function () {
    thElm = undefined;
  });
};
