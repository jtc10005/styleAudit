import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import folderSelector from './folderSelector.js';

function component() {
  const textbox = folderSelector;
  const baseElement = document.createElement('div'); 

  baseElement.setAttribute('class','flex-box')

  const element = document.createElement('div');
  const btn = document.createElement('button');

  btn.innerHTML = 'Run Audit!';
  btn.onclick = printMe;


  baseElement.appendChild(textbox);
  baseElement.appendChild(btn);
  element.appendChild(baseElement);
  return element;
}

document.body.appendChild(component());