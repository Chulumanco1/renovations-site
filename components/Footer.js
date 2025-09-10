"use client";
export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="text-white font-semibold">Ntakazezulu Trading</div>
            <div className="text-sm mt-2">30 Ostritch Street, Southernwood, Mthatha, 5099</div>
            <div className="text-sm mt-1">Email: <a href="mailto:ntakazezulutrading@gmail.com" className="text-gray-200">ntakazezulutrading@gmail.com</a></div>
            <div className="text-sm mt-1">Phones: <a href="tel:0655213160" className="text-gray-200">065 521 3160</a>, <a href="tel:0673596093" className="text-gray-200">067 359 6093</a></div>
          </div>
          <div>
            <div className="text-sm">© {new Date().getFullYear()} Ntakazezulu Trading</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
