import { IonPage } from '@ionic/react'
import Nav from '../components/Nav'
import VehiculeDetail2 from '../components/VehiculeDetail'

const VehiculeDetailPage = () => {
  return (
    <>
      <Nav data={"Details"} />
      <VehiculeDetail2/>
    </>
  )
}

export default VehiculeDetailPage