# 📲 BillSplittr — Frontend (React Native)

This is the mobile frontend for **BillSplittr** built using [**React Native**](https://reactnative.dev) with [**Expo**](https://expo.dev) for streamlined development and deployment.

---

## I. 🚀 Getting Started

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Start the Development Server

```bash
npx expo start
```

* Scan the QR code in the terminal with the **Expo Go** app on your phone
* Or press `a` for Android emulator, `i` for iOS simulator
* Or open the **Expo Dev Tools** in your browser for additional options

### 3. Folder Structure

```
frontend/
├── assets/         # Static files (images, icons, fonts, etc.)
├── components/     # Reusable UI components
├── screens/        # App screens (Home, Upload, Group, etc.)
├── api/            # Axios config and API service functions
├── utils/          # Helper functions and constants
├── App.tsx         # Main entry point
├── app.json        # Expo configuration
├── package.json    # Dependencies and scripts
```

> This structure *might* evolve as features grow.

---

## II. 🧪 Testing

We will use:

* [`Jest`](https://jestjs.io/) for unit tests
* [`React Native Testing Library`](https://testing-library.com/docs/react-native-testing-library/intro/) for component testing

> Testing will be integrated once the screen/component structure stabilizes.

---

## III. ✨ Linting & Formatting

We use **ESLint** and **Prettier** to ensure consistent code quality and formatting.

To run:

```bash
npm run lint     # Run linter
npm run format   # Format code
```

#### ⚠️ Linting Requirements

* All code must pass linting before PRs are merged
* (Optional) Add a pre-commit hook using Husky to auto-run linting

---

## IV. 🧩 Merging & Branching Guidelines

* PRs should include:
  * Brief summary of changes
  * Screenshots for UI changes (if applicable)
  * Linted, formatted, and (eventually) tested code
* See [CONTRIBUTIONS.md](../CONTRIBUTIONS.md) for more details

---

## V. 🔄 Development Tips

### Hot Reload & Fast Refresh

* Any changes to `App.tsx` or components will auto-refresh in the app
* If you encounter issues, you can reload the app:
  * Press `r` in the terminal to reload
  * Or shake your device and tap "Reload" in the developer menu

### Expo Go vs Development Build

* **Expo Go**: Perfect for development with most standard React Native and Expo SDK features
* **Development Build**: Required if you need custom native code or third-party libraries with native dependencies

### Environment Variables

* Use `.env` files for environment-specific configurations
* Access them via `process.env.EXPO_PUBLIC_API_URL` (prefix with `EXPO_PUBLIC_` for client-side access)

---

## VI. 📦 Building & Deployment

### Preview Builds

```bash
# Build for internal distribution
npx expo build:android --type apk
npx expo build:ios --type simulator
```

### Production Builds

```bash
# Submit to app stores
npx expo submit --platform android
npx expo submit --platform ios
```

### Over-the-Air Updates

```bash
# Push updates without app store review
npx expo publish
```

> Expo handles the complexity of native builds, code signing, and deployment for you.

---

## VII. 🛠️ Troubleshooting

### Common Issues

* **Metro bundler cache**: Clear with `npx expo start --clear`
* **Node modules**: Delete `node_modules` and run `npm install`
* **Expo cache**: Clear with `npx expo install --fix`

### Debugging

* Use **Flipper** for advanced debugging
* Enable **Remote JS Debugging** in the developer menu
* Use **React Native Debugger** for component inspection