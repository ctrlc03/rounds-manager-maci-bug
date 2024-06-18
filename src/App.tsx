import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Keypair } from 'maci-domainobjs';
import { addPoint, r } from '@zk-kit/baby-jubjub';
import { keccak256, toUtf8Bytes } from "ethers";

function App() {
  const NOTHING_UP_MY_SLEEVE = BigInt(keccak256(toUtf8Bytes("Maci"))) % r;

  const [key, setKey] = useState("");
  useEffect(() => {
    const key = new Keypair();
    setKey(key.pubKey.serialize());
    console.log(key.pubKey.serialize());
    console.log(BigInt(5) + r);
    console.log(addPoint([BigInt(1), BigInt(2)], [BigInt(1), BigInt(2)]));
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <p>{key.toString()}</p>
          <p>{NOTHING_UP_MY_SLEEVE.toString()}</p>
        </a>
      </header>
    </div>
  );
}

export default App;
