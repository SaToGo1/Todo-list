import { db } from "../config/firebase-config";
import { collection, getDocs, query, where, setDoc, doc } from "firebase/firestore"; 

export function createDocumentIfNotExists (user) {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("userId", "==", user.uid));

    getDocs(q)
        .then(data => {
            // if user don't exits -> create user.
            if(data.empty) {
                const userData = {
                    // userId: user.uid,
                    userName: user.displayName,
                    email: user.email,
                    tasks: '',
                    projects: ''
                }

                setDoc(doc(db, "users", user.uid), userData)
                    .then(result => {
                        console.log('user created result', result);
                        console.log('USER CREATED')
                    })
            }
        })
        .catch(error => {
            console.log('error query\n', error)
        })
}

/* 
TODO
- store project
- store tasks

- get tasks
- get projects
*/ 