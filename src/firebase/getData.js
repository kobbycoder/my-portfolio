import firebase_app from "../firebase/config";
import { getFirestore, getDocs, collection, query } from "firebase/firestore";

const db = getFirestore(firebase_app);
export default async function getDoument(name) {
  let result = [];
  let error = null;

  try {
    const q = query(collection(db, name));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      result.push({
        id: doc.id,
        image: doc.data().image,
        title: doc.data().title,
        category: doc.data().category,
        framework: doc.data().framework,
        backend: doc.data().backend,
        link: doc.data().link,
        description: doc.data().description
      });
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
