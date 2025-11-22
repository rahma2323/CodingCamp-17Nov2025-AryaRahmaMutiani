// GREETING POPUP
window.onload = () => {
  const greetModal = document.getElementById("greetModal");
  const greetBtn = document.getElementById("greetBtn");
  const greetInput = document.getElementById("greetName");
  const greeting = document.getElementById("greeting");

  greetBtn.onclick = () => {
    let name = greetInput.value.trim();

    if (name !== "") {
      greeting.textContent = `Hi, ${name}! Welcome to RaaCreative Studio`;
      greetModal.style.display = "none";
    }
  };
};

// Store testimonials
let testimonials = [];

// Form Submission
const form = document.getElementById("messageForm");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const testimonialsList = document.getElementById("testimonialsList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let msg = document.getElementById("userMessage").value;

  // Create testimonial object
  const testimonial = {
    name: name,
    email: email,
    phone: phone,
    message: msg,
    date: new Date().toLocaleDateString(),
  };

  testimonials.push(testimonial);

  // Show pop-up
  modalContent.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${msg}</p>
    `;
  modal.style.display = "block";

  updateTestimonialsList();
  form.reset();
});

// Close modal
function closeModal() {
  modal.style.display = "none";
}

// Update Testimonials List
function updateTestimonialsList() {
  if (testimonials.length === 0) {
    testimonialsList.innerHTML =
      '<p class="no-testimonials">No testimonials yet. Be the first to leave a message!</p>';
    return;
  }

  testimonialsList.innerHTML = testimonials
    .map(
      (t) => `
            <div class="testimonial-card">
                <h4>${t.name}</h4>
                <p><strong>Email:</strong> ${t.email}</p>
                <p><strong>Phone:</strong> ${t.phone}</p>
                <p><strong>Date:</strong> ${t.date}</p>
                <p class="message-text">"${t.message}"</p>
            </div>
        `
    )
    .reverse()
    .join("");
}

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// ===============================
// FIX HAMBURGER MENU
// ===============================
const menuToggle = document.querySelector(".menu-toggle");
const menuList = document.getElementById("menuList");

menuToggle.addEventListener("click", () => {
  menuList.classList.toggle("active");
});
