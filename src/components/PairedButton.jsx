export default function PairedButton({ isBuy, setIsBuy }) {
  return (
    <div className="flex items-center gap-[2px]">
      <button
        onClick={() => setIsBuy(true)}
        className={`inline-flex items-center justify-center w-full px-8 py-2 text-base font-semibold  transition-all duration-200  border border-transparent   ${
          isBuy
            ? " hover:bg-orange-700 bg-orange-600 text-white "
            : "hover:bg-gray-400 bg-gray-300 text-black"
        }`}
      >
        Buy
      </button>

      <button
        onClick={() => setIsBuy(false)}
        className={`inline-flex items-center justify-center w-full px-8 py-2 text-base font-semibold  transition-all duration-200  border border-transparent   ${
          !isBuy
            ? " hover:bg-orange-700 bg-orange-600 text-white "
            : "hover:bg-gray-400 bg-gray-300 text-black"
        }`}
      >
        Sell
      </button>
    </div>
  );
}
