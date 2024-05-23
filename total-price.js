var totalPrice = function (_a) {
    var price = _a.price, discount = _a.discount, isInstallment = _a.isInstallment, months = _a.months;
    var result = price;
    if (discount > 0) {
        result = result * (100 - discount) / 100;
    }
    if (isInstallment) {
        if (months) {
            result = result / months;
        }
    }
    return result;
};
var price = totalPrice({ price: 100000, discount: 25 });
console.log(price);
