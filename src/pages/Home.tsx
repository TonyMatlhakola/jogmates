import React, {useState, useEffect} from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react'

const Home: React.FC = () => {

    const [input, setInput] = useState<string>('')

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Welcome to TreakSweat
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
<IonContent className="ion-padding">
    <IonButton routerLink="/login">Sign In</IonButton>
    <IonButton routerLink="/Register" color='secondary'>Sign Up</IonButton>
</IonContent>
        </IonPage>

    )
}
export default Home