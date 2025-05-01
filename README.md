# Simple NFT Minting dApp using TypeScript and OnchainKit

This guide will help you set up a basic minting dApp using TypeScript and [OnchainKit](https://docs.base.org/builderkits/onchainkit/).

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

Replace the contract address in `<NFTMintCard>` with:

```text
0x5E460559B2d57373a5D03CC096FaFFd021CE39F7
```

Remove the `tokenId="2"` property if it exists.

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
    <NFTMintCard contractAddress="0x5E460559B2d57373a5D03CC096FaFFd021CE39F7">
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
