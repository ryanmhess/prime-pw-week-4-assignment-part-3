console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
    console.log(`Adding [${item}] to your basket.`);
    basket.push(item);
}   //  end addItem function

function listItems(){
    console.log('The items in your basket include:');
    for(let i=0; i<basket.length; i++){
        console.log(basket[i]);
    }   //  end for loop
}   //  end listItems function

function empty(){

}   //  end empty function

