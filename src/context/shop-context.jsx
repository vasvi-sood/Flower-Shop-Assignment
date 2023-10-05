import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";
import {ethers} from "ethers";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};



export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [afterPayItems, setafterPayItems] = useState(getDefaultCart());
  const [address, setAddress]=useState(null);
  let signer;

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount/1000000;
  };

  const init= async()=>{
    if(window.ethereum){
    const provider= new ethers.BrowserProvider(window.ethereum)
     signer = await provider.getSigner();
 
    let address=await signer.getAddress();
    // let balance=await signer.getBalance();
    let str=`Your account address is:  ${address}`;
    setAddress(str);
   
    }else{
      alert("Install Metamask Wallet");
    }
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId]==1)?0:1 }));
  };

  
  const  pay = async() => {
    let payitems=afterPayItems;
    for(let cartItem in cartItems)
    {
      if(cartItems[cartItem]){
        payitems[cartItem]=1;
      }
     
    }
    setafterPayItems(payitems);
     setCartItems(getDefaultCart());
     if(window.ethereum)
    {
     await sendTransaction();

    }
    else
    {
      alert("Install Metamask Wallet");
    }

  };


  async function sendTransaction() {
    try{
    const provider = new ethers.BrowserProvider(window.ethereum);
   

    // Get the recipient address and amount from the user
    const recipientAddress = "0x41c0987d24cf5361f330aBE3D9E84B78682F9878";
    const amount =getTotalCartAmount()+"";
    console.log(amount);

    // Create a transaction object
    const transaction = {
      to: recipientAddress,
      value: ethers.parseEther(amount),
    };
    
    console.log(signer);
    const signedTransaction = await signer.sendTransaction(transaction);
  
    alert("transaction succesful");

  }
  catch(err)
  {
    alert("Transaction fail");
    console.log(err);
  }
  
 
  }



  const contextValue = {
    cartItems,
    afterPayItems,
    addToCart,
    getTotalCartAmount,
    pay,
    address,
    init
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
