const h3 = document.querySelectorAll('.h3');
const div = document.querySelector('.div');

h3.forEach((items) => {
  items.remove();
  console.log(items);
});

console.log(h3);
// h3.forEach(item => console.log(item));
