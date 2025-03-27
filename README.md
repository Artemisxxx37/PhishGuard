🛡️ PhishGuard - Anti-Phishing Firefox Extension

A browser extension that detects and blocks malicious/phishing websites in real-time using Google Safe Browsing and heuristic analysis.

License: MIT Firefox Add-on

Features

    Real-time URL scanning using Google Safe Browsing API.
    Heuristic detection of phishing indicators (e.g., fake login forms, typosquatting).
    Active monitoring of web requests and page content.
    User-friendly warnings with options to proceed or block.
    Open-source and privacy-focused (no data collection).
Installation
Prerequisites

    Firefox browser (latest version).
    Google Safe Browsing API Key (free tier).

Steps

    Clone the repository:
    git clone https://github.com/yourusername/phishguard.git
    cd phishguard

  Configure API Key:

    Replace YOUR_API_KEY in background.js with your Google Safe Browsing API key.

Load the extension in Firefox:

    Go to about:debugging → This Firefox → Load Temporary Add-on.
    Select the manifest.json file.

Configuration
Getting the API Key

    Sign up for the Google Safe Browsing API.
    Enable billing (required but free tier available).
    Restrict the key to moz-extension://* for security.
Usage

    The extension runs automatically in the background.
    Blocked pages will show a warning with an option to proceed.
    Suspicious pages trigger alerts in the browser toolbar icon.


Build from Source

Files:

    manifest.json - Extension metadata and permissions.
    background.js - Handles API checks and tab monitoring.
    content.js - Analyzes page content for phishing patterns.
    blocked.html - Warning page for malicious URLs.

Acknowledgments

    Google Safe Browsing API for threat detection.
    Mozilla MDN for extension documentation.
    Open-source community for inspiration.


