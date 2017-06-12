import { Type } from '../types';

export type SHOW_TOAST = 'SHOW_TOAST';
export const SHOW_TOAST: SHOW_TOAST = 'SHOW_TOAST';
export type HIDE_TOAST = 'HIDE_TOAST';
export const HIDE_TOAST: HIDE_TOAST = 'HIDE_TOAST';

export type ToastAction = {
  type: SHOW_TOAST | HIDE_TOAST,
  toast: Type.Toast
}

const showToast = (text: string, className: string) => ({
  type: SHOW_TOAST,
  toast: {
    timestamp: Date.now(),
    text,
    className
  }
});

export const showSuccessToast = (text?: string) => (dispatch: any, getState: any): void => {
  const ToastAction = showToast(text, 'success');
  dispatch(ToastAction);
  setTimeout(() => dispatch(hideToast(ToastAction.toast)), 3500);
};

export const showErrorToast = (text?: string) => (dispatch: any, getState: any): void => {
  const ToastAction = showToast(text, 'error');
  dispatch(showToast(text, 'error'));
  setTimeout(() => dispatch(hideToast(ToastAction.toast)), 3500);
};

export const hideToast = (toast: Type.Toast): ToastAction => ({
  type: HIDE_TOAST,
  toast
});