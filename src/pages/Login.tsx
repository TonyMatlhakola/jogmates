import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonLoading } from '@ionic/react'
import { LoginUser } from '../firebaseConfig'
import { toast } from '../toast'

const Login: React.FC = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, SetLoading] = useState<boolean>(false)
    const [dashboard, setDashboard] = useState<boolean>(false)


    async function handleLogin() {
        SetLoading(true)
        const response = await LoginUser(username, password)
        if (!response) {
            toast('Incorrect username/passord')
        } else {
            window.location.href = '/dashboard'
        }
        SetLoading(false)
    }

    function RedirectToDashboard() {

        return dashboard ? <Redirect to='/dashboard' /> : ''
    }

    return (

        <IonPage>

            <IonLoading message="Please wait..." duration={0} isOpen={loading} />
            <IonContent className="ion-padding background">
                <IonInput placeholder="use email or cell number" onIonChange={(e: any) => setUsername(e.target.value)} />
                <IonInput type="password" placeholder="password*" onIonChange={(e: any) => setPassword(e.target.value)} />
                <IonButton onClick={handleLogin}>Sign In</IonButton>
                <p>New here? <Link to="/Register">Sign Up</Link> </p>
            </IonContent>
        </IonPage>
    )
}
export default Login
