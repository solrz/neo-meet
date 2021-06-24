import Framework7 from 'framework7/lite-bundle';
import Framework7Svelte from 'framework7-svelte';
import 'framework7/framework7-bundle.css';
import './assets/css/icons.css';
import './assets/css/app.styl';


Framework7.use(Framework7Svelte)

import App from './src/app.pug.svelte';
const app = new App({
  target: document.body
});
