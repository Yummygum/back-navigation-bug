# 🐶 Back Navigation Bug Example

## 📌 Overview

This project demonstrates an issue with browser back navigation when using dynamic routing in **Next.js 15.2.4**.

## 🎯 Steps to Reproduce

1. Click the button below to navigate to **Dog 1**.
2. Every **3 seconds**, the page automatically shows the next dog.
3. If you use the provided **button (Link)**, the browser's **back button** will sometimes work and sometimes not.
4. If you manually navigate to any dog slug (e.g., `/dog/1`, `/dog/2`, or `/dog/3`) and let the page cycle through the dogs automatically, pressing the **back button** results in a **blank new tab page** instead of returning to the previous page.

## 🐛 Expected vs. Actual Behavior

- **Expected:** Pressing the back button should return to the previous dog page.
- **Actual:** After navigation using `router.push`, the back button sometimes leads to a blank tab instead of the previous page.

## 🚀 How to Run This Project

1. Install dependencies:
   ```bash
   yarn
   ```
2. Build the project:
   ```bash
   yarn build
   ```
3. Serve the static files:
   ```bash
   npx serve@latest out
   ```
   _Alternatively, you can run the project in development mode:_
   ```bash
   yarn dev
   ```
