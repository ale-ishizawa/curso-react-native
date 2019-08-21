import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigator from './src/Navigator.js';

AppRegistry.registerComponent(appName, () => Navigator);
