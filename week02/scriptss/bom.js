// References to HTML elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

console.log("Input:", input);
console.log("Button:", button);
console.log("List:", list);

// Add event listener for the Add Chapter button
button.addEventListener('click', function () {
  // Check if input is not empty
  if (input.value.trim() !== '') {
    // Create li element
    const li = document.createElement('li');
    li.textContent = input.value;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    // Append delete button to li
    li.append(deleteButton);

    // Append li to the list
    list.append(li);

    // Add event listener to delete button
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
    });

    // Clear the input field and refocus
    input.value = '';
    input.focus();
  } else {
    // If input is empty, refocus on the input field
    input.focus();
  }
});
