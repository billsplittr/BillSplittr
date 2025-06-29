# 📲 BillSplittr — Frontend


## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd frontend
npm install
```
### 2. Start the App (Expo)
```bash
npx expo start
```
- Scan the QR code in the terminal with the Expo Go app on your device.

- You can also run it on an emulator via Expo Dev Tools.

### 3. Folder Structure
This is just a proposal, subject to change as the project evolves.
```
frontend/
├── assets/         # Static files (images, icons, etc.)
├── components/     # Reusable UI components
├── screens/        # App screens (Home, Upload, Group, etc.)
├── api/            # Axios config and API service functions
├── utils/          # Helper functions and constants
├── App.tsx         # Main entry point
```

### 4. Linting and Formatting

We use ESLint and Prettier for consistent code style.

To run the linter:
```bash
npm run lint
npm run format
```

- All code must be linted before being committed. Unlinted PRs may be rejected.
- (Optional) Add a pre-commit hook to enforce linting

### 5. Testing
We will use:
- Jest for unit testing
- React Native Testing Library for component tests

Tests will be added once screen/component structure stabilizes.

### 5. Merging & Branching Guidelines
- Every feature or fix must be in its own branch `(issue-number/feature-name)`

- Open a Pull Request to main

- Reference the related issue (Closes #issue-number)

    - Include a brief summary and screenshots if UI-related

    - Ensure code is linted and tested (if applicable)