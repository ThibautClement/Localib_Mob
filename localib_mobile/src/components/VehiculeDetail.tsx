import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonLabel } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Vehicule } from '../models/vehiculeModel'
import { vehiculeService } from '../services/VehiculesService'

const VehiculeDetail = () => {

    const {id} = useParams() as {id : string} 

    const [vehicule, setVehicule] = useState<Vehicule>()

    useEffect(() => {
        vehiculeService.findVehiculeById(parseInt(id)).then(data => setVehicule(data));
    })

  return (
    <>
        <IonCard>
          <img alt="BMW" src='https://www.bmw.fr/content/dam/bmw/common/all-models/1-series/5-door/2021/navigation/bmw-1-series-modelfinder.png' />
          <IonCardHeader>
            <IonCardTitle>{vehicule?.brand}</IonCardTitle>
            <IonCardSubtitle>{vehicule?.model}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className='features'>
            <IonLabel>
              <strong>Immat:</strong> {vehicule?.immat}
            </IonLabel>
            <IonLabel>
              <strong>Etat:</strong> {vehicule?.state}
            </IonLabel>
            <IonLabel>
              <strong>Dispo:</strong> {vehicule?.available}
            </IonLabel>
          </IonCardContent>
        </IonCard>
        <IonButton expand="block" color="secondary">Modifier</IonButton>
        <IonButton expand="block" color="danger">Supprimer</IonButton>
    </>
  )
}

export default VehiculeDetail