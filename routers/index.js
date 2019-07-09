import express from 'express';
import LocationController from '../controllers/LocationController';



const location = new LocationController();
const router = express.Router();

router.post("/location", location.createLocation)
router.get("/location", location.viewAllLocations)
router.put("/location/:locationId", location.updateLocation)
router.delete("/location/:locationId", location.deleteLocation)

export default router;
