//Importar la configuracion
import { app } from '../js/firebase'

// Importar los modulos de firebase necesarios
import {
    getFirestore, 
    collection,
    getDocs, 
    onSnapshot,
    addDoc,
    doc,
    getDoc,
    updateDoc, 
    QuerySnapshot} from 'firebase/firestore' 

    //Conectarnos a la base de datos
export const db = getFirestore();

//Guardar un trimestre
export const guardarTrimestre = (datos) => {
    addDoc(collection(db, 'trimestres'), datos)
}

//Obtener la colleccion de trimestres y mantener el estado actualizado
export const obtenerTrimestres = (callback) => {
    onSnapshot(collection(db, 'trimestres'), (querySnapshot) => {
        const trimestres = [];
        querySnapshot.forEach((doc) => {
            trimestres.push({...doc.data(), id: doc.id})
        })
        callback(trimestres)
    })
    
}

//Obtener un tremestre por su id
export const obtenerTrimestre = async (id) => {
    const trimestreDoc = await getDoc(doc(db, 'trimestres'))
}