import VehicleService from "../services/vehicle.service.js";

//double check everything.

export const CreateVehicle = async(req, res) => {
    const vehicleData = req.body;
    try{
        const vehicle = await VehicleService.createVehicle(vehicleData);
        return res.status(200).json(vehicle);
    } catch(error){
        console.log(error); //console.log or console.error?
        return res.status(500).json({ msg: "Server error, Please try again."}); //
    }
};

export const GetVehicleById = async(req, res) => {
    const id = req.body; //double check this, change if necessary: req.params.id
    try{
        const vehicle = await VehicleService.getVehicleById(id);
        if(!vehicle){
            return res.sendStatus(204);
        }
        return res.status(200).json(vehicle);
    } catch(error){
        console.error("Error fetching vehicle by ID:", error);
        return res.sendStatus(500);
    }
};

export const GetAllVehicles = async(req, res) => {
    try{
        const vehicles = await VehicleService.getAllVehicles();
        if(!vehicles){
            return res.sendStatus(204);
        }
        return res.status(200).json(vehicles);
    } catch(error){
        console.error("Error fetching vehicles:", error);
        return res.sendStatus(500);
    }
};

//Don't know if updateVehicleById is left unfinished in vehicle.service.js
export const UpdateVehicleById = async(req, res) => {
    const { id, updateData } = req.body; //double check
    try{
        await VehicleService.updateVehicleById(id, updateData);
        return res.sendStatus(200);
    } catch(error){
        console.error("Error updating vehicle by id:", error);
        return res.sendStatus(500);        
    }
};

export const DeleteVehicleById = async(req, res) => {
    const id = req.body; //double check
    try{
        const condition = await VehicleService.deleteVehicleById(id);
        if(!condition){
            return res.status(500).json({msg: "Failed to delete vehicle."});
        }
        return res.status(200).json({msg: "vehicle deleted successfully."});
    } catch(error){
        console.error("Error deleting vehicle by id:", error);
        return res.sendStatus(500);        
    } 
};