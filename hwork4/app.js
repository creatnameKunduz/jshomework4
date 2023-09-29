// 1)
const plusButton = document.getElementById('click__plus')
const minusButton = document.getElementById('click__minus')
const inputValue = document.getElementById('click__value')

plusButton.addEventListener('click', function() {
    inputValue.value++;
})
minusButton.addEventListener('click', function() {
    inputValue.value--;
})

//  const best  = document.querySelectorAll('.click__btn');
// best.forEach(btn => {
//     btn.addEventListener('click', function () {
//         const input = document.getElementsByName('click__value')
//         const confirm = this.dataset.direction;
//         const alertPro = this.parentElement.querySelector('.click__value');
//         const thisNew = + input.value;
//         let newValue = 0;
//
//         if (confirm === 'plus') {
//             newValue = thisNew + 1;
//         } else {
//             newValue = thisNew- 1 > 0 ? thisNew - 1 : 0;
//         }
//         input.value = newValue;
//     })
// })

 // 2)
 function applyFunctionToArray(arr, mathFunction) {
     const result = [];
     for (let i = 0; i < arr.length; i++) {
         result.push(mathFunction(arr[i]));
     }
     return result;
 }
  function square(x) {
     return x * x;
  }
  const myArray = [1, 2, 3, 4, 5];
 const squaredArray = applyFunctionToArray(myArray, square);
 console.log(squaredArray);


