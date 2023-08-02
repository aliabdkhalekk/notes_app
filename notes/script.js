let btn = document.querySelector('.btn')
let x = document.querySelector('.cont')
let inp = document.querySelector('.inp')

let arr = []

btn.addEventListener('click',function(){
    let para = document.createElement('div')
    para.setAttribute('class','para')
    x.append(para)
    para.innerHTML  = `
    <p>${inp.value}</p>
    <button class="del">Delete</button>
    <button class="edit">Edit</button>
    `

    

})

x.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('del')) {
      target.parentElement.remove();
    } else if (target.classList.contains('edit')) {
      const paragraph = target.parentElement.querySelector('p');
      const originalContent = paragraph.textContent;
      const editInput = document.createElement('input');
      editInput.value = originalContent;
      editInput.classList.add('edit-input');
  
      // Replace the paragraph with the editable input field
      paragraph.replaceWith(editInput);
      editInput.focus(); // Set focus to the input field
  
      editInput.addEventListener('keyup', function (event) {
        // If the Enter key is pressed, save the changes
        if (event.key === 'Enter') {
          const newContent = editInput.value;
          const newParagraph = document.createElement('p');
          newParagraph.textContent = newContent;
          editInput.replaceWith(newParagraph); 
        }
      });
  
      editInput.addEventListener('blur', function () {
        const newContent = editInput.value;
        const newParagraph = document.createElement('p');
        newParagraph.textContent = newContent;
        editInput.replaceWith(newParagraph); 
      });
    }
  });
// let del_btn = document.querySelector('.del')
// del_btn.addEventListener('click',function(){

//     console.log('test')
// })