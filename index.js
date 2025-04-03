addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  // Handle the manifest.json request
  if (url.pathname === "/manifest.json") {
    const jsonResponse = {
      name: "Medipal Pharmacy",
      short_name: "Medipal",
      icons: [
        { src: "https://raw.githubusercontent.com/supsaveTech/medipal-icons/main/src/images/icons/1.png", type: "image/png", sizes: "50x50", purpose: "maskable" },
        { src: "https://raw.githubusercontent.com/supsaveTech/medipal-icons/main/src/images/icons/2.png", type: "image/png", sizes: "96x96", purpose: "maskable" },
        { src: "https://raw.githubusercontent.com/supsaveTech/medipal-icons/main/src/images/icons/3.png", type: "image/png", sizes: "144x144", purpose: "maskable" },
        { src: "https://raw.githubusercontent.com/supsaveTech/medipal-icons/main/src/images/icons/4.png", type: "image/png", sizes: "192x192", purpose: "maskable" },
        { src: "https://raw.githubusercontent.com/supsaveTech/medipal-icons/main/src/images/icons/5.png", type: "image/png", sizes: "256x256", purpose: "maskable" },
        { src: "https://raw.githubusercontent.com/supsaveTech/medipal-icons/main/src/images/icons/6.png", type: "image/png", sizes: "384x384", purpose: "maskable" },
        { src: "https://raw.githubusercontent.com/supsaveTech/medipal-icons/main/src/images/icons/7.png", type: "image/png", sizes: "512x512" }
      ],
      screenshots: [
        {
          "src": "https://raw.githubusercontent.com/supsaveTech/medipal-icons/main/src/images/screenshots/screenshot1.png",
          "sizes": "1080x1920",
          "type": "image/png",
          "form_factor": "wide"
        },
        {
          "src": "https://raw.githubusercontent.com/supsaveTech/medipal-icons/main/src/images/screenshots/screenshot2.png",
          "sizes": "540x720",
          "type": "image/png",
          "form_factor": "narrow"
        }
      ],
      start_url: "https://medipalpharmacy.great-site.net/home.php",
      scope: "https://medipalpharmacy.great-site.net/",
      display: "standalone",
      orientation: "portrait",
      background_color: "#ffffff",
      theme_color: "#008080",
      description: "Health Care at Your Convenience",
      dir: "ltr",
      lang: "en-GB"
    };

    return new Response(JSON.stringify(jsonResponse), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",  // ✅ Fix CORS
        "Cache-Control": "no-store"
      }
    });
  }

  // Fetch and return other requests as they are
  return fetch(request);
}
