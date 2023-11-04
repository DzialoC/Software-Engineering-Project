import LocalInspectionService from "../services/localInspection.service.js";

//double check everything.

export const CreateLocalInspection = async(req, res) => {
    const checklistData = req.body;
    try{
        const inspectionLog = await LocalInspectionService.createLocalInspection(checklistData);
        return res.status(200).json(inspectionLog);
    } catch(error){
        console.log(error); //console.log or console.error?
        return res.status(500).json({ msg: "Server error, Please try again."}); //
    }
}

//Double check if req.body is correct, if not change it.
export const GetLocalInspectionByID = async(req, res) => {
    const id = req.body; //change if necessary: req.params.id
    try {
        const localInspection = await LocalInspectionService.getLocalInspectionById(id);
        if(!localInspection){
            return res.sendStatus(204);
        }
        return res.status(200).json(localInspection);
    }catch(error){
        console.error("Error fetching Vehicle Inspection:", error);
        return res.sendStatus(500);
    }
}

//Double check if req.body is correct, if not change it.
export const GetVehicleInspectionByPage = async(req, res) => {
    const page = req.body; //change if necessary
    try {
        const localInspection = await LocalInspectionService.getLocalInspectionByPage(page);
        if(!localInspection){
            return res.sendStatus(204);
        }
        return res.status(200).json(localInspection);
    }catch(error){
        console.error("Error fetching Vehicle Inspection:", error);
        return res.sendStatus(500);
    }
}

export const GetRecentSpecifiedLogs = async(req, res) => {
    const amount = req.body; //change if necessary
    try {
        const recentInspections = await LocalInspectionService.getRecentSpecifiedLogs(amount);
        if(!recentInspections){
            return res.sendStatus(204);
        }
        return res.status(200).json(recentInspections);
    }catch(error){
        console.error("Error fetching recent vehicle inspections:", error);
        return res.sendStatus(500);
    }
}

export const UpdateSpecifiedLog = async(req, res) => {
    const { id, inspectionData } = req.body; //double check
    try {
        const localInspection = await LocalInspectionService.updateSpecifiedLog(id, inspectionData);
        if(!localInspection){
            return res.sendStatus(204);
        }
        return res.status(200).json(localInspection);
    }catch(error){
        console.error("Error updating specified log:", error);
        return res.sendStatus(500);
    }
}

export const DeleteSpecifiedLog = async(req, res) => {
    const id = req.body; //double check
    try {
        const condition = await LocalInspectionService.deleteSpecifiedLog(id);
        if(!condition){
            return res.status(500).json({msg: "Failed to delete specified log."});
        }
        return res.status(200).json({msg: "Specified log deleted successfully."}) //left out .json(condition)
    }catch(error){
        console.error("Error deleting specified log:", error);
        return res.sendStatus(500);
    }
}

