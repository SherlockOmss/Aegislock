import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* HEADER (Inchangé) */}
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

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 flex flex-col items-center relative z-10">
        
        {/* Hero Section */}
        <section className="text-center mb-20 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Votre PC Windows. <br />
            Sécurisé par votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Android</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            <strong className="text-blue-400 font-medium">AegisLock</strong> transforme votre smartphone en clé de sécurité biométrique. Verrouillez et déverrouillez votre session Windows à distance via Bluetooth Low Energy.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
             {/* BOUTON ANDROID */}
             <button className="flex items-center justify-center gap-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-10 rounded-2xl shadow-lg shadow-blue-500/30 transition-all active:scale-95 border border-blue-400/20 group relative overflow-hidden">
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 blur-md"></div>
               
               {/* 🚀 CHANGEMENT TAILLE : w-14 h-14 (au lieu de 11) */}
               <img 
                 src="/image/android_icon.png" 
                 alt="android icon"
                 className="object-contain w-14 h-14 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] relative z-10"
               />
               <span className="relative z-10 text-xl">Télécharger sur Android</span>
             </button>
             
             {/* BOUTON WINDOWS */}
             <button className="flex items-center justify-center gap-4 bg-slate-800/50 hover:bg-slate-800 text-slate-200 font-semibold py-5 px-10 rounded-2xl border border-blue-900/40 hover:border-blue-500/60 transition-all active:scale-95">
               {/* 🚀 CHANGEMENT TAILLE : w-14 h-14 */}
               <img 
                 src="/image/windows_icon.png" 
                 alt="windows icon"
                 className="object-contain w-14 h-14 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
               />
               <span className="text-xl">Télécharger sur Windows</span>
             </button>
          </div>
        </section>

        {/* Grille de fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          
          {/* Feature 1 : Contrôle */}
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-blue-900/40 hover:border-blue-500/60 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm flex flex-col items-start">
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>
            
            {/* 📦 LE CONTENEUR (CARRÉ) : Agrandit à w-28 h-28 (112px) */}
            <div className="w-28 h-28 rounded-3xl bg-blue-950/60 border border-blue-900/50 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform shadow-[0_0_30px_rgba(59,130,246,0.15)]">
               
               {/* 🖼️ L'ICONE : Agrandie à w-16 h-16 (64px) */}
               <img 
                 src="/image/lock_icon.png" 
                 alt="lock icon"
                 className="object-contain w-32 h-32 drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]"
               />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Remote Access</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              Ouvrez votre session Windows d'un simple clic depuis votre téléphone Android.
            </p>
          </div>

          {/* Feature 2 : Biométrie */}
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-blue-900/40 hover:border-blue-500/60 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm flex flex-col items-start">
             <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>
            
            {/* 📦 LE CONTENEUR : w-28 h-28 */}
            <div className="w-28 h-28 rounded-3xl bg-blue-950/60 border border-blue-900/50 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                
                {/* 🖼️ L'ICONE : w-16 h-16 */}
                <img 
                   src="/image/fingerprint_icon.png" 
                   alt="fingerprint icon"
                   className="object-contain w-16 h-16 drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]"
                />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Biométrie Active</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              Utilisez le capteur d'empreinte de votre mobile pour authentifier votre session PC.
            </p>
          </div>

          {/* Feature 3 : Smart Lock BLE */}
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-blue-900/40 hover:border-blue-500/60 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm flex flex-col items-start">
             <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>
            
            {/* 📦 LE CONTENEUR : w-28 h-28 */}
            <div className="w-28 h-28 rounded-3xl bg-blue-950/60 border border-blue-900/50 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                
                {/* 🖼️ L'ICONE : w-16 h-16 */}
                <img 
                   src="/image/bluetooth_icon.png" 
                   alt="bluetooth icon"
                   className="object-contain w-32 h-32 drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]"
                />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Smart Lock BLE</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              Verrouillage automatique instantané dès que la connexion Bluetooth BLE est rompue.
            </p>
          </div>

        </div>
      </div>

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-blue-900/30 bg-[#0f172a] relative z-10">
        <p className="mb-2 font-medium text-slate-400">© 2026 AegisLock Security.</p>
        <p>Technologie Bluetooth Low Energy (BLE) sécurisée.</p>
      </footer>
    </main>
  );
}