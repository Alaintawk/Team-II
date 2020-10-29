import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/core';
import { AngularFireStore, AngularFirestoreDocument } from '@angular/fire/firestoredocument/';
import { Router } from '@angular/router';

export interface register {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
  ) {

this.afAuth.authState.subscribe(user => {
  if (user) {
    this.userData = user;
    localStorage.setItem('user', JSON.stringify(this.userData));
    JSON.parse(localStorage.getItem('user'));
  } else {
    localStorage.setItem('user', null);
    JSON.parse(localStorage.getItem('user'));

  }
});
  }

SignIn(email, password) {
  return this.afAuth.signInWithEmailAndPassword(email, password)
  .then((result) => {
    this.ngZone.run(() => {
      this.router.navigate(['dashboard']);
    });
    this.router.SetUserData(result.user);
  }).catch((error) => {
    window.alert(error.message);
  });
}
SignUp(email, password){
  return this.afAuth.createUserWithEmailAndPassword(email, password)
  .then((result) => {
    this.SetUserData(result, user);
  }).catch((error) => {
    window.alert(error.message);
  });
}

get isLoggedIn


(): boolean {
  const user = JSON.parse(localStorage.getItem('user'));
  return (user !== null && user.emailVerified !== false) ? true : false;
}

AuthLogin(provider) {
  return this.afAuth.signInWithPopup(provider)
  .then((result) => {
    this.ngZone.run(() => {
      this.router.navigate(['dashboard']);

    });
    this.SetUserData(result.user);
  }).catch((error) => {
    window.alert(error);
  });
}

SignOut() {
  return this.afAuth.signOut().then(() => {
    localStorage.removeItem('user');
    this.router.navigate(['sign-in']);
  });
  }
}
f
