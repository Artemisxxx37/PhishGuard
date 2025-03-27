const API_KEY = "YOUR_API_KEY"; // Replace with your key

// Check URL against Google Safe Browsing
async function checkUrl(url) {
  const apiUrl = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${API_KEY}`;
  const payload = {
    client: { clientId: "PhishGuard", clientVersion: "1.0" },
    threatInfo: {
      threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
      platformTypes: ["ANY_PLATFORM"],
      threatEntryTypes: ["URL"],
      threatEntries: [{ url }],
    },
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data.matches || [];
  } catch (error) {
    console.error("Error checking URL:", error);
    return [];
  }
}

// Monitor tab updates
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    const threats = await checkUrl(tab.url);
    if (threats.length > 0) {
      chrome.tabs.update(tabId, { url: "blocked.html" });
    }
  }
});
