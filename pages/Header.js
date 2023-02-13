import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-row p-4 bg-emerald-300 text-black text-3xl font-bold justify justify-between">
      <h1>Cookie Stand Admin</h1>
      <button
        href="/newpage"
        className="text-emerald-700 text-lg hover:text-emerald-500 bg-slate-50 rounded"
      >Overview
      </button>
    </header>
  );
}
