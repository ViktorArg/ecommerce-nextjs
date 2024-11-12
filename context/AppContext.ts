"use client";

import { type CognitoUser } from "@aws-amplify/auth";
import { ProductEntry, CartProductEntry } from "@models/model";
import { createContext, useContext } from "react";

interface AppContextType {
    user: CognitoUser | null
    addUser: (user: CognitoUser | null) => void
    products: ProductEntry[]
    addProducts: (products:ProductEntry[] | []) => void
    cart: CartProductEntry[]
    addProductToTheCart: (product: CartProductEntry) => void
    substractProductFromTheCart: (product: ProductEntry) => void
    categoryFilter: string
    addCategoryFilter: (filterType: string) => void
  }

export const AppContext = createContext<AppContextType>({} as AppContextType)

export const useAppContext = () => useContext(AppContext);