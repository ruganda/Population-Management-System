import models from "../models/index";
import chalk from 'chalk';


const Location = models.Location;

class LocationController {
  
   createLocation(req, res) {
    const {name, totalMales, totalFemales, locationId} = req.body;
   
    const location ={
        name,
        totalMales: parseInt(totalMales),
        totalFemales: parseInt(totalFemales),
        locationId: parseInt(locationId)|| null,
        total: parseInt(totalMales) + parseInt(totalFemales)
      }
    Location.create(location)
      .then((location) => {
        res.status(201).send({
          location
        });
      })
      .catch(err=> console.log({err}) || res.status(500).send({err}))
  };

  viewAllLocations(req, res){
    Location.findAll(
      {include: Location}
    )
    .then((locations)=>{
      res.status(200).send({
        locations
        })
    })
    .catch(err=> res.status(500).send({err}))

  }

  updateLocation(req, res){
    const {totalMales, totalFemales, locationId} = req.body;
    Location.update(
      {totalMales, totalFemales, locationId},
      {where:{id:req.params.locationId}}
    )
    .then((result)=>{
      res.status(200).send({message:"Location details updated successfully"})
    })
    .catch(err=> res.status(500).send({err}))
  }

  deleteLocation(req, res){
    Location.destroy({where:{id:req.params.locationId}})
    .then(()=> res.status(200).send({message: "Location deleted"}))
    .catch(err=> res.status(500).send({err}))
  }
}


export default LocationController;
