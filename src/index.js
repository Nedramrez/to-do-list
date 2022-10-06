import _ from 'lodash';
import './style.css';
import Icon from './ellipsis-vertical-svgrepo-com.svg';
import Icon2 from './recycle-svgrepo-com.svg';
import Icon3 from './enter-svgrepo-com.svg';

const myIcon2 = new Image();
myIcon2.src = Icon2;
myIcon2.classList.add('recycle-icon');
const whatToDo = document.querySelector('.what-to-do');
whatToDo.append(myIcon2);

const myIcon3 = new Image();
myIcon3.src = Icon3;
myIcon3.classList.add('enter-icon');
const writeTask = document.querySelector('.write-task');
writeTask.append(myIcon3);

const todaysToDoList = [
  {
  description: "Have a walk",
  completed: false,
  index: 0,
  },
  {
  description: "Sleep 8 hours",
  completed: true,
  index: 1,
  },
];

const component = () => {
  const placeholder = document.querySelector('.placeholder')

  todaysToDoList.forEach((item, index) => {
    if (item.index === index) {
      const element = document.createElement('div');
      element.classList.add('task')
      placeholder.append(element);
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
}

document.querySelector('.placeholder').appendChild(component());