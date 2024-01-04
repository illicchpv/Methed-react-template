
import React from 'react';
import {createRoot} from 'react-dom/client';
import MyModule from './MyModule';
import './index.scss'

const root = createRoot(document.getElementById('root'))

root.render(
  <MyModule/>
)