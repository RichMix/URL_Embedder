# URL_Embedder
Allows Embedding of a URL on a website using basic HTML, CSS, and JavaScript

I needed one that worked to showcase my projects, so I made this. 

### Tested in CodePen.io and running on my main site.

#### Make sure to incorporate this as a component, and replace the `src=" "` with your website of choice.

```html
<div class="widget">
  <script src="https://cdn.tailwindcss.com"></script>

  <div class="iframe-embed-container">
    <div class="iframe-wrapper">
      <iframe src="https://example.com/" class="embedded-frame" frameborder="0" allowfullscreen loading="lazy" title="{{frameTitle}}">
      </iframe>
    </div>
  </div>
``` 

#### Ensure Tailwind CSS and dependencies installed

```CSS
/* Tailwind CSS :D */

.widget {
  .iframe-embed-container {
    width: 100%;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease;
    opacity: 0.9;
  }

  .iframe-embed-container.loaded {
    opacity: 1;
  }

  .iframe-wrapper {
    position: relative;
    width: 100%;
    background: white;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  }

  .embedded-frame {
    width: 100%;
    height: 600px;
    border: none;
    display: block;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .widget {
    .embedded-frame {
      height: 500px;
    }
  }
}

@media (max-width: 767px) {
  .widget {
    .iframe-embed-container {
      padding: 0.5rem;
    }

    .embedded-frame {
      height: 400px;
    }
  }
}

/* OOGA BOOGA! */
```
``` JavaScript

function initWidget(element, data, api) {
  window.dmAPI.runOnReady("iframeEmbedWidget", () => {
    const container = element.querySelector(".iframe-embed-container");
    const iframe = element.querySelector(".embedded-frame");

    if (iframe) {
      // 4DD L04D 3V3N7 L1573N3R
      iframe.addEventListener("load", function () {
        container.classList.add("loaded");
      });

      // 4DD 3RR0R H4NDL3R
      iframe.addEventListener("error", function () {
        console.error("Failed to load iframe content");
      });
    }
  });
}
```

Restyle, Repackage and Reuse. <3
```

