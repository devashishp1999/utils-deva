export class Toast {
  constructor() {
    // Create a container element to hold all the toasts
    this.container = document.createElement("div");
    this.container.classList.add("toast-container");
    document.body.appendChild(this.container);
    // Create the CSS element
    this.css = document.createElement("style");
    this.css.innerHTML = `
        .toast-container {
          position: fixed;
          margin: 2vh;
          z-index: 999;
        }
        .toast {
            padding: 0.7rem 1.3rem;
            margin: 2vh;
            background-color: #353a40;
            color: #fefefe;
            border-radius: 4px;
            font-size: 1.1rem;
            font-weight: 600;
            font-family: Arial;
            width: fit-content;
            user-select: none;
            box-shadow: 0px 2px 4px 1px rgba(60, 64, 67, 0.2);
            animation: toastin 0.2s ease-in;
        }
    
        .toast-center {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
  
        .toast-top {
            top: 0;
            bottom: unset;
            transform: translate(-50%, 0);
        }
    
        .toast-bottom {
            bottom: 0;
            top: unset;
            transform: translate(-50%, 0);
        }
        
        .toast-left {
            left: 0;
            right: unset;
            transform: translate(0, -50%);
        }
        
        .toast-right {
            right: 0;
            left: unset;
            transform: translate(0, -50%);
        }
  
        @keyframes toastin {
          0% { 
              transform: scale(0);
              opacity: 0;
          }
          100% { 
              transform: scale(1);
              opacity: 1;
          }
        }
        `;
    document.head.appendChild(this.css);
  }

  // Method to create and display a toast
  show(options = {}) {
    // Destructure the options object to get the text, position, duration, callback, styles, animations and custom fonts
    const {
      text = "Toast text",
      position = "bottom",
      duration = 3000,
      onClose = null,
      styles = {},
      animations = {},
      fonts = {},
    } = options;

    // Create a new toast element
    const toast = document.createElement("div");
    toast.classList.add("toast");

    // Add the text to the toast element
    toast.innerHTML = text;

    // Add the position class to the toast element
    position
      .split(" ")
      .forEach((P) => this.container.classList.add(`toast-${P}`));

    // Add the styles to the toast element
    Object.assign(toast.style, styles);

    // Add the animations to the toast element
    Object.keys(animations).forEach((animation) => {
      toast.style.animation = `${animation} ${animations[animation]}`;
    });

    // Add the custom fonts to the toast element
    Object.assign(toast.style, fonts);
    // Add the toast element to the container
    this.container.appendChild(toast);

    // Remove the toast after the specified duration
    setTimeout(() => {
      this.remove(toast);
      if (onClose && typeof onClose === "function") {
        onClose();
      }
    }, duration);

    toast.addEventListener("click", function () {
      this.remove(this);
    });
  }

  // Method to remove a specific toast
  remove(toast) {
    toast.remove();
  }

  // Method to remove all toasts
  removeAll() {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
  }
}
