const mongoose = require("mongoose");
const {adRequest} = require("../../models/adModel");

const updateAd = async (req, res) => {
  try {
    const { ad_id, name, campaign_id, requirements, payment_amount, status, campaignName,sponsorName } = req.body;

    let updatedAd = await adRequest.findOneAndUpdate(
      { ad_id }, 
      {
        name,
        requirements,
        payment_amount,
        status,
        campaignName,
        sponsorName,
      },
      { new: true, runValidators: true } 
    );

    if (!updatedAd) {
      return res.status(404).json({ error: "Ad not found" });
    }

    console.log("Updated Ad:", updatedAd);

    res.json(updatedAd);
  } catch (err) {
    console.error("Error updating Ad status:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { updateAd };
