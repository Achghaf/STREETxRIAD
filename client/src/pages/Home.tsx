import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Palette, Heart } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Neo-Riad Urbain Design Philosophy:
 * - Asymmetric layout with diagonal sections
 * - Warm earth tones (ocre, terracotta) + electric accents (pink, blue)
 * - Zellige-inspired geometric patterns mixed with street art
 * - Bold typography (Bebas Neue) for energy, Poppins for readability
 * - Energetic animations (180-220ms) reflecting urban rhythm
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8D5C4]">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF006E] to-[#00D9FF] rounded flex items-center justify-center">
              <span style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-white text-lg">M</span>
            </div>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-lg tracking-wider hidden sm:inline">STREET × RIAD</span>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#collection" className="text-sm font-medium hover:text-[#FF006E] transition-colors">Collection</a>
            <a href="#about" className="text-sm font-medium hover:text-[#FF006E] transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium hover:text-[#FF006E] transition-colors">Contact</a>
          </nav>
          <Button style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="bg-[#FF006E] hover:bg-[#FF006E]/90 text-white text-xs">Shop</Button>
        </div>
      </header>

      {/* Hero Section with Diagonal Clip */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url("https://d2xsxph8kpxj0f.cloudfront.net/310519663500219337/nRatj74PfoZsZF2e5bfGzm/zellige-urban-texture-Qe5kNYATkfj2rnCJ7Vw7mS.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`
        }} />
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-diagonal" style={{ animationDelay: '0s' }}>
              <div className="mb-6">
                <span style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="inline-block px-4 py-2 bg-[#F5E6D3] text-[#1A1A1A] text-xs tracking-wider mb-4">ROOTED IN CULTURE</span>
              </div>
              <h1 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-5xl lg:text-6xl leading-tight mb-6 text-[#1A1A1A]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF006E] to-[#00D9FF]">Street × Riad</span>
              </h1>
              <p className="text-lg text-[#6B5B4F] mb-8 max-w-md font-light leading-relaxed">
                Where traditional Moroccan craftsmanship meets contemporary street culture. Authentic heritage, bold urban energy.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="bg-[#FF006E] hover:bg-[#FF006E]/90 text-white px-8 py-6 text-base group">
                  Shop the Collection
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="border-[#D4A574] text-[#1A1A1A] hover:bg-[#F5E6D3] px-8 py-6 text-base">
                  Discover Story
                </Button>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="relative h-96 lg:h-[500px] animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663500219337/nRatj74PfoZsZF2e5bfGzm/hero-banner-McF6GVqXWtsxiVUF44p6UC.webp"
                alt="Street Riad Hero"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Diagonal Background */}
      <section className="relative py-24 bg-[#F5E6D3]">
        <div className="absolute top-0 left-0 right-0 h-32 bg-white" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)'
        }} />
        
        <div className="container relative z-10 pt-12">
          <div className="text-center mb-16 animate-fade-up">
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-4xl lg:text-5xl mb-4 text-[#1A1A1A]">Why Choose Us</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#FF006E] to-[#00D9FF] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Authentic Craftsmanship",
                description: "Each piece blends traditional Moroccan zellige patterns with modern street art aesthetics"
              },
              {
                icon: Zap,
                title: "Urban Energy",
                description: "Bold designs that celebrate contemporary street culture while honoring cultural heritage"
              },
              {
                icon: Heart,
                title: "Ethical Production",
                description: "Supporting local artisans and sustainable practices in every creation"
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group p-8 bg-white rounded-lg hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF006E]/20 to-[#00D9FF]/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-[#FF006E]" />
                </div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-lg mb-3 text-[#1A1A1A]">{feature.title}</h3>
                <p className="text-[#6B5B4F] text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Preview Section */}
      <section id="collection" className="relative py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16 animate-fade-up">
            <span style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="inline-block px-4 py-2 bg-[#F5E6D3] text-[#1A1A1A] text-xs tracking-wider mb-4">FEATURED COLLECTION</span>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-4xl lg:text-5xl mb-4 text-[#1A1A1A]">Signature Pieces</h2>
            <p className="text-[#6B5B4F] max-w-2xl mx-auto">Curated selections that embody the fusion of Moroccan heritage and street culture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Zellige Urban Jacket",
                price: "$189",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663500219337/nRatj74PfoZsZF2e5bfGzm/moroccan-street-style-5Tjqerw46HVyNdrBrXYfwG.webp"
              },
              {
                title: "Street Riad Hoodie",
                price: "$129",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663500219337/nRatj74PfoZsZF2e5bfGzm/zellige-urban-texture-Qe5kNYATkfj2rnCJ7Vw7mS.webp"
              },
              {
                title: "Geometric Heritage Tee",
                price: "$59",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663500219337/nRatj74PfoZsZF2e5bfGzm/geometric-pattern-accent-9uoatGuUjbHfqRaLVSySHA.webp"
              }
            ].map((product, idx) => (
              <div 
                key={idx}
                className="group animate-fade-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 h-64 bg-[#F5E6D3]">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-lg mb-2 text-[#1A1A1A]">{product.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#FF006E] font-bold text-lg">{product.price}</span>
                  <Button size="sm" variant="ghost" className="text-[#FF006E] hover:bg-[#F5E6D3]">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 text-white px-8 py-6 text-base">
              View Full Collection
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section with Geometric Pattern */}
      <section id="about" className="relative py-24 bg-[#1A1A1A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("https://d2xsxph8kpxj0f.cloudfront.net/310519663500219337/nRatj74PfoZsZF2e5bfGzm/geometric-pattern-accent-9uoatGuUjbHfqRaLVSySHA.webp")',
          backgroundSize: '400px 400px'
        }} />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-diagonal">
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-4xl lg:text-5xl mb-6">Our Story</h2>
              <p className="text-[#E8D5C4] text-lg mb-6 leading-relaxed">
                Born from the vibrant streets of Marrakech, we celebrate the intersection of ancient Moroccan craftsmanship and contemporary urban culture. Every piece tells a story of heritage, rebellion, and artistic expression.
              </p>
              <p className="text-[#E8D5C4] text-lg mb-8 leading-relaxed">
                Our mission is to create fashion that honors tradition while embracing the bold energy of street culture—proving that authenticity and modernity aren't opposing forces, but beautiful partners.
              </p>
              <Button style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="bg-[#FF006E] hover:bg-[#FF006E]/90 text-white px-8 py-6 text-base">
                Learn More
              </Button>
            </div>

            <div className="relative h-96 lg:h-[500px] animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF006E]/20 to-[#00D9FF]/20 rounded-lg" />
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663500219337/nRatj74PfoZsZF2e5bfGzm/moroccan-street-style-5Tjqerw46HVyNdrBrXYfwG.webp"
                alt="Marrakech Street Culture"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#FF006E] to-[#00D9FF]">
        <div className="container text-center">
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-4xl lg:text-5xl text-white mb-6">Ready to Embrace the Fusion?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join our community of culture enthusiasts and urban explorers
          </p>
          <Button style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="bg-white text-[#FF006E] hover:bg-white/90 px-8 py-6 text-base">
            Shop Now
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-[#E8D5C4] py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-white mb-4">Street × Riad</h3>
              <p className="text-sm">Culture. Style. Heritage.</p>
            </div>
            <div>
              <h4 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-white mb-4 text-sm">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-white mb-4 text-sm">About</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Artisans</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-white mb-4 text-sm">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#3A3A3A] pt-8 text-center text-sm">
            <p>&copy; 2026 Street × Riad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
