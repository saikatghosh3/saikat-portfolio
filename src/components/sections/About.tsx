import image1 from '../../assets/Saikat.jpg';


export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700 animate-fade-in">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-slide-in-left">
            <div className="glass-card p-6">
              <p className="text-lg text-gray-700">
                Hi! I'm a passionate Frontend Developer with expertise in building modern web applications
                using React, TypeScript, next.js, MUI, taiwindcss and other cutting-edge technologies.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                With a strong foundation in web development and a keen eye for design, I create
                responsive and user-friendly interfaces that deliver exceptional user experiences.
              </p>
            </div>
          </div>
          {/* <div className="animate-slide-in-right">
            <div className="glass-card p-2">
              <img
                src={image1}
                alt="Frontend  developer"
                className="rounded-lg"
              />
            </div>
          </div> */}

<div className="animate-slide-in-right">
  <div className="glass-card p-2 glow-effect">
    <img
      src={image1}
      alt="Frontend developer"
      className="rounded-lg"
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};