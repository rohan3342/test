import {AppRegistry} from 'react-native';
import App from './App';
import FunctionalComp from './components/FunctionalComp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => FunctionalComp);
