console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
    console.log(`Adding [${item}] to your basket.`);
    basket.push(item);  //  adding item to the basket
    return true;
}   //  end addItem function

function listItems(array){
    console.log('The items in your basket include:');
    for(let i=0; i<array.length; i++){
        console.log(array[i]); //  listing each item in the basket
    }   //  end for loop
    console.log('test');
}   //  end listItems function

function empty(array){
    console.log('test 2');
    let itemReset = prompt('\nWould you like to reset your basket?  yes/no\n');
    if(itemReset === 'yes'){
        array = [];
        console.log('Your basket is now empty:', array);
    }   //  end if
    else if(itemReset === 'no'){
        return console.log('No changes made to your basket:', array);
    }   //  end else if
    else{
        console.log('Invalid Entry.  Please Try Again');
        empty();
    }   //  end else & restart funcion
}   //  end empty function

//  Tests

console.log(addItem('apples'));
console.log(addItem('steak'));
console.log(addItem('string cheese'));
console.log(addItem('chips'));

console.log(listItems(basket));

console.log(empty(basket));