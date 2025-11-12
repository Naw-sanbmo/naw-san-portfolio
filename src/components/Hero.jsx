import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-center">
        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary ml-3 opacity-0 animate-fade-in-delay-1">
                Naw
              </span>
              <span className="text-gradient ml-3 opacity-0 animate-fade-in-delay-2">
                San
              </span>
            </h1>
            <p className="text-2xl md:text-2xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              私はウェブ開発者として、新しい技術を学び続けること、そしてコードを通じて現実世界の技術的課題を解決することに情熱を注いでいます。
            </p>

            <p className="text-2xl md:text-2xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              I'm a web developer who loves learning new technologies and
              tackling real-world challenges through code. I'm especially
              passionate about exploring cloud computing and software
              development to build innovative and practical solutions.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View my work
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <img
            src="/projects/profile.png"
            alt="profile photo"
            className="w-85 h-auto rounded-full"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
