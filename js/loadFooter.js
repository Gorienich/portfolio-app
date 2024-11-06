fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    // Load the footer content into the global-footer element
    document.getElementById('global-footer').innerHTML = data;

    // Now the footer is loaded, you can safely add event listeners

    /* Share buttons */
    const whatsappShareButton = document.getElementById("whatsappShare");
    const facebookShareButton = document.getElementById("facebookShare");
    const instagramShareButton = document.getElementById("instagramShare");
    const tiktokShareButton = document.getElementById("tiktokShare");
    const vk = document.getElementById("vk");

    // Add event listeners
    whatsappShareButton.addEventListener('click', shareOnWhatsApp);
    facebookShareButton.addEventListener('click', shareOnFacebook);
    instagramShareButton.addEventListener('click', shareOnInstagram);
    tiktokShareButton.addEventListener('click', shareOnTiktok);
    vk.addEventListener('click', shareOnVK)
  })
  .catch(error => console.error('Error loading footer:', error));

    /* Share buttons */
    const whatsappShareButton = document.getElementById("whatsappShare");
    const facebookShareButton = document.getElementById("facebookShare");
    const telegramShare = document.getElementById("telegramShare");
    const twitter = document.getElementById("twitter");
    const vk = document.getElementById("vk");
    const linkedIN = document.getElementById("linkedIN");

    // Add event listeners
    whatsappShareButton.addEventListener('click', shareOnWhatsApp);
    facebookShareButton.addEventListener('click', shareOnFacebook);
    telegramShare.addEventListener('click', shareOnTelegram);
    twitter.addEventListener('click', shareOnTwitter);
    vk.addEventListener('click', shareOnVK);
    linkedIN.addEventListener('click', shareOnLinkedIn);
  })
  .catch(error => console.error('Error loading footer:', error));

// Share functions
function shareOnWhatsApp() {
  const message = 'Hello, check this amazing portfolio: https://gorienich.github.io/portfolio-app/index.html';
  const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
}

function shareOnFacebook() {
  const url = 'https://gorienich.github.io/portfolio-app/index.html';
  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(facebookURL, '_blank');
}

function shareOnTwitter() {
  const url = 'https://gorienich.github.io/portfolio-app/index.html';
  const text = "Check out this amazing portfolio!";
  const twitterURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  window.open(twitterURL, '_blank');
}

function shareOnVK() {
  const url = 'https://gorienich.github.io/portfolio-app/index.html';
  const vkURL = `https://vk.com/share.php?url=${encodeURIComponent(url)}`;
  window.open(vkURL, '_blank');
}

function shareOnTelegram() {
  const url = 'https://gorienich.github.io/portfolio-app/index.html';
  const message = "Check out this amazing portfolio!";
  const telegramURL = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(message)}`;
  window.open(telegramURL, '_blank');
}

function shareOnLinkedIn() {
  const url = 'https://gorienich.github.io/portfolio-app/index.html';
  const title = "Egor Grebenuk - Full Stack Developer Portfolio";
  const summary = "Discover my full-stack development portfolio featuring high-quality, responsive web applications.";
  const linkedInURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`;
  window.open(linkedInURL, '_blank');
}

