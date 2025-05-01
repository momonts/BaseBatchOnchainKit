"use client";

import type { ReactNode } from "react";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { base } from "wagmi/chains"; // add baseSepolia for testing

export function Providers(props: { children: ReactNode }) {
  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={base} // add baseSepolia for testing
      config={{
        appearance: {
          name: "Your App Name",
          logo: "https://your-logo.com",
          mode: "auto",
          theme: "default",
        },
        wallet: {
          display: "modal",
          supportedWallets: {
            rabby: true, // Optionally enable Rabby wallet
            trust: true, // Optionally enable Trust wallet
            frame: true, // Optionally enable Frame wallet
          },
          termsUrl: "https://...",
          privacyUrl: "https://...",
        },
      }}
    >
      {props.children}
    </OnchainKitProvider>
  );
}
