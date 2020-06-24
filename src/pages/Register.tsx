import React, { useState, useEffect } from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonLoading } from '@ionic/react'
import { Link, Redirect } from 'react-router-dom'
import { toast } from '../toast'
import { RegisterUser } from '../firebaseConfig'

const Register: React.FC = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, SetLoading] = useState<boolean>(false)

    async function handleRegister() {
        //validate user
        SetLoading(true)
        if (password !== confirmPassword) {
            return toast('Password do not match')
        }
        if (username.trim() === '' || password.trim() === '') {
            return toast('Username and password are required')
        }
        const registerResopnse = await RegisterUser(username, password)
        if (registerResopnse) {
            setConfirmPassword('')
            setPassword('')
            setUsername('')
            toast('You have successfully registered!!')
        }
        SetLoading(false)
    }
    return (
        <IonPage>

            <IonLoading message="Please wait..." duration={0} isOpen={loading} />
            <IonContent className="ion-padding">
                <IonInput placeholder="Username*" onIonChange={(e: any) => setUsername(e.target.value)} />
                <IonInput type="password" placeholder="password*" onIonChange={(e: any) => setPassword(e.target.value)} />
                <IonInput type="password" placeholder="Confirm Password*" onIonChange={(e: any) => setConfirmPassword(e.target.value)} />
                <IonButton onClick={handleRegister}>Register</IonButton>
                <p>Aready have anaccount? <Link to="/login">Sign In</Link> </p>
            </IonContent>
        </IonPage>
    )
}
export default Register