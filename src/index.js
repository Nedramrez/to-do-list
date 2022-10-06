import _ from 'lodash';
import './style.css';
import Icon from './ellipsis-vertical-svgrepo-com.svg';
import Icon2 from './recycle-svgrepo-com.svg';

const myIcon2 = new Image();
myIcon2.src = Icon2;
myIcon2.classList.add('recycle-icon');
const whatToDo = document.querySelector('.what-to-do');
whatToDo.append(myIcon2);

const todaysToDoList = [
  {
  description: "Have a walk",
  completed: true,
  index: 0,
  },
];

const component = () => {
  const element = document.createElement('div');
  
  todaysToDoList.forEach((item, index) => {
    if (item.index === index) {
      const checkBox = document.createElement('input');
      checkBox.classList.add('check-box');
      checkBox.setAttribute('type', 'checkbox');
      element.appendChild(checkBox);
      const taskText = document.createElement('p');
      taskText.innerHTML = item.description;
      taskText.classList.add('task-text')
      element.appendChild(taskText);
      const myIcon = new Image();
      myIcon.src = Icon;
      element.appendChild(myIcon);
    }
  });
  element.classList.add('tasks')
  return element;
}

document.querySelector('.placeholder').appendChild(component());