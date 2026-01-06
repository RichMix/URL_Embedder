# URL_Embedder
Allows Embedding of a URL on a website using basic HTML, CSS, and JavaScript

I needed one that worked to showcase my projects, so I made this. 

## Tested in CodePen.io and running on my main site.

:/ Make sure to incorporate this as a component, and replace the `src=" "` with your website of choice.

```html
<div class="widget">
  <script src="https://cdn.tailwindcss.com"></script>

  <div class="iframe-embed-container">
    <div class="iframe-wrapper">
      <iframe src="https://example.com/" class="embedded-frame" frameborder="0" allowfullscreen loading="lazy" title="{{frameTitle}}">
      </iframe>
    </div>
  </div>```

