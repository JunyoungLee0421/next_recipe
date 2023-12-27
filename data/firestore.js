import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
// //레시피 가져오기
// export async function fetchRecipes() {
//     const querySnapshot = await getDocs(query(collection(db, "recipe")));

//     if (querySnapshot.empty) {
//         return [];
//     }

//     const fetchedRecipes = [];

//     querySnapshot.forEach((doc) => {
//         const aRecipe = {
//             id: doc.id,
//             title: doc.data()["title"],
//             description: doc.data()["description"],
//         }

//         fetchedRecipes.push(aRecipe);
//     });

//     return fetchedRecipes;
// }

// export default fetchRecipes;
