import React, { Component } from 'react';
import Toast from 'react-native-toast-message';
import { ApiCaller, NavigationService } from '../../config';
import { ToastError, ToastSuccess } from '../../config/Constants';
import { LoaderAction } from '../Actions';

export class AuthMiddleware extends Component {
  static GetPost({ callback }) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue())
          const response = await fetch('https://dummyjson.com/products');
          const jsonData = await response.json();
          // setData(jsonData);
          if (response.status == 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(jsonData)
            callback(jsonData)
          }

        } catch (error) {
          dispatch(LoaderAction.LoaderFalse())
          callback({ message: 'fail' });
          dispatch(LoaderAction.LoaderFalse());
          Toast.show(ToastError(error.message));
        }
      });
    };
  }
}

export default AuthMiddleware;
