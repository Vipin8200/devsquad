/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from 'react';
import { X, ExternalLink, Github, Eye } from "lucide-react";
import Ca from '../assets/img/portfolio/CA.png'
import Krupa from '../assets/img/portfolio/Krupa_joshi.png'
import Chillspot from '../assets/img/portfolio/Chill_SPot.png'
import Shareya from '../assets/img/portfolio/Shreya_treders.png'
import swastik from '../assets/img/portfolio/Swastik_Hospital.png'
import Adba from '../assets/img/portfolio/ADBA.png'

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingUrl, setPendingUrl] = useState('');

const projects = [
  
   {
    id: 1,
    title: "Chill Spot Billing System",
    category: "Business Application",
    image: Chillspot,
    description: "Complete billing and inventory management system for Chill Spot Ice Cream Shop with modern POS features, order management, and comprehensive business analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "Point of Sale (POS) interface",
      "Inventory management system",
      "Customer order tracking",
      "Daily sales reporting",
      "Receipt generation and printing",
      // "Staff management dashboard"
    ],
    liveUrl: "https://chill-spot.netlify.app/",
    githubUrl: "https://github.com/yourusername/chillspot-billing",
    completionDate: "2024"
  },
  {
    id: 2,
    title: "Data Analysis Portfolio",
    category: "Web Development",
    image: Krupa,
    description: "Interactive portfolio website showcasing data analysis expertise with dynamic visualizations, project galleries, and professional presentation of analytical capabilities.",
    technologies: ["React", "Node.JS", "NodeMailer", "Express.JS"],
    features: [
      "Interactive project showcase",
      // "Dynamic data visualizations",
      "Contact form with email integration",
      "Responsive portfolio layout",
      "Skills and expertise display",
      "Professional bio and resume section"
    ],
    liveUrl: "https://krupajoshi.netlify.app/",
    githubUrl: "https://github.com/yourusername/krupa-portfolio",
    completionDate: "2024"
  },
 {
    id: 3,
    title: "ADBA Portfolio",
    category: "Web Development",
    image: Adba,
    description: "Dynamic portfolio website for ADBA organization featuring real-time content management, member profiles, event showcases, and interactive community features.",
    technologies: ["React", "Node.JS", "Firebase", "Material-UI"],
    features: [
      // "Real-time content updates",
      "Member profile management",
      "Event calendar and showcases",
      "News and announcements",
      "Interactive community features",
      "Admin dashboard for content"
    ],
    liveUrl: "https://adba-portfolio.web.app",
    githubUrl: "https://github.com/yourusername/adba-portfolio",
    completionDate: "2024"
  },
  {
    id: 4,
    title: "Shreya Traders Portfolio",
    category: "Web Development",
    image: Shareya,
    description: "Professional business portfolio website for Shreya Traders showcasing company services, product catalog, business achievements, and client testimonials with modern web design.",
    technologies: ["React", "Tailwind", "Node.js", "PostgreSQL"],
    features: [
      "Company profile and history",
      "Service portfolio showcase",
      "Product catalog display",
      "Client testimonials section",
      "Business contact integration",
      "Professional image gallery"
    ],
    liveUrl: "https://shreya-traders.netlify.app",
    githubUrl: "https://github.com/yourusername/shreya-traders",
    completionDate: "2024"
  },
  {
    id: 5,
    title: "Swastik Hospital Portfolio",
    category: "Web Development",
    image: swastik,
    description: "Professional healthcare website for Swastik Hospital featuring department information, doctor profiles, medical services, and patient resources with accessibility-focused design.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    features: [
      "Medical services showcase",
      "Doctor profiles and specializations",
      "Department information pages",
      // "Patient appointment system",
      // "Healthcare resources section",
      "Emergency contact integration"
    ],
    liveUrl: "https://swastik-hospital.github.io",
    githubUrl: "https://github.com/yourusername/swastik-hospital",
    completionDate: "2024"
  },
    {
      id: 6,
      title: "CA Static Website",
      category: "Web Development",
      image: Ca,
      description: "Professional static website for a Chartered Accountant firm featuring modern design, service showcase, and client-focused layout with comprehensive business information.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      features: [
        "Responsive design across all devices",
        "Professional service showcase",
        // "Contact form integration",
        // "SEO optimized structure",
        "Fast loading performance",
        "Modern UI/UX design"
      ],
      liveUrl: "https://example-ca-website.netlify.app",
      githubUrl: "https://github.com/yourusername/ca-static-website",
      completionDate: "2024"
    },
  {
    id: 7,
    title: "Restaurant Management System",
    category: "Business Application - Ongoing Project",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Comprehensive restaurant management solution featuring complete order processing, table management, inventory control, and business analytics for modern restaurant operations.",
    technologies: ["React", "Node.JS", "MySQL", "Express.JS", "Redux", "API"],
    features: [
      "Table reservation system",
      "Menu management interface",
      "Order processing workflow",
      "Kitchen display system",
      "Staff scheduling module",
      "Revenue analytics dashboard"
    ],
    liveUrl: "/services",
    githubUrl: "*",
    completionDate: "2024"
  }
];

// / Function to handle opening live URLs in new tab
// const openLiveUrl = (url) => {
//   if (url && url !== "#" && url.startsWith("https://")) {
//     const newWindow = window.open(url, '_blank');
//     if (newWindow) {
//       newWindow.opener = null;
//     }
//   }
// };



// Alternative method using document.createElement for better browser compatibility
// const openUrlInNewTab = (url) => {
//   if (url && url !== "#" && url.startsWith("https://")) {
//     const link = document.createElement('a');
//     link.href = url;
//     link.target = '_blank';
//     link.rel = 'noopener noreferrer';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }
// };

  // const categories = ["All", "Web Development", "Data Analytics", "Business Application", "Web Application"];

  const handleViewLiveClick = (e, url) => {
  e.preventDefault();
  setPendingUrl(url);
  setShowConfirmModal(true);
};

const handleConfirmRedirect = () => {
  if (pendingUrl) {
    window.open(pendingUrl, '_blank', 'noopener,noreferrer');
  }
  setShowConfirmModal(false);
  setPendingUrl('');
};

const handleCancelRedirect = () => {
  setShowConfirmModal(false);
  setPendingUrl('');
};

  // Use useMemo to compute filtered projects based on activeCategory
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }
    return projects.filter(project => project.category === activeCategory);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  useEffect(() => {
    // AOS Animation Init
    const aosInit = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      }, observerOptions);

      document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
      });

      // Cleanup function
      return () => {
        observer.disconnect();
      };
    };

    const cleanup = aosInit();
    
    // Return cleanup function
    return cleanup;
  }, []);

  // Simplified filtering function
  // const filterProjects = (category) => {
  //   setActiveCategory(category);
  // };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <main id="main">
      <style jsx>{`
        .portfolio-page {
          padding: 60px 0 40px;
        }
        
        .portfolio-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 15px;
        }
        
        @media (max-width: 767px) {
          .portfolio-page {
            padding: 40px 0 30px;
          }
        }
        
        .portfolio-section-title {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .portfolio-section-title h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 15px;
          position: relative;
        }
        
        @media (max-width: 767px) {
          .portfolio-section-title h2 {
            font-size: 1.5rem;
          }
        }
        
        .portfolio-section-title h2::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 3px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .portfolio-section-title p {
          font-size: 0.95rem;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        @media (max-width: 767px) {
          .portfolio-section-title p {
            font-size: 0.9rem;
          }
        }
        
        .portfolio-filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 50px;
        }
        
        .portfolio-filter-btn {
          background: white;
          color: #6c757d;
          border: 2px solid #e9ecef;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        @media (max-width: 767px) {
          .portfolio-filter-btn {
            padding: 6px 16px;
            font-size: 0.8rem;
          }
        }
        
        .portfolio-filter-btn:hover,
        .portfolio-filter-btn.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: transparent;
          transform: translateY(-2px);
        }
        
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        
        @media (max-width: 767px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 40px;
          }
        }
        
        .portfolio-item {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .portfolio-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .portfolio-item-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        @media (max-width: 767px) {
          .portfolio-item-image {
            height: 180px;
          }
        }
        
        .portfolio-item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .portfolio-item:hover .portfolio-item-image img {
          transform: scale(1.1);
        }
        
        .portfolio-item-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .portfolio-item:hover .portfolio-item-overlay {
          opacity: 1;
        }
        
        .portfolio-item-overlay-content {
          text-align: center;
          color: white;
        }
        
        .portfolio-item-overlay-icon {
          width: 50px;
          height: 50px;
          margin: 0 auto 10px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        @media (max-width: 767px) {
          .portfolio-item-overlay-icon {
            width: 40px;
            height: 40px;
          }
        }
        
        .portfolio-item-content {
          padding: 25px 20px;
        }
        
        @media (max-width: 767px) {
          .portfolio-item-content {
            padding: 20px 15px;
          }
        }
        
        .portfolio-item-category {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        @media (max-width: 767px) {
          .portfolio-item-category {
            font-size: 0.75rem;
          }
        }
        
        .portfolio-item-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        
        @media (max-width: 767px) {
          .portfolio-item-title {
            font-size: 1rem;
            margin-bottom: 10px;
          }
        }
        
        .portfolio-item-description {
          color: #6c757d;
          font-size: 0.85rem;
          line-height: 1.5;
          margin-bottom: 15px;
        }
        
        @media (max-width: 767px) {
          .portfolio-item-description {
            font-size: 0.8rem;
            margin-bottom: 12px;
          }
        }
        
        .portfolio-item-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        
        .portfolio-tech-tag {
          background: #f8f9fa;
          color: #6c757d;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 500;
        }
        
        @media (max-width: 767px) {
          .portfolio-tech-tag {
            padding: 3px 8px;
            font-size: 0.65rem;
          }
        }
        
        /* Modal Styles */
        .portfolio-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        
        .portfolio-modal.open {
          opacity: 1;
          visibility: visible;
        }
        
        .portfolio-modal-content {
          background: white;
          border-radius: 15px;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          transform: scale(0.8);
          transition: transform 0.3s ease;
        }
        
        .portfolio-modal.open .portfolio-modal-content {
          transform: scale(1);
        }
        
        @media (max-width: 767px) {
          .portfolio-modal-content {
            margin: 10px;
            max-height: 95vh;
          }
        }
        
        .portfolio-modal-header {
          position: relative;
          height: 250px;
          overflow: hidden;
          border-radius: 15px 15px 0 0;
        }
        
        @media (max-width: 767px) {
          .portfolio-modal-header {
            height: 200px;
          }
        }
        
        .portfolio-modal-header img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .portfolio-modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(255,255,255,0.9);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        @media (max-width: 767px) {
          .portfolio-modal-close {
            width: 35px;
            height: 35px;
          }
        }
        
        .portfolio-modal-close:hover {
          background: white;
          transform: rotate(90deg);
        }
        
        .portfolio-modal-body {
          padding: 30px;
        }
        
        @media (max-width: 767px) {
          .portfolio-modal-body {
            padding: 20px;
          }
        }
        
        .portfolio-modal-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        
        @media (max-width: 767px) {
          .portfolio-modal-title {
            font-size: 1.3rem;
          }
        }
        
        .portfolio-modal-category {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 15px;
        }
        
        @media (max-width: 767px) {
          .portfolio-modal-category {
            font-size: 0.85rem;
          }
        }
        
        .portfolio-modal-description {
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 0.95rem;
        }
        
        @media (max-width: 767px) {
          .portfolio-modal-description {
            font-size: 0.9rem;
            margin-bottom: 20px;
          }
        }
        
        .portfolio-modal-section {
          margin-bottom: 25px;
        }
        
        .portfolio-modal-section h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 12px;
        }
        
        @media (max-width: 767px) {
          .portfolio-modal-section h4 {
            font-size: 0.95rem;
            margin-bottom: 10px;
          }
        }
        
        .portfolio-feature-list {
          list-style: none;
          padding: 0;
        }
        
        .portfolio-feature-list li {
          color: #6c757d;
          font-size: 0.9rem;
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
        }
        
        @media (max-width: 767px) {
          .portfolio-feature-list li {
            font-size: 0.85rem;
            margin-bottom: 6px;
            padding-left: 18px;
          }
        }
        
        .portfolio-feature-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
        }
        
        .portfolio-modal-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .portfolio-modal-tech-tag {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        @media (max-width: 767px) {
          .portfolio-modal-tech-tag {
            padding: 5px 10px;
            font-size: 0.75rem;
          }
        }
        
        .portfolio-modal-actions {
          display: flex;
          gap: 15px;
          margin-top: 25px;
        }
        
        @media (max-width: 767px) {
          .portfolio-modal-actions {
            gap: 10px;
            margin-top: 20px;
          }
        }
        
        .portfolio-modal-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        
        @media (max-width: 767px) {
          .portfolio-modal-btn {
            padding: 8px 16px;
            font-size: 0.8rem;
            gap: 6px;
          }
        }
        
        .portfolio-modal-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
          color: white;
          text-decoration: none;
        }
        
        .portfolio-modal-btn.secondary {
          background: white;
          color: #667eea;
          border: 2px solid #667eea;
        }
        
        .portfolio-modal-btn.secondary:hover {
          background: #667eea;
          color: white;
        }
        
        /* Animation Classes */
        [data-aos] {
          opacity: 0;
          transition: all 0.6s ease;
        }
        
        [data-aos="fade-up"] {
          transform: translateY(50px);
        }
        
        [data-aos="fade-left"] {
          transform: translateX(-50px);
        }
        
        [data-aos="fade-right"] {
          transform: translateX(50px);
        }
        
        [data-aos="zoom-in"] {
          transform: scale(0.8);
        }
        
        .aos-animate {
          opacity: 1 !important;
          transform: translate(0) scale(1) !important;
        }
        
        @media (max-width: 576px) {
          .portfolio-container {
            padding: 0 10px;
          }
        }
        
        /* Custom scrollbar for modal */
        .portfolio-modal-content::-webkit-scrollbar {
          width: 6px;
        }
        
        .portfolio-modal-content::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        .portfolio-modal-content::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
        }
      `}</style>

      {/* Hero Section */}
      <section className="portfolio-page section" data-aos="fade-up">
        <div className="portfolio-container" style={{marginTop: '80px'}}>
          <div className="portfolio-section-title" data-aos="fade-up">
            <h2>Our Portfolio</h2>
            <p>Showcasing our innovative IT solutions and successful project deliveries</p>
          </div>

          {/* Filter Buttons */}
          {/* <div className="portfolio-filters" data-aos="fade-up" data-aos-delay="200">
            {categories.map((category) => (
              <button
                key={category}
                className={`portfolio-filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => filterProjects(category)}
              >
                {category}
              </button>
            ))}
          </div> */}

          {/* Portfolio Grid */}
          <div className="portfolio-grid" data-aos="fade-up" data-aos-delay="300">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="portfolio-item"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                onClick={() => openModal(project)}
              >
                <div className="portfolio-item-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-item-overlay">
                    <div className="portfolio-item-overlay-content">
                      <div className="portfolio-item-overlay-icon">
                        <Eye size={20} />
                      </div>
                      <span style={{fontSize: '0.85rem', fontWeight: '600'}}>View Details</span>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item-content">
                  <div className="portfolio-item-category">{project.category}</div>
                  <h3 className="portfolio-item-title">{project.title}</h3>
                  <p className="portfolio-item-description">{project.description}</p>
                  <div className="portfolio-item-tech">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="portfolio-tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="portfolio-tech-tag">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <div className={`portfolio-modal ${isModalOpen ? 'open' : ''}`} onClick={closeModal}>
        <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
          {selectedProject && (
            <>
              <div className="portfolio-modal-header">
                <img src={selectedProject.image} alt={selectedProject.title} />
                <button className="portfolio-modal-close" onClick={closeModal}>
                  <X size={20} />
                </button>
              </div>
              <div className="portfolio-modal-body">
                <h2 className="portfolio-modal-title">{selectedProject.title}</h2>
                <div className="portfolio-modal-category">{selectedProject.category}</div>
                <p className="portfolio-modal-description">{selectedProject.description}</p>
                
                <div className="portfolio-modal-section">
                  <h4>Key Features</h4>
                  <ul className="portfolio-feature-list">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="portfolio-modal-section">
                  <h4>Technologies Used</h4>
                  <div className="portfolio-modal-tech">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="portfolio-modal-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="portfolio-modal-actions">
                 <a onClick={(e) => handleViewLiveClick(e, selectedProject.liveUrl)} className="portfolio-modal-btn " style={{border: 'none', cursor: 'pointer'}}>
                    <ExternalLink size={16} />
                    View Live
                  </a>
                  {/* <a href={selectedProject.githubUrl} className="portfolio-modal-btn secondary">
                    <Github size={16} />
                    Source Code
                  </a> */}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="portfolio-modal open" onClick={handleCancelRedirect}>
          <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()} style={{maxWidth: '400px', padding: '30px', textAlign: 'center'}}>
            <h3 style={{marginBottom: '20px', color: '#2c3e50'}}>Open External Link</h3>
            <p style={{marginBottom: '25px', color: '#6c757d'}}>Do you want to open this link in a new tab?</p>
            <div style={{display: 'flex', gap: '15px', justifyContent: 'center'}}>
              <button onClick={handleConfirmRedirect} className="portfolio-modal-btn">
                Yes, Open Link
              </button>
              <button onClick={handleCancelRedirect} className="portfolio-modal-btn secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Portfolio;