import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import corosalImg1 from "./../Assets/joypicturestudio_img_3.jpg";
import corosalImg2 from "./../Assets/joypicturestudio_img_6.jpg";
import corosalImg3 from "./../Assets/joypicturestudio_img_4.jpg";
import { Link } from "react-scroll";
import { phoneNumber, email, whatsappLink } from "../Data/Data";
const Main = () => {
  const slides = [
    { id: 1, img: corosalImg1, alt: "Wedding Shoot" },
    { id: 2, img: corosalImg2, alt: "Photography Studio" },
    { id: 3, img: corosalImg3, alt: "Outdoor Portrait" },
  ];
  const services = [
    {
      icon: "fa-baby",
      title: "Newborn Photography",
      image: require("./../Assets/service1.jpg"),
      description:
        "Preserve the first precious days of your baby with soft, artistic, and heartfelt newborn portraits.",
      seoTitle: "Newborn Photography Services in Bangalore",
    },
    {
      icon: "fa-female",
      title: "Maternity Photography",
      image: require("./../Assets/service2.jpg"),
      description:
        "Celebrate the beauty of motherhood with elegant and memorable maternity photoshoots tailored to your journey.",
      seoTitle: "Maternity Photography Services in Bangalore",
    },
    {
      icon: "fa-child",
      title: "Kids Portraits",
      image: require("./../Assets/service3.jpg"),
      description:
        "Let your child's personality shine with vibrant and playful portrait sessions in our creative studio environment.",
      seoTitle: "Kids Portrait Photography in Bangalore",
    },
    {
      icon: "fa-users",
      title: "Family Portraits",
      image: require("./../Assets/service4.jpg"),
      description:
        "Capture togetherness with timeless family portraits that reflect your bond, love, and legacy in every frame.",
      seoTitle: "Family Portrait Photography Services in Bangalore",
    },
  ];

  const pricingData = [
    {
      title: "Gold",
      price: "₹5,900",
      details: "10 Soft Copies",
      gradient: "gold-gradient",
    },
    {
      title: "Platinum",
      price: "₹8,250",
      details: "15 Soft Copies",
      gradient: "platinum-gradient",
    },
    {
      title: "Diamond",
      price: "₹11,800",
      details: "20 Soft Copies + 12x15 Frame (1)",
      gradient: "diamond-gradient",
    },
    {
      title: "Family Legacy",
      price: "₹15,350",
      details: "25 Soft Copies with Photobook",
      gradient: "legacy-gradient",
    },
    {
      title: "Family Royal",
      price: "₹18,900",
      details: "30 Soft Copies with Photobook (Large)",
      gradient: "royal-gradient",
    },
    {
      title: "Family Global",
      price: "₹24,900",
      details: "All Soft Copies with Photobook (Large) + 20x20 & 12x15 Frames",
      gradient: "global-gradient",
    },
  ];

  const branches = [
    {
      name: "Joy Pictures Studio Yeshwantpur",
      address:
        "4/1, 4/1, Tumkur Rd, Yeshwanthpur Industrial Area, Phase 1, Yeswanthpur, Bengaluru, Karnataka 560022",
      phone: phoneNumber,
      email: email,
    },
    {
      name: "Joy Pictures Studio",
      address:
        "17, 14th Main Rd, Kamalanagar, Sriram Nagar, Chamrajpet, Bengaluru, Karnataka 560018",
      phone: phoneNumber,
      email: email,
    },
    {
      name: "Joy Pictures Studio",
      address:
        "20/13, Sarjapur - Marathahalli Rd, Carmelaram, Janatha Colony, Doddakannelli, Bengaluru, Karnataka 560035",
      phone: phoneNumber,
      email: email,
    },
    {
      name: "Joy Pictures Newborn & Maternity Studio",
      address:
        "329, 7th Cross Rd, Kalyan Nagar, Nagarbhavi 1st Stage, Chandra Layout Extension II Stage, Chandra Layout, Bengaluru, Karnataka 560072",
      phone: phoneNumber,
      email: email,
    },
    {
      name: "Joy Pictures Studio",
      address:
        "Pillar No 500, Metro Station Nagasandra, Bagalakunte, Bengaluru, Karnataka 560073",
      phone: phoneNumber,
      email: email,
    },
    {
      name: "Joy Pictures Studio",
      address:
        "916/A, 80 Feet Rd, next to Atreum Speciality Hospital, Entrance, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098",
      phone: phoneNumber,
      email: email,
    },
    {
      name: "Joy Pictures Studio RR Nagar",
      address:
        "first SBI Bank, 915, Remco Bhel Layout, Ideal Homes Twp, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098",
      phone: phoneNumber,
      email: email,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shootType: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Joy Pictures Studio 📸,
I’m ${formData.name} and I’d like to book a shoot.

📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🎬 Shoot Type: ${formData.shootType}
📍 Location: ${formData.location}
💬 Message: ${formData.message}

Please confirm my booking details. Thank you! 🙌`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <section id="hero" className="hero-section">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          speed={1000}
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          grabCursor={true}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="hero-slide">
                <img src={slide.img} alt={slide.alt} className="hero-img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* =================== About Section ================== */}

      <section id="about" className="who-we-are-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">Who We Are</h2>
              <p className="card-text lead" data-aos="fade-up">
                At{" "}
                <span className="fw-semibold text-primary">
                  Joypicturesstudio
                </span>
                , we believe every moment deserves to be treasured. With years
                of professional expertise, our friendly and passionate team
                makes every photoshoot a relaxed and joyful experience. We
                specialize in capturing the essence of your story— turning
                fleeting moments into timeless memories that you and your family
                can cherish for a lifetime.
              </p>
            </div>

            {/* Left Side - Image */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src={require("./../Assets/joypicturestudio_img_7.jpg")}
                alt="Who We Are"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================= Service Section ======================= */}
      <section id="services" className="core-services-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="section-heading">Our Core Services</h3>
            <p className="card-text lead">
              Experience our full range of creative photography and cinematic
              videography services in Bangalore.
            </p>
          </div>

          <div className="row">
            {services.map((service, index) => (
              <div
                className="col-md-6 col-lg-3 mb-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="car h-100 shadow-sm border-0">
                  <img
                    src={service.image}
                    alt={service.title + " in Bangalore"}
                    className="card-img-top service-img"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text lead">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== Studios Section ====================== */}
      <section id="studios" className="py-5 bg-light">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-4">
            <h2 className="fw-bold">Our Studios</h2>
            <p className="card-text lead">
              Creating safe, hygienic, and joyful spaces to capture your baby’s
              milestones
            </p>
          </div>

          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-camera-retro text-primary me-3 mt-1"></i>
                  <span className="card-text lead">
                    We cover over <strong>1000 baby shoots</strong> every month
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-baby text-success me-3 mt-1"></i>
                  <span className="card-text lead">
                    Specially trained associates handle your baby with{" "}
                    <strong>utmost care</strong>
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="col-md-6">
              <ul className="list-unstyled fs-5">
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-pump-soap text-danger me-3 mt-1"></i>
                  <span className="card-text lead">
                    <strong>Daily sanitization</strong> ensures complete hygiene
                    in our studios
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-gift text-warning me-3 mt-1"></i>
                  <span className="card-text lead">
                    Props & themes for every milestone, plus keepsakes like
                    <strong> casting, pendants, and more</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= Pricing Section ======================== */}
      <section id="packages" className="pricing-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Packages</h2>
            <div className="text-center mb-4">
              <p className="card-text lead">
                Discover tailored photography packages designed to capture your
                special moments with creativity, professionalism, and
                exceptional value.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {pricingData.map((plan, index) => (
              <div
                className="col-md-6 col-lg-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`pricing-poster ${plan.gradient}`}>
                  <h4>{plan.title}</h4>
                  <h3>{plan.price}</h3>
                  <p className="lead">{plan.details}</p>
                  <Link to={whatsappLink} className="btn-poster">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= BranchesSection ======================= */}
      <section className="branch-section py-5" id="branches">
        <div className="container">
          <h3 className="text-center section-heading mb-4">
            Our Studio Branches
          </h3>
          <div className="row">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="col-md-4 mb-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card location-card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fas fa-map-marker-alt me-2 text-danger"></i>
                      {branch.name}
                    </h5>
                    <p className="card-text lead">
                      <i className="fas fa-location-dot me-2 text-muted"></i>
                      {branch.address}
                    </p>
                    <p className="card-text lead">
                      <i className="fas fa-phone-alt me-2 text-muted"></i>
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-dark card-text lead"
                      >
                        +{branch.phone}
                      </a>
                    </p>
                    <p className="card-text lead">
                      <i className="fas fa-envelope me-2 text-muted"></i>
                      <a
                        href={`mailto:${branch.email}`}
                        className="text-dark card-text lead"
                      >
                        {branch.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= Contact Section ========================== */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className=" ">
            {/* Contact Info */}
            <section id="contact" className="contact-section">
              <div className="contact-container">
                {/* Left Info */}
                <div className="contact-info">
                  <h3 className="fw-bold mb-4">Let’s Connect</h3>
                  <p className="text-muted card-text lead">
                    Have a project in mind? Reach out to us—we’d love to hear
                    from you.
                  </p>

                  <div className="info-box" data-aos="fade-up">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h6>Email us</h6>
                      <p className="card-text lead">
                        hello@joypicturesstudio.com
                      </p>
                    </div>
                  </div>

                  <div className="info-box" data-aos="fade-up">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h6>Visit us</h6>
                      <p className="card-text lead">Bangalore, India</p>
                    </div>
                  </div>

                  <div className="info-box" data-aos="fade-up">
                    <i className="fas fa-phone-alt"></i>
                    <div>
                      <h6>Call us</h6>
                      <p className="card-text lead">+91 98765 43210</p>
                    </div>
                  </div>
                </div>

                {/* Right Form */}
                <div className="contact-form">
                  <h3 className="fw-bold mb-3">Get in Touch</h3>
                  <p className="text-muted card-text lead mb-4">
                    We’d love to hear from you! Contact us for bookings,
                    collaborations, or queries.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      className="card-text lead"
                      placeholder="Your name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Your email *"
                      className="card-text lead"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number *"
                      className="card-text lead"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />

                    <input
                      type="text"
                      name="location"
                      placeholder="Location"
                      className="card-text lead"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />

                    <select
                      name="shootType"
                      value={formData.shootType}
                      className="card-text lead"
                      onChange={handleChange}
                      required
                    >
                      <option value="" className="card-text lead">
                        Select shoot type *
                      </option>
                      {services.map((service, index) => {
                        return (
                          <option key={index} className="card-text lead">
                            {service.title}
                          </option>
                        );
                      })}
                    </select>

                    <textarea
                      name="message"
                      placeholder="Your message *"
                      className="card-text lead"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>

                    <button type="submit" className="submit-btn">
                      Send via WhatsApp
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      {/* =========================== Footer Section ========================== */}
      <footer className="footer">
        <div className="collapse navbar-collapse" id="navbarNav"></div>
        <div className="container text-center">
          <p className="mb-2 fs-6 lead">
            © {new Date().getFullYear()} Joypicturestudios. All rights reserved.
            | Created with ❤️ by{" "}
            <a href="https://nexgenwebdesigns.com">NexGen Web Designs</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Main;
