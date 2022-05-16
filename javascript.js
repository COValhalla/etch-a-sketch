//Create a 16x16 grid of divs utilizing javascript
const grid = document.querySelector('div');
//Create 16 divs and setting unique numbered ids
for (let i = 1; i <= 256; i++){
    const div = document.createElement('div');
    div.textContent = `Box ${i}`;
    div.setAttribute('id', `div${i}`);
    grid.appendChild(div);
}