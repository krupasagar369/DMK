/* =====================================================
   ENT CLINIC — main.js
   Dr. Desu Murali Krishna | Nellore
   ===================================================== */

const WHATSAPP_NUMBER = "919398750790";

// ---- Navbar scroll effect ----
(function () {
  const nav = document.getElementById("mainNav");
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
})();

// ---- Smooth scroll for all anchor links ----
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      // close mobile navbar if open
      const toggler = document.querySelector(".navbar-toggler");
      const collapse = document.querySelector(".navbar-collapse");
      if (collapse && collapse.classList.contains("show") && toggler) toggler.click();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});

// ---- WhatsApp helpers ----
function openWhatsApp(msg) {
  const text = encodeURIComponent(
    msg || "Hello Dr. Desu Murali Krishna, I would like to book an appointment at your ENT clinic."
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}

// FAB and mobile sticky buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-whatsapp]").forEach((btn) => {
    btn.addEventListener("click", () => openWhatsApp());
  });
});

// ---- Section scroll-reveal ----
(function () {
  const els = document.querySelectorAll(".section-reveal");
  if (!els.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
})();

// ---- Appointment form ----
(function () {
  const form = document.getElementById("apptForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name  = document.getElementById("apptName").value.trim();
    const phone = document.getElementById("apptPhone").value.trim();
    const date  = document.getElementById("apptDate").value;

    if (!name || !phone || !date) {
      showToast("Please fill in all fields.", "danger");
      return;
    }

    const btn = form.querySelector(".btn-submit-appt");
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Submitting…`;

    // Simulate short delay then open WhatsApp
    setTimeout(() => {
      const readable = new Date(date).toLocaleDateString("en-IN", {
        day: "2-digit", month: "short", year: "numeric",
      });
      const msg =
        `Hello Dr. Desu Murali Krishna,\n\nI would like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nPreferred Date: ${readable}\n\nThank you.`;
      openWhatsApp(msg);

      // Show success
      form.innerHTML = `
        <div class="success-box">
          <div class="s-icon"><i class="bi bi-check-circle-fill"></i></div>
          <h3 class="h5 mb-2">Appointment Request Sent!</h3>
          <p class="text-muted small mb-4">We will confirm your appointment on WhatsApp shortly.</p>
          <button class="btn btn-book" onclick="location.reload()">Book Another Appointment</button>
        </div>`;
    }, 600);
  });
})();

// ---- Toast helper ----
function showToast(msg, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const id = "toast_" + Date.now();
  container.insertAdjacentHTML(
    "beforeend",
    `<div id="${id}" class="toast align-items-center text-bg-${type} border-0 mb-2" role="alert">
       <div class="d-flex">
         <div class="toast-body">${msg}</div>
         <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
       </div>
     </div>`
  );
  const toastEl = document.getElementById(id);
  new bootstrap.Toast(toastEl, { delay: 3500 }).show();
  toastEl.addEventListener("hidden.bs.toast", () => toastEl.remove());
}

// ---- FAQ accordion (already handled by Bootstrap) ----
// ---- Blog card click → navigate to blog.html ----
(function () {
  document.querySelectorAll("[data-blog-id]").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-blog-id");
      window.location.href = `blog.html#${id}`;
    });
  });
})();



const slotButtons = document.querySelectorAll(".slot-btn");
const selectedSlotInput = document.getElementById("selectedSlot");
const bookingForm = document.getElementById("bookingForm");

slotButtons.forEach((button) => {
  button.addEventListener("click", () => {
    slotButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    selectedSlotInput.value = button.getAttribute("data-slot");
  });
});

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const slot = document.getElementById("selectedSlot").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!slot) {
    alert("Please select a time slot.");
    return;
  }

  const whatsappNumber = "919999999999";

  const whatsappMessage = `New Appointment Booking:
Name: ${name}
Phone: ${phone}
Email: ${email}
Time Slot: ${slot}
Available Days: Monday to Sunday
Message: ${message}`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");
});