import { createElement } from 'react';
import { render } from 'react-dom';
import { domReady } from './domReady';
import { ReactComponent } from './types';

export const mountReact = (el: ReactComponent, className?: string) =>
  domReady(() => {
    const wrapper = document.createElement('div');
    if (className) {
      wrapper.className = className;
    }
    document.body.appendChild(wrapper);
    render(createElement(el), wrapper);
  });
