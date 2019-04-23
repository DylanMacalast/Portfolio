require('normalize.css/normalize.css'); // Resets all css
require('./styles/index.scss'); // adding main scss to js so its compiled into js
import * as app from './js/app';
import jquery from 'jquery';
import PopperJS from 'popper.js';

jquery(()=>{
    console.log('Hello jQuery + bootstrap 4!');
})

app.navSlide();


