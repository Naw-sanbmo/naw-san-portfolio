import { Briefcase, Cloud, Code, User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-10 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">
              <span className="text-primary">Web Developer</span> with a Passion
              for Software and
              <span className="text-primary"> Cloud Innovation</span>
            </h3>

            <p className="text-2xl text-muted-foreground">
              I spent five years working as a Yakiniku cook, where I learned the
              value of teamwork, patience, and attention to detail. Those
              lessons shaped how I approach challenges and growth in my new path
              as a web developer.
            </p>

            <p className="text-2xl text-muted-foreground">
              I’m passionate about technology and always eager to learn
              something new. As a fast learner and down-to-earth person, I enjoy
              exploring web and cloud development while constantly improving my
              skills.
            </p>

            <div className="flex flex-col sm:flex-row pt-4 justify-center">
              <a
                href="#contact"
                className="cosmic-button py-2 px-8 justify-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-2xl"> Web Development</h4>
                  <p className="text-muted-foreground text-lg">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-2xl">UI/UX Design</h4>
                  <p className="text-muted-foreground text-lg">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-2xl">AWS</h4>
                  <p className="text-muted-foreground text-lg">
                    Exploring cloud technologies with a focus on AWS to build
                    and manage applications efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
