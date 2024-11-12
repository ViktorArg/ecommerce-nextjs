import { CartProductEntry, ProductEntry } from "@models/model";

export function nameLink(name: string) {
    // Convert the name to lowercase.
    name = name.toLowerCase();
  
    // Replace all spaces with hyphens.
    name = name.replaceAll(" ", "-");
  
    // Return the modified name.
    return name;
};

export function calculatedProductDiscount(product: ProductEntry) {
    if(product.discount){
        return (product.price - (product.price * product.discount * 0.01)).toFixed(2)
    }
    return null
};

export function calculatedTotalProductAmount(products: CartProductEntry[]) {
    const total = products.reduce((sum, product)=> {
        return sum + Number(product.price) * Number(product.quantity)
    }, 0);
    return total.toFixed(2);
};

export function calculatedTotalDiscountAmount(products: CartProductEntry[]) {
    const total = products.reduce((sum, product)=> {
        return sum + (Number(product.quantity) * Number(product.price) * Number(product.discount) * 0.01)
    }, 0);
    return total.toFixed(2);
};

export function inTheCart(id: string, cart: CartProductEntry[]) {
    const already = cart.find((cartProduct)=> cartProduct.id === id);
    if(already){
      return already.quantity
    } else {
      return 0;
    }
};

export function findProductById(id: string, products: ProductEntry[]) {
  console.log("product find", products)

    const product = products.find((product)=> String(product.id) === String(id));
  console.log("product find", product)

    return product;
};