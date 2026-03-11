import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-blue-500/30 overflow-x-hidden pb-20">
      
      {/* HEADER */}
      <header className="relative w-full h-24 flex items-center justify-center border-b border-blue-900/30 bg-[#0f172a]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] md:w-[60rem] h-32 flex items-center justify-center pointer-events-none">
          <img 
            src="/image/aegislock.png" 
            alt="AegisLock Logo" 
            className="object-contain w-full h-full drop-shadow-[0_0_35px_rgba(59,130,246,0.6)] scale-[1.8] z-50"
          />
        </div>
        <div className="absolute bottom-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>
      </header>

      {/* CONTENEUR PRINCIPAL : 
        J'ai remplacé "max-w-7xl" par "w-full" et ajusté le padding (px) 
        pour que ça prenne toute la largeur de l'écran.
      */}
      <div className="w-full mx-auto px-6 md:px-12 lg:px-20 pt-16 flex flex-col items-center relative z-10">
        
        {/* Hero Section (restreinte au centre pour la lisibilité du texte) */}
        <section className="text-center mb-24 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Votre PC Windows. <br />
            Sécurisé par votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Android</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            <strong className="text-blue-400 font-medium">AegisLock</strong> transforme votre smartphone en clé de sécurité biométrique. Verrouillez et déverrouillez votre session Windows à distance via Bluetooth Low Energy.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
             <button className="flex items-center justify-center gap-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-10 rounded-2xl shadow-lg shadow-blue-500/30 transition-all active:scale-95 border border-blue-400/20 group relative overflow-hidden">
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 blur-md"></div>
               <img 
                 src="/image/android_icon.png" 
                 alt="android icon"
                 className="object-contain w-14 h-14 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] relative z-10"
               />
               <span className="relative z-10 text-xl">Télécharger sur Android</span>
             </button>
             
             <button className="flex items-center justify-center gap-4 bg-slate-800/50 hover:bg-slate-800 text-slate-200 font-semibold py-5 px-10 rounded-2xl border border-blue-900/40 hover:border-blue-500/60 transition-all active:scale-95">
               <img 
                 src="/image/windows_icon.png" 
                 alt="windows icon"
                 className="object-contain w-14 h-14 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
               />
               <span className="text-xl">Télécharger sur Windows</span>
             </button>
          </div>
        </section>

        {/* --- GRILLE PLEINE LARGEUR --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 w-full mt-10">
          
          {/* Bloc 1 : L'application Mobile */}
          <div className="flex flex-col w-full group cursor-pointer">
            {/* HAUTEUR AGRANDIE : h-80 sur mobile, 450px sur tablette, 550px sur grand écran */}
            <div className="w-full h-80 md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden bg-[#0a0f1d] border border-blue-900/30 mb-8 relative shadow-2xl">
              <img 
                src="/image/mobile-sonar.jpg" 
                alt="Application Mobile AegisLock"
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80"></div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-4">
              Le Contrôle à portée de main
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg lg:text-xl pr-4">
               Appairez un nouveau PC facilement et activez la détection de proximité pour un déverrouillage sans le moindre effort.
            </p>
          </div>

          {/* Bloc 2 : L'écran de parrainage (Appairage) */}
          <div className="flex flex-col w-full group cursor-pointer">
             <div className="w-full h-80 md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden bg-[#0a0f1d] border border-blue-900/30 mb-8 relative shadow-2xl">
              <img 
                src="/image/desktop-pairing.png" 
                alt="Appairage Windows"
                className="w-full h-full object-cover object-left-top transition-transform duration-1000 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80"></div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-4">
              Appairage Bluetooth Rapide
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg lg:text-xl pr-4">
              Scannez les appareils à proximité et associez votre ordinateur à votre téléphone en quelques secondes. Une connexion BLE chiffrée de bout en bout.
            </p>
          </div>

          {/* Bloc 3 : L'écran des réglages */}
          <div className="flex flex-col w-full group cursor-pointer">
             <div className="w-full h-80 md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden bg-[#0a0f1d] border border-blue-900/30 mb-8 relative shadow-2xl">
              <img 
                src="/image/desktop-settings.png" 
                alt="Réglages AegisLock"
                className="w-full h-full object-cover object-left-top transition-transform duration-1000 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80"></div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-4">
              Sécurité sur Mesure
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg lg:text-xl pr-4">
              Ajustez la distance de verrouillage, le délai de réponse et forcez l'utilisation de la biométrie (Face ID, Empreinte) pour une protection qui s'adapte à vos besoins.
            </p>
          </div>

        </div>
      </div>

      <footer className="mt-20 py-8 text-center text-slate-500 text-sm border-t border-blue-900/30 bg-[#0f172a] relative z-10">
        <p className="mb-2 font-medium text-slate-400">© 2026 AegisLock Security.</p>
        <p>Technologie Bluetooth Low Energy (BLE) sécurisée.</p>
      </footer>
    </main>
  );
}