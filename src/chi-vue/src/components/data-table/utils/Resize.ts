import { DATA_TABLE_CLASSES, UTILITY_CLASSES } from '@/constants/classes';
import DataTable from '../DataTable';

export class ColumnResize {
  columnHeaders?: NodeListOf<HTMLElement>;
  dataTable!: DataTable;
  elem!: HTMLElement;
  startOffset?: number;
  thElm?: HTMLElement | null;

  constructor(dataTable: DataTable) {
    this.dataTable = dataTable;
    this.elem = this.dataTable.$el as HTMLElement;
    this.columnHeaders = this.elem.querySelectorAll(`.${DATA_TABLE_CLASSES.HEAD} .${DATA_TABLE_CLASSES.CELL}`);
    this.columnHeaders.forEach(th => {
      const grip = document.createElement('div');

      th.classList.add(UTILITY_CLASSES.POSITION.RELATIVE);
      grip.innerHTML = '&nbsp;';
      grip.style.top = '0';
      grip.style.right = '0';
      grip.style.bottom = '0';
      grip.style.width = '1rem';
      grip.classList.add(UTILITY_CLASSES.POSITION.ABSOLUTE);
      grip.style.cursor = 'col-resize';
      grip.classList.add('resize-handle');
      grip.addEventListener('mousedown', e => this.handlerMouseDown(e, th));
      th.appendChild(grip);
    });
    this.elem.addEventListener('mousemove', this.handlerMouseMove);
    this.elem.addEventListener('mouseup', this.handlerMouseUp);
  }

  private handlerMouseDown = (e: MouseEvent, th: HTMLElement) => {
    this.dataTable._preventSortOnResize = true;
    this.thElm = th;
    this.startOffset = th.offsetWidth - e.pageX;
  };
  private handlerMouseMove = (e: MouseEvent) => {
    let columnCellsToResize: HTMLElement[] = [];

    if (this.thElm && this.startOffset) {
      this.thElm.setAttribute('style', `width: ${this.startOffset + e.pageX + 'px'}; flex: none !important;`);
      for (let i = 0; i < (this.columnHeaders ? this.columnHeaders.length : 0); ++i) {
        if (this.columnHeaders && this.columnHeaders[i] === this.thElm) {
          columnCellsToResize = Array.from(
            this.elem.querySelectorAll(
              `
              .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW} .${DATA_TABLE_CLASSES.CELL}:nth-child(${i + 1}),
              .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW_CHILD} .${DATA_TABLE_CLASSES.CELL}:nth-child(${i +
                1}),
              .${DATA_TABLE_CLASSES.BODY} .${DATA_TABLE_CLASSES.ROW_GRAND_CHILD} .${
                DATA_TABLE_CLASSES.CELL
              }:nth-child(${i + 1})
              `
            )
          );
        }
      }

      columnCellsToResize.forEach(column => {
        if (this.thElm) {
          column.setAttribute('style', `width: ${this.thElm.style.width} !important; flex: none !important`);
        }
      });
    }
  };

  private handlerMouseUp = () => {
    setTimeout(() => {
      this.dataTable._preventSortOnResize = false;
    }, 0);
    this.thElm = null;
  };
}
