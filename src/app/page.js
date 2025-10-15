"use client";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import { LogoIcon } from "@/components/ui/Logo";
import Particles from "@/components/ui/Particles";
import SplitText from "@/components/ui/SplitText";

export default function Home() {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div
      className="bg-black w-full h-full">

      <Particles
      >
        <div className="flex items-center justify-center h-full">
          <div className="absolute top-[1em]">
            <NavBar
              items={[
                { label: 'Docs', href: '/docs/introduction' },
                { label: 'Download', href: '/docs/set_up' },
                { label: 'Examples', href: '/docs/use' },
                { label: 'Developer', href: '/developer' }
              ]}
            />
          </div>
          <div className={cn(
            "gap-5 backdrop-blur-[10px] bg-white/10 dark:bg-neutral-900/30",
            "shadow-lg rounded-2xl p-10",
            "flex flex-col items-center"
          )}>
            <LogoIcon />
            <SplitText
              text="MuffinBite"
              className="text-4xl text-white font-semibold text-center border-b pb-5"
              delay={20}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <p>Where automation meets personalization</p>
          </div>
        </div>
      </Particles>
    </div >
  );
}
