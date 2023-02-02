import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonItem, IonLabel, IonList, IonModal, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useRef, useState } from 'react'
import { Vehicule } from '../../models/vehiculeModel'
import { vehiculeService } from '../../services/VehiculesService'
import '../../assets/style/VehiculeList.css'
import Nav from '../Nav'

const VehiculeList = () => {

  const [vehicule, setVehicule] = useState<Vehicule>({id: 0, img:"", immat:"", brand:"", model:"", state: "", type: "", priceDay: 0, available: true})

  const [vehicules, setVehicules] = useState<Vehicule[]>([])

  /**
   * Permet de récupèrer la liste des vehicules à l'initialisation du component
   */
  useEffect(() => {
    getAllVehicules()
  }, [])
  
  /**
   * Fonction qui permet de récuperer tous les vehicules depuis le vehiculeervice
   */
  const getAllVehicules = () => {
    vehiculeService.findAllVehicule().then(data => setVehicules(data))
  }

  /**
   * Fonction qui permet de supprimer un vehicule par son id depuis le vehiculeService
   * @param id l'id du vehicule à supprimer
   */
  const deleteVehicule = (id: number) => {
    vehiculeService.deleteVehicule(id).then(() => getAllVehicules())
  }

  /**
   * Fonction qui permet d'ajouter un vehicule depuis le vehiculeService
   * @param user les informations du vehicule à créer
   */
  const addNewVehicule = (vehicule : Vehicule) => {
    vehiculeService.createVehicule(vehicule).then(() => getAllVehicules())
  }

  /**
   * Fonction qui permet de mettre à jour un vehicule
   * @param id  l'id du vehicule
   * @param user les infos du vehicule à mettre à jour
   */
  const updateVehicule = (id: number, vehicule : Vehicule) => {
    vehiculeService.updateFullVehicule(id, vehicule).then(() => getAllVehicules())
  }

  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

  return (
    <>
      <IonButton className='addButton' id='open-modal' expand="block" color="success">Ajouter</IonButton>
      <IonModal id="example-modal" ref={modal} trigger="open-modal">
        <IonContent>
          <IonToolbar>
            <IonTitle>Modal</IonTitle>
              <IonButton slot='end' color="light" onClick={() => dismiss()}>
                Close
              </IonButton>
          </IonToolbar>
          <IonInput placeholder="Custom input" class="custom"></IonInput>
          <IonInput placeholder="Custom input" class="custom"></IonInput>
          <IonInput placeholder="Custom input" class="custom"></IonInput>
          <IonInput placeholder="Custom input" class="custom"></IonInput>
        </IonContent>
      </IonModal>
      <IonContent>
        <IonList>
          {(vehicules) && vehicules.map((vehicule : Vehicule, index : number) => (
            <IonCard key={index} routerLink={`/vehiculedetails/${vehicule.id}`}>
              <img alt="BMW" src='https://www.bmw.fr/content/dam/bmw/common/all-models/1-series/5-door/2021/navigation/bmw-1-series-modelfinder.png' />
              <IonCardHeader>
                <IonCardTitle>{vehicule.brand}</IonCardTitle>
                <IonCardSubtitle>{vehicule.model}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent className='features'>
                <IonLabel>
                  <strong>Immat:</strong> {vehicule.immat}
                </IonLabel>
                <IonLabel>
                  <strong>Etat:</strong> {vehicule.state}
                </IonLabel>
                <IonLabel>
                  <strong>Dispo:</strong> {vehicule.available}
                </IonLabel>
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>
        <IonInfiniteScroll>
          <IonInfiniteScrollContent loadingText="Please wait..." loadingSpinner="bubbles"></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </>
  )
}

export default VehiculeList