const getCartsFromLocalStorage = () => {
  const carts = localStorage.getItem('carts');
  return carts ? JSON.parse(carts) : [];
} ;

const moneyFormat = (id)=>{
    const data=getCartsFromLocalStorage();
    data.push(id);
}

export {getCartsFromLocalStorage,moneyFormat};
