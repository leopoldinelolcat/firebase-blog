import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor() {
        const config = {
            apiKey: 'AIzaSyBTGsvu4twHLWeeIWPsBP-laaZwVpn2rPo',
            authDomain: 'fir-blog-719f1.firebaseapp.com',
            databaseURL: 'https://fir-blog-719f1.firebaseio.com',
            projectId: 'fir-blog-719f1',
            storageBucket: 'fir-blog-719f1.appspot.com',
            messagingSenderId: '220825149504'
        };
        firebase.initializeApp(config);
    }
}
