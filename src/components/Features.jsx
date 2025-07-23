import React, { useState } from "react";
const featuresList = [
  {
    id: 1,
    title: "P2P Trading",
    description:
      "Trade crypto-to-fiat directly with other users in a fully decentralized, peer-to-peer marketplace. List buy or sell offers, send and receive counter-offers, and complete trades without intermediaries.",
    imageUrl: "/bitpeerIcon.svg",
  },
  {
    id: 2,
    title: "P2P Lending",
    description:
      "Access decentralized lending markets where users can borrow or lend fiat or crypto assets using Stellar-based tokens as collateral. Create custom loan offers or accept existing ones with transparent terms.",
    imageUrl: "/bitpeerIcon.svg",
  },
  {
    id: 3,
    title: "Liquidity Staking",
    description:
      "Stake single or paired assets in a decentralized pool to earn yield. The pooled liquidity powers an AMM-style system that enables instant crypto-to-crypto swaps and on-demand borrowing from available assets.",
    imageUrl: "/bitpeerIcon.svg",
  },
  {
    id: 4,
    title: "Escrow System",
    description:
      "Automatically holds crypto assets in escrow during P2P trades to ensure both parties fulfill their obligations before funds are released.",
    imageUrl: "/bitpeerIcon.svg",
  },
  {
    id: 5,
    title: "Reputation & Rating System",
    description:
      "Build trust through a user-driven rating system. After each trade or loan, users can leave feedback that contributes to reputation scores.",
    imageUrl: "/bitpeerIcon.svg",
  },
  {
    id: 6,
    title: "Dispute Resolution",
    description:
      "Integrated dispute handling for unresolved or failed trades. Community or admin moderators can step in to mediate and resolve conflicts fairly.",
    imageUrl: "/bitpeerIcon.svg",
  },
  {
    id: 7,
    title: "KYC & Verification (Optional)",
    description:
      "Support for user verification tiers, enabling higher trade limits and added trust. Ideal for users dealing in fiat or high-volume operations.",
    imageUrl: "/bitpeerIcon.svg",
  },

  {
    id: 8,
    title: "Local Currency Support",
    description:
      "Enable users to trade or lend in local currencies like NGN, GHS, or KES, with support for popular regional payment methods such as bank transfers and mobile money.",
    imageUrl: "/bitpeerIcon.svg",
  },
  {
    id: 9,
    title: "Automated Loan Liquidation",
    description:
      "Protect lenders by auto-liquidating collateral when its value drops below the agreed loan-to-value (LTV) threshold, minimizing risk and ensuring solvency.",
    imageUrl: "/bitpeerIcon.svg",
  },
];

export default function Features() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-sm font-bold tracking-widest text-gray-800 uppercase font-pj">
          Features
        </h2>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {featuresList?.map((feature) => (
            <div
              key={feature?.id}
              className="overflow-hidden bg-gradient-to-b border border-green-800 from-green-100 to-green-100 shadow-md shadow-green-800 rounded-xl"
            >
              <div className="p-8">
                <div className="flex gap-2 items-center">
                  <img className="w-auto h-8" src={feature?.imageUrl} alt="" />
                  <h3 className=" text-xl font-bold text-orange-900 font-pj">
                    {feature?.title}
                  </h3>
                </div>
                <p className="mt-5 text-lg font-normal text-gray-900 font-pj">
                  {feature?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
