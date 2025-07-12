import { useRef, useState, useEffect } from 'react';



export default function Sambhu() {
  const form = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  

  const services = [
    { name: "Letter Head", image: "https://plus.unsplash.com/premium_photo-1682109363124-26716c9db5b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGV0dGVyaGVhZHxlbnwwfHwwfHx8MA%3D%3D&fit=crop&w=800&q=80" },
    { name: "Visiting Card", image: "https://images.unsplash.com/photo-1704030459032-fddf08f1cfa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlzaXRpbmclMjBjYXJkfGVufDB8fDB8fHww&fit=crop&w=800&q=80" },
    { name: "Challan Book", image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=80" },
    { name: "Bill Book", image: "https://plus.unsplash.com/premium_photo-1664391622406-bcfbe122d094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlsbCUyMGJvb2t8ZW58MHx8MHx8fDA%3D&fit=crop&w=800&q=80" },
    { name: "Pamphlet", image: "https://images.unsplash.com/photo-1559817961-fe416b244694?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFtcGhsZXR8ZW58MHx8MHx8fDA%3D&fit=crop&w=800&q=80" },
    { name: "Brochures", image: "https://images.unsplash.com/photo-1642530026057-56d62e6adf29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QnJvY2h1cmVzfGVufDB8fDB8fHww&fit=crop&w=800&q=80" },
    { name: "Stickers Label", image: "https://plus.unsplash.com/premium_photo-1683121003330-b8c5cea0ae06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3RpY2tlcnMlMjBMYWJlbHxlbnwwfHwwfHx8MA%3D%3D&fit=crop&w=800&q=80" },
    { name: "Tags", image: "https://images.unsplash.com/photo-1669975106195-df79bd67e483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGFnc3xlbnwwfHwwfHx8MA%3D%3D&fit=crop&w=800&q=80" },
    { name: "Wedding Card", image: "https://images.unsplash.com/photo-1644850513537-15a3b4e5408b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2VkZGluZyUyMENhcmR8ZW58MHx8MHx8fDA%3D&fit=crop&w=800&q=80" },
    { name: "Flex Printing", image: "https://images.unsplash.com/photo-1701522226776-030ffe5ed84d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmxleCUyMFByaW50aW5nfGVufDB8fDB8fHww&fit=crop&w=800&q=80" },
    { name: "Offset Printing", image: "https://images.unsplash.com/photo-1693031630369-bd429a57f115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T2Zmc2V0JTIwUHJpbnRpbmd8ZW58MHx8MHx8fDA%3D&fit=crop&w=800&q=80" },
    { name: "Business Cards", image: "https://images.unsplash.com/photo-1718670013988-c6e3edb92345?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJ1c2luZXNzJTIwQ2FyZHN8ZW58MHx8MHx8fDA%3D&fit=crop&w=800&q=80" }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1704030459032-fddf08f1cfa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlzaXRpbmclMjBjYXJkfGVufDB8fDB8fHww&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1701522226776-030ffe5ed84d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmxleCUyMFByaW50aW5nfGVufDB8fDB8fHww&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=80",
    "https://plus.unsplash.com/premium_photo-1664391622406-bcfbe122d094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlsbCUyMGJvb2t8ZW58MHx8MHx8fDA%3D&fit=crop&w=800&q=80"
  ];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, white,rgb(103, 157, 193))", padding: "1rem", position: "relative" }}>
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1rem 2rem", backgroundColor: "#dc2626", borderRadius: "1rem", color: "white", marginBottom: "1rem", flexWrap: "wrap"
      }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Sambhu Printers</h1>
        {isMobile && (
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: "none", border: "none", color: "white", fontSize: "1.5rem", cursor: "pointer" }}>☰</button>
        )}
        {(isMenuOpen || !isMobile) && (
          <ul style={{
            display: "flex", flexDirection: isMobile ? "column" : "row",
            gap: "1rem", listStyle: "none", margin: 0,
            padding: isMobile ? "1rem" : 0,
            width: isMobile ? "100%" : "auto",
            backgroundColor: isMobile ? "#dc2626" : "transparent",
            borderRadius: isMobile ? "0.5rem" : 0
          }}>
            <li><a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a></li>
            <li><a href="#gallery" style={{ color: "white", textDecoration: "none" }}>Gallery</a></li>
            <li><a href="#location" style={{ color: "white", textDecoration: "none" }}>Location</a></li>
          </ul>
        )}
      </nav>

      <header style={{ textAlign: "center", padding: "1.5rem 0" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#dc2626" }}>SAMBHU PRINTERS</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          <strong style={{ color: "#1d4ed8", fontSize: "1.25rem" }}>Specialist in All Types of Printing Solutions:</strong><br />
          <span className="block">Letter Head,</span>
          <span className="block">Visiting Card, Challan Book, Bill Book,</span>
          <span className="block">Pamphlet, Brochures, Stickers Label, Tags,</span>
          <span className="block">Wedding Card, Flex Printing, Offset Printing,</span>
          <span className="block">Business Cards</span>
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
          <p style={{ fontSize: "1rem", fontWeight: "500" }}>
            Call: <a style={{ color: "#1d4ed8", textDecoration: "underline" }} href="tel:7750817346">7750817346</a>
          </p>
          <p style={{ fontSize: "0.95rem", fontWeight: "500", color: "#374151" }}>
            Address: Kotla Mubarakpur, New Delhi - 110003
          </p>
        </div>
      </header>


      <a
        href="https://wa.me/7750817346"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "90px",
          right: "30px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 1000,
          textDecoration: "none"
        }}
        title="Chat on WhatsApp"
      >
        💬
      </a>


      <main id="services" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
        {services.map((service, idx) => (
          <div
            key={idx}
            style={{
              borderRadius: "1rem",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              padding: "1rem",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer"
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img src={service.image} alt={service.name} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "0.75rem", marginBottom: "1rem", transition: "opacity 0.3s ease" }} />
            <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#1e3a8a", textAlign: "center" }}>{service.name}</h2>
          </div>
        ))}
      </main>

      <section id="gallery" style={{ maxWidth: "1200px", margin: "4rem auto 2rem", padding: "1rem" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", textAlign: "center", color: "#1e3a8a", marginBottom: "1rem" }}>Gallery</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
          {galleryImages.map((src, idx) => (
            <img key={idx} src={src} alt={`gallery-${idx}`} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "0.75rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }} />
          ))}
        </div>
      </section>

      <footer id="location" style={{ textAlign: "center", marginTop: "2rem", padding: "1.5rem", backgroundColor: "#dbeafe", borderRadius: "1rem", maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
        <p style={{ fontWeight: "500", color: "#1e3a8a" }}>Kotla Mubarakpur, New Delhi - 110003</p>
        <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Sambhu Nath | Sai Ram</p>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            backgroundColor: "#1e3a8a",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            fontSize: "1.5rem",
            cursor: "pointer",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            transition: "opacity 0.3s ease",
            opacity: showScrollTop ? 1 : 0,
          }}
          title="Scroll to top"
        >
          ⬆️
        </button>
      )}

    </div>
  );
}