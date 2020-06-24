import React, {useState, useEffect} from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react'
import { toast } from '../toast'
import {Link, Redirect} from 'react-router-dom'

const Dashboard: React.FC = () => {


useEffect(() => {
    toast('You have logged in successfully!')

    }, [])


    const [input, setInput] = useState<string>('')

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Welcome to JogMates
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
    <IonContent className="ion-padding background">
   <p>- List of jogging mates in your location.</p>
  <p> - Progress on your personal jogging</p>
  <p>- Notification on who is requesting to joke with you and other updates.</p>
  <p>- Fitness track</p>
  <p>New here? <Link to="/login">Logout</Link> </p>
</IonContent>
        </IonPage>
    )
}
export default Dashboard
