import { db } from "../config/firebase-config";
import { collection, getDocs, query, where, setDoc, doc, getDoc } from "firebase/firestore"; 

export function createDocumentIfNotExists (user) {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("userId", "==", user.uid));

    getDocs(q)
        .then(data => {
            // if user don't exits -> create user.
            if(data.empty) {
                const userData = {
                    userId: user.uid,
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

export function store({ tasks = null, projects = null, user }) {
    console.log('firestore.js STORE')
    let userData = {
        userId: user.uid,
        userName: user.displayName,
        email: user.email,
    }

    if (tasks) {
        userData = {
            ...userData,
            tasks: tasks,
        }
    }

    if (projects) {
        userData = {
            ...userData,
            projects: projects,
        }
    }

    setDoc(doc(db, "users", user.uid), userData)
    .then(result => {
        console.log('data updated', result);
        console.log('firestore.js STORE success')
    })
}

export async function get({user}) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    return docSnap.data()
}
/* 
TODO
- store project
- store tasks

- get tasks
- get projects
*/ 