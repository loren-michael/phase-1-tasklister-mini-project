document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    manageToDo(e.target.newListItem.value);
    form.reset();
  })
});

function manageToDo(todo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' X ';
  p.textContent = `${todo}  `;
  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(p);
}

function handleDelete(e){
  e.target.parentNode.remove()
}

