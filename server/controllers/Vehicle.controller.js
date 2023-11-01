//import VechicleService from "../services/vehicle.service.js";
import LocalInspectionService from "../services/localInspection.service.js";

export const createVehicleInspection = async(req, res) => {
    const checklistData = req.body;
    try{
        await LocalInspectionService.createLocalInspection(checklistData);
    } catch(error){
        console.log(error);
        res.status(500).json({ msg: "Server error, Please try again."});
    }
}

export const getVehicleInspection = async(req, res) => {
    const ID = req.body;
    try {
        const localInspection = await LocalInspectionService.getLocalInspectionById(id)
        if(!localInspection){
            return res.sendStatus(204);
        }
        return res.status(200).json(localInspection)
    }catch(error){
        console.error("Error fetching users:", error);
        return res.sendStatus(500);
    }
}

