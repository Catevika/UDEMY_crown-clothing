import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCnmKjyHql177Tn1DaObaKHiEAflC52N4Q',
	authDomain: 'crwn-db-c8901.firebaseapp.com',
	databaseURL: 'https://crwn-db-c8901.firebaseio.com',
	projectId: 'crwn-db-c8901',
	storageBucket: 'crwn-db-c8901.appspot.com',
	messagingSenderId: '393111349772',
	appId: '1:393111349772:web:58bcd846ba6df221769c29'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
