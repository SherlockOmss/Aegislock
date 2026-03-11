"use client";

import React, { useEffect, useRef, useState } from 'react';

// --- COMPOSANT D'ANIMATION (REVEAL) ---
function Reveal({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.15 } 
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-blue-500/30 overflow-x-hidden pb-10">
      
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

      {/* CONTENEUR PRINCIPAL */}
      <div className="w-full mx-auto px-6 md:px-12 lg:px-20 pt-16 flex flex-col items-center relative z-10">
        
        {/* Hero Section */}
        <section className="text-center mb-24 max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Votre Ordinateur. <br />
              Sécurisé par votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Smartphone</span>.
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              <strong className="text-blue-400 font-medium">AegisLock</strong> transforme votre appareil mobile en clé de sécurité biométrique. Verrouillez et déverrouillez votre session à distance via Bluetooth.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
               <button className="flex items-center justify-center gap-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-10 rounded-2xl shadow-lg shadow-blue-500/30 transition-all active:scale-95 border border-blue-400/20 group relative overflow-hidden">
                 <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 blur-md"></div>
                 <img 
                   src="/image/android_icon.png" 
                   alt="android icon"
                   className="object-contain w-14 h-14 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] relative z-10"
                 />
                 <span className="relative z-10 text-xl">Télécharger l'App</span>
               </button>
               
               <button className="flex items-center justify-center gap-4 bg-slate-800/50 hover:bg-slate-800 text-slate-200 font-semibold py-5 px-10 rounded-2xl border border-blue-900/40 hover:border-blue-500/60 transition-all active:scale-95">
                 <img 
                   src="/image/windows_icon.png" 
                   alt="pc icon"
                   className="object-contain w-14 h-14 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                 />
                 <span className="text-xl">Agent Logiciel</span>
               </button>
            </div>
          </Reveal>
        </section>

        {/* --- GRILLE D'IMAGES --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 w-full mt-10">
          
          <Reveal delay={0}>
            <div className="flex flex-col w-full group cursor-pointer">
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
                Transformez votre téléphone en radar de sécurité. Appairez un nouveau PC facilement et activez la détection pour un déverrouillage sans le moindre effort.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col w-full group cursor-pointer">
               <div className="w-full h-80 md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden bg-[#0a0f1d] border border-blue-900/30 mb-8 relative shadow-2xl">
                <img 
                  src="/image/desktop-pairing.png" 
                  alt="Appairage"
                  className="w-full h-full object-cover object-left-top transition-transform duration-1000 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-4">
                Liaison Rapide et Sûre
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg lg:text-xl pr-4">
                Scannez les appareils à proximité et associez votre ordinateur à votre téléphone en quelques secondes. Une connexion totalement privée et protégée.
              </p>
            </div>
          </Reveal>

          <Reveal delay={400}>
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
                Ajustez la distance de verrouillage, le temps de réaction et imposez l'utilisation de votre visage ou de votre empreinte pour une protection qui s'adapte à vos habitudes.
              </p>
            </div>
          </Reveal>

        </div>

        {/* --- SECTION : LE FONCTIONNEMENT (PROFESSIONNEL) --- */}
        <section className="mt-32 w-full max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Architecture du système</h2>
              <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-slate-400">Deux applications qui discutent ensemble pour sécuriser votre Authentification.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            
            {/* Colonne 1 : Application Mobile */}
            <Reveal delay={200}>
              <div className="bg-slate-900/50 border border-blue-900/30 p-8 md:p-12 rounded-3xl h-full shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20 cursor-default">
                
                <div className="flex items-center gap-5 mb-6">
                  {/* Le Carré autour de l'icône */}
                  <div className="w-14 h-14 rounded-xl bg-blue-950/60 border border-blue-800/50 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.15)] shrink-0">
                    <img 
                      src="/image/mobile2.png" 
                      alt="mobile icon" 
                      className="object-contain w-8 h-8 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Smartphone : La Clé Biométrique</h3>
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-6 font-light">
                  L'application sur votre smartphone agit comme une clé intelligente, simple à utiliser et extrêmement sécurisée.                
                </p>
                
                <ul className="space-y-4 text-slate-400">
                  <li className="flex gap-3">
                    <span className="text-cyan-400">▸</span>
                    <span><strong>Authentification forte :</strong> L'accès à votre session est strictement conditionné par la validation de votre identité via les capteurs biométriques de votre téléphone (Empreinte digitale ou Face ID).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">▸</span>
                    <span><strong>Protection dynamique :</strong> Le système détecte votre présence. Dès que vous quittez votre espace de travail, un verrouillage préventif est initié automatiquement.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">▸</span>
                    <span><strong>Contrôle granulaire :</strong> Ajustez avec précision le seuil de sensibilité du signal (RSSI) pour adapter le comportement du verrouillage à la configuration de votre environnement.</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Colonne 2 : Le Récepteur Desktop */}
            <Reveal delay={400}>
              <div className="bg-slate-900/50 border border-blue-900/30 p-8 md:p-12 rounded-3xl h-full shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20 cursor-default">
                
                <div className="flex items-center gap-5 mb-6">
                  {/* Le Carré autour de l'icône */}
                  <div className="w-14 h-14 rounded-xl bg-blue-950/60 border border-blue-800/50 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.15)] shrink-0">
                    <img 
                      src="/image/pc.png" 
                      alt="pc icon" 
                      className="object-contain w-8 h-8 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Ordinateur : Le Terminal Protégé</h3>
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-6 font-light">
                  Un agent logiciel ultra-léger et silencieux opère en arrière-plan sur votre système, garantissant une sécurité continue sans impacter vos performances.
                </p>

                <ul className="space-y-4 text-slate-400">
                  <li className="flex gap-3">
                    <span className="text-blue-500">▸</span>
                    <span><strong>Surveillance passive :</strong> L'agent scanne les signaux Bluetooth Low Energy environnants de manière continue tout en consommant très peu de ressources.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500">▸</span>
                    <span><strong>Réactivité absolue :</strong> Dès l'interruption de la liaison chiffrée avec votre smartphone, ou à la réception d'une commande explicite, l'agent sécurise instantanément l'accès à votre appareil.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500">▸</span>
                    <span><strong>Appairage sécurisé :</strong> </span>
                  </li>
                </ul>
              </div>
            </Reveal>

          </div>
        </section>

      </div>

      <footer className="mt-24 py-8 text-center text-slate-500 text-sm border-t border-blue-900/30 bg-[#0f172a] relative z-10">
        <p className="mb-2 font-medium text-slate-400">© 2026 AegisLock.</p>
      </footer>
    </main>
  );
}