"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Warm Magical Fireflies ---
const Fireflies = () => {
  const flies = Array.from({ length: 25 });
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {flies.map((_, i) => {
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 100;
        const randomDuration = 5 + Math.random() * 10;
        const randomDelay = Math.random() * 5;
        return (
          <motion.div
            key={i}
            initial={{ y: `${randomTop}vh`, x: `${randomLeft}vw`, opacity: 0, scale: 0.5 }}
            animate={{
              y: [`${randomTop}vh`, `${randomTop - 10}vh`, `${randomTop + 10}vh`, `${randomTop}vh`],
              x: [`${randomLeft}vw`, `${randomLeft + 5}vw`, `${randomLeft - 5}vw`, `${randomLeft}vw`],
              opacity: [0, 0.8, 0.2, 0.9, 0],
              scale: [0.5, 1.2, 0.8, 1.5, 0.5],
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1.5 h-1.5 bg-[#ffdaa3] rounded-full blur-[2px] shadow-[0_0_8px_2px_#ffdaa3]"
          />
        );
      })}
    </div>
  );
};

const RomanticDivider = () => (
  <div className="flex items-center justify-center my-12 opacity-85">
    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#763a18] to-transparent w-1/3"></div>
    <span className="mx-6 text-[#763a18] text-2xl font-serif drop-shadow-sm">❦</span>
    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#763a18] to-transparent w-1/3"></div>
  </div>
);

// --- Rich Red Falling Petals ---
const FallingPetals = () => {
  const petals = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((_, i) => {
        const randomLeft = Math.random() * 100;
        const randomDelay = Math.random() * 10;
        const randomDuration = 10 + Math.random() * 10;

        return (
          <motion.div
            key={i}
            initial={{ y: -50, x: `${randomLeft}vw`, opacity: 0, rotate: 0 }}
            animate={{
              y: "110vh",
              x: `${randomLeft + (Math.random() * 20 - 10)}vw`,
              opacity: [0, 0.8, 0.6, 0],
              rotate: 360,
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 w-4 h-5 bg-[#8b1c1c]/40 rounded-full blur-[1px]"
            style={{ borderRadius: "50% 0 50% 50%" }} 
          />
        );
      })}
    </div>
  );
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.volume = 0.4; 
      audioRef.current.play().catch((e) => console.log("Audio play blocked:", e));
    } else if (!isOpen && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; 
    }
  }, [isOpen]);

  return (
    // Deep, romantic dark background to make the paper glow
    <main className="min-h-screen bg-gradient-to-br from-[#1a0f0f] to-[#0a0505] flex flex-col items-center justify-center p-4 overflow-hidden relative selection:bg-rose-900 selection:text-[#eaddcf]">
      
      <audio ref={audioRef} src="/song.mp3" loop />
      <Fireflies />
      <AnimatePresence>{isOpen && <FallingPetals />}</AnimatePresence>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={{ duration: 1.2 }}
            className="flex flex-col items-center text-center relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-great-vibes text-[#eaddcf] mb-4 drop-shadow-[0_0_15px_rgba(234,221,207,0.2)]">
              This is for yuu my Rejipai!
            </h1>
            <h2 className="text-xl md:text-2xl font-cormorant text-[#a38f7e] mb-16 tracking-widest uppercase italic">
              Check this out
            </h2>
            
            {/* Realistic Wax Seal */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="relative w-24 h-24 bg-gradient-to-br from-[#8a1212] to-[#4a0505] rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.8),inset_0_-4px_8px_rgba(0,0,0,0.6)] flex items-center justify-center cursor-pointer group border-2 border-[#3a0404]"
            >
              <div className="absolute inset-[4px] border border-[#a82525] rounded-full opacity-50"></div>
              <span className="font-great-vibes text-4xl text-[#d48b8b] group-hover:text-[#f3a8a8] transition-colors drop-shadow-md">
                R
              </span>
            </motion.button>
            <p className="mt-8 font-cormorant italic text-[#8c7a6b] text-sm tracking-[0.3em]">
              Sirain mo to
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 70 }}
            className="w-full max-w-2xl relative z-10"
          >
            {/* The Authentic Old Paper Look is Back */}
            <div className="relative bg-[#f5ecdf] p-10 md:p-16 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_0_120px_rgba(139,69,19,0.35),inset_0_0_20px_rgba(80,40,10,0.4)] overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] before:opacity-75 before:mix-blend-multiply before:pointer-events-none after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle,transparent_40%,rgba(90,40,10,0.15)_120%)] after:pointer-events-none">
              
              {/* Subtle Fold Creases */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-black/5 blur-[1px]"></div>
              <div className="absolute left-0 right-0 top-1/2 h-px bg-black/5 blur-[1px]"></div>

              {/* Letter Content */}
              <div className="font-cormorant text-xl md:text-2xl leading-[2.2] text-[#2c1e16] relative z-10">
                <p className="font-great-vibes text-4xl md:text-5xl mb-8 text-[#5a1c1c]">
                  HAPPIEST 2ND ANNIVERSARY BABY!!!
                </p>
                
                <p className="mb-6 indent-8 font-medium">
                  Happy 2nd anniversary baby!! This is an appreciation letter for you. Thank you so much for being the best wife
                  and partner that I could ever ask for. Hindi ko maimagine na tangina magiging akin ka like wtf guys i hit the jackpot, anyways
                  I want you to know how grateful and lucky i am to have met you and for having you in my life. Feels like ive known you for the rest of my life
                  and shit you see how fast time goes by. Imagine 2 years na tayo through ups and downs youre still with me after everything.
                  Thank you for being my strenght, for making me the very best version of myself, for always sticking up to me no matter what. Oh when i remember the days
                  that we were still friends i find myself smiling when i think of it. Thank you for always loving and taking care of me lalo na pag may sakit ako.
                  Tangina baby i cant thank you enough for everything youve done to me! And i know that nag sstruggle tayo because of me and nawawala na yung love language mo ng pag recieve ng FallingPetalskasi everytime nalang hindi kita nabibilhan, anyways ayaw kong
                  maging tungkol sakin tong letter. I promise babawi ako sayo!
                </p>
                
                <p className="mb-6 indent-8 font-medium">
                  You are the love of my life. I didnt imagine that ill feel this way to someone. dana baby nakakabaliw ka ng sobra. From the way you look,
                   you act, and your kindness that hook everyone up. Pero siyempre di naman ako papahuli sakanila no Duh!. The way you smile, laugh
                   and your silly jokes and moments that i never want to end. I want this life to be full of you, I want us to grow more together, not apart of each other.
                   I always look up at you even tho dapat ako iniidolo mo hehehe, you make life worth living baby. I will never stop loving you till the moment that i cant breathe anymore.
                   Even at the after life, ill always find you kahit saan pa man yan mapa dagat dagatang apoy or sa heaven, and siyempre for sure heaven kasi angel ka.
                   I could search every timeline and every line of code in this world, and id still choose this exact moment, building this little universe just for you! Happy 2nd monthsary baby! I love you so much with all of me.
                </p>

                <p className="mb-6 indent-8 font-medium">
                  Even the ink blushes when it traces your name, and if this old paper had a heart, It would beat entirely for you. Thank you for making my dull life into a never wanted to stop living life.
                </p>
                
                <RomanticDivider />

                {/* --- NEW TEXT SECTION --- */}
                <p className="mb-6 indent-8 font-medium text-[#4a2e1d] leading-relaxed">
                  Happy 2nd Anniversary baby! Cheers to more years for us! Road to Forever
                </p>
                {/* ------------------------ */}

                <div className="mt-16 text-right">
                  <p className="font-cormorant italic text-lg mb-2 text-[#4a3427]">Your baby na walang pera.</p>
                  <p className="font-great-vibes text-4xl text-[#5a1c1c]">Cyred</p>
                </div>
              </div>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              onClick={() => setIsOpen(false)}
              className="mt-10 mx-auto block text-[#a38f7e] hover:text-[#eaddcf] font-cormorant italic tracking-[0.2em] transition-colors text-lg"
            >
              ~ Gently fold it back ~
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}