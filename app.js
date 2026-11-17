(() => {
  const auth = document.querySelector("#auth");
  const panes = {
    signin: document.querySelector("#pane-signin"),
    signup: document.querySelector("#pane-signup")
  };
  const switchers = [...document.querySelectorAll("[data-switch]")];
  const toastNode = document.querySelector("#toast");

  let transitionTimer;
  function toast(message) {
    toastNode.textContent = message;
    toastNode.classList.add("show");
    clearTimeout(toastNode._timer);
    toastNode._timer = setTimeout(() => toastNode.classList.remove("show"), 2100);
  }

  function switchMode(next) {
    if (!panes[next] || auth.dataset.mode === next) return;
    const other = next === "signin" ? "signup" : "signin";

    // The blade crosses the card; the opposite form is made inert
    // only after the cover has travelled across the panel.
    auth.dataset.mode = next;
    panes[next].classList.add("is-on");
    clearTimeout(transitionTimer);
    transitionTimer = setTimeout(() => {
      panes[other].inert = true;
      panes[next].inert = false;
    }, 470);
  }

  switchers.forEach(button => {
    button.addEventListener("click", () => switchMode(button.dataset.switch));
  });

  document.querySelectorAll(".eye").forEach(button => {
    button.addEventListener("click", () => {
      const input = button.parentElement.querySelector("input");
      const show = input.type === "password";
      input.type = show ? "text" : "password";
      button.textContent = show ? "◉" : "◎";
      button.setAttribute("aria-label", show ? "Hide password" : "Show password");
    });
  });

  document.querySelector("#signinForm").addEventListener("submit", event => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    toast("Sign-in details validated · demo only");
  });

  document.querySelector("#signupForm").addEventListener("submit", event => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    toast("Account details validated · demo only");
  });

  document.querySelector("#forgot").addEventListener("click", event => {
    event.preventDefault();
    toast("Password recovery would start here.");
  });

  // Keep the hidden pane inert from the first render.
  panes.signup.inert = true;
})();