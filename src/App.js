import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { ethers } from "ethers";
import React, { useState } from "react";

import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  // hard coded to send transaction

  // const provider = new ethers.JsonRpcProvider(
  //   `https://goerli.infura.io/v3/b9f80ab3f75745c4b4d7d6cfa50cff43`
  // );
  // console.log(provider);

  // const account1 = "0xb0e968FC3b45bb33A3D90fe067dcF5499bDcA7e1"; // Your account address 1
  // const account2 = "0x41c0987d24cf5361f330aBE3D9E84B78682F9878"; // Your account address 2
  // console.log(signer);
  // const privateKey1 =
  //   "db5f634721a8df05f0f8f33396e8ff22a88af752ff81935a82d61e9a29b5b659";
  // const wallet = new ethers.Wallet(privateKey1, provider);
  // const main = async () => {
  //   const senderBalanceBefore = await provider.getBalance(account1);
  //   const recieverBalanceBefore = await provider.getBalance(account2);

  //   console.log(
  //     `\nSender balance before: ${ethers.formatEther(senderBalanceBefore)}`
  //   );
  //   console.log(
  //     `reciever balance before: ${ethers.formatEther(recieverBalanceBefore)}\n`
  //   );

  //   const tx = await wallet.sendTransaction({
  //     to: account2,
  //     value: ethers.parseEther("0.0001"),
  //   });

  //   await tx.wait();
  //   console.log(tx);

  //   const senderBalanceAfter = await provider.getBalance(account1);
  //   const recieverBalanceAfter = await provider.getBalance(account2);

  //   console.log(
  //     `\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`
  //   );
  //   console.log(
  //     `reciever balance after: ${ethers.utils.formatEther(
  //       recieverBalanceAfter
  //     )}\n`
  //   );
  // };

  // main();

  // Connect to the Ethereum network

  // Get the wallet signer

  // Prompt the user to send a transaction
  // async function sendTransaction() {
  //   const provider = new ethers.BrowserProvider(window.ethereum);
  //   // Get the recipient address and amount from the user
  //   const recipientAddress = "0x41c0987d24cf5361f330aBE3D9E84B78682F9878";
  //   const amount = "0.001";

  //   // Create a transaction object
  //   const transaction = {
  //     to: recipientAddress,
  //     value: ethers.parseEther(amount),
  //   };
  //   const signer = await provider.getSigner();
  //   console.log(signer);
  //   const signedTransaction = await signer.sendTransaction(transaction);
  // }

  // sendTransaction();

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
