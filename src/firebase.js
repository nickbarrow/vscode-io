import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";

// Init firebase app.
if (!firebase.apps.length)
    firebase.initializeApp({
        apiKey: "AIzaSyA8SCpwp0XoYzrhTTqLkAtruw6oal6Rz7U",
        authDomain: "reactnatives-420.firebaseapp.com",
        databaseURL: "https://reactnatives-420.firebaseio.com",
        projectId: "reactnatives-420",
        storageBucket: "reactnatives-420.appspot.com",
        messagingSenderId: "373034253068",
        appId: "1:373034253068:web:9e7ae6c5a255b535b8a729"
    });

// Export auth and store functions.
export const fireAuth = firebase.auth();
export const fireStore = firebase.firestore();

// Google login provider
const provider = new firebase.auth.GoogleAuthProvider();
// Export login function
export const signInWithGoogle = () => {
    fireAuth.signInWithPopup(provider);
};

/* This might get weird... */
export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;

    const userRef = fireStore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { email, displayName, photoURL } = user;
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                ...additionalData
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
    if (!uid) return null;
    try {
        const userDocument = await fireStore.doc(`users/${uid}`).get();

        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};
