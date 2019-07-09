import app from '../server.js';
import request from 'supertest';
import models from "../models/index";
const expect = require('chai').expect;

const createLocation =()=>{
  const location1 ={
  "name": "Entebbe",
  "totalMales": "25200",
  "totalFemales":"59300",
  "locationId": null
}
  const res = ( async ()=> await request(app).post('/location').send(location1)
    )();
  return res
}

const getAllLocations =()=>{

  const res = ( async ()=> await request(app).get('/location')
    )();
  return res
}


describe('Test location routes', ()=>{
  let testLocation;
  let allLocations;
  beforeEach(async()=>{
    testLocation = await createLocation()
    allLocations = await getAllLocations()
  })

  it('should add a location', (done)=>{
    const location ={
      "name": "Gaba",
      "totalMales": "25200",
      "totalFemales":"59300",
      "locationId": null
    }
    request(app).post('/location')
    .send(location)
   .end((err, res)=>{
    expect(res.status).to.equal(201)
    expect(res.body.location.name).to.equal("Gaba")
    done();
   })
   
  })

  it('fetch all locations', (done)=>{
    request(app).get('/location')
   .end((err, res)=>{
    expect(res.status).to.equal(200)
    expect(res.body.locations[0].name).to.equal("Entebbe")
    done();
   })
  })

  it('should edit the location data successfully', (done)=>{
    const location ={
      "name": "Gaba edited",
      "totalMales": "25200",
      "totalFemales":"59300",
      "locationId": null
    }
    request(app).put(`/location/${testLocation.body.location.id}`)
    .send(location)
   .end((err, res)=>{
    expect(res.status).to.equal(200)
    expect(res.body.message).to.equal("Location details updated successfully")
    done();
   })
  })

  it('should delete the location data successfully', (done)=>{
    request(app).delete(`/location/${allLocations.body.locations[0].id}`)
   .end((err, res)=>{
    expect(res.status).to.equal(200)

    done();
   })
  })

})