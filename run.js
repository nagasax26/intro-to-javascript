//putting it all together


//#individual ex1
//var age = prompt('Please enter your age!');
//
//if(age < 18)
//    alert('You can\'t have a drink');
//else
//    alert('You can drink!:)');

//individual ex2
//var citizenship = prompt('Please enter your citizenship!');
//if(citizenship === 'Israel')
//    alert('You can pass the border');
//else
//    alert('Sory you, need to stay');
//

//individual ex3
//var gender = prompt('Please enter your gender');
//var age = prompt('Please enter your age');
//
//if(gender === 'female' && age > 18)
//    alert('Yeea You Just got a free drink on us');
//else if(gender === 'female' && age < 18)
//    alert('sorry, no drink for you');
//else if(gender == 'male' && age > 18)
//    alert('You can drink, but need to pay for it!');


//exc optional




//part 2 ----------------------------------------------
//partner ex2
var arr = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62];
var sum = 0;
for (var i = 0; i < arr.length; i++)
    sum += arr[i];

console.log('Avg sum of arr:' + sum / arr.length);


//partner ex3
var myColor = ["red", "green", "white", "black"];
var resColor = '';
for (var i = 0; i < myColor.length - 1; i++)
    resColor += myColor[i] + ' + ';

resColor += myColor[myColor.length - 1];
console.log('myColor: ' + resColor);


//partner ex4
var number = prompt('Please enter a number');
var resNumber = '';
for (var i = 0; i < number.length - 1; i++)
    if (number[i] % 2 === 0 && number[i + 1] % 2 === 0)
        resNumber += number[i] + '-';
    else
        resNumber += number[i];

resNumber += number[number.length - 1];

console.log('number with dash: ' + resNumber);

//PARTNER EXTENSION 1 (OPTIONAL)   
var array1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var tmpCount = 0;
var maxCount = 0;
var item;
var checked = [];

function found(num) {
    for (var i = 0; i < checked.length; i++)
        if (num === checked[i])
            return true;
    return false;
}

for (var i = 0; i < array1.length; i++) {
    if (!found(array1[i])) {
        checked.push(array1[i]);
        for (var j = i; j < array1.length; j++)
            if (array1[i] === array1[j])
                tmpCount++;

        if (tmpCount > maxCount) {
            maxCount = tmpCount;
            item = array1[i];
        }



    }

    tmpCount = 0;
}
console.log('Item: '+item+' count: '+maxCount);


//PARTNER EXTENSION 2 (OPTIONAL)
//[182, 28, 30, 40, 41, 150, 199, 71, 77, 173, 181, 147, 91, 192, 166, 60, 34, 188, 113, 130, 25, 59, 82, 170, 79, 11, 112, 92, 104, 69, 42, 2, 125, 99, 39, 29, 160, 131, 178, 159, 121, 21, 200, 15, 194, 14, 54, 138, 145, 195, 85, 120, 10, 118, 33, 106, 132, 198, 58, 64, 83, 140, 5, 35, 50, 18, 84, 129, 174, 197, 96, 93, 128, 13, 16, 187, 9, 80, 27, 153, 23, 102, 52, 158, 4, 97, 65, 143, 110, 7, 86, 176, 87, 149, 98, 165, 66, 139, 155, 161, 6, 74, 196, 48, 144, 185, 88, 177, 68, 72, 116, 37, 142, 127, 180, 154, 61, 141, 191, 63, 136, 22, 32, 186, 49, 156, 103, 168, 109, 70, 115, 183, 111, 44, 90, 12, 123, 124, 75, 100, 184, 189, 162, 107, 164, 148, 152, 101, 94, 73, 8, 95, 163, 146, 46, 81, 117, 26, 175, 20, 105, 114, 157, 62, 108, 78, 51, 3, 119, 134, 172, 17, 193, 55, 126, 169, 135, 179, 45, 89, 47, 151, 43, 171, 19, 36, 167, 67, 56, 76, 24, 57, 38, 122, 53, 1, 137, 31, 133];
var array2 = [4,5,7,67,100];
var isFound = false;
var resMissing = '';

for(var i=1; i<=200; i++){
    if(isFound)
        isFound = false;
    for(var j=0; j <= array2.length && !isFound ; j++)
            if(i === array2[j])
                isFound = true;
    if(!isFound)
        resMissing += i+' ';        
}

console.log('ARRAY SIZE: '+array2.length+' Missing Numbers:\n'+resMissing);
    
//second solution you can use the built in function of array and sort the array
//and then run in loop between 1 and 200 to check, if the number is missing,
//add it to the list of the missing file if not continue
//finally print the result to screen.








