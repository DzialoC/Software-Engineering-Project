import VechicleService from "../services/vehicle.service.js";

export const createVehicleChecklist = async(req, res) => {
    const checklistData = req.body;
    try{
        await VechicleService.createVehicle(checklistData);
    } catch(error){
        console.log(error);
        res.status(500).json({ msg: "Server error, Please try again."});
    }
}