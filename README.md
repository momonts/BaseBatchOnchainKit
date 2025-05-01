# Simple NFT Minting dApp using TypeScript and OnchainKit

This guide will help you set up a basic minting dApp using TypeScript and [OnchainKit](https://docs.base.org/builderkits/onchainkit/).

---

# Project Setup

## Accounts & Tooling

- **Github**: Ensure you have a GitHub account for version control and collaboration.

## Wallet

- **Coinbase Wallet**: Use Coinbase Wallet for managing your assets and interacting with dApps.

## Development Setup

### IDE (Preferred: Visual Studio Code)

- Install [Visual Studio Code](https://code.visualstudio.com/).

### Git

- Install [Git](https://git-scm.com/) for version control.

### Node.js

- Install [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) (for Windows | Mac/Linux) or [Node.js](https://nodejs.org/en/) for managing Node versions.

## VS Code Extensions (Optional)

- [Solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity): For Solidity language support in VS Code.
- [Solidity Inspector](https://marketplace.visualstudio.com/items?itemName=PraneshASP.vscode-solidity-inspector&fbclid=IwAR06u7pxaz64pHVdIi4EJxpurHagspg2sEjHusrTDdlkoYC38iKMiRqhgH0): For code inspection and syntax highlighting.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): For identifying and reporting on patterns found in JavaScript and TypeScript code.
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot): AI-powered code completion tool.
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): For enhanced Git capabilities within VS Code.
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): Auto-completion for file paths in VS Code.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): For code formatting and styling.

### Setting Up

1. Clone the repository:  
   `git clone <repository-url>`

2. Install dependencies:  
   `npm install` or `yarn install`

3. Start development server:  
   `npm start` or `yarn start`

For additional setup instructions, please refer to the project's documentation.

---

## 🚀 Getting Started

### 1. Create a Project

```bash
npm create onchain@latest
```

Follow the prompts and enter your project name.

---

### 2. Coinbase Developer Platform Setup

Get your Client API Key from:  
🔗 [https://portal.cdp.coinbase.com/products/onchainkit](https://portal.cdp.coinbase.com/products/onchainkit)

> ⚠️ **Important**: Do not use Coinbase Smart Wallet.

---

### 3. Open Your Project

```bash
cd yourprojectname
code .
```

---

### 4. Install Dependencies

```bash
npm install
```

---

### 5. Open the File

Navigate to `app/page.tsx`.

Follow [this guide](https://docs.base.org/builderkits/onchainkit/mint/nft-mint-card) and complete steps 1 and 2 from the quickstart.

---

### 6. Modify `NFTMintCard`

Replace the contract address in `<NFTMintCard>` with your own contract address from [your created NFT](https://wallet.coinbase.com/assets/nft) or use this contract address as a sample:

```text
0xed2f34043387783b2727ff2799a46ce3ae1a34d2
```

---

### 7. Add `"use client"` to the Top of `page.tsx`

```tsx
"use client";
```

---

### 8. Example `page.tsx` Code

```tsx
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

export default function Page() {
  return (
    <NFTMintCard
      contractAddress="0xed2f34043387783b2727ff2799a46ce3ae1a34d2"
      tokenId="2"
    >
      <NFTCreator />
      <NFTMedia />
      <NFTCollectionTitle />
      <NFTQuantitySelector />
      <NFTAssetCost />
      <NFTMintButton />
    </NFTMintCard>
  );
}
```

---

### 9. Run the Development Server

```bash
npm run dev
```

---

## ✅ You're all set!

Visit `http://localhost:3000` to view your minting dApp in action.

## If the NFT Minting Card is not showing properly:

Kindly double check your client API in your .env file

```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=YOUR_CLIENT_API_HERE
```
