import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import { Web3OnboardProvider, init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";
import { ethers } from "ethers";

window.Buffer = window.Buffer || require("buffer").Buffer;
function App() {
  const GOERLI_RPC_URL = `https://goerli.infura.io/v3/d92c482888c64718a93cfbc3082b73be`; /// iMPORTANT - SHOULD FIX IT PROCESS.ENV.REACT_APP_GOERLI_KEY WONT WORK
  const MAINNET_RPC_URL = `https://mainnet.infura.io/v3/d92c482888c64718a93cfbc3082b73be`; /// iMPORTANT - SHOULD FIX IT PROCESS.ENV.REACT_APP_GOERLI_KEY WONT WORK

  const injected = injectedModule();
  const walletConnect = walletConnectModule({
    bridge: "https://bridge.walletconnect.org",
    qrcodeModalOptions: {
      mobileLinks: ["metamask"],
    },
  });

  const ethereumGoerli = {
    id: "0x5",
    token: "gETH",
    label: "Goerli",
    rpcUrl: GOERLI_RPC_URL,
  };

  const ethereumMainnet = {
    id: "0x1",
    token: "ETH",
    label: "Mainnet",
    rpcUrl: MAINNET_RPC_URL,
  };
  const chains = [ethereumGoerli, ethereumMainnet];
  const wallets = [injected, walletConnect];

  const [ethersProvider, setProvider] =
    useState<ethers.providers.Web3Provider | null>();

  const appMetadata = {
    name: "My App",
    icon: "/hydra-logo.png",
    logo: "/hydra-logo.png",
    description: "My app using Onboard",
    recommendedInjectedWallets: [
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
      { name: "MetaMask", url: "https://metamask.io" },
    ],
  };

  const web3Onboard = init({
    wallets,
    chains,
    appMetadata,
  });

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark-mode") === "true"
  );
  useEffect(() => {
    localStorage.setItem("dark-mode", String(darkMode));
  }, [darkMode]);

  const dark = () => {
    setDarkMode(!darkMode);
    return darkMode;
  };

  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <div className="App">
        <Header darkMode={darkMode} dark={dark} />
        <Main darkMode={darkMode} />
      </div>
    </Web3OnboardProvider>
  );
}

export default App;
