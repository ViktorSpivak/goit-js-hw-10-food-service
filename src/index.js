import './styles/backTheme-styles.css';
import './styles/checkbox-styles.css';
import './styles/menu-styles.css';
import './styles/styles.css';

import { elementsMenu } from './components/js-menu.js';
import { checkBox } from './components/js-checkbox.js';
import { changeBackLayoutTheme } from './components/backTheme.js';
import '../node_modules/material-icons/iconfont/material-icons.css';
document.body.prepend(checkBox);
checkBox.after(elementsMenu);
checkBox.firstChild.nextSibling.addEventListener(
  'change',
  changeBackLayoutTheme,
);
