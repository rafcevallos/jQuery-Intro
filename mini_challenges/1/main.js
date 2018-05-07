//1. Using jQuery, get all the titles of the products for sale and check whether the results include "Taco Suit" and "Burger Suit". If they do, log to console "Product exists!"
let productsTitles = $(".product h2").text() /* puts all string values into a variable from class and h2 */
console.log(productsTitles)

if(productsTitles.includes("Taco Suit" && "Burger Suit")) {
    console.log("Product Exists!")
}

//2. Using jQuery, when the form is submitted, get the values of all input fields and log to console. Log to console, whether the checkbox is checked or unchecked.
$('#form-button').click(function(){
    console.log($('#input-name').val())
    console.log($('#input-email').val())
    console.log($('#input-password').val())
    console.log($('#subscribeToAlerts').is(":checked"))
})