import  _ from "lodash"
import "./style.css"

function conponent(){
  var element = document.createElement('div');
  element.innerHTML = _.join(['hello','webpack']," ");
  element.classList.add('hello');
  return element
}


document.body.appendChild(conponent())

