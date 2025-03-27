# 🛡️ PhishGuard - Anti-Phishing Firefox Extension

**A browser extension that detects and blocks malicious/phishing websites in real-time using Google Safe Browsing and heuristic analysis.**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Firefox Add-on](https://img.shields.io/amo/v/phishguard?color=blue)](https://addons.mozilla.org/firefox/addon/phishguard/)

---

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Build from Source](#build-from-source)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [FAQ](#faq)

---

## Features
- **Real-time URL scanning** using Google Safe Browsing API.
- **Heuristic detection** of phishing indicators (e.g., fake login forms, typosquatting).
- **Active monitoring** of web requests and page content.
- **User-friendly warnings** with options to proceed or block.
- **Open-source** and privacy-focused (no data collection).

---

## Installation

### Prerequisites
- Firefox browser (latest version).
- [Google Safe Browsing API Key](https://developers.google.com/safe-browsing) (free tier).

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/phishguard.git
   cd phishguard
