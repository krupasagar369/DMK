/* =====================================================
   ENT CLINIC — main.js
   Dr. Desu Murali Krishna | Nellore
   Complete cleaned main.js
   ===================================================== */

const WHATSAPP_NUMBER = "919398750790";

/* =========================
   Navbar scroll effect
   ========================= */
(function () {
  const nav = document.getElementById("mainNav");
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* =========================
   Smooth scroll
   ========================= */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const toggler = document.querySelector(".navbar-toggler");
      const collapse = document.querySelector(".navbar-collapse");

      if (collapse && collapse.classList.contains("show") && toggler) {
        toggler.click();
      }

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
});

/* =========================
   WhatsApp helper
   ========================= */
function openWhatsApp(message) {
  const text = encodeURIComponent(
    message || "Hello Dr. Desu Murali Krishna, I would like to book an appointment at your ENT clinic."
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}

/* =========================
   Generic WhatsApp buttons
   ========================= */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-whatsapp]").forEach((btn) => {
    btn.addEventListener("click", function () {
      openWhatsApp();
    });
  });
});

/* =========================
   Section scroll reveal
   ========================= */
(function () {
  const elements = document.querySelectorAll(".section-reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((el) => observer.observe(el));
})();

/* =========================
   Toast helper
   ========================= */
function showToast(msg, type = "success") {
  const container = document.getElementById("toastContainer");

  if (!container || typeof bootstrap === "undefined") {
    alert(msg);
    return;
  }

  const id = "toast_" + Date.now();

  container.insertAdjacentHTML(
    "beforeend",
    `
    <div id="${id}" class="toast align-items-center text-bg-${type} border-0 mb-2" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">${msg}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
    `
  );

  const toastEl = document.getElementById(id);
  const toast = new bootstrap.Toast(toastEl, { delay: 3500 });
  toast.show();

  toastEl.addEventListener("hidden.bs.toast", function () {
    toastEl.remove();
  });
}

/* =========================
   Blog card click
   ========================= */
(function () {
  document.querySelectorAll("[data-blog-id]").forEach((card) => {
    card.addEventListener("click", function () {
      const id = card.getAttribute("data-blog-id");
      window.location.href = `blog.html#${id}`;
    });
  });
})();

/* =========================
   Appointment slot picker
   ========================= */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("apptForm");
  const trigger = document.getElementById("dateTimeTrigger");
  const preferredDate = document.getElementById("preferredDate");
  const bookingDate = document.getElementById("bookingDate");
  const slotPopup = document.getElementById("slotPopup");
  const timeSlots = document.querySelectorAll(".time-slot");
  const slotPickerGroup = document.querySelector(".slot-picker-group");

  let selectedSlot = "";

  if (bookingDate) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    bookingDate.min = `${yyyy}-${mm}-${dd}`;
  }

  if (trigger && slotPopup) {
    trigger.addEventListener("click", function () {
      slotPopup.classList.toggle("show");
    });
  }

  timeSlots.forEach((slot) => {
    slot.addEventListener("click", function () {
      if (!bookingDate || !preferredDate || !slotPopup) return;

      if (!bookingDate.value) {
        showToast("Please select a date first.", "danger");
        return;
      }

      timeSlots.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      selectedSlot = this.getAttribute("data-slot");

      const selectedDateObj = new Date(bookingDate.value);
      const formattedDate = selectedDateObj.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });

      preferredDate.value = `${formattedDate} | ${selectedSlot}`;
      slotPopup.classList.remove("show");
    });
  });

  if (bookingDate && preferredDate) {
    bookingDate.addEventListener("change", function () {
      if (this.value && selectedSlot) {
        const selectedDateObj = new Date(this.value);
        const formattedDate = selectedDateObj.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        });

        preferredDate.value = `${formattedDate} | ${selectedSlot}`;
      }
    });
  }

  document.addEventListener("click", function (e) {
    if (slotPickerGroup && slotPopup && !slotPickerGroup.contains(e.target)) {
      slotPopup.classList.remove("show");
    }
  });

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("apptName")?.value.trim();
    const phone = document.getElementById("apptPhone")?.value.trim();
    const dateSlot = document.getElementById("preferredDate")?.value.trim();

    if (!name || !phone || !dateSlot) {
      showToast("Please fill in all fields and select date/time slot.", "danger");
      return;
    }

    const btn = form.querySelector(".btn-submit-appt");

    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Submitting...`;
    }

    setTimeout(() => {
      const msg =
`Hello Dr. Desu Murali Krishna,

I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Preferred Date & Time: ${dateSlot}

Thank you.`;

      openWhatsApp(msg);

      form.innerHTML = `
        <div class="success-box text-center py-4">
          <div class="s-icon mb-3"><i class="bi bi-check-circle-fill"></i></div>
          <h3 class="h5 mb-2">Appointment Request Sent!</h3>
          <p class="text-muted small mb-4">We will confirm your appointment on WhatsApp shortly.</p>
          <button type="button" class="btn btn-book" onclick="location.reload()">Book Another Appointment</button>
        </div>
      `;
    }, 600);
  });
});