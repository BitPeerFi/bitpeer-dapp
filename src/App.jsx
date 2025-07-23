import { useState, lazy, Suspense, useEffect } from "react";
import React from "react";

import { isConnected, getPublicKey, getNetwork } from "@stellar/freighter-api";

import Home from "./pages/home/Home";
import Header from "./common/Header";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NotFound from "./not-found/NotFound";
import "./App.css";
import axios from "axios";
import P2PMarket from "./pages/markets/P2PMarket";
import { StatesProvider } from "./contexts/StatesContext";
import P2PMarketsDashboard from "./pages/markets/P2PMarketsDashboard";
import Footer from "./common/Footer";

function App() {
  const [userkey, setUserKey] = useState("");
  const [network, setNetwork] = useState("");
  const [appStats, setAppStats] = useState(null);

  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [connecting, setConnecting] = useState(false);
  useEffect(() => {
    async function fetchConnectedUser() {
      const connected = await isConnected();
      const publicKey = await getPublicKey();
      const nt = await getNetwork();
      setUserKey(() => publicKey);
      setNetwork(() => nt);
      setIsWalletInstalled(() => connected);
    }
    fetchConnectedUser();
  }, [userkey, network, isConnected, connecting]);

  return (
    <div className="bg-gradient-to-b h-full">
      <Router>
        <StatesProvider>
          <Header
            setNetwork={setNetwork}
            setUserKey={setUserKey}
            userKey={userkey}
            isWalletInstalled={isWalletInstalled}
            setConnecting={setConnecting}
            connecting={connecting}
          />
          <Routes>
            {/* <Route path="/" element={<Home />} index /> */}
            <Route
              path="/"
              element={
                <Home
                  appStats={appStats}
                  userKey={userkey}
                  setNetwork={setNetwork}
                  setUserKey={setUserKey}
                  isWalletInstalled={isWalletInstalled}
                  setConnecting={setConnecting}
                  connecting={connecting}
                />
              }
            />
            {/* <Route path="/playground" element={<Wallet />} /> */}
            <Route path="/markets/trades" element={<P2PMarket />} />
            <Route path="/markets/loans" element={<P2PMarket />} />
            <Route path="/markets" element={<P2PMarketsDashboard />} />

            {/* <Route path="/sorobuild-ui" element={<DappComponents />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </StatesProvider>
      </Router>
    </div>
  );
}

export default App;
