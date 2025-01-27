function deletele(event){
    let clickedelement = event.target;
    let todoitem = clickedelement.tagName ==="IMG" ? clickedelement.parentNode : clickedelement;
    if (todoitem.tagName==="DIV"){
        let parent = todoitem.parentNode;
        parent.removeChild(todoitem)
    }
}
function create(){
    let txt = document.getElementById('txt');
    parent = document.getElementById('todo');
    child = document.createElement('div');
    let image = document.createElement('img')
    image.src = "cross.png";
    image.addEventListener('click',deletele);
    child.innerHTML = txt.value
    child.appendChild(image)
    parent.appendChild(child)
    setTimeout(function() {
        txt.value = ''; 
      }, 0);
};
const txtInput = document.getElementById('txt'); 
txtInput.addEventListener('keydown', function(event) { 
  if (event.key === 'Enter') {
    event.preventDefault(); 
    create();
  }
});


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;
let text =`<ul>`;
for (let i=0; i<fLen; i++){
    text+=`<li> ${fruits[i]} </li>`
}
text+="</ul>"


var text1 =    `<ul>`
fruits.forEach(myfunction);
text1+=`</ul>`
function myfunction(value){
    text+=`<li> ${value} </li>`
}

console.log(text)

console.log(text1)

const numbers = [40,100,1,5]
numbers.sort((a,b)=> a-b);
console.log(numbers)



const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
  ];
  
  cars.sort((a, b) => a.year - b.year);
  
  console.log(cars);




  const myArr = [
    {name:"X00",price:100 },
    {name:"X05",price:110 },
    {name:"X01",price:100 },
    {name:"X02",price:100 },
    {name:"X03",price:100 },
    {name:"X04",price:110 },
    {name:"X06",price:110 },
    {name:"X07",price:110 }
  ];

  myArr.sort((a, b) => a.price - b.price);

  console.log(myArr);


  const numbe= [45, 4, 9, 16, 25];
  let txt = "";
  numbe.forEach(myFunction);
  function myFunction(value, index, array) {
    txt += value +":"+index+ "<br>";
  }
  console.log(txt)