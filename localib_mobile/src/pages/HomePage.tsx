import { Link } from 'react-router-dom'
import '../assets/style/HomePage.css'
import logoVehicules from '../assets/img/Vehicules.png'
import logoLocations from '../assets/img/Locations.png'
import Nav from '../components/Nav'
import { IonCard, IonCardHeader, IonCardTitle, IonPage} from '@ionic/react'


const HomePage = () => {
  return (
        <>
          <Nav data={"Home"}/>
          <Link to="/gestvehicule">
            <IonCard class='card'>
            <img className='logoHome' alt="vehicules" src={logoVehicules} />
            <IonCardHeader>
              <IonCardTitle class='titleHome'>Liste des véhicules</IonCardTitle>
            </IonCardHeader>
            </IonCard>
          </Link>
          <Link to="/vehiculedetails">
            <IonCard class='card'>
            <img className='logoHome' alt="locations" src={logoLocations} />
            <IonCardHeader>
              <IonCardTitle class='titleHome'>Détails vehicules</IonCardTitle>
            </IonCardHeader>
            </IonCard>
          </Link>
        </>
  )
}

export default HomePage