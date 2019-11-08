import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AuthProviderAdapter } from './AuthProviderAdapter';

function getProvider(provider: string) {
  switch (provider.toLowerCase()) {
    case 'google':
      return new firebase.auth.GoogleAuthProvider();
    case 'facebook':
      return new firebase.auth.FacebookAuthProvider();
    default:
      throw Error(`Provider ${provider} doesn't exist`);
  }
}

export class FirebaseAuthProvider implements AuthProviderAdapter {
  private firebase: firebase.app.App;

  constructor(firebaseConfig) {
    this.firebase = firebase.initializeApp(firebaseConfig);
  }

  login(p: string) {
    const provider = getProvider(p);
    return this.firebase.auth().signInWithPopup(provider);
  }
}
