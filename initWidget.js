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
