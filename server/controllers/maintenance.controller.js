import MaintenanceService from "../services/maintenance.service.js";

//double check everything.

export const CreateMaintenanceLog = async(req,res) => {
    const maintenanceData = req.body;
    try{
        const maintenanceLog = await MaintenanceService.createMaintenanceLog(maintenanceData);
        return res.status(200).json(maintenanceLog);
    } catch(error){
        console.log(error); //console.log or console.error?
        return res.status(500).json({msg:"Server error, Please try again."}); // check if this is what you want.
    }
};

export const GetMaintenanceLogById = async(req, res) => {
    const id = req.body; //double check this, change if necessary: req.params.id
    try{
        const log = await MaintenanceService.getMaintenanceLogById(id);
        if(!log){
            return res.sendStatus(204);
        }
        return res.status(200).json(log);
    } catch(error){
        console.error("Error fetching maintenance log by id:", error);
        return res.sendStatus(500);
    }
};

export const GetMaintenanceByPage = async(req, res) => {
    const pageNumber = req.body; //double check
    try{
        const maintenanceLogs = await MaintenanceService.getMaintenanceByPage(pageNumber);
        if(!maintenanceLogs){
            return res.sendStatus(204);
        }
        return res.status(200).json(maintenanceLogs);
    } catch(error){
        console.error("Error fetching maintenance log by page:", error);
        return res.sendStatus(500);        
    }
};

export const GetRecentSpecifiedLogs = async(req, res) => {
    const amount = req.body; //double check
    try{
        const recentLogs = await MaintenanceService.getRecentSpecifiedLogs(amount);
        if(!recentLogs){
            return res.sendStatus(204);
        }
        return res.status(200).json(recentLogs);
    } catch(error){
        console.error("Error fetching recent specified maintenance logs:", error);
        return res.sendStatus(500);        
    }
};

export const UpdateMaintenanceLog = async(req, res) => {
    const {id, updateData} = req.body; //double check
    try{
        const log = await MaintenanceService.updateMaintenanceLog(id, updateData);
        if(!log){
            return res.sendStatus(204);
        }
        return res.status(200).json(log);
    } catch(error){
        console.error("Error updating maintenance log by id:", error);
        return res.sendStatus(500);        
    }
};

export const DeleteMaintenanceLog = async(req, res) => {
    const id = req.body; //double check
    try{
        const condition = await MaintenanceService.deleteMaintenanceLog(id);
        if(!condition){
            return res.status(500).json({msg: "Failed to delete maintenance log."});
        }
        return res.status(200).json({msg: "Maintenance log deleted successfully."});
    } catch(error){
        console.error("Error maintenance log by id:", error);
        return res.sendStatus(500);        
    }
};
