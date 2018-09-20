
let messageForm = document.forms.doListForm;


  messageForm.addEventListener('submit', e => {
    e.preventDefault();
      let newDiv = document.createElement('div');
      let remove = document.createElement('button');
      let list = document.getElementById('todo');
      let value = document.getElementById('item').value;
      let done = document.getElementById('done');
      let item = document.createElement('li');
      let emptyUl = document.getElementById('empty');
      let message = e.target["item"].value;
      let removeButton = document.createElement("button");
      let doneButton = document.createElement("button");
      removeButton.textContent = "Remove";
      doneButton.textContent = "Done";
      removeButton.addEventListener('click', function() {
        let parent = removeButton.parentElement;
        done.appendChild(parent);
      });
      doneButton.addEventListener('click', function() {
        doneButton.parentElement.style.display = "none";
      })
//Setting classes/inputs/values
      item.textContent = message;
      //Appendables
      item.appendChild(removeButton);
      item.appendChild(doneButton);
    emptyUl.appendChild(item);

});
