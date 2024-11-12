export interface ProductEntry {
    id: string,
    name: string,
    category: string,
    subCategory: string,
    description: string,
    imageUrl: string,
    price: number,
    discount?: number,
}

export interface CartProductEntry extends ProductEntry {
    quantity: number
}

export interface UserEntry {
    id: string,
    email: string,
    username: string
}

export interface CartEntry {
    id: string,
    products: string,
    total: number,
    discount?: number,
    user: UserEntry
}