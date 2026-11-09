const card = document.getElementById("auth-card");
const toast = document.getElementById("toast");

function switchMode(mode) {
  card.dataset.mode = mode;
  document.querySelectorAll(".form-message").forEach(node => node.textContent = "");
}
document.querySelectorAll("[data-switch]").forEach(button => {
  button.addEventListener("click", () => switchMode(button.dataset.switch));
});

document.querySelectorAll(".reveal").forEach(button => {
  button.addEventListener("click", () => {
    const input = button.parentElement.querySelector("input");
    input.type = input.type === "password" ? "text" : "password";
    button.setAttribute("aria-label", input.type === "password" ? "Show password" : "Hide password");
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2800);
}
document.querySelector(".forgot").addEventListener("click", () => {
  const identity = document.querySelector('#signin-form input[name="identity"]').value.trim();
  if (!identity) {
    document.querySelector('#signin-form .form-message').textContent = "Enter your username or email first.";
    return;
  }
  showToast("Password reset flow is a demo — connect your backend to send a reset link.");
});

document.getElementById("signin-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector(".form-message");
  if (!form.reportValidity()) return;
  message.style.color = "#126246";
  message.textContent = "Sign-in form validated. Connect an authentication API to continue.";
});
document.getElementById("signup-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector(".form-message");
  if (!form.reportValidity()) return;
  message.style.color = "#126246";
  message.textContent = "Account details look good. Connect your signup API to create the account.";
});
