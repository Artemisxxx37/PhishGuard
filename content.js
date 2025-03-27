// Analyze page content
function analyzePage() {
  const inputs = document.querySelectorAll('input[type="password"], input[type="email"]');
  const isSuspicious = inputs.length > 0 && !isTrustedDomain(window.location.hostname);

  if (isSuspicious) {
    chrome.runtime.sendMessage({ action: "showWarning" });
  }
}

// Check for typosquatting
function isTrustedDomain(hostname) {
  const trustedDomains = ["paypal.com", "google.com", "facebook.com"];
  return trustedDomains.some(domain => hostname.includes(domain));
}

// Run analysis on page load
analyzePage();
