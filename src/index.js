import _ from 'lodash';
import printMe from './print';

const component = () => {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click Me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
};

document.body.append(component());
