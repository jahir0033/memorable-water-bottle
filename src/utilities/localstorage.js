const getStoredCard = () =>{
    const storedCardString = localStorage.getItem('cart');
    if(storedCardString){
        return JSON.parse(storedCardString)
    }
    return [];
}