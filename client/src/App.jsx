import React, { useState } from "react";
import styled from "styled-components";
import MyGroup from "./components/MyGroup.jsx";
import walletConnectFcn from "./components/hedera/walletConnect.js";
import contractDeployFcn from "./components/hedera/contractDeploy.js";
import Pages from "./components/Pages.jsx";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

function App() {
  const [walletData, setWalletData] = useState();
  const [account, setAccount] = useState();
  const [network, setNetwork] = useState();
  const [contractAddress, setContractAddress] = useState();

  const [connectTextSt, setConnectTextSt] = useState("Connect here...");
  const [contractTextSt, setContractTextSt] = useState();

  const [connectLinkSt, setConnectLinkSt] = useState("");
  const [contractLinkSt, setContractLinkSt] = useState();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("home page");

  async function connectWallet() {
    if (account !== undefined) {
      setConnectTextSt(`Account ${account} already connected ⚡`);
    } else {
      const wData = await walletConnectFcn();

      let newAccount = wData[0];
      let newNetwork = wData[2];
      if (newAccount !== undefined) {
        setConnectTextSt(` Account ${newAccount} connected ⚡`);
        setConnectLinkSt(`https://hashscan.io/${newNetwork}/account/${newAccount}`);

        setWalletData(wData);
        setAccount(newAccount);
        setNetwork(newNetwork);
        setContractTextSt();
      }
    }
  }

  async function contractDeploy() {
    if (account === undefined) {
      setContractTextSt("Connect a wallet first!");
    } else {
      const cAddress = await contractDeployFcn(walletData);

      if (cAddress === undefined) {
      } else {
        setContractAddress(cAddress);
        setContractTextSt(`Contract ${cAddress} deployed`);
        setContractLinkSt(`https://hashscan.io/${network}/address/${cAddress}`);
      }
    }
  }

  return (
    <AppWrapper>
      {!account ? (
        <>
          {(!isLoggedIn) && <Header>Welcome to BlockTrade!</Header>}
          <MyGroup fcn={connectWallet} buttonLabel={"Connect Wallet"} text={connectTextSt} link={connectLinkSt} />
        </>
      ) : (
        <>
          <Pages account={account} text={connectTextSt} link={connectLinkSt} />
        </>
      )}
    </AppWrapper>
  );
}

export default App;