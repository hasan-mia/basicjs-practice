function foodDelivery(foodname, quantity, price, discountpar) {
    if (foodname.toLowerCase() == 'pizza' && quantity <= 30 && quantity >= 1) { // if quantity is gatter than 30 & minium 1
        if (quantity > 10) {
            var total = quantity * price;
            var discount = total * discountpar;
            var discountPrice = total - discount;
            var message = foodname + ' Order Placed Successfully' + ' Your Discount price is' + ' $' + discountPrice;
            return message;
        } else {
            var total = quantity * price;
            var message = foodname + ' Order Placed Successfully' + ' Your price is' + ' $' + total;
            return message;
        }

    } else if (quantity > 30) {
        message = 'Sorry! Out of Stock';
        return message;
    } else if (quantity <= 0) {
        message = 'Sorry Please Order minimum atleast one';
        return message;
    } else {
        message = 'Sorry We only sale pizza';
        return message;
    }
}
// Change this value
var foodName = 'pIzza'; // Give Food Name
var foodPrice = 40; // give Price
var foodQuantity = 10; // Give quantity you want, if quantity is more than 10, you will get 10% off
var discountParcent = 10 / 100; // How much give you off as percnet ( this 10% example)
var result = foodDelivery(foodName, foodQuantity, foodPrice, discountParcent);
console.log(result);