const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];

// Todo 리스트를 로컬스토리지에 저장
function saveToDos() {

}

// Todo 항목중 선택항목을 삭제
function deleteToDo(event) {
  event.target.style.visibility='hidden';
  console.log("Delete !!!")
}

// Todo 리스트를 화면에 보여줌 (appendChild이용)
function paintToDo(newTodo) {
  console.log(toDos)
  // li를 만든다.
  // span을 만든다
  // span에 입력 - innerHtml
  // button을 만든다
  // li에 appendChild로 span, button 추가

  // <li>
  //   <span>내용을 적음</span>
  //   <button></button>
  // </li>
  const li = document.createElement('li');
  const sp = document.createElement('span');
  const btn = document.createElement('button');
  btn.addEventListener('click', deleteToDo);
  sp.innerHTML=toDoInput.value;
  toDoInput.value = ''
  btn.innerHTML='Delete';
  li.appendChild(sp);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

// Form Submit 이벤트를 처리하는 콜백함수
function handleToDoSubmit(event) {
  event.preventDefault();
  //유저입력정보를 toDos배열안에 추가한다.
  toDos.push(toDoInput.value);
  localStorage.setItem('toDos',toDoInput.value)
  console.log(toDos);
  //보여주는 기능 함수를 호출한다.
  paintToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);






// const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
// const toDoList = document.getElementById("todo-list");
// let toDos = [];

// // Todo 리스트를 로컬스토리지에 저장
// function saveToDos() {

// }

// // Todo 항목중 선택항목을 삭제
// function deleteToDo(event) {
//   console.log("delete !!!!!");

// }

// // Todo 리스트를 화면에 보여줌 (appendChild이용)
// function paintToDo(newTodo) {
//   console.log(toDos);
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   const button = document.createElement("button");
//   button.addEventListener('click', deleteToDo);

//   span.innerHTML = newTodo;
//   button.innerHTML = 'Delete';

//   li.appendChild(span);
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }

// // Form Submit 이벤트를 처리하는 콜백함수
// function handleToDoSubmit(event) {
//   event.preventDefault();
//   toDos.push(toDoInput.value);
//   const newTodo = toDoInput.value;
//   toDoInput.value = '';
//   paintToDo(newTodo);
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);