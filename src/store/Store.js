import {configureStore} from '@reduxjs/toolkit';
import Autauthslicereducer from './Authslice';

const store=configureStore({
    reducer: {
        auth : Autauthslicereducer,
        //TODO: add more slices here for posts
    }
    
});
export default store;
