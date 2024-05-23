interface PriceObj {
    price: number,
    discount: number,
    isInstallment: boolean,
    months: number,
}

const totalPrice = ({ price, discount, isInstallment, months }: PriceObj): number => {
    let result = price;

    if (discount > 0) {
        result = result * (100 - discount) / 100;
    }

    if (isInstallment) {
        if (months > 0) {
            result = result / months;
        }
    }

    return result;
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price);