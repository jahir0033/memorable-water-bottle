const getStoredCard = () =>{
    const storedCardString = localStorage.getItem('cart');
    if(storedCardString){
        return JSON.parse(storedCardString)
    }
    return [];
}

const saveCartToLS = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const addToLS = id => {
    const cart = getStoredCard();
    cart.push(id);
    // save to local storage
    saveCartToLS(cart)
}

const removeFromLS = id =>{
    const cart = getStoredCard();
    // removeing every id
    const remaining = cart.filter(id => id !== id)
    saveCartToLS(remaining);
}

export { addToLS, getStoredCard, removeFromLS }