import { registerRootComponent } from 'expo';
import 'react-native-url-polyfill/auto';
import { en, registerTranslation } from 'react-native-paper-dates'

registerTranslation('en', en)

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
