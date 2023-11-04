import DamageReportService from "../services/damageReport.service.js";

//double check everything.

export const CreateDamageReport = async(req, res) => {
    const damageData = req.body;
    try{
        const damageReport = await DamageReportService.createDamageReport(damageData);
        return res.status(200).json(damageReport);
    } catch(error){
        console.log(error); //console.log or console.error?
        return res.status(500).json({ msg: "Server error, Please try again."}); //
    }
}

export const GetDamageReportById = async(req, res) => {
    const id = req.body; //double check this, change if necessary: req.params.id
    try{
        const report = await DamageReportService.getDamageReportById(id);
        if(!report){
            return res.sendStatus(204);
        }
        return res.status(200).json(report);
    } catch(error){
        console.error("Error damage report by ID:", error);
        return res.sendStatus(500);
    }
}

export const GetTwentyRecentDamageReport = async(req, res) => {
    try{
        const reports = await DamageReportService.getTwentyRecentDamageReport();
        if(!reports){
            return res.sendStatus(204);
        }
        return res.status(200).json(reports);
    } catch(error){
        console.error("Error fetching twenty recent damage reports:", error);
        return res.sendStatus(500);
    }
}

export const GetDamageReportByPage = async(req, res) => {
    const pageNumber = req.body; //double check
    try{
        const reports = await DamageReportService.getDamageReportByPage(pageNumber);
        if(!reports){
            return res.sendStatus(204);
        }
        return res.status(200).json(reports);
    } catch(error){
        console.error("Error fetching damage report by page:", error);
        return res.sendStatus(500);
    }
}

export const GetRecentSpecifiedDamageReports = async(req, res) => {
    const amount = req.body; //double check
    try{
        const recentLogs = await DamageReportService.getRecentSpecifiedDamageReports(amount);
        if(!recentLogs){
            return res.sendStatus(204);
        }
        return res.status(200).json(recentLogs);
    } catch(error){
        console.error("Error fetching recent specified damage reports:", error);
        return res.sendStatus(500);
    }
}

export const UpdateDamageReportById = async(req, res) => {
    const { id, updateData } = req.body; //double check
    try {
        const report = await DamageReportService.updateDamageReportById(id, updateData);
        if(!report){
            return res.sendStatus(204);
        }
        return res.status(200).json(report);
    }catch(error){
        console.error("Error updating damage report by id:", error);
        return res.sendStatus(500);
    }
}

export const DeleteDamageReport = async(req, res) => {
    const id = req.body; //double check
    try {
        const condition = await DamageReportService.deleteDamageReport(id);
        if(!condition){
            return res.status(500).json({msg: "Failed to delete damage report."});
        }
        return res.status(200).json({msg: "Damage report deleted successfully."});
    }catch(error){
        console.error("Error deleting damage report by id:", error);
        return res.sendStatus(500);
    }
}
