import React from 'react';


const array1 = [1, 2, 3, 4 ,5, 4, 2]
const array3 = ["papa", "mangue", "maman", "papa", "parapluie", "mangue"]

// const array2 = array1.filter((array, index) => array1.indexOf(array) === index);
// const array4 = array3.filter((array, index) => array3.indexOf(array) === index)



console.log(array2)
console.log(array4)

// let arr = ["apple", "mango", "apple",
//           "orange", "mango", "mango"];
  
// function removeDuplicates(arr) {
//     return arr.filter((item,
//         index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates(arr));

const Button = ({handleClick, incrementValue, btnColor}) => {
    return (
        <div>
            <button style={{backgroundColor: btnColor, padding:"10px"}} onClick={() => handleClick(incrementValue)}>+{incrementValue}%</button>
        </div>
    );
};

export default Button;