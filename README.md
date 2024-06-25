# React Native Calculator

This is a simple calculator app built using React Native. The app supports basic arithmetic operations and provides a clean and user-friendly interface.

## Features

- Addition, subtraction, multiplication, and division
- Percentage calculations
- Positive/negative toggle
- Clear (reset) functionality
- Responsive design

## File Structure
- assets
  - (other assets)
- components
  - Button.js
  - Display.js
  - Row.js
- util
  - calculator.js
- App.js
- colors.js
- package.json
- README.md


### Components

- `Button.js`: A reusable button component that supports different sizes and themes.
- `Display.js`: A component to display the current value of the calculator.
- `Row.js`: A simple wrapper component to arrange buttons in a row.

### Utilities

- `calculator.js`: Contains the logic for handling calculator operations and state management.

### Other Files

- `colors.js`: Defines color constants used throughout the app.
- `App.js`: The main entry point of the app that combines all components and manages the overall state.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager)
- React Native CLI or Expo CLI
- Xcode (for iOS development) or Android Studio (for Android development)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/react-native-calculator.git
   cd react-native-calculator

```sh
npm install

# for iOS
npx react-native run-ios

# for Android    
npx react-native run-android 
```
### Usage

- Tap on the buttons to perform calculations.
- Use the "C" button to clear the current calculation.
- Use the "+/-" button to toggle the sign of the current value.
- Use the "%" button to convert the current value to a percentage.

#### Styles
You can customize the styles of the components by modifying the corresponding style objects in the component files (Button.js, Display.js, etc.).

### License
This project is licensed under the MIT License. See the LICENSE file for more details.

### Acknowledgments
- React Native Documentation
- React Navigation
- Expo Documentation

### Contact
For any questions or feedback, please contact hemantthapa1998@example.com.
