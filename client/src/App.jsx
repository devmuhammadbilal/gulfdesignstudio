import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Instagram, Phone, ArrowRight, Menu, X, ArrowLeft } from 'lucide-react';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // STATE: Tracks if a project is open or closed
  const [selectedProject, setSelectedProject] = React.useState(null);

  // LOGIC: If a project is selected, show the Project View instead of the Main Site
  if (selectedProject) {
    return (
      <ProjectView
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  // LOGIC: Otherwise, show the Main Website
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-gulf-gold selection:text-black">

      {/* --- MODERN FLOATING NAVIGATION --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8"
      >
        <div className="max-w-5xl mx-auto">
          {/* The Floating Pill */}
          <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]">

            {/* 1. Logo Section */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#8a7122] rounded-full flex items-center justify-center shadow-lg">
                <span className="font-serif text-black font-bold text-xl">G</span>
              </div>
              <span className="font-serif text-lg tracking-[0.2em] text-white uppercase hidden sm:block">
                Gulf Design
              </span>
            </div>

            {/* 2. Desktop Links (Centered & Clean) */}
            <div className="hidden md:flex items-center gap-8 bg-white/5 rounded-full px-8 py-2 border border-white/5">
              {['Showroom', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs uppercase tracking-[0.15em] text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 relative group"
                >
                  {item}
                  {/* Hover Underline Animation */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* 3. Call to Action (Desktop) & Mobile Toggle */}
            <div className="flex items-center gap-4">
              {/* "Book Now" Button for Desktop - Adds a premium touch */}
              <a
                href="#contact"
                className="hidden md:block bg-[#D4AF37] hover:bg-white text-black text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-colors duration-300"
              >
                Book Visit
              </a>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-white p-2 hover:text-[#D4AF37] transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* 4. Mobile Menu Dropdown (Floating Card Style) */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-4 px-4 md:hidden"
              >
                <div className="bg-[#111] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
                  <div className="flex flex-col gap-6 text-center">
                    <a href="#showroom" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-[#D4AF37] uppercase tracking-widest text-sm">Showroom</a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-[#D4AF37] uppercase tracking-widest text-sm">About</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-[#D4AF37] uppercase tracking-widest text-sm">Contact</a>
                    <div className="w-full h-[1px] bg-white/10 my-2"></div>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm">Book a Visit</a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gulf-gold tracking-[0.4em] uppercase text-xs md:text-sm mb-6 font-bold drop-shadow-md"
          >
            Kitchens & Dressings
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-white drop-shadow-2xl"
          >
            Making Space, <br />
            <span className="italic text-gulf-gold font-light">Livable.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#showroom"
              className="group inline-flex items-center gap-3 border border-white/30 bg-white/5 backdrop-blur-sm text-white px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gulf-gold hover:border-gulf-gold hover:text-black transition-all duration-300"
            >
              Enter Showroom
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- SHOWROOM SECTION (Grid) --- */}
      <section id="showroom" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h3 className="font-serif text-4xl text-white mb-2">Curated Collections</h3>
            <div className="w-24 h-1 bg-gulf-gold mx-auto"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* UPDATED: Added onClick handlers to open the ProjectView */}
            <div onClick={() => setSelectedProject({ title: "Modern Noir", category: "Kitchens", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop" })}>
              <ShowroomCard
                category="Kitchens"
                title="Modern Noir"
                img="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop"
              />
            </div>

            <div onClick={() => setSelectedProject({ title: "Walk-in Luxury", category: "Dressings", img: "https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=2000&auto=format&fit=crop" })}>
              <ShowroomCard
                category="Dressings"
                title="Walk-in Luxury"
                img="https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=2000&auto=format&fit=crop"
              />
            </div>

            <div onClick={() => setSelectedProject({ title: "Living Spaces", category: "Furniture", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" })}>
              <ShowroomCard
                category="Furniture"
                title="Living Spaces"
                img="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left: Image Grid / Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="h-[600px] w-full bg-gray-800 rounded-sm overflow-hidden relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* FIX: Use border-[#D4AF37]/30 to make the gold line visible */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#D4AF37]/30 -z-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-gulf-gold tracking-widest uppercase text-sm font-bold mb-4">Our Philosophy</h4>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
                Designing for the <br />
                <span className="italic text-gray-400">Extraordinary.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6 font-light text-lg">
                At Gulf Design Studio, we believe that a home is more than just a place to live—it is a reflection of your identity.
                Specializing in bespoke kitchens and luxury dressings, we merge functionality with high-end aesthetics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {['Custom Fabrication', 'Premium Materials', 'Lighting Design', 'Space Optimization'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gulf-gold rounded-full" />
                    <span className="uppercase tracking-wider text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-black text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-5xl mb-8">Let's Discuss <br /> Your Project.</h2>
              <p className="text-gray-400 mb-12 max-w-md">
                Ready to transform your space? Visit our Heliopolis showroom or send us a message to schedule a private consultation.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 border border-white/10 rounded-full text-gulf-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="uppercase tracking-widest text-sm font-bold mb-2">Showroom Location</h5>
                    <p className="text-gray-400">Heliopolis, Cairo, Egypt</p>
                    <a href="#" className="text-gulf-gold text-sm mt-2 inline-block border-b border-gulf-gold pb-1">Open in Maps</a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="p-4 border border-white/10 rounded-full text-gulf-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="uppercase tracking-widest text-sm font-bold mb-2">Direct Line</h5>
                    <p className="text-gray-400">+20 123 456 789</p>
                    <p className="text-gray-500 text-sm">Mon-Sat, 10am - 9pm</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-900/30 p-8 md:p-12 border border-white/5 backdrop-blur-sm"
            >
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gulf-gold transition-colors" />
                  </div>
                  <div className="relative">
                    <input type="text" placeholder="Phone" className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gulf-gold transition-colors" />
                  </div>
                </div>
                <div className="relative">
                  <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gulf-gold transition-colors" />
                </div>
                <div className="relative">
                  <textarea placeholder="Tell us about your space..." rows="4" className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gulf-gold transition-colors resize-none"></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="h-[500px] w-full relative grayscale invert">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="Gulf Design Studio Location"
          scrolling="no"
          src="https://maps.google.com/maps?q=Heliopolis%20Cairo&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full filter brightness-[0.8] contrast-[1.2] opacity-80 hover:opacity-100 transition-opacity duration-500"
        ></iframe>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none invert">
          <div className="bg-black/90 backdrop-blur-md border border-gulf-gold/50 p-6 text-center shadow-2xl rounded-sm">
            <div className="w-12 h-12 bg-gulf-gold rounded-full flex items-center justify-center mx-auto mb-4 text-black">
              <MapPin size={24} />
            </div>
            <h3 className="font-serif text-2xl text-white mb-1">Heliopolis</h3>
            <p className="text-gulf-gold text-xs uppercase tracking-widest">Main Showroom</p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-zinc-950 py-12 border-t border-white/10 text-center">
        <p className="font-serif text-2xl text-white mb-4">Gulf Design Studio</p>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// --- SUB-COMPONENTS ---

// 1. Showroom Card (Clickable)
function ShowroomCard({ category, title, img }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative h-[400px] overflow-hidden cursor-pointer"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

      <div className="absolute bottom-0 left-0 p-8 w-full">
        <p className="text-gulf-gold text-xs font-bold uppercase tracking-widest mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {category}
        </p>
        <h4 className="font-serif text-3xl text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          {title}
        </h4>
      </div>
    </motion.div>
  );
}

// 2. NEW PROJECT VIEW COMPONENT
function ProjectView({ project, onBack }) {
  // Auto-scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    // Main Hero
    project.img,
    // Detail shots (using high-quality placeholders for demo)
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black min-h-screen text-white relative z-[60]"
    >
      {/* Sticky Back Header */}
      <div className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/90 to-transparent">
        <button
          onClick={onBack}
          className="group flex items-center gap-3 text-sm uppercase tracking-widest text-gulf-gold hover:text-white transition-colors"
        >
          <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
          Back to Collection
        </button>
        <div className="hidden md:block font-serif text-xl tracking-widest">GULF DESIGN</div>
      </div>

      {/* Hero Project Image */}
      <div className="h-[70vh] md:h-[80vh] relative w-full overflow-hidden">
        <img src={galleryImages[0]} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute bottom-0 left-0 p-8 md:p-16">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-gulf-gold uppercase tracking-widest text-sm font-bold mb-4"
          >
            {project.category}
          </motion.p>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6"
          >
            {project.title}
          </motion.h1>

          {/* Mobile Responsive Specs Grid */}
          <div className="flex flex-wrap gap-8 md:gap-16 text-sm text-gray-400 border-t border-white/20 pt-8 max-w-2xl">
            <div>
              <span className="block text-white uppercase tracking-wider text-xs mb-1">Finish</span>
              Matte Black Oak
            </div>
            <div>
              <span className="block text-white uppercase tracking-wider text-xs mb-1">Countertop</span>
              Calacatta Gold
            </div>
            <div>
              <span className="block text-white uppercase tracking-wider text-xs mb-1">Location</span>
              New Cairo
            </div>
          </div>
        </div>
      </div>

      {/* Project Description */}
      <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto text-center">
        <h3 className="font-serif text-2xl md:text-4xl leading-relaxed mb-8">
          "A masterpiece of dark tones and warm textures.
          This design was created to be the <span className="text-gulf-gold italic">silent anchor</span> of the home."
        </h3>
        <p className="text-gray-400 leading-loose font-light text-sm md:text-base">
          We utilized a proprietary matte finish that resists fingerprints while absorbing light to create a moody, intimate atmosphere.
          The gold hardware acts as jewelry, punctuating the dark cabinetry with deliberate luxury.
        </p>
      </section>

      {/* Gallery Grid - Responsive */}
      <section className="px-4 md:px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Large Vertical Image */}
          <div className="row-span-2 h-[500px] md:h-[800px] rounded-sm overflow-hidden relative group">
            <img src={galleryImages[1]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          {/* Smaller Images */}
          <div className="h-[300px] md:h-[384px] rounded-sm overflow-hidden relative group">
            <img src={galleryImages[2]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="h-[300px] md:h-[384px] rounded-sm overflow-hidden relative group">
            <img src={galleryImages[3]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* CTA Footer for this project */}
      <div className="bg-zinc-900 py-24 text-center border-t border-white/10">
        <h2 className="font-serif text-3xl md:text-5xl mb-8 text-white">Inspired by this look?</h2>

        {/* FIXED BUTTON: Uses hex code #D4AF37 to ensure Gold color shows up */}
        <button
          onClick={onBack}
          className="bg-[#D4AF37] text-black px-10 py-4 uppercase tracking-[0.2em] text-xs md:text-sm font-bold hover:bg-white transition-colors duration-300"
        >
          View Other Collections
        </button>
      </div>
    </motion.div>
  );
}