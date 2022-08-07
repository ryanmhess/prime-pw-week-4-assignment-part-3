console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

////////////////////////////////////////////////////////////////////////////////////
//                               GLOBAL VARIABLES                                 //
////////////////////////////////////////////////////////////////////////////////////

let basket = ['orange'];
const maxItems = 5;
let marker = 0;

////////////////////////////////////////////////////////////////////////////////////
//                                  FUNCTIONS                                     //
////////////////////////////////////////////////////////////////////////////////////

function addItem(array){
    console.log(isFull(array, maxItems, marker));
    if(marker === 0){
        let itemPick = prompt(`[Basket Contents]: ${array}\n\nEnter an item to add to your basket.\n\n**** Type [ stop ] to end item selection. ****`);
        if(itemPick === 'stop'){
            marker = 1; //  marker at 1 to stop adding items even if under max items
            return '';
        }   //  end if
        else{
            console.log(`\nAdding [${itemPick}] to your basket.`);
            array.push(itemPick);  //  adding item to the basket
            return true;
        }   //  end else
    }   //  end if
    else{
        return '';
    }   //  end else
}   //  end addItem function

//--------------------------------------------------------------------------------//

function isFull(array, maxItems){
    if(array.length < maxItems){    //  runs if there are less than 5 items
        console.log(`\nItem Limit: ${array.length}/5 \n[${array}]\nBasket is full?`);
        marker = 0; //  marker at 0 will run addItem function
        return false;
    }   //  end if
    else{   //  runs if there are 5 or more items
        console.log(`\nItem Limit: ${array.length}/5 \n[${array}]\nBasket is full?`);
        marker = 1; //  marker at 1 will end addItem function
        return true;
    }   //  end else
}   //  end isFull function

//--------------------------------------------------------------------------------//

function anotherItem(array){
    while(marker === 0){   //  allows you to add more items while basket not full
        console.log(addItem(array));
    }   //  end while
    return '';
}   //  end anotherItem function

//--------------------------------------------------------------------------------//

function listItems(array){
    console.log('\nThe items in your basket include:');
    for(let i=0; i<array.length; i++){
        console.log(array[i]); //  listing each item in the basket
    }   //  end for loop
    return '';
}   //  end listItems function

//--------------------------------------------------------------------------------//

function empty(array){
    let itemReset = prompt(`[Basket Contents]: ${array}\n\nWould you like to remove items from your basket?  [ yes ] / [ no ]\n`);
    if(itemReset === 'yes'){
        console.log(removeItem(array));
        return '';
    }   //  end if
    else if(itemReset === 'no'){    //  no more changes, ends shopping
        console.log(listItems(array));
        console.log('\nThank you for shopping!');
        console.log('Basket:', array);
        return '';
    }   //  end else if
    else{   //  invalid prompt input
        console.log('Invalid Entry. Please Try Again');
        console.log(' ');
        empty(array);
        return '';
    }   //  end else & restart funcion
}   //  end empty function

//--------------------------------------------------------------------------------//

function removeItem(array){
    let removeChoice = prompt(`[Basket Contents]: ${array}\n\nWould you like to remove [ 1 ] or [ all ] item(s)?\n\n**** Type [ stop ] to end item removal. ****\n**** Type [ add ] to add items. ****`);
    if(removeChoice === '1'){
        let removeSelect = prompt(`[Basket Contents]: ${array}\n\nEnter item to remove:`);
        if(array.indexOf(removeSelect) >=0){    //  removes designated item from basket
            console.log(`\nRemoved [${array[array.indexOf(removeSelect)]}] from your basket.`);
            array.splice(array.indexOf(removeSelect), 1);
            removeItem(array);
            return '';
        }   //  end if
        else{   //  invalid prompt input
            console.log('Invalid Entry. Please Try Again');
            console.log(' ');
            removeItem(array);
            return '';
        }   //  end else
        return '';
    }   //  end if
    else if(removeChoice === 'all'){    //  removes all items and allows you to add new
        array = [];
        marker = 0;
        console.log('Your basket is now empty.');
        console.log('Basket:', array);
        console.log(anotherItem(array));
        console.log(empty(array));
        return '';
    }   //  end else if
    else if(removeChoice === 'stop'){   //  ends shopping
        console.log(listItems(array));
        console.log('\nThank you for shopping!');
        console.log('Basket:', array);
        return '';
    }   //  end else if
    else if(removeChoice === 'add'){    //  lets you add more items if basket not full
        marker = 0;
        console.log(anotherItem(array));
        console.log(empty(array));
        return '';
    }   //  end else if
    else{   //  not a valid prompt input
        console.log('Invalid Entry. Please Try Again');
        console.log(' ');
        removeItem(array);
        return '';
    }   //  end else & restart funcion
}   //  end removeItem function

////////////////////////////////////////////////////////////////////////////////////
//                              TEST COMMANDS                                     //
////////////////////////////////////////////////////////////////////////////////////

console.log(addItem(basket));   
//  runs addItem and isFull functions

console.log(anotherItem(basket));    
//  based on results from isFull function will re-run above or move to listItems function

console.log(listItems(basket));
//  just list items in basket

console.log(empty(basket));
//  asks if you want to remove items, if no, ends shopping
//  if yes, asks to remove 1 or all items. allows user to add items if they removed some