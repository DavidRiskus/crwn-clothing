import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBzAO5v23QtDhjifCb2n2TI1VS5VvzN3iw',
	authDomain: 'crwn-db-6985b.firebaseapp.com',
	projectId: 'crwn-db-6985b',
	storageBucket: 'crwn-db-6985b.appspot.com',
	messagingSenderId: '140861889861',
	appId: '1:140861889861:web:9c35889a4b1d984765b22c',
	measurementId: 'G-DXQKNFKKQ4',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
