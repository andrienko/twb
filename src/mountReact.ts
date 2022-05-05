import { createElement } from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { domReady } from './domReady';
import { ReactComponent } from './types';

export function createWrapper<K extends keyof HTMLElementTagNameMap>(
  className?: string,
  element: K = 'div' as K
): HTMLElementTagNameMap[K] {
  const wrapper = document.createElement(element);
  if (className) {
    wrapper.className = className;
  }
  return wrapper;
}

export function mountReact(el: ReactComponent, className?: string) {
  domReady(() => {
    const wrapper = createWrapper(className);
    document.body.appendChild(wrapper);
    render(createElement(el), wrapper);
  });
}

export function mountRoot(el: ReactComponent, className?: string) {
  domReady(() => {
    const wrapper = createWrapper(className);
    document.body.appendChild(wrapper);
    const root = createRoot(wrapper);
    root.render(createElement(el));
  });
}
