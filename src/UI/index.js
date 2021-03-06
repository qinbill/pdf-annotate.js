import { addEventListener, removeEventListener, fireEvent } from './event';
import { disableEdit, enableEdit } from './edit';
import { disablePen, enablePen, setPen } from './pen';
import { disableArrow, enableArrow, setArrow } from './arrow';
import { disablePoint, enablePoint } from './point';
import { disableRect, enableRect } from './rect';
import { disableCircle, enableCircle, setCircle } from './circle';
import { disableText, enableText, setText } from './text';
import { createPage, renderPage } from './page';

export default {
  addEventListener, removeEventListener, fireEvent,
  disableEdit, enableEdit,
  disablePen, enablePen, setPen,
  disablePoint, enablePoint,
  disableRect, enableRect,
  disableCircle, enableCircle, setCircle,
  disableArrow, enableArrow, setArrow,
  disableText, enableText, setText,
  createPage, renderPage
};
