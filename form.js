const form =document.getElementById('expenseForm');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const expensename = document.getElementById('expense-name').value;
    const descr = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;

    const expenseObj = {
    name: expensename,
    description: descr,
    amount: amount,
    category: category,
};
localStorage.setItem(descr, JSON.stringify(expenseObj));

const ul = document.getElementById('submitted-input');
const li = document.createElement('li');
li.textContent = `expense name: ${expensename}, description: ${descr}, amount: ${amount}, category: ${category}`;
ul.appendChild(li);

const deleteButton =document.createElement('button');
deleteButton.textContent = "Delete Expense";
deleteButton.addEventListener('click', function(event) {
    localStorage.removeItem(descr);
    ul.removeChild(li);
});
li.appendChild(deleteButton);

const editButton = document.createElement('button');
editButton.textContent = "Edit Button";
editButton.addEventListener('click', function(event){
    localStorage.removeItem(descr);
    ul.removeChild(li);
    document.getElementById('expense-name').value = expensename;
    document.getElementById('description').value = descr;
    document.getElementById('amount').value = amount;
    document.getElementById('category').value = category;
})
li.appendChild(editButton);
});
