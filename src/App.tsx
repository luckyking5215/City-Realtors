// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const properties = [
    {
      id: 1,
      type: 'house',
      title: 'Modern Family Villa',
      price: '$450,000',
      location: 'University Town, Peshawar',
      bedrooms: 4,
      bathrooms: 3,
      area: '2500 sq ft',
      image: 'https://readdy.ai/api/search-image?query=modern%20luxury%20family%20villa%20with%20beautiful%20architecture%20clean%20white%20exterior%20elegant%20design%20contemporary%20style%20spacious%20garden%20landscaping%20bright%20natural%20lighting%20professional%20real%20estate%20photography&width=400&height=300&seq=prop1&orientation=landscape'
    },
    {
      id: 2,
      type: 'apartment',
      title: 'Luxury Apartment',
      price: '$280,000',
      location: 'Hayatabad, Peshawar',
      bedrooms: 3,
      bathrooms: 2,
      area: '1800 sq ft',
      image: 'https://readdy.ai/api/search-image?query=luxury%20modern%20apartment%20building%20with%20glass%20facade%20contemporary%20architecture%20urban%20setting%20clean%20minimalist%20design%20professional%20real%20estate%20photography%20bright%20daylight&width=400&height=300&seq=prop2&orientation=landscape'
    },
    {
      id: 3,
      type: 'commercial',
      title: 'Commercial Plaza',
      price: '$850,000',
      location: 'GT Road, Peshawar',
      bedrooms: 0,
      bathrooms: 4,
      area: '5000 sq ft',
      image: 'https://readdy.ai/api/search-image?query=modern%20commercial%20plaza%20building%20with%20glass%20frontage%20contemporary%20business%20architecture%20urban%20commercial%20district%20clean%20professional%20design%20bright%20natural%20lighting&width=400&height=300&seq=prop3&orientation=landscape'
    },
    {
      id: 4,
      type: 'house',
      title: 'Traditional House',
      price: '$320,000',
      location: 'Old City, Peshawar',
      bedrooms: 5,
      bathrooms: 3,
      area: '3200 sq ft',
      image: 'https://readdy.ai/api/search-image?query=traditional%20pakistani%20house%20with%20modern%20touches%20classic%20architecture%20beautiful%20courtyard%20traditional%20design%20elements%20contemporary%20upgrades%20natural%20lighting%20professional%20photography&width=400&height=300&seq=prop4&orientation=landscape'
    },
    {
      id: 5,
      type: 'apartment',
      title: 'Studio Apartment',
      price: '$150,000',
      location: 'Phase 1, Hayatabad',
      bedrooms: 1,
      bathrooms: 1,
      area: '800 sq ft',
      image: 'https://readdy.ai/api/search-image?query=modern%20studio%20apartment%20interior%20with%20open%20floor%20plan%20contemporary%20furniture%20minimalist%20design%20bright%20natural%20lighting%20clean%20white%20walls%20professional%20real%20estate%20photography&width=400&height=300&seq=prop5&orientation=landscape'
    },
    {
      id: 6,
      type: 'commercial',
      title: 'Office Building',
      price: '$1,200,000',
      location: 'Saddar, Peshawar',
      bedrooms: 0,
      bathrooms: 8,
      area: '8000 sq ft',
      image: 'https://readdy.ai/api/search-image?query=modern%20office%20building%20with%20glass%20facade%20contemporary%20commercial%20architecture%20urban%20business%20district%20professional%20design%20bright%20natural%20lighting%20clean%20minimalist%20style&width=400&height=300&seq=prop6&orientation=landscape'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Khan',
      location: 'Peshawar',
      rating: 5,
      text: 'City Realtors helped us find our dream home. Their professional service and attention to detail made the entire process smooth and stress-free.',
      image: 'https://readdy.ai/api/search-image?query=professional%20pakistani%20businessman%20in%20formal%20attire%20smiling%20confidently%20clean%20white%20background%20portrait%20photography%20natural%20lighting%20professional%20headshot&width=80&height=80&seq=test1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Sarah Ali',
      location: 'Hayatabad',
      rating: 5,
      text: 'Excellent service and great property options. The team was very helpful throughout the buying process. Highly recommended for anyone looking for property in Peshawar.',
      image: 'https://readdy.ai/api/search-image?query=professional%20pakistani%20businesswoman%20in%20formal%20attire%20smiling%20confidently%20clean%20white%20background%20portrait%20photography%20natural%20lighting%20professional%20headshot&width=80&height=80&seq=test2&orientation=squarish'
    },
    {
      id: 3,
      name: 'Mohammad Tariq',
      location: 'University Town',
      rating: 5,
      text: 'Trust and transparency are what set City Realtors apart. They delivered exactly what they promised and made our property investment journey memorable.',
      image: 'https://readdy.ai/api/search-image?query=professional%20middle%20aged%20pakistani%20man%20in%20business%20suit%20smiling%20warmly%20clean%20white%20background%20portrait%20photography%20natural%20lighting%20professional%20headshot&width=80&height=80&seq=test3&orientation=squarish'
    }
  ];

  const galleryImages = [
    {
      id: 1,
      category: 'houses',
      title: 'Luxury Villa',
      image: 'https://readdy.ai/api/search-image?query=luxury%20villa%20exterior%20with%20beautiful%20garden%20landscaping%20modern%20architecture%20elegant%20design%20natural%20lighting%20professional%20real%20estate%20photography%20clean%20composition&width=300&height=400&seq=gal1&orientation=portrait'
    },
    {
      id: 2,
      category: 'apartments',
      title: 'Modern Apartment',
      image: 'https://readdy.ai/api/search-image?query=modern%20apartment%20building%20facade%20with%20glass%20windows%20contemporary%20architecture%20urban%20setting%20clean%20design%20professional%20photography%20bright%20daylight&width=300&height=200&seq=gal2&orientation=landscape'
    },
    {
      id: 3,
      category: 'commercial',
      title: 'Business Center',
      image: 'https://readdy.ai/api/search-image?query=modern%20business%20center%20building%20with%20glass%20facade%20contemporary%20commercial%20architecture%20professional%20design%20clean%20composition%20natural%20lighting&width=300&height=300&seq=gal3&orientation=squarish'
    },
    {
      id: 4,
      category: 'houses',
      title: 'Family Home',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20family%20home%20with%20garden%20contemporary%20residential%20architecture%20clean%20design%20natural%20lighting%20professional%20real%20estate%20photography&width=300&height=350&seq=gal4&orientation=portrait'
    },
    {
      id: 5,
      category: 'apartments',
      title: 'City Apartment',
      image: 'https://readdy.ai/api/search-image?query=city%20apartment%20complex%20with%20modern%20design%20contemporary%20architecture%20urban%20living%20clean%20composition%20professional%20photography%20bright%20lighting&width=300&height=250&seq=gal5&orientation=landscape'
    },
    {
      id: 6,
      category: 'commercial',
      title: 'Shopping Plaza',
      image: 'https://readdy.ai/api/search-image?query=modern%20shopping%20plaza%20with%20glass%20frontage%20contemporary%20commercial%20design%20clean%20architecture%20professional%20photography%20natural%20lighting&width=300&height=300&seq=gal6&orientation=squarish'
    }
  ];

  const timelineData = [
    {
      year: '2015',
      title: 'Foundation',
      description: 'City Realtors was established with a vision to transform the real estate landscape in Peshawar through trust and transparency.',
      image: 'https://readdy.ai/api/search-image?query=modern%20office%20building%20establishment%20with%20professional%20team%20working%20together%20clean%20contemporary%20workspace%20natural%20lighting%20business%20foundation%20concept&width=400&height=300&seq=time1&orientation=landscape'
    },
    {
      year: '2018',
      title: 'Expansion',
      description: 'We expanded our services to cover all major areas of Peshawar, building a network of trusted partners and satisfied clients.',
      image: 'https://readdy.ai/api/search-image?query=business%20expansion%20concept%20with%20multiple%20office%20locations%20modern%20architecture%20professional%20growth%20clean%20design%20natural%20lighting%20success%20story&width=400&height=300&seq=time2&orientation=landscape'
    },
    {
      year: '2021',
      title: 'Digital Innovation',
      description: 'Launched our digital platform to provide seamless property browsing and virtual tours, making real estate accessible to everyone.',
      image: 'https://readdy.ai/api/search-image?query=digital%20innovation%20in%20real%20estate%20with%20modern%20technology%20virtual%20tours%20online%20platform%20clean%20contemporary%20design%20professional%20presentation&width=400&height=300&seq=time3&orientation=landscape'
    },
    {
      year: '2024',
      title: 'Market Leader',
      description: 'Today, we are proud to be one of the leading real estate companies in Peshawar, having helped thousands find their dream properties.',
      image: 'https://readdy.ai/api/search-image?query=successful%20real%20estate%20company%20achievement%20modern%20office%20building%20with%20success%20celebration%20professional%20team%20clean%20contemporary%20design%20natural%20lighting&width=400&height=300&seq=time4&orientation=landscape'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Areas to Invest in Peshawar Real Estate',
      excerpt: 'Discover the most promising areas for property investment in Peshawar with our comprehensive market analysis and expert insights.',
      category: 'Investment',
      image: 'https://readdy.ai/api/search-image?query=peshawar%20city%20skyline%20with%20modern%20buildings%20investment%20opportunities%20real%20estate%20market%20analysis%20clean%20professional%20photography%20natural%20lighting&width=400&height=250&seq=blog1&orientation=landscape',
      date: 'March 15, 2024'
    },
    {
      id: 2,
      title: 'First Time Home Buyer Guide',
      excerpt: 'Everything you need to know about buying your first home in Peshawar, from financing to legal procedures.',
      category: 'Guide',
      image: 'https://readdy.ai/api/search-image?query=happy%20family%20in%20front%20of%20new%20home%20first%20time%20buyers%20guide%20real%20estate%20success%20story%20clean%20natural%20lighting%20professional%20photography&width=400&height=250&seq=blog2&orientation=landscape',
      date: 'March 10, 2024'
    },
    {
      id: 3,
      title: 'Commercial Property Trends 2024',
      excerpt: 'Analyze the latest trends in commercial real estate and what they mean for investors and business owners.',
      category: 'Market Analysis',
      image: 'https://readdy.ai/api/search-image?query=modern%20commercial%20buildings%20business%20district%20market%20trends%20analysis%20professional%20architecture%20clean%20design%20natural%20lighting&width=400&height=250&seq=blog3&orientation=landscape',
      date: 'March 5, 2024'
    }
  ];

  const filteredProperties = activeFilter === 'all' 
    ? properties 
    : properties.filter(property => property.type === activeFilter);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppInquiry = (property: any) => {
    const message = `Hi, I'm interested in ${property.title} priced at ${property.price}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">City Realtors</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium cursor-pointer">Home</a>
                <a href="#story" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium cursor-pointer">Our Story</a>
                <a href="#properties" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium cursor-pointer">Properties</a>
                <a href="#gallery" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium cursor-pointer">Gallery</a>
                <a href="#contact" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium cursor-pointer">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-orange-500 cursor-pointer">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 cursor-pointer">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 cursor-pointer">
                <i className="fab fa-whatsapp text-lg"></i>
              </a>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-500 cursor-pointer"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-500 cursor-pointer">Home</a>
              <a href="#story" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 cursor-pointer">Our Story</a>
              <a href="#properties" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 cursor-pointer">Properties</a>
              <a href="#gallery" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 cursor-pointer">Gallery</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 cursor-pointer">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center" style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20real%20estate%20office%20building%20with%20glass%20facade%20contemporary%20architecture%20professional%20business%20environment%20clean%20minimalist%20design%20natural%20lighting%20elegant%20exterior%20with%20subtle%20cream%20and%20white%20tones&width=1440&height=1024&seq=hero1&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              City <span className="text-orange-500">Realtors</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
              Where Trust Meets Property
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Discover your dream property in Peshawar with Pakistan's most trusted real estate partner. 
              We combine years of expertise with modern technology to deliver exceptional service.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold !rounded-button whitespace-nowrap cursor-pointer transition-all duration-300 transform hover:scale-105">
              Browse Properties
            </button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming Peshawar's leading real estate company, 
              our journey has been built on trust, innovation, and unwavering commitment to our clients.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
            
            {timelineData.map((item, index) => (
              <div key={item.year} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-orange-500 text-2xl font-bold mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our carefully curated selection of premium properties across Peshawar. 
              From luxury villas to modern apartments and commercial spaces.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-2 rounded-lg flex space-x-2">
              {['all', 'house', 'apartment', 'commercial'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 !rounded-button whitespace-nowrap cursor-pointer transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:text-orange-500'
                  }`}
                >
                  {filter === 'all' ? 'All Properties' : filter.charAt(0).toUpperCase() + filter.slice(1) + 's'}
                </button>
              ))}
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover object-top transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <i className="fas fa-map-marker-alt mr-2 text-orange-500"></i>
                    {property.location}
                  </p>
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                    {property.bedrooms > 0 && (
                      <span className="flex items-center">
                        <i className="fas fa-bed mr-1"></i>
                        {property.bedrooms} Beds
                      </span>
                    )}
                    <span className="flex items-center">
                      <i className="fas fa-bath mr-1"></i>
                      {property.bathrooms} Baths
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-ruler-combined mr-1"></i>
                      {property.area}
                    </span>
                  </div>
                  <button
                    onClick={() => handleWhatsAppInquiry(property)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 !rounded-button whitespace-nowrap cursor-pointer transition-all duration-300 flex items-center justify-center"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    Inquire on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Property Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a visual tour of our stunning properties and see why City Realtors 
              is the preferred choice for discerning buyers and investors.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="break-inside-avoid">
                <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm capitalize">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Peshawar on Main University Road. 
              Visit us today to discuss your real estate needs with our expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <i className="fas fa-map-marker-alt text-4xl mb-4 text-orange-500"></i>
                  <p className="text-lg font-semibold">Main University Road</p>
                  <p>Peshawar, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    placeholder="Tell us about your property requirements"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 !rounded-button whitespace-nowrap cursor-pointer transition-all duration-300"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-phone text-orange-500 mr-3"></i>
                    <span className="text-gray-600">+92 300 123 4567</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-orange-500 mr-3"></i>
                    <span className="text-gray-600">info@cityrealtors.pk</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-clock text-orange-500 mr-3"></i>
                    <span className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights from Peshawar's real estate market. 
              Our expert analysis helps you make informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover object-top transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <button className="text-orange-500 hover:text-orange-600 font-medium cursor-pointer transition-colors duration-300">
                    Read More <i className="fas fa-arrow-right ml-1"></i>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 !rounded-button whitespace-nowrap cursor-pointer transition-all duration-300">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Happy Customers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say 
              about their experience with City Realtors.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="max-w-4xl mx-auto">
                      <div className="bg-gray-50 p-8 rounded-lg text-center">
                        <div className="mb-6">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover object-top"
                          />
                          <div className="flex justify-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <i key={i} className="fas fa-star text-yellow-400 text-lg"></i>
                            ))}
                          </div>
                        </div>
                        <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="text-center">
                          <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                          <div className="text-gray-600">{testimonial.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">City Realtors</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner in real estate. We help you find the perfect property 
                that matches your dreams and budget in Peshawar.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-500 cursor-pointer">
                  <i className="fab fa-facebook-f text-lg"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 cursor-pointer">
                  <i className="fab fa-instagram text-lg"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 cursor-pointer">
                  <i className="fab fa-whatsapp text-lg"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 cursor-pointer">
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-orange-500 cursor-pointer">Home</a></li>
                <li><a href="#story" className="text-gray-400 hover:text-orange-500 cursor-pointer">Our Story</a></li>
                <li><a href="#properties" className="text-gray-400 hover:text-orange-500 cursor-pointer">Properties</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-orange-500 cursor-pointer">Gallery</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-orange-500 cursor-pointer">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-500 cursor-pointer">Property Sales</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 cursor-pointer">Property Rentals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 cursor-pointer">Investment Consulting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 cursor-pointer">Property Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 cursor-pointer">Legal Assistance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-orange-500 mr-3"></i>
                  <span className="text-gray-400">Main University Road, Peshawar</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-orange-500 mr-3"></i>
                  <span className="text-gray-400">+92 300 123 4567</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-orange-500 mr-3"></i>
                  <span className="text-gray-400">info@cityrealtors.pk</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 City Realtors. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        .!rounded-button {
          border-radius: 8px;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
};

export default App;
