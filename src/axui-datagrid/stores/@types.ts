import * as intfs from './@interfaces';

export type DataGridRect = intfs.IRect;

export type DataGridFormatter = intfs.IDataGridFormatter;

export type formatterFunction = intfs.formatterFunction;

export type DataGridCollector = intfs.IDataGridCollector;

export type collectorFunction = intfs.collectorFunction;

export type userCallBackFunction = intfs.userCallBackFunction;

export type onScrollEndFunctionParam = intfs.IonScrollEndFunctionParam;

export type onChangeSelectedParam = intfs.IonChangeSelectedParam;

export type DataGridCol = intfs.IDataGridCol;

export type DataGridColumn = intfs.IDataGridColumn;

export type DataGridColumnKeys = intfs.IDataGridColumnKeys;

export type DataGridMoving = intfs.IDataGridMoving;

export type DataGridColumnTableMapRow = {
  cols: DataGridColumn[];
};

export type DataGridColumnTableMap = {
  rows: DataGridColumnTableMapRow[];
};

export type DataGridColumnDivideTable = {
  asideData: DataGridColumnTableMap;
  asideColGroup: any[];
  asidePanelWidth: number;
  leftData: DataGridColumnTableMap;
  rightData: DataGridColumnTableMap;
};

export type DataGridOptionHeader = {
  display?: boolean;
  align?: 'left' | 'center' | 'right' | undefined;
  columnHeight?: number;
  columnPadding?: number;
  columnBorderWidth?: number;
  selector?: boolean;
  sortable?: boolean;
  enableFilter?: boolean;
  clickAction?: 'select' | 'sort' | undefined;
  filterIconClassName?: string;
};

export type DataGridOptionBody = {
  align?: 'left' | 'center' | 'right' | undefined;
  columnHeight?: number;
  columnPadding?: number;
  columnBorderWidth?: number;
  grouping?: boolean;
  mergeCells?: boolean;
};

export type DataGridOptionPageButton = {
  className: string;
  onClick: string | userCallBackFunction;
  width?: number;
};

export type DataGridOptionPage = {
  buttonsContainerWidth?: number;
  buttons?: DataGridOptionPageButton[];
  buttonHeight?: number;
  height?: number;
};

export type DataGridOptionScroller = {
  size?: number;
  arrowSize?: number;
  barMinSize?: number;
  padding?: number;
  disabledVerticalScroll?: boolean;
};

export type DataGridOptions = {
  frozenColumnIndex?: number;
  frozenRowIndex?: number;
  showLineNumber?: boolean;
  showRowSelector?: boolean;
  multipleSelect?: boolean;
  columnMinWidth?: number;
  lineNumberColumnWidth?: number;
  rowSelectorColumnWidth?: number;
  remoteSort?: boolean;
  asidePanelWidth?: number;
  header?: DataGridOptionHeader;
  body?: DataGridOptionBody;
  page?: DataGridOptionPage;
  scroller?: DataGridOptionScroller;
  columnKeys?: DataGridColumnKeys;
  footSum?: boolean;
  bodyLoaderHeight?: number;
};

export type DataGridStyles = {
  calculatedHeight?: number | null;
  asidePanelWidth?: number;
  frozenPanelWidth?: number;
  bodyTrHeight?: number;
  elWidth?: number;
  elHeight?: number;
  CTInnerWidth?: number;
  CTInnerHeight?: number;
  rightPanelWidth?: number;
  headerHeight?: number;
  bodyHeight?: number;
  frozenPanelHeight?: number;
  footSumHeight?: number;
  pageHeight?: number;
  verticalScrollerWidth?: number;
  horizontalScrollerHeight?: number;
  scrollContentContainerHeight?: number;
  scrollContentHeight?: number;
  scrollContentContainerWidth?: number;
  scrollContentWidth?: number;
  verticalScrollerHeight?: number;
  verticalScrollBarHeight?: number;
  horizontalScrollerWidth?: number;
  horizontalScrollBarWidth?: number;
  scrollerPadding?: number;
  scrollerArrowSize?: number;
  pageButtonsContainerWidth?: number;
};

export type DataGridRootState = {
  mounted?: boolean;
  calculatedHeight?: number;
};

export type DataGridState = {
  mounted?: boolean;
  loading?: boolean;
  loadingData?: boolean;
  calculatedStyles?: boolean;

  data?: any[];
  filteredList?: any[];
  listSelectedAll?: boolean;
  selectedRowIndex?: number;
  selectedRowIndexSelected?: boolean;
  sortInfo?: {};
  filterInfo?: {};
  height?: number;

  onBeforeEvent?: (e: any, eventName: string) => void;
  onAfterEvent?: (e: any, eventName: string) => void; // 원본과 비교를 위한 JSON.stringify 값
  onScrollEnd?: (param: onScrollEndFunctionParam) => void;
  onChangeSelected?: (param: onChangeSelectedParam) => void;
  isInlineEditing?: boolean;
  inlineEditingCell?: intfs.IDataGridEditingCell;

  columnResizing?: boolean;
  columnResizerLeft?: number;

  isColumnFilter?: boolean | number;
  scrollLeft?: number;
  scrollTop?: number;
  endOfScrollTop?: boolean;
  endOfScrollLeft?: boolean;
  selectionRows?: {};
  selectionCols?: {};
  focusedRow?: number;
  focusedCol?: number;

  selectionStartOffset?: intfs.IPosition;
  selectionEndOffset?: intfs.IPosition;
  selectionMinOffset?: intfs.IPosition;
  selectionMaxOffset?: intfs.IPosition;

  printStartColIndex?: number;
  printEndColIndex?: number;

  colGroup?: DataGridCol[];
  colGroupMap?: {};
  asideColGroup?: DataGridCol[];
  leftHeaderColGroup?: DataGridCol[];
  headerColGroup?: DataGridCol[];
  bodyGrouping?: DataGridCol[];
  headerTable?: DataGridColumnTableMap;
  asideHeaderData?: DataGridColumnTableMap;
  leftHeaderData?: DataGridColumnTableMap;
  headerData?: DataGridColumnTableMap;
  bodyRowTable?: DataGridColumnTableMap;
  asideBodyRowData?: DataGridColumnTableMap;
  leftBodyRowData?: DataGridColumnTableMap;
  bodyRowData?: DataGridColumnTableMap;
  bodyRowMap?: {};
  bodyGroupingTable?: DataGridColumnTableMap;
  asideBodyGroupingData?: DataGridColumnTableMap;
  leftBodyGroupingData?: DataGridColumnTableMap;
  bodyGroupingData?: DataGridColumnTableMap;
  bodyGroupingMap?: {};
  footSumColumns?: DataGridColumn[][];
  footSumTable?: DataGridColumnTableMap;
  leftFootSumData?: DataGridColumnTableMap;
  footSumData?: DataGridColumnTableMap;
  styles?: DataGridStyles;
  options?: DataGridOptions;

  visibleHeaderColGroup?: DataGridCol[];
  visibleBodyRowData?: DataGridColumnTableMap;
  visibleBodyGroupingData?: DataGridColumnTableMap;
  visibleFootSumData?: DataGridColumnTableMap;

  propColumns?: string;
  propOptions?: string;

  predefinedFormatter?: DataGridFormatter;
  predefinedCollector?: DataGridCollector;
  rootObject?: any;
  setRootState?: (state: DataGridRootState) => void;
  getRootState?: () => any;
  getRootNode?: () => HTMLDivElement;
  getClipBoardNode?: () => HTMLTextAreaElement;
}; // footSum의 출력레이아웃 // frozenColumnIndex 를 기준으로 나누어진 출력 레이아웃 왼쪽 // frozenColumnIndex 를 기준으로 나누어진 출력 레이아웃 오른쪽

export type DataGrid = {
  data?: any[];
  columns: DataGridColumn[];
  footSum?: DataGridColumn[][];
  height?: number;
  style?: any;
  options?: DataGridOptions;
  onBeforeEvent?: (e: any, eventName: string) => void;
  onAfterEvent?: (e: any, eventName: string) => void;
  onScrollEnd?: (param: onScrollEndFunctionParam) => void;
  onChangeSelected?: (param: onChangeSelectedParam) => void;
  loading?: boolean;
  loadingData?: boolean;
};

export type DataGridDispatchParam = { [key: string]: any };
