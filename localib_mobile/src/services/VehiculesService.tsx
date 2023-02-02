import { Vehicule } from '../models/vehiculeModel'

const URL : string = "http://localhost:3000/vehicules"

class VehiculesService {

  /**
   * Permet de récuperer tous les vehicules en DB
   * @returns liste de vehicules
   */
  findAllVehicule = () => {
    return fetch(URL)
    .then(res => res.json())
  }

  /**
     * fonction pour récupérer un véhicule par son id
     * @param id :number l'id du véhicule à chercher
     * @returns le véhicule avec l'id donné en paramètre
     */
  findVehiculeById = (id : number) => {
    return fetch(`${URL}/${id}`, {
        method: "GET",
    }).then(response => response.json())
}

  /**
   * Permet de créer un vehicule
   * @param vehicule les information du vehicule à créer
   * @returns un nouveau vehicule
   */
   createVehicule = (vehicule : Vehicule) => {
    return fetch(URL, {
      method: "POST",
      body: JSON.stringify(vehicule),
      headers: {"content-type": "application/json"}
    }).then((res) => res.json())
  }

  /**
    * Permet de supprimer un vehicule par son id
    * @param id l'id du vehicule a supprimer
    * @returns ok si le vehicule a été supprimé
    */
  deleteVehicule = (id : number) => {
    return fetch(`${URL}/${id}`, {
      method: "DELETE",
    }).then(res => res.json())
  }

  /**
   * Permet de mettre à jour les informations d'un vehicule
   * @param id l'id du vehicule à mettre à jour
   * @param vehicule les informations du vehicule à modifier
   * @returns le vehicule avec ses informations mises à jour
   */
  updateFullVehicule = (id : number, vehicule : Vehicule) => {
    return fetch(`${URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(vehicule),
      headers: {"content-type": "application/json"}
    }).then(res => res.json())
  }
}

export const vehiculeService = Object.freeze(new VehiculesService())