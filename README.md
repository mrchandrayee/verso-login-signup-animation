# VERSO — Login & Signup Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/verso-login-signup-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable, screen-based recreation of the uploaded **5-second** vertical video (720 × 1280, 30 fps).

## Run it
1. Extract `verso-login-signup-animation.zip`.
2. Open `index.html` in Chrome, Edge, Firefox or Safari.
3. Click **Create an account** to switch to signup.
4. Click **Sign in** to switch back.
5. Try the password visibility controls and submit either form to see client-side validation.

No npm install, build tool, server, API key or backend is required.

Optional local server:
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000`.

## What is visible in the source video

The video shows a browser-like top bar labelled `VERSO — HTML CSS JS` and `localhost / verso`, followed by a heading:

**COMPONENT · 91**
**Login & Signup Animation**

The central card uses a warm cream form surface and deep forest-green welcome surface. A single skewed gold blade moves across the card to transition between states.

### Sign-in panel
- Heading: `Sign in`
- Username or email
- Password with visibility icon
- Keep me signed in checkbox
- Forgot password?
- Sign in button
- `New to VERSO? Create an account`

Welcome copy:
- `VERSO`
- `Welcome back.`
- `Your boards, your drafts and your people are exactly where you left them.`

### Create-account panel
- Full name
- Email address
- Password
- Hint: `Use 8 characters or more.`
- Create account button
- `Already have an account? Sign in`

Welcome copy:
- `VERSO`
- `Start the first page.`
- `One account for every board, every draft and every device you own.`

The note below the card reads: `Switch states to send the blade across — both forms validate for real`.

## Readable original source fragments transcribed from the video

The code preview at the bottom of the video contains these readable excerpts. Whitespace and line wrapping are normalized.

### `index.html`
```html
<!-- one blade, two lit seams -->
<div class="auth_band">
  <span class="band_edge band_edge--lead"></span>
  <div class="band_inner">
    <div class="band_page">
      <h3 class="welcome_title">Welcome <em>back.</em></h3>
    </div>
  </div>
</div>
```

### `app.css`
```css
.auth_band { /* one skewed rectangle, ONE translateX */
  overflow: hidden;
  transform: skewX(var(--rake)) translateX(var(--sweep));
}
.band_inner {
  transform: translateX(calc(-1 * var(--sweep)))
    skewX(calc(-1 * var(--rake)));
}
```

### `app.js`
```js
auth.dataset.mode = next;
panes[next].classList.add('is-on');
later(() => {
  panes[other].inert = true;
  panes[next].inert = false;
}, t.cover);
```

These are visible fragments, not the complete original VERSO source repository. The full implementation below is reconstructed to make the UI and interactions runnable.

## Included project files
- `index.html` — browser frame, sign-in/sign-up forms, welcome copy, animated blade and code preview.
- `app.css` — forest/cream theme, skewed split-card layout, blade animation, responsive styles.
- `app.js` — mode switching, inert pane handling, password visibility, form validation and demo feedback.
- `README.md` — source observations and run instructions.

## Functionality
- Animated sign-in ↔ create-account transition using a moving skewed blade.
- Separate welcome copy for each state.
- Username/email and password fields.
- Full name, email and password signup fields.
- Required field and email validation through browser form validation.
- Signup password minimum length of eight characters.
- Show/hide password buttons.
- Accessible inert handling for the inactive form.
- Responsive layout and reduced-motion preference support.

## Important limitations
This is a frontend-only demonstration. The forms validate in the browser but do not create accounts, authenticate users, send password reset emails, store credentials, or connect to a backend. Do not enter real passwords into this demo.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
