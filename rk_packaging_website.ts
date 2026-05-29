import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Menu, 
  X, 
  FileText, 
  HelpCircle, 
  ShieldCheck, 
  Zap, 
  Award, 
  Percent, 
  Layers, 
  Sparkles,
  Info
} from 'lucide-react';


const PRODUCT_CATEGORIES = [
  {
    id: "standup",
    title: "Standup Pouches",
    description: "Premium self-standing pouches with optional zippers. Perfect for retail shelf presence, snacks, and dry fruits.",
    features: ["Bottom gusset for maximum volume", "High-barrier laminate films", "Resealable zipper locks"],
    svgType: "standup"
  },
  {
    id: "ziplock",
    title: "Zip Lock Bags",
    description: "Highly durable, transparent, or customized bags with secure zipper profiles for organizing and protection.",
    features: ["Easy-to-close single track zip", "Reinforced side seals", "Exceptional optical clarity"],
    svgType: "ziplock"
  },
  {
    id: "polybags",
    title: "Printed Polybags",
    description: "Custom-branded bags with high-resolution flexographic printing to elevate your brand's retail presentation.",
    features: ["Punch-hole & loop handles", "Eco-friendly LDPE/HM options", "Brilliant multi-color printing"],
    svgType: "polybag"
  },
  {
    id: "food",
    title: "Food Packaging",
    description: "FDA-compliant food-grade packaging designed to maintain absolute freshness and extend shelf-life.",
    features: ["Oxygen & moisture resistance", "Modified Atmosphere capable", "Aroma-locking capabilities"],
    svgType: "food"
  },
  {
    id: "courier",
    title: "Courier Bags",
    description: "Tamper-evident, high-strength mailing envelopes with permanent adhesive peel-and-seal tape.",
    features: ["Co-extruded tear-resistant film", "Strong hot-melt adhesive strip", "Optional POD jackets"],
    svgType: "courier"
  },
  {
    id: "industrial",
    title: "Industrial & Flexible Packaging",
    description: "Heavy-duty films, liners, and high-strength woven packaging designed for bulk storage and safe logistics.",
    features: ["Excellent tensile strength", "Puncture-resistant formulations", "Tailored chemical-resistant liners"],
    svgType: "industrial"
  }
];

const INDUSTRIES = [
  { name: "Food & Snacks", icon: "🍿", description: "Oxygen and moisture barriers for chips, dried foods, and dry mixes." },
  { name: "Spices & Powders", icon: "🌶️", description: "Strong aroma retention and static-free interior liners." },
  { name: "Garments & Textiles", icon: "👕", description: "Elegant transparent polybags with neat venting holes." },
  { name: "Cosmetics & Wellness", icon: "🧴", description: "Ultra-premium finish pouches matching high-end beauty branding." },
  { name: "Retail Brands", icon: "🛍️", description: "Vibrant shopping bags with durable handles and clean typography." },
  { name: "E-commerce & Logistics", icon: "📦", description: "Tear-proof, opaque mailing envelopes with secure sealing." },
  { name: "Heavy Industry", icon: "🏭", description: "High-volume drum bags, liners, and heavy-duty shrink packaging." }
];

const FAQS = [
  {
    question: "How do I choose the right thickness (micron) and material for my packaging?",
    answer: "That is where our consultation shines! Based on your product weight, moisture/oxygen sensitivity, and filling machinery, we guide you on whether to use LDPE, PP, PET, or custom multi-layer barrier laminates."
  },
  {
    question: "What is your Minimum Order Quantity (MOQ)?",
    answer: "Our minimum order quantity starts at 150 kg per size/design. This standard B2B batch size allows us to calibrate our high-speed printing and extrusion machinery to deliver the highest quality at factory rates."
  },
  {
    question: "Do you offer physical samples before bulk manufacturing?",
    answer: "Yes! We can provide existing stock samples free of charge so you can test size and material compatibility with your physical products. Custom prototype prints can also be arranged."
  },
  {
    question: "What is the typical lead time for custom manufactured orders?",
    answer: "Standard orders are manufactured and dispatched within 10-15 business days following design approval. Urgent contract orders can often be fast-tracked to keep your supply chain running smoothly."
  },
  {
    question: "Can your packaging run on automatic Form-Fill-Seal (FFS) machinery?",
    answer: "Absolutely. We supply both pre-formed pouches/bags and continuous roll-stock film rolls custom-wound to match your specific packing machinery's core and sensor configurations."
  }
];

const TESTIMONIALS = [
  {
    quote: "RK Packaging completely changed how we package our organic teas. Their recommendation to shift to a 3-layer matte barrier pouch increased our shelf life by 6 months, and our customers love the premium feel.",
    author: "Amit Sharma",
    role: "Founder, Veda Organics",
    rating: 5
  },
  {
    quote: "Finding a manufacturing partner that answers technical questions without pushing unnecessary upgrades is rare. Their team spent hours explaining micron thickness adjustments, saving us 14% on shipping weights.",
    author: "Priya Nair",
    role: "Operations Director, StyleCart India",
    rating: 5
  },
  {
    quote: "The tamper-evident courier bags we sourced are incredibly durable. Zero bursting issues even during heavy monsoon deliveries. Looking forward to our next bulk contract with RK Packaging.",
    author: "Rohan Mehra",
    role: "Logistics Lead, Alpha Retailers",
    rating: 5
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState("");
  const [faqOpen, setFaqOpen] = useState(null);
  
  // Form submission simulated states
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);

  // Form states
  const [contactForm, setContactForm] = useState({ name: '', phone: '', email: '', company: '', message: '' });
  const [modalForm, setModalForm] = useState({ name: '', phone: '', productType: '', quantity: '150 kg - 300 kg', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactForm({ name: '', phone: '', email: '', company: '', message: '' });
      setContactSubmitted(false);
    }, 4000);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setModalSubmitted(true);
    setTimeout(() => {
      setModalForm({ name: '', phone: '', productType: '', quantity: 'Medium (10k - 50k)', message: '' });
      setModalSubmitted(false);
      setIsModalOpen(false);
    }, 3000);
  };

  const openInquiryModal = (productName = "") => {
    setModalProduct(productName);
    setModalForm(prev => ({ ...prev, productType: productName }));
    setIsModalOpen(true);
  };

  // Helper to generate custom styled packaging SVGs inside the app
  const renderPackagingSvg = (type, className = "w-full h-48") => {
    const baseSvgProps = {
      className: `${className} text-slate-700 select-none`,
      viewBox: "0 0 200 200",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    };

    switch (type) {
      case "standup":
        return (
          <svg {...baseSvgProps}>
            {/* Background Soft Shadow */}
            <ellipse cx="100" cy="175" rx="55" ry="12" fill="#E2E8F0" opacity="0.8" />
            {/* Pouch body */}
            <path d="M60 40 L140 40 L150 150 C150 165, 130 170, 100 170 C70 170, 50 165, 50 150 Z" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="3" strokeLinejoin="round" />
            {/* Heat Seals */}
            <path d="M60 40 L140 40 L140 48 L60 48 Z" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="2" />
            <path d="M50 148 C50 160, 70 170, 100 170 C130 170, 150 160, 150 148 L148 156 C144 164, 125 168, 100 168 C75 168, 56 164, 52 156 Z" fill="#CBD5E1" />
            {/* Tear Notch */}
            <path d="M58 58 L64 60 L58 62" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <path d="M142 58 L136 60 L142 62" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            {/* Zip line indicator */}
            <line x1="60" y1="68" x2="140" y2="68" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" />
            {/* Bottom Gusset base line */}
            <path d="M52 140 C80 150, 120 150, 148 140" stroke="#94A3B8" strokeWidth="2" strokeDasharray="2 2" fill="none" />
            {/* Graphic label */}
            <rect x="75" y="85" width="50" height="40" rx="4" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="85" y1="100" x2="115" y2="100" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
            <line x1="85" y1="110" x2="105" y2="110" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "ziplock":
        return (
          <svg {...baseSvgProps}>
            <ellipse cx="100" cy="175" rx="60" ry="8" fill="#E2E8F0" opacity="0.8" />
            {/* Transparent Bag body */}
            <rect x="50" y="35" width="100" height="130" rx="6" fill="#F8FAFC" fillOpacity="0.85" stroke="#94A3B8" strokeWidth="3" />
            {/* Blue Zipper line track */}
            <rect x="50" y="55" width="100" height="8" fill="#2563EB" opacity="0.8" />
            <line x1="50" y1="59" x2="150" y2="59" stroke="#1E293B" strokeWidth="1" />
            {/* Hole Punch */}
            <circle cx="100" cy="45" r="4" fill="white" stroke="#94A3B8" strokeWidth="2" />
            {/* Reinforcement Lines */}
            <line x1="50" y1="35" x2="50" y2="165" stroke="#2563EB" strokeWidth="1" opacity="0.3" />
            <line x1="150" y1="35" x2="150" y2="165" stroke="#2563EB" strokeWidth="1" opacity="0.3" />
            {/* Simulated item outline inside */}
            <rect x="65" y="80" width="70" height="65" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M90 110 L110 110 M100 100 L100 120" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          </svg>
        );
      case "polybag":
        return (
          <svg {...baseSvgProps}>
            <ellipse cx="100" cy="180" rx="55" ry="8" fill="#E2E8F0" opacity="0.8" />
            {/* Polybag with punch handle */}
            <path d="M55 40 L145 40 L150 170 L50 170 Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="3" />
            {/* Handle Cutout */}
            <rect x="80" y="52" width="40" height="12" rx="6" fill="#1E293B" fillOpacity="0.08" stroke="#94A3B8" strokeWidth="2" />
            {/* Modern bold brand print lines */}
            <path d="M60 100 L140 85" stroke="#2563EB" strokeWidth="6" strokeLinecap="round" />
            <path d="M60 120 L130 108" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
            <circle cx="125" cy="130" r="12" fill="#0F172A" opacity="0.1" />
            <circle cx="75" cy="80" r="6" fill="#38BDF8" />
          </svg>
        );
      case "food":
        return (
          <svg {...baseSvgProps}>
            <ellipse cx="100" cy="178" rx="60" ry="10" fill="#E2E8F0" opacity="0.8" />
            {/* Foil center sealed food pouch */}
            <path d="M55 35 L145 35 L145 165 L55 165 Z" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="3" />
            {/* Top and Bottom Ribbed Crimp Seals */}
            <rect x="55" y="35" width="90" height="12" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="60" y1="41" x2="140" y2="41" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="60" y1="44" x2="140" y2="44" stroke="#94A3B8" strokeWidth="1.5" />
            
            <rect x="55" y="153" width="90" height="12" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="60" y1="159" x2="140" y2="159" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="60" y1="162" x2="140" y2="162" stroke="#94A3B8" strokeWidth="1.5" />

            {/* Back Fin Seal shadow representation */}
            <line x1="100" y1="47" x2="100" y2="153" stroke="#CBD5E1" strokeWidth="4" />
            
            {/* Window badge representation */}
            <rect x="70" y="70" width="60" height="55" rx="6" fill="#F8FAFC" stroke="#38BDF8" strokeWidth="2" />
            {/* Fresh produce representation */}
            <circle cx="100" cy="95" r="15" fill="#2563EB" fillOpacity="0.1" />
            <path d="M93 98 C93 90, 107 90, 107 98" stroke="#2563EB" strokeWidth="2" fill="none" />
            <path d="M96 95 C98 90, 102 90, 104 95" stroke="#38BDF8" strokeWidth="2" fill="none" />
          </svg>
        );
      case "courier":
        return (
          <svg {...baseSvgProps}>
            <ellipse cx="100" cy="172" rx="65" ry="7" fill="#E2E8F0" opacity="0.8" />
            {/* Flat co-ex courier bag */}
            <path d="M45 55 L155 55 L155 160 L45 160 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="3" />
            {/* Fold over sealing lip */}
            <path d="M45 55 L55 30 L145 30 L155 55 Z" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="2" />
            {/* Glue Release liner band */}
            <rect x="60" y="38" width="80" height="6" fill="#2563EB" rx="1" />
            {/* POD Jacket sleeve on front */}
            <rect x="60" y="80" width="80" height="55" rx="4" fill="#F8FAFC" fillOpacity="0.9" stroke="#94A3B8" strokeWidth="1.5" />
            {/* Delivery scan bar code simulation */}
            <line x1="70" y1="92" x2="130" y2="92" stroke="#1E293B" strokeWidth="4" strokeDasharray="3 2 1 3 2 1" />
            <line x1="70" y1="102" x2="110" y2="102" stroke="#1E293B" strokeWidth="2" />
            <line x1="70" y1="110" x2="120" y2="110" stroke="#1E293B" strokeWidth="2" />
            {/* Warning Text Icon */}
            <circle cx="123" cy="115" r="6" fill="#2563EB" />
            <path d="M123 112 L123 115 M123 118 H123" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case "industrial":
        return (
          <svg {...baseSvgProps}>
            <ellipse cx="100" cy="182" rx="55" ry="9" fill="#E2E8F0" opacity="0.8" />
            {/* Heavily textured bulk industrial woven sack */}
            <path d="M60 40 L140 45 L145 170 L55 168 Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="3" />
            {/* Woven cross-hatch micro lines simulation */}
            <line x1="60" y1="60" x2="140" y2="65" stroke="#E2E8F0" strokeWidth="1" />
            <line x1="58" y1="80" x2="142" y2="85" stroke="#E2E8F0" strokeWidth="1" />
            <line x1="56" y1="100" x2="143" y2="105" stroke="#E2E8F0" strokeWidth="1" />
            <line x1="55" y1="120" x2="144" y2="125" stroke="#E2E8F0" strokeWidth="1" />
            <line x1="54" y1="140" x2="145" y2="145" stroke="#E2E8F0" strokeWidth="1" />
            
            <line x1="75" y1="41" x2="70" y2="169" stroke="#E2E8F0" strokeWidth="1" />
            <line x1="95" y1="42" x2="95" y2="170" stroke="#E2E8F0" strokeWidth="1" />
            <line x1="115" y1="43" x2="115" y2="171" stroke="#E2E8F0" strokeWidth="1" />

            {/* Top tie gathering seal */}
            <path d="M85 41 C90 30, 110 30, 115 42" stroke="#94A3B8" strokeWidth="2.5" fill="none" />
            <circle cx="100" cy="42" r="4" fill="#1E293B" />

            {/* Heavy-duty branding label with warning codes */}
            <rect x="75" y="75" width="50" height="50" rx="2" fill="#0F172A" />
            <text x="80" y="95" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">RK HD</text>
            <rect x="80" y="105" width="40" height="4" fill="#38BDF8" />
            <line x1="80" y1="115" x2="110" y2="115" stroke="white" strokeWidth="1" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* Header Info Banner */}
      <div className="bg-slate-900 text-slate-300 py-2.5 px-4 text-xs sm:text-sm border-b border-slate-800 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              B2B Custom Consultation Open
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-blue-400" /> ISO 9001:2015 Standards Manufactured
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="mailto:info@rkpackaging.com" className="hover:text-white transition flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" /> info@rkpackaging.com
            </a>
            <a href="tel:+918130910061" className="hover:text-white transition flex items-center gap-1 font-semibold text-blue-400">
              <Phone className="w-3.5 h-3.5" /> +91 81309 10061
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="bg-slate-900 text-white p-2.5 rounded-lg flex items-center justify-center shadow-md group-hover:bg-blue-600 transition-colors duration-300">
                {/* Custom geometric logo representing elegant flat packaging sheet fold */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H14L20 10V20H10L4 14V4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 20V14H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 4V10H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900 tracking-tight block">RK PACKAGING</span>
                <span className="text-[10px] tracking-widest text-slate-500 uppercase font-semibold block -mt-1">Consultation & Manufacturing</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">About Us</a>
              <a href="#products" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">Products</a>
              <a href="#why-choose-us" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">Why Us</a>
              <a href="#industries" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">Industries</a>
              <a href="#consultation" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors flex items-center gap-1 bg-amber-50 text-amber-800 px-2.5 py-1 rounded-full border border-amber-200/50">
                <Sparkles className="w-3.5 h-3.5" /> Consultation
              </a>
              <a href="#faq" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">FAQs</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">Contact</a>
            </div>

            {/* Header Call-To-Action Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button 
                onClick={() => openInquiryModal("General Custom Package")}
                className="bg-slate-950 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow-lg active:scale-95 duration-200"
              >
                Get Free Consultation
              </button>
              <a 
                href="https://wa.me/918130910061?text=Hi%20RK%20Packaging%2C%20I%20would%20like%20to%20get%20a%20free%20packaging%20consultation%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-lg transition-all shadow-sm flex items-center justify-center active:scale-95"
                title="WhatsApp Us"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-700 p-2 hover:bg-slate-100 rounded-lg focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 py-4 px-6 animate-fadeIn">
            <div className="flex flex-col gap-4">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-blue-600 font-medium py-1"
              >
                About Us
              </a>
              <a 
                href="#products" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-blue-600 font-medium py-1"
              >
                Products
              </a>
              <a 
                href="#why-choose-us" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-blue-600 font-medium py-1"
              >
                Why Us
              </a>
              <a 
                href="#industries" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-blue-600 font-medium py-1"
              >
                Industries We Serve
              </a>
              <a 
                href="#consultation" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-amber-800 font-medium py-1 bg-amber-50 px-3 rounded-md flex items-center justify-between"
              >
                <span>Free Packaging Consultation</span>
                <Sparkles className="w-4 h-4 text-amber-600" />
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-blue-600 font-medium py-1"
              >
                FAQs
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-blue-600 font-medium py-1"
              >
                Contact
              </a>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openInquiryModal("General Custom Package");
                  }}
                  className="w-full text-center bg-slate-950 hover:bg-blue-600 text-white py-3 rounded-lg text-sm font-semibold transition-colors shadow-sm"
                >
                  Get Free Consultation
                </button>
                <a 
                  href="https://wa.me/918130910061?text=Hi%20RK%20Packaging%2C%20I%20would%20like%20to%20get%20a%20free%20packaging%20consultation%20for%20my%20business."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg text-sm font-semibold transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" /> Chat with Expert
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white pt-10 pb-20 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs sm:text-sm font-semibold mx-auto lg:mx-0">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Premium Quality Packaging • Manufactured to Specs</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight sm:leading-none">
                  Smart Packaging <br className="hidden sm:inline" /> 
                  <span className="text-blue-600">Solutions</span> for Modern Brands
                </h1>
                <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Free packaging consultation and custom manufacturing for food, retail, industrial, and D2C businesses. We design and manufacture pouches, bags, and flexible barrier films tailored precisely to your brand.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => openInquiryModal("General Consultation Request")}
                  className="inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-slate-950/10 hover:shadow-blue-600/20 active:scale-98 duration-200"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="https://wa.me/918130910061?text=Hi%20RK%20Packaging%2C%20I%20would%20like%20to%20get%20a%20free%20packaging%20consultation%20for%20my%20business."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-800 px-8 py-4 rounded-xl text-base font-bold transition-all hover:bg-slate-50 active:scale-98 duration-200"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600 fill-current" />
                  WhatsApp Us
                </a>
              </div>

              {/* Instant Mini Stats */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-100 max-w-md mx-auto lg:mx-0">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-950">15+</div>
                  <div className="text-xs text-slate-500 font-medium">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-950">500+</div>
                  <div className="text-xs text-slate-500 font-medium">Active Businesses</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-950">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Custom Sizing</div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Industrial Interactive SVG Grid */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                {/* Decorative background grid pattern */}
                <div className="absolute inset-0 bg-blue-500/5 rounded-3xl -rotate-2 scale-105 pointer-events-none"></div>
                
                {/* Visual mockup showcase box */}
                <div className="relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl">
                  <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-bold">
                    Best Sellers
                  </div>
                  
                  <h3 className="text-slate-900 font-bold text-lg mb-6 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-blue-600" />
                    Custom Pouch Prototyping
                  </h3>

                  {/* Dynamic Side-by-side Packaging Visualizations */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center hover:border-blue-200 transition duration-300">
                      {renderPackagingSvg("standup", "h-32 mx-auto")}
                      <p className="text-xs font-bold text-slate-700 mt-2">Standup Zipper</p>
                      <span className="text-[10px] text-slate-400">High Barrier</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center hover:border-blue-200 transition duration-300">
                      {renderPackagingSvg("food", "h-32 mx-auto")}
                      <p className="text-xs font-bold text-slate-700 mt-2">Food Grade</p>
                      <span className="text-[10px] text-slate-400">Moisture Resistant</span>
                    </div>
                  </div>

                  {/* Quality Assurance checklist */}
                  <div className="mt-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Custom thickness selection (30 to 150+ Microns)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Eco-friendly and FDA approved raw materials</span>
                    </div>
                  </div>

                  {/* Consultation Banner Inside Mockup Box */}
                  <div className="mt-6 bg-slate-900 text-white rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-sky-400 uppercase tracking-widest font-bold">Expert Advice</p>
                      <p className="text-sm font-semibold mt-0.5">Struggling with materials?</p>
                    </div>
                    <button 
                      onClick={() => openInquiryModal("General Help")}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition duration-200 whitespace-nowrap"
                    >
                      Talk to Us
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      {/* About Section */}
      <section id="about" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Industrial Image / Conceptual representation */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-gradient-to-tr from-slate-900 to-slate-800 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                {/* Decorative background circle */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-600/10 rounded-full blur-xl"></div>
                
                <span className="text-xs uppercase tracking-widest text-sky-400 font-bold block mb-2">Our Mission</span>
                <h3 className="text-2xl font-black mb-4">Simplifying Custom Packaging Since 2011</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  For over a decade, RK Packaging has served as both a technical consultant and bulk manufacturer. We bridge the gap between complex plastic/paper chemistry and simple branding choices. 
                </p>

                <div className="space-y-4 pt-4 border-t border-slate-700/60">
                  <div className="flex gap-3">
                    <div className="bg-blue-600/20 text-blue-400 p-2 rounded-lg h-fit">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Engineered Materials</h4>
                      <p className="text-xs text-slate-400">Strict quality-testing of multi-layer laminates for puncture & tear safety.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-sky-600/20 text-sky-400 p-2 rounded-lg h-fit">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Fast Turnaround</h4>
                      <p className="text-xs text-slate-400">Highly automated modern manufacturing lines to complete batch orders quickly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Professional Company Introduction */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Trusted Manufacturing Partner</span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                  We don't just supply bags. We build strategic packaging solutions.
                </h2>
              </div>

              <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  At <strong>RK Packaging</strong>, we believe correct packaging dictates your brand's freshness, consumer perception, and logistics cost. Many businesses suffer from packaging bursts, moisture infiltration, or expensive bulk orders of the wrong specifications.
                </p>
                <p>
                  We offer a complete service: we audit your physical product, consult on the absolute minimum thickness required to maintain safety (saving you money on plastics), finalize gorgeous high-fidelity design layouts, and run heavy-duty custom manufacturing.
                </p>
              </div>

              {/* Three Pillared Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-900 block text-lg">Consultative</span>
                  <p className="text-xs text-slate-500 mt-1">We listen to your requirements before quoting material or machinery roll setups.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-900 block text-lg">Quality-Assured</span>
                  <p className="text-xs text-slate-500 mt-1">Every roll and pouch complies with absolute tensile stress benchmarks.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-900 block text-lg">Scalable Bulk</span>
                  <p className="text-xs text-slate-500 mt-1">Whether you need 5,000 pieces or continuous millions, we scale effortlessly.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      {/* Product Categories Section */}
      <section id="products" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">B2B Custom Manufactured Catalog</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Premium Packaging For Every Business
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore our primary manufacturing categories. All products are customizable in size, thickness, gusset, and custom high-resolution print.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Interactive SVG Packaging Visual Area */}
                <div className="bg-slate-50 border-b border-slate-100 p-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/[0.01] transition-all duration-300"></div>
                  {renderPackagingSvg(product.svgType, "h-40 w-full transition-transform duration-500 group-hover:scale-105")}
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors duration-200">
                      {product.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features list */}
                    <div className="pt-2 space-y-1.5">
                      {product.features.map((feat, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inquiry CTA */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button 
                      onClick={() => openInquiryModal(product.title)}
                      className="flex-grow bg-slate-900 hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-lg transition-all text-center"
                    >
                      Inquire Custom Sizes
                    </button>
                    <a 
                      href={`https://wa.me/918130910061?text=Hi%20RK%20Packaging%2C%20I%20want%20to%20inquire%20about%20custom%20specifications%20for%20${encodeURIComponent(product.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 p-2.5 rounded-lg transition-all"
                      title="WhatsApp Quote"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Quick Notice Banner */}
          <div className="mt-12 bg-slate-900 text-slate-300 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600/20 p-2.5 rounded-xl text-blue-400">
                <Info className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Looking for biodegradable or specific high-barrier materials?</h4>
                <p className="text-xs text-slate-400 mt-0.5">We manufacture custom laminates utilizing compostable films and specific heat sealing formulations.</p>
              </div>
            </div>
            <button 
              onClick={() => openInquiryModal("Special Custom Material Formulation")}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold py-2.5 px-5 rounded-lg whitespace-nowrap transition duration-200"
            >
              Ask Our Experts
            </button>
          </div>

        </div>
      </section>

      {}
      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Why Businesses Trust RK Packaging</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              B2B Standard Excellence Built Into Every Step
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Unlike stock bag wholesalers, we custom engineer your size, print, and thickness so that your packaging fits beautifully and keeps products flawless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4 hover:border-blue-100 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-950">Free Packaging Consultation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We spend time analyzing your product density, shelf-life needs, and logistics stress to suggest the absolute perfect, most cost-effective packaging design.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4 hover:border-blue-100 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
                ★
              </div>
              <h3 className="text-lg font-bold text-slate-950">High Quality Materials</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We strictly use 100% virgin granules and food-grade safety films. This ensures zero chemical leeching, high strength, and superb seal integrity.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4 hover:border-blue-100 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-slate-950">Fast Delivery Cycles</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                With highly robust extrusion, slitting, and printing machines operating continuously, we meet stringent business lead times without delays.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4 hover:border-blue-100 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
                ₹
              </div>
              <h3 className="text-lg font-bold text-slate-950">Competitive Pricing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                By optimizing film thickness and running highly efficient machinery in-house, we eliminate retail markup, passing complete factory savings to you.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4 hover:border-blue-100 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
                ↔
              </div>
              <h3 className="text-lg font-bold text-slate-950">Custom Sizes & Microns</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                You are not forced to choose between stock metrics. We customize every single parameter—from width, height, gusset, hang-hole to seal thickness.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4 hover:border-blue-100 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
                ☷
              </div>
              <h3 className="text-lg font-bold text-slate-950">Bulk Manufacturing Capacity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our plant handles single-day high output scaling, supporting large-scale FMCG setups, logistics suppliers, and established e-commerce brands.
              </p>
            </div>

          </div>

        </div>
      </section>

      {}
      {/* Industries We Serve Section */}
      <section id="industries" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-sky-400 uppercase block">Expertise Across Sectors</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Customized For Your Industry's Requirements
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Different products require tailored shelf parameters. We engineer exact chemical barrier layers for multiple niche sectors.
            </p>
          </div>

          {/* Industries Slider/Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind, idx) => (
              <div 
                key={idx} 
                className="bg-slate-800/50 border border-slate-700/60 p-6 rounded-2xl hover:bg-slate-800 hover:border-slate-600 transition duration-300 space-y-3"
              >
                <div className="text-3xl">{ind.icon}</div>
                <h3 className="font-bold text-lg text-white">{ind.name}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{ind.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom Fast Quote Prompt */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm mb-4">Have a unique packaging application outside standard retail?</p>
            <button 
              onClick={() => openInquiryModal("Special Niche Industry Application")}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 shadow-lg active:scale-95"
            >
              Get Custom Application Review
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {}
      {/* Consultation Section - The Primary USP */}
      <section id="consultation" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm">
            
            {/* Soft decorative blur */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Consultation Left content */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  Our Core Value Proposition
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                  Not Sure Which Packaging Fits Your Product?
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Most brands overspend or select suboptimal configurations due to technical complexity. Our seasoned engineers actively collaborate with you to guide and determine:
                </p>

                {/* Consultation checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-600 p-1.5 rounded-lg mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Correct Material Matrix</h4>
                      <p className="text-xs text-slate-500">Choosing right laminate structures like PP, PET, AL, or paper Kraft.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-600 p-1.5 rounded-lg mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Optimal Thickness</h4>
                      <p className="text-xs text-slate-500">Determining appropriate micron strength to prevent pouch bursting.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-600 p-1.5 rounded-lg mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Ideal Pouch Style</h4>
                      <p className="text-xs text-slate-500">Choosing Standup, Side Gusset, Flat-bottom, or simple seal styles.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-600 p-1.5 rounded-lg mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Budget-Friendly Run</h4>
                      <p className="text-xs text-slate-500">Formulating MOQ & scale schedules to hit optimal costs-per-pouch.</p>
                    </div>
                  </div>
                </div>

                {/* Clear message */}
                <div className="bg-slate-100 p-4 rounded-xl text-xs text-slate-600 border-l-4 border-slate-900">
                  <p className="font-semibold text-slate-900 mb-1">No complicated tools or complex digital setups</p>
                  Speak with our direct operations partner on phone or WhatsApp instantly. We do all math and blueprint drafts on your behalf!
                </div>
              </div>

              {/* Consultation Right Visual & CTAs */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-md">
                <h3 className="font-bold text-slate-950 text-lg mb-2">Request Free Consultation</h3>
                <p className="text-xs text-slate-500 mb-6">Receive professional layout samples and barrier advice within 24 hours.</p>

                <div className="space-y-4">
                  <button 
                    onClick={() => openInquiryModal("Free Consultation Call")}
                    className="w-full flex items-center justify-center gap-2 bg-slate-950 hover:bg-blue-600 text-white py-3.5 rounded-xl font-bold text-sm transition duration-200 shadow-md"
                  >
                    <span>Request Callback Form</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-slate-200"></div>
                    <span className="flex-shrink mx-4 text-slate-400 text-xs font-semibold uppercase">Or Direct Connect</span>
                    <div className="flex-grow border-t border-slate-200"></div>
                  </div>

                  <a 
                    href="https://wa.me/918130910061?text=Hi%20RK%20Packaging%2C%20I%20would%20like%20to%20get%20a%20free%20packaging%20consultation%20for%20my%20business."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-bold text-sm transition duration-200 shadow-md"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>WhatsApp Our Founder</span>
                  </a>

                  <div className="text-center pt-2">
                    <span className="text-xs text-slate-400 font-medium">No obligation • Quick WhatsApp call standard</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {}
      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Client Feedback</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Real Partners, Proven Reliability
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              See what business owners and operational managers have to say about working with RK Packaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Standard 5 Star rating */}
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700 uppercase">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.author}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Common Inquiries</span>
            <h2 className="text-3xl font-black text-slate-950 tracking-tight">
              Got Questions? We Have Simple Answers
            </h2>
            <p className="text-slate-600 text-sm">
              Clear technical insights simplified for smooth business decision making.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-slate-50"
                >
                  <button
                    onClick={() => setFaqOpen(isOpen ? null : idx)}
                    className="w-full text-left py-4 px-5 sm:px-6 flex justify-between items-center gap-4 bg-white hover:bg-slate-50 transition duration-200"
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                      <HelpCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="py-4 px-5 sm:px-6 bg-slate-50 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-slideDown">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Extra FAQ Note */}
          <div className="mt-10 text-center bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <p className="text-xs sm:text-sm text-blue-900 font-medium">
              Have technical queries regarding barrier laminates, specific chemical compounds, or sealing equipment setup?
            </p>
            <a 
              href="https://wa.me/918130910061?text=Hi%20RK%20Packaging%2C%20I%20have%20a%20technical%20question%20regarding%20packaging%20materials."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800"
            >
              Ask Our Production Head directly on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Contact Factory</span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                  Let’s Build the Right Packaging Packaging
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Call us directly, send an email, visit our plant, or request a quick callback. Our executives are active round the clock to keep B2B supply chains moving.
                </p>
              </div>

              {/* Direct Details Card */}
              <div className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
                <div className="flex gap-4">
                  <div className="bg-slate-100 text-slate-800 p-3 rounded-xl h-fit">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Phone / WhatsApp</span>
                    <a href="tel:+918130910061" className="block text-slate-900 font-bold text-base mt-0.5 hover:text-blue-600 transition">
                      +91 81309 10061
                    </a>
                    <span className="text-xs text-slate-500">Available Monday to Saturday (9:00 AM - 7:00 PM)</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-100">
                  <div className="bg-slate-100 text-slate-800 p-3 rounded-xl h-fit">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Email Inquiry</span>
                    <a href="mailto:info@rkpackaging.com" className="block text-slate-900 font-bold text-base mt-0.5 hover:text-blue-600 transition">
                      info@rkpackaging.com
                    </a>
                    <span className="text-xs text-slate-500">Expect replies in 1-2 business hours.</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-100">
                  <div className="bg-slate-100 text-slate-800 p-3 rounded-xl h-fit">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Manufacturing Plant Address</span>
                    <p className="text-slate-900 font-bold text-sm mt-0.5 leading-relaxed">
                      Plot No. 42-A, Industrial Development Area, <br />
                      Sector 4, Rohad Industrial Area, Haryana, India.
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Realistic Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-2">
                <div className="h-48 bg-slate-200 relative flex items-center justify-center rounded-xl overflow-hidden">
                  {/* Styled mock vector background */}
                  <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center p-4 text-center">
                    <MapPin className="w-8 h-8 text-red-500 animate-bounce mb-2" />
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">RK Packaging Plant Location</span>
                    <span className="text-slate-500 text-[10px] mt-1">Rohad Industrial Sector (Near New Delhi Border)</span>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="mt-3 bg-slate-950 hover:bg-blue-600 text-white font-bold text-xs py-1.5 px-3 rounded-lg transition"
                    >
                      Open Google Maps
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Direct Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md">
              <h3 className="text-xl font-bold text-slate-950 mb-2">Get an Instant Factory Quote</h3>
              <p className="text-xs text-slate-500 mb-6">Fill in basic contact parameters and our pricing executive will ring you back immediately.</p>

              {contactSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-900 text-lg">Inquiry Received Successfully</h4>
                  <p className="text-sm text-emerald-700 max-w-sm mx-auto">
                    Thank you for reaching out to RK Packaging. Our industrial consultation unit will compile pricing catalogs and call your registered number within 1 hour.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase">Your Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        required 
                        value={contactForm.name} 
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        placeholder="e.g. Rahul Gupta" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase">Phone Number <span className="text-red-500">*</span></label>
                      <input 
                        type="tel" 
                        required 
                        value={contactForm.phone} 
                        onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                        placeholder="e.g. +91 81309 10061" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase">Email Address</label>
                      <input 
                        type="email" 
                        value={contactForm.email} 
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        placeholder="e.g. company@brand.com" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase">Company / Brand Name</label>
                      <input 
                        type="text" 
                        value={contactForm.company} 
                        onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                        placeholder="e.g. Zenith Foods Ltd" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase">Custom packaging requirements or size specs (MOQ: Above 150kg)</label>
                    <textarea 
                      rows="4" 
                      value={contactForm.message} 
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="e.g. I need Standup pouches with Zippers, 70 micron thickness, size 6x9 inches for our organic spice brand. Order weight will be approx 200 kg..." 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-slate-950 hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition duration-200 shadow-md hover:shadow-lg"
                  >
                    Submit Bulk Manufacturing Quote Request
                  </button>

                  <div className="text-center pt-2">
                    <span className="text-xs text-slate-400 font-medium">Safe & secure B2B transaction protocols strictly followed.</span>
                  </div>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {}
      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
            
            {/* Footer Brand Info */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white p-2 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H14L20 10V20H10L4 14V4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-lg font-black text-white tracking-wider">RK PACKAGING</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Custom packaging manufacturing and strategic material consulting partner. We design high-barrier, long shelf-life pouches and bags compliant with absolute safety standards.
              </p>
              <div className="pt-2 text-xs text-slate-500">
                <p>Plant Compliance Reg ID: #B2B-HARYANA-2011/985</p>
                <p>GSTIN: 06AABCR8392K1Z8</p>
              </div>
            </div>

            {/* Quick Link Navigation */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Navigation</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li><a href="#about" className="hover:text-white transition">About Corporate Profile</a></li>
                <li><a href="#products" className="hover:text-white transition">Product Specification Catalog</a></li>
                <li><a href="#why-choose-us" className="hover:text-white transition">Quality Standards Code</a></li>
                <li><a href="#industries" className="hover:text-white transition">Sectors We Manufacture For</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ Support Portal</a></li>
              </ul>
            </div>

            {/* Catalog Categories */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">Packaging Solutions</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li><a href="#products" className="hover:text-white transition">Standup Zipper Pouches</a></li>
                <li><a href="#products" className="hover:text-white transition">Transparent Zip Lock Bags</a></li>
                <li><a href="#products" className="hover:text-white transition">Custom Brand Printed Polybags</a></li>
                <li><a href="#products" className="hover:text-white transition">Food-Grade Preservation Laminates</a></li>
                <li><a href="#products" className="hover:text-white transition">Heavy-Duty Courier & Shipping Envelopes</a></li>
              </ul>
            </div>

            {/* Direct Consultation Link */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact Factory</h4>
              <div className="space-y-3 text-xs sm:text-sm">
                <p>Have an urgent RFQ (Request for Quote)?</p>
                <a 
                  href="mailto:rfq@rkpackaging.com" 
                  className="block text-blue-400 hover:text-blue-300 font-bold transition"
                >
                  rfq@rkpackaging.com
                </a>
                <span className="block text-slate-500 text-[11px] leading-tight">Quotes typically calculated within same business day.</span>
              </div>
            </div>

          </div>

          {/* Legal Rights Footer Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} RK Packaging Industries. All Rights Reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:underline">B2B Terms of Contract</a>
              <span>•</span>
              <a href="#" className="hover:underline">Sitemap</a>
            </div>
          </div>

        </div>
      </footer>

      {}
      {/* Dynamic Consultation Quote Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-scaleUp">
            
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-6 relative">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg transition"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
              <p className="text-xs uppercase tracking-widest text-sky-400 font-bold">Free Technical Consultation</p>
              <h3 className="text-lg font-bold mt-1">
                {modalProduct ? `Inquire: ${modalProduct}` : "Packaging Consultation Request"}
              </h3>
            </div>

            {/* Modal Form */}
            <div className="p-6">
              {modalSubmitted ? (
                <div className="text-center py-8 space-y-4 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-slate-900 text-lg">Inquiry Scheduled</h4>
                  <p className="text-slate-600 text-sm max-w-xs mx-auto">
                    Your details have been registered. Our factory team will reach you shortly on WhatsApp or call.
                  </p>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="bg-slate-950 text-white px-6 py-2 rounded-xl text-sm font-bold mt-4"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase">Your Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      required 
                      value={modalForm.name}
                      onChange={(e) => setModalForm({...modalForm, name: e.target.value})}
                      placeholder="e.g. Rahul Sen" 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase">WhatsApp / Contact Number <span className="text-red-500">*</span></label>
                    <input 
                      type="tel" 
                      required 
                      value={modalForm.phone}
                      onChange={(e) => setModalForm({...modalForm, phone: e.target.value})}
                      placeholder="e.g. +91 81309 10061" 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase">Target Product</label>
                      <select 
                        value={modalForm.productType}
                        onChange={(e) => setModalForm({...modalForm, productType: e.target.value})}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Choose Category</option>
                        <option value="Standup Pouches">Standup Pouches</option>
                        <option value="Zip Lock Bags">Zip Lock Bags</option>
                        <option value="Printed Polybags">Printed Polybags</option>
                        <option value="Food Packaging">Food Packaging</option>
                        <option value="Courier Bags">Courier Bags</option>
                        <option value="Industrial Packaging">Industrial Packaging</option>
                        <option value="Other / Special Material">Other / Special Material</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase">Estimated Quantity (MOQ: 150kg)</label>
                      <select 
                        value={modalForm.quantity}
                        onChange={(e) => setModalForm({...modalForm, quantity: e.target.value})}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="150 kg - 300 kg">150 kg - 300 kg (Standard MOQ)</option>
                        <option value="300 kg - 500 kg">300 kg - 500 kg</option>
                        <option value="500 kg - 1,000 kg">500 kg - 1,000 kg</option>
                        <option value="Above 1,000 kg">Above 1,000 kg (Bulk Run)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase">Additional requirements (Size / thickness if known)</label>
                    <textarea 
                      rows="2" 
                      value={modalForm.message}
                      onChange={(e) => setModalForm({...modalForm, message: e.target.value})}
                      placeholder="e.g. Dimensions or type of product to be packaged..." 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-sm transition duration-200 shadow"
                    >
                      Connect with Packaging Architect
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setIsModalOpen(false)}
                      className="w-full text-slate-500 hover:text-slate-800 text-xs font-bold py-2 mt-2 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

      {}
      {/* Floating Instant CTA Buttons (WhatsApp & Quick Call) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Direct Call Button */}
        <a 
          href="tel:+918130910061"
          className="bg-slate-900 text-white p-3.5 rounded-full shadow-2xl hover:bg-blue-600 transition-all active:scale-95 duration-200 flex items-center justify-center border border-slate-800"
          title="Call Our Factory"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/918130910061?text=Hi%20RK%20Packaging%2C%20I%20would%20like%20to%20get%20a%20free%20packaging%20consultation%20for%20my%20business."
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-2xl transition-all active:scale-95 duration-200 flex items-center justify-center relative group"
          title="WhatsApp Executive"
        >
          {/* Subtle pulse effect */}
          <span className="absolute inset-0 rounded-full bg-emerald-600/30 animate-ping -z-10"></span>
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
      </div>

    </div>
  );
}