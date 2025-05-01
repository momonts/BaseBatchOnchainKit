"use client";

import { NFTMintCard } from "@coinbase/onchainkit/nft";
import { NFTMedia } from "@coinbase/onchainkit/nft/view";
import {
  NFTCreator,
  NFTCollectionTitle,
  NFTQuantitySelector,
  NFTAssetCost,
  NFTMintButton,
} from "@coinbase/onchainkit/nft/mint";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import {
  Address,
  Avatar,
  EthBalance,
  Identity,
  Name,
} from "@coinbase/onchainkit/identity";

export default function App() {
  return (
    <div className="flex justify-center content-center min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      <main className="flex-col">
        <div>
          <Wallet>
            <ConnectWallet>
              <Avatar className="h-6 w-6" />
              <Name />
            </ConnectWallet>
            <WalletDropdown>
              <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                <Avatar />
                <Name />
                <Address />
                <EthBalance />
              </Identity>
              <WalletDropdownDisconnect />
            </WalletDropdown>
          </Wallet>
        </div>
        {/*Mainnet Smart Contract*/}
        <div>
          <NFTMintCard contractAddress="0x38a2272eB0Dc8EaC9f341F42e779C4d81F416D1F">
            <NFTCreator />
            <NFTMedia />
            <NFTCollectionTitle />
            <NFTAssetCost />
            <NFTQuantitySelector />
            <NFTMintButton />
          </NFTMintCard>
        </div>
      </main>
    </div>
  );
}
