import * as firebase from 'firebase'
import { pawSharp } from 'ionicons/icons'
import { toast } from './toast'


const config = {
    apiKey: 'AIzaSyDUHZmGLmGIQpziht4v2Ob_MnfMtwqYIKk',
    authDomain: 'track-sweat.firebaseapp.com',
    databaseURL: 'https://track-sweat.firebaseio.com',
    projectId: 'track-sweat',
    storageBucket: 'track-sweat.appspot.com',
    messagingSenderId: '74507028679',
    appId: '1:74507028679:web:4d48998e17678de06f16e2',
    measurementId: 'G-S6XHHRYN18'
}

firebase.initializeApp(config)

export async function LoginUser(username:string,  password: string )
{
    const email = username+'@gmail.com'

    try {    
    const res = await firebase.auth().signInWithEmailAndPassword(username, password)
    console.log(res)
    return true
} catch (error) {
    toast(error.message)
    console.log(error)
    return false
}
 
}

export async function RegisterUser(username:string, password:string)
{
    const email = username+'@gmail.com'
    try {       
        const res = await firebase.auth().createUserWithEmailAndPassword(username, password)
        console.log(res)
        return true
    } catch (error) {
        toast(error.message)
        console.log(error)
        return false
    }
}
