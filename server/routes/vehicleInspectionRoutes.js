import express from 'express';
import VehicleInspection from '../models/VehicleInspection.js';

const router = express.Router();

// Other routes...

router.post('/addInspection', async (req, res) => {
    const {
        vehicleNumber,
        yearMakeModel,
        tag,
        date,
        mileage,
        workTicket,
        personReleasingVehicle,
        bodyOfVehicle,
        tiresConditionAndAirPressure,
        horn,
        stateInspectionAndLicSticker,
        wipersReservoir,
        lowAndHighBeamHeadlights,
        brakeLights,
        turnSignalLights,
        emergencyFlasherLights,
        vehicleInsuranceCardValid,
        gasTankFull,
        emergencyInstructions,
        washVehicle,
        comments,
        dpwSignature
    } = req.body;

    try {
        // Create a new vehicle inspection record
        const newInspection = await VehicleInspection.create({
            vehicleNumber,
            yearMakeModel,
            tag,
            date,
            mileage,
            workTicket,
            personReleasingVehicle,
            bodyOfVehicle,
            tiresConditionAndAirPressure,
            horn,
            stateInspectionAndLicSticker,
            wipersReservoir,
            lowAndHighBeamHeadlights,
            brakeLights,
            turnSignalLights,
            emergencyFlasherLights,
            vehicleInsuranceCardValid,
            gasTankFull,
            emergencyInstructions,
            washVehicle,
            comments,
            dpwSignature
        });

        // Return the created inspection
        res.status(201).json(newInspection);

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Failed to add inspection" });
    }
});

export default router;
