"use client";

import React, { ReactNode, useState } from 'react'
import { AppContext } from './AppContext';
import { AuthService } from '@services/Authservice';
import { DataService } from '@services/DataService';
import { type CognitoUser } from '@aws-amplify/auth';
import { CartProductEntry, ProductEntry } from '@models/model';

const authService = new AuthService();
const dataService = new DataService(authService);

interface IProps {
    children: ReactNode;
}

function AppContextProvider({children}: IProps) {
    const [products, setProducts] = useState<ProductEntry[] | []>([]);
    const [categoryFilter, setCategoryFilter] = useState<string>('All');
    const [user, setUser] = useState<CognitoUser | null>(null);
    const [cart, setCart] = useState<CartProductEntry[]>([]);
    const addProducts = (products: ProductEntry[] | []) => {
        setProducts(products)
    };
    const addCategoryFilter = (filterType: string) => {
        console.log("addCategoryFilter", filterType)
        setCategoryFilter(filterType);
    };
    const addUser = (user: CognitoUser | null) => {
        setUser(user)
    };
    const addProductToTheCart = (newProduct: CartProductEntry) => {
        let newCartAdd: CartProductEntry[] = [];
        if(cart.find((product)=> product.id === newProduct.id)){
            newCartAdd = cart.map((cartProduct)=> {
                if(cartProduct.id === newProduct.id){
                    const productToAdd = cartProduct;
                    productToAdd.quantity = cartProduct.quantity + 1;
                    return productToAdd;
                } else {
                    return cartProduct;
                }
            })
        } else {
            newCartAdd = newCartAdd.concat(cart);
            newCartAdd.push(newProduct);
        }
        setCart(newCartAdd);
    };
    const substractProductFromTheCart = (newProduct: ProductEntry) => {
        let newCartRemove: CartProductEntry[] = [];
        let shouldRemoveProduct: boolean = false;
            newCartRemove = cart.map((cartProduct)=> {
                if(cartProduct.id === newProduct.id){
                    const productToRemove = cartProduct;
                    productToRemove.quantity = cartProduct.quantity - 1;
                    if(productToRemove.quantity === 0){
                        shouldRemoveProduct = true;
                    }
                    return productToRemove;
                } else {
                    return cartProduct;
                }
            })
            if(shouldRemoveProduct){
                newCartRemove = cart.filter((product)=> product.id !== newProduct.id);
            }
        setCart(newCartRemove);
    };


  return (
    <AppContext.Provider
        value={{
            products,
            addProducts,
            user,
            addUser,
            cart,
            addProductToTheCart,
            substractProductFromTheCart,
            categoryFilter,
            addCategoryFilter
        }}>
            {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider