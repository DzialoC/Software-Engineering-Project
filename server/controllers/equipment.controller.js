import EquipmentService from "../services/equipment.service.js";

//double check on req statements and everything else too.

export const CreateEquipment = async(req, res) => {
    const equipmentData = req.body;
    try{
        const equipment = await EquipmentService.createEquipment(equipmentData);
        return res.status(200).json(equipment);
    } catch(error){
        console.log(error); //console.log or console.error?
        return res.status(500).json({ msg: "Server error, Please try again."}); //
    }
};

export const GetEquipmentById = async(req, res) => {
    const id = req.body; //double check this, change if necessary: req.params.id
    try{
        const equipment = await EquipmentService.getEquipmentById(id);
        if(!equipment){
            return res.sendStatus(204);
        }
        return res.status(200).json(equipment);
    } catch(error){
        console.error("Error fetching equipment by ID:", error);
        return res.sendStatus(500);        
    }
};

export const GetAllEquipment = async(req, res) => {
    try{
        const allEquipment = await EquipmentService.getAllEquipment();
        if(!allEquipment){
            return res.sendStatus(204);
        }
        return res.status(200).json(allEquipment);
    } catch(error){
        console.error("Error fetching all equipment:", error);
        return res.sendStatus(500);        
    }
};

export const GetEquipmentByPage = async(req, res) => {
    const pageNumber = req.body; //double check
    try{
        const equipment = await EquipmentService.getEquipmentByPage(pageNumber);
        if(!equipment){
            return res.sendStatus(204);
        }
        return res.status(200).json(equipment);
    } catch(error){
        console.error("Error fetching equipment by page:", error);
        return res.sendStatus(500);   
    }
};

export const UpdateEquipment = async(req, res) => {
    const {id, updataData} = req.body; //double check
    try{
        const equipment = await EquipmentService.updateEquipment(id, updataData);
        if(!equipment){
            return res.sendStatus(204);
        }
        return res.status(200).json(equipment);
    } catch(error){
        console.error("Error updating equipment by id:", error);
        return res.sendStatus(500);          
    }
};

export const DeleteEquipment = async(req, res) => {
    const id = req.body; //double check
    try{
        const condition = await EquipmentService.deleteEquipment(id);
        if(!condition){
            return res.status(500).json({msg: "Failed to delete equipment."});
        }
        return res.status(200).json({msg: "Equipment deleted successfully."});
    } catch(error){
        console.error("Error deleting equipment by id:", error);
        return res.sendStatus(500);         
    }
};
