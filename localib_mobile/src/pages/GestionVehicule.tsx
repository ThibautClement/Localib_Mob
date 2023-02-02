import { IonPage } from '@ionic/react'
import React from 'react'
import VehiculeList from '../components/list/VehiculeList'
import Nav from '../components/Nav'

const GestionVehicule = () => {
  return (
    <>
      <Nav data={"Vehicules"}/>
      <VehiculeList/>
    </>
  )
}

export default GestionVehicule