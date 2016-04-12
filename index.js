import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';

const state = {};

ReactDOM.render(
  <Component {...state} />,
  document.getElementById("widget")
);
