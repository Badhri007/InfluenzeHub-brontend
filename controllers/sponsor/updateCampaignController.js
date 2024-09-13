const mongoose = require('mongoose');
const { Campaigns } = require('../../models/campaignModel');

const updateCampaign = async (req, res) => {
    try {
        const { _id, name, sponsorId, description, niche, budget, imageUrl, visibility, startDate, endDate, campaignFile } = req.body;

        console.log("Campaign ID:", _id);
        console.log("title:", name);
        console.log("description:", description);
        console.log("Sponsor Id:", sponsorId);
        console.log("niche:", niche);
        console.log("budget:", budget);
        console.log("visibility:", visibility);
        console.log("startDate:", startDate);
        console.log("endDate:", endDate);
        console.log("campaignFile:", campaignFile);
        console.log("imageUrl:", imageUrl);

        // Define updatedCampaign outside the block to avoid scoping issues
        let updatedCampaign;

        // Check if the image URL is provided
        if (imageUrl) {
            updatedCampaign = await Campaigns.findByIdAndUpdate(
                _id, 
                {
                    name,
                    sponsorId,
                    description,
                    niche,
                    budget,
                    visibility,
                    startDate,
                    endDate,
                    imageUrl // Include imageUrl when provided
                }, 
                { new: true, runValidators: true }
            );
        } else {
            updatedCampaign = await Campaigns.findByIdAndUpdate(
                _id, 
                {
                    name,
                    sponsorId,
                    description,
                    niche,
                    budget,
                    visibility,
                    startDate,
                    endDate
                    // No imageUrl in case it's undefined
                }, 
                { new: true, runValidators: true }
            );
        }

        // Check if campaign was found and updated
        if (!updatedCampaign) {
            return res.status(404).json({ message: "Campaign not found" });
        }

        // Return the updated campaign
        res.json(updatedCampaign);
        console.log("Campaign Updated in DB !!!");

    } catch (error) {
        console.error("Error updating campaign:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { updateCampaign };
