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
    const usersRef = collection(db, "users");
    // const q = query(usersRef, where("userId", "==", user.uid));
    
    const userData = {
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
    })

    // getDocs(q)
    //     .then(data => {
    //         // if user don't exits -> create user.
    //         if(data.empty) {
    //             throw new Error ('trying to add a doc on a user that does not exist.')
    //         }
        
    //     })
}

export function get() {
    return {
        tasks,
        projects
    }
}
/* 
TODO
- store project
- store tasks

- get tasks
- get projects
*/ 