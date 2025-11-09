import { Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-10 px-4 relative bg-secondary/30">
      <div className="container max-w-8xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-2xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities and learning new
          things.
        </p>

        <div className="text-center text-lg">
          <div className="mb-4">
            <h3 className="font-medium"> Email</h3>
            <a
              href="mailto:hello@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              nawsanbmo@gmail.com
            </a>
          </div>

          <div>
            <h3 className="font-medium"> Location</h3>
            <a className="text-muted-foreground hover:text-primary transition-colors">
              Ichikawa, Chiba, Japan
            </a>
          </div>
        </div>

        <div className="pt-8">
          <h4 className="text-3xl font-medium mb-4">
            <span className="text-primary">Connect</span> With Me
          </h4>
          <div className="flex space-x-10 justify-center">
            <a
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              href="https://www.linkedin.com/in/naw-san"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              href="https://github.com/Naw-sanbmo"
              target="_blank"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
