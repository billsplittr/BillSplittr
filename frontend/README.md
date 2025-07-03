
# 📲 BillSplittr — Frontend (React Native)

This is the mobile frontend for **BillSplittr** is built using [**React Native**](https://reactnative.dev). It follows a modular folder structure and uses **Expo** for local development.

---

## I. 🚀 Getting Started

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Start the App (Expo)

```bash
npx expo start
```

* Scan the QR code in the terminal with the **Expo Go** app on your phone.
* Or use an Android/iOS emulator via the **Expo Dev Tools** in your browser.

### 3. Folder Structure

```
frontend/
├── assets/         # Static files (images, icons, fonts, etc.)
├── components/     # Reusable UI components
├── screens/        # App screens (Home, Upload, Group, etc.)
├── api/            # Axios config and API service functions
├── utils/          # Helper functions and constants
├── App.tsx         # Main entry point
├── index.js        # Root registration file
```

> This structure *might* evolve as features grow.

---

### 4. 🧪 Testing

We will use:

* [`Jest`](https://jestjs.io/) for unit tests
* [`React Native Testing Library`](https://testing-library.com/docs/react-native-testing-library/intro/) for component testing

> Testing will be integrated once the screen/component structure stabilizes.

---

### 5. ✨ Linting & Formatting

We use **ESLint** and **Prettier** to ensure consistent code quality and formatting.

To run:

```bash
npm run lint     # Run linter
npm run format   # Format code
```

#### ⚠️ Linting Requirements

* All code must pass linting before PRs are merged.
* (Optional) Add a pre-commit hook using Husky to auto-run linting.

### 6. 🧩 Merging & Branching Guidelines

* Follow feature-based branches: `feature/<name>`, `bugfix/<name>`, etc.
* PRs should include:

  * Brief summary of changes
  * Screenshots for UI changes (if applicable)
  * Linted, formatted, and (eventually) tested code
* See [CONTRIBUTIONS.md](../CONTRIBUTIONS.md) for more details

---


## II. 📱 Building for Native Platforms (Optional)

If you are running outside of Expo or want to build for production:

### Android

```bash
npm run android
# or
npx react-native run-android
```

### iOS

```bash
bundle install          # Only needed once (if CocoaPods not installed)
bundle exec pod install # Every time native deps change
npm run ios
# or
npx react-native run-ios
```

> You can also build using Android Studio or Xcode.


## III. 🔁 Fast Refresh

* Any changes to `App.tsx` or components will auto-refresh in the app.
* If stuck, you can fully reload the app:

  * Android: press <kbd>R</kbd> twice in terminal
  * iOS: press <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in Simulator

