export default function Page() {
  return (
    <div className="bg-[#2C1E16] min-h-screen text-[#EADCC9] font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference">
        <div className="text-xl font-bold tracking-widest">幸福日子</div>
        <div className="flex gap-8 uppercase text-sm tracking-[0.2em]">
          <a>产品</a>
          <a>理念</a>
          <a>商店</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548943487-a2f4e4b94b13?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <h1 className="text-[12vw] font-serif tracking-tighter leading-none z-10">MUSHROOM</h1>
        <p className="text-lg tracking-[0.5em] mt-4 uppercase z-10">Artisanal Chocolate & Biscuit</p>
      </section>

      {/* Product Gallery Section */}
      <section className="py-32 px-20">
        <h2 className="text-6xl font-serif mb-20 italic text-[#EADCC9]/80">The Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-[#3a281d] overflow-hidden rounded-sm transition-all duration-700 group-hover:scale-105">
                {/* Product Placeholder */}
                <div className="w-full h-full flex items-center justify-center text-xs opacity-50">IMAGE_{i}</div>
              </div>
              <h3 className="mt-8 text-2xl tracking-wide">Signature Dark {i}</h3>
              <p className="mt-2 text-sm text-[#EADCC9]/60 uppercase tracking-widest">70% Cacao · Crispy Handle</p>
            </div>
          ))}
        </div>
      </section>
      
      <footer className="py-20 text-center text-[#EADCC9]/40 text-xs uppercase tracking-[0.3em]">
        © 2026 幸福日子 - Designed with Taste
      </footer>
    </div>
  );
}
