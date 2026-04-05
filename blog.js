/* =====================================================
   ENT CLINIC — blog.js
   Dr. Desu Murali Krishna | Nellore
   ===================================================== */

const WHATSAPP_NUMBER = "919398750790";

function openWhatsApp(msg) {
  const text = encodeURIComponent(
    msg || "Hello Dr. Desu Murali Krishna, I would like to book an appointment at your ENT clinic."
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}

// ---- Navbar scroll ----
(function () {
  const nav = document.getElementById("mainNav");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });
})();

// ---- Smooth scroll ----
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // WhatsApp buttons
  document.querySelectorAll("[data-whatsapp]").forEach((btn) => {
    btn.addEventListener("click", () => openWhatsApp());
  });

  // Handle hash → open article
  handleHash();
});

window.addEventListener("hashchange", handleHash);

// ---- Articles data ----
const articles = [
  {
    id: "ear-pain-causes-treatment",
    title: "Ear Pain: Causes, Symptoms and Treatment Options",
    excerpt: "Ear pain can range from mild discomfort to severe throbbing. Learn about the common causes including infections, wax buildup, and when to see an ENT specialist in Nellore.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&h=500&fit=crop",
    content: [
      { type: "p", text: "Ear pain (otalgia) is one of the most common reasons patients visit an ENT clinic. The pain can originate from the ear itself (primary otalgia) or be referred from nearby structures (secondary otalgia)." },
      { type: "h3", text: "Common Causes of Ear Pain" },
      { type: "ul", items: [
        "<strong>Otitis Media:</strong> Middle ear infection, especially common in children, causing fluid buildup and inflammation behind the eardrum.",
        "<strong>Otitis Externa:</strong> Also known as swimmer's ear, this is an infection of the outer ear canal often caused by moisture or injury.",
        "<strong>Ear Wax Buildup:</strong> Cerumen impaction can cause pressure, pain, and temporary hearing loss.",
        "<strong>Eustachian Tube Dysfunction:</strong> Blockage of the tube connecting the middle ear to the throat, often due to allergies or colds.",
        "<strong>TMJ Disorders:</strong> Jaw joint problems that can cause referred pain to the ear area.",
      ]},
      { type: "h3", text: "When to See an ENT Doctor" },
      { type: "ul", items: [
        "Pain lasting more than 2–3 days",
        "High fever accompanying ear pain",
        "Discharge from the ear",
        "Sudden hearing loss",
        "Dizziness or vertigo",
      ]},
      { type: "h3", text: "Treatment Options" },
      { type: "p", text: "Treatment depends on the underlying cause. Infections may require antibiotics or antifungal medications. Wax removal should always be done by a qualified ENT specialist to avoid damage. For chronic conditions, Dr. Desu Murali Krishna provides comprehensive evaluation and treatment plans tailored to each patient." },
      { type: "p", text: "If you're experiencing ear pain in Nellore, don't wait for it to worsen. Early diagnosis and treatment can prevent complications and provide quick relief." },
    ],
  },
  {
    id: "sinus-problems-solutions",
    title: "Sinus Problems: Understanding Causes and Finding Relief",
    excerpt: "Chronic sinusitis affects millions. Discover the symptoms, risk factors, and modern treatment options available at our Nellore ENT clinic for lasting sinus relief.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&h=500&fit=crop",
    content: [
      { type: "p", text: "Sinusitis is the inflammation of the sinuses — air-filled cavities around the nose. When these become blocked and filled with fluid, it creates a perfect environment for bacteria to grow." },
      { type: "h3", text: "Types of Sinusitis" },
      { type: "ul", items: [
        "<strong>Acute Sinusitis:</strong> Lasts less than 4 weeks, usually following a cold.",
        "<strong>Subacute Sinusitis:</strong> Symptoms lasting 4–12 weeks.",
        "<strong>Chronic Sinusitis:</strong> Symptoms persisting for more than 12 weeks.",
        "<strong>Recurrent Sinusitis:</strong> Multiple acute episodes per year.",
      ]},
      { type: "h3", text: "Common Symptoms" },
      { type: "ul", items: [
        "Facial pain and pressure (especially around the forehead, cheeks, and eyes)",
        "Nasal congestion and blockage",
        "Thick, discolored nasal discharge",
        "Reduced sense of smell and taste",
        "Headache and fatigue",
        "Post-nasal drip causing cough",
      ]},
      { type: "h3", text: "Risk Factors" },
      { type: "ul", items: [
        "Allergies and hay fever",
        "Nasal polyps or deviated septum",
        "Exposure to pollution and smoking",
        "Weak immune system",
        "Dental infections",
      ]},
      { type: "h3", text: "Treatment Approaches" },
      { type: "ul", items: [
        "<strong>Medical Management:</strong> Nasal corticosteroid sprays, saline irrigation, decongestants, and antibiotics when bacterial infection is confirmed.",
        "<strong>Allergy Management:</strong> Identifying and avoiding triggers, antihistamines, and immunotherapy.",
        "<strong>Surgical Options:</strong> When medical treatment fails, Functional Endoscopic Sinus Surgery (FESS) is a minimally invasive procedure that opens blocked sinuses for better drainage.",
      ]},
      { type: "p", text: "At Desu Murali Krishna ENT Clinic in Nellore, we use advanced endoscopic techniques for accurate diagnosis and effective treatment of all sinus conditions." },
    ],
  },
  {
    id: "throat-infections-treatment",
    title: "Throat Infections: Types, Symptoms and When to See a Doctor",
    excerpt: "From sore throat to tonsillitis, throat infections are common but can become serious if untreated. Learn about symptoms and treatment options from our ENT experts.",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1b89?w=900&h=500&fit=crop",
    content: [
      { type: "p", text: "Throat infections are among the most common ailments, affecting people of all ages. While most sore throats resolve on their own, some require medical attention from an ENT specialist." },
      { type: "h3", text: "Common Types of Throat Infections" },
      { type: "ul", items: [
        "<strong>Pharyngitis:</strong> Inflammation of the pharynx (back of the throat), usually caused by viral or bacterial infections.",
        "<strong>Tonsillitis:</strong> Infection of the tonsils causing swelling, pain, and difficulty swallowing. Can be acute or chronic.",
        "<strong>Laryngitis:</strong> Inflammation of the voice box causing hoarseness or voice loss.",
        "<strong>Strep Throat:</strong> A bacterial infection caused by Group A Streptococcus, requiring antibiotic treatment.",
        "<strong>Peritonsillar Abscess:</strong> A serious complication of tonsillitis where pus collects near the tonsils.",
      ]},
      { type: "h3", text: "Warning Signs — See a Doctor If You Have" },
      { type: "ul", items: [
        "Severe throat pain lasting more than a week",
        "Difficulty swallowing or breathing",
        "High fever (above 101°F / 38.3°C)",
        "Swollen lymph nodes in the neck",
        "White patches or pus on the tonsils",
        "Blood in saliva or phlegm",
        "Recurrent throat infections (more than 5–7 times a year)",
      ]},
      { type: "h3", text: "Treatment Options" },
      { type: "ul", items: [
        "<strong>Conservative Treatment:</strong> Rest, warm fluids, salt water gargles, and over-the-counter pain relief for mild viral infections.",
        "<strong>Antibiotic Therapy:</strong> For confirmed bacterial infections like strep throat.",
        "<strong>Tonsillectomy:</strong> Surgical removal of the tonsils recommended for chronic or recurrent tonsillitis, especially in children.",
        "<strong>Voice Therapy:</strong> For chronic laryngitis and voice disorders.",
      ]},
      { type: "p", text: "Dr. Desu Murali Krishna at his Nellore ENT clinic provides thorough examination using modern diagnostic tools to determine the exact cause of your throat problem and recommends the most effective treatment plan." },
      { type: "p", text: "Don't ignore persistent throat symptoms. Early treatment prevents complications and ensures faster recovery." },
    ],
  },
];

// ---- Render article list ----
function renderList() {
  const grid = document.getElementById("articleGrid");
  if (!grid) return;
  grid.innerHTML = articles.map((a) => `
    <div class="col-md-6 col-lg-4">
      <a href="#${a.id}" class="blog-list-card h-100 d-block text-decoration-none">
        <div class="bli"><img src="${a.image}" alt="${a.title}" loading="lazy"></div>
        <div class="blb">
          <div class="read-time mb-1"><i class="bi bi-clock"></i> ${a.readTime}</div>
          <h3 class="blt">${a.title}</h3>
          <p class="small text-muted">${a.excerpt}</p>
          <span class="read-link">Read Article <i class="bi bi-chevron-right"></i></span>
        </div>
      </a>
    </div>`).join("");
}

// ---- Render single article ----
function renderArticle(id) {
  const article = articles.find((a) => a.id === id);
  const view = document.getElementById("articleView");
  const listView = document.getElementById("listView");
  if (!article || !view || !listView) return false;

  listView.classList.add("d-none");
  view.classList.remove("d-none");

  const bodyHtml = article.content.map((block) => {
    if (block.type === "h3") return `<h3>${block.text}</h3>`;
    if (block.type === "p")  return `<p>${block.text}</p>`;
    if (block.type === "ul") return `<ul>${block.items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
    return "";
  }).join("");

  view.innerHTML = `
    <a href="blog.html" class="back-btn mb-4 d-inline-flex" id="backBtn">
      <i class="bi bi-arrow-left"></i> Back to Articles
    </a>
    <h1 class="section-title">${article.title}</h1>
    <div class="d-flex align-items-center gap-2 mb-4 text-muted small">
      <i class="bi bi-clock"></i> ${article.readTime}
    </div>
    <div class="article-hero-img mb-4">
      <img src="${article.image}" alt="${article.title}">
    </div>
    <div class="article-content">${bodyHtml}</div>
    <div class="mt-5 p-4 rounded-4" style="background:var(--primary-light)">
      <p class="fw-semibold mb-3" style="color:var(--dark)">Need expert advice? Book a consultation with Dr. Desu Murali Krishna.</p>
      <a href="index.html#appointment" class="btn-book">Book Appointment <i class="bi bi-chevron-right"></i></a>
    </div>`;

  document.getElementById("backBtn")?.addEventListener("click", (e) => {
    e.preventDefault();
    history.pushState(null, "", "blog.html");
    renderList();
    view.classList.add("d-none");
    listView.classList.remove("d-none");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
  return true;
}

function handleHash() {
  const hash = window.location.hash.slice(1);
  if (hash) {
    renderArticle(hash);
  } else {
    const view = document.getElementById("articleView");
    const listView = document.getElementById("listView");
    if (view && listView) {
      view.classList.add("d-none");
      listView.classList.remove("d-none");
    }
    renderList();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderList();

  document.querySelectorAll("[data-whatsapp]").forEach((btn) => {
    btn.addEventListener("click", () => openWhatsApp());
  });
});
