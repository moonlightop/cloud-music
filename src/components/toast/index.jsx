import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { isShowToast } from '@redux/actions/login';

import {
  Toast
}from './style.js';

export default memo(function ZHToast(props) {
  const { 
    title="请先勾选同意《服务条款》、《隐私政策》、《儿童隐式政策》",
    style={
      backgroundColor:"#333",
      color:"#fff", 
    },
  } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {  
      dispatch(isShowToast(false));
    },1000);
  });

  return (
    <Toast style={style}>{title}</Toast>
  );
  
})
