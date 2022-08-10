// Get element BY class name

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
console.log(items[2]);
items[0].textContent = 'good morning';
items[1].textContent = 'good evening';
items[2].textContent = 'good night';
//  items[1].style.backgroundColor = '#8256';

for(var i = 0; i < items.length ; i++){
    items[i].style.backgroundColor = '#2656';
}
