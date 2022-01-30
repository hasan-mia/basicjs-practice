function foodDelivery(foodname, quantity, price, discountpar) {
    if (foodname.toLowerCase() == 'pizza') {
        if (quantity > 10) {
            var total = quantity * price;
            var discount = total * discountpar;
            var discountPrice = total - discount;
            var message = foodname + ' Order Placed Successfully' + ' Your price is' + ' $' + discountPrice;
            return message;
        } else {
            var total = quantity * price;
            var message = foodname + ' Order Placed Successfully' + ' Your price is' + ' $' + total;
            return message;
        }

    } else {
        message = 'Sorry We only sale pizza';
        return message;
    }
}
// Change this value
var foodName = 'Pizza'; // Give Food Name
var foodPrice = 80; // give Price
var foodQuantity = 11; // Give quantity you want, if quantity is more than 10, you will get 10% off
var discountParcent = 10 / 100; // How much give you off as percnet ( this 10% example)
var result = foodDelivery(foodName, foodQuantity, foodPrice, discountParcent);
console.log(result);