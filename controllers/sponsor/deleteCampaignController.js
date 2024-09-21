const mongoose = require('mongoose');
const { Campaigns } = require('../../models/campaignModel');
const { adRequest } = require('../../models/adModel');

const deleteCampaign = async (req, res) => {
  try {
    const campaignId = req.headers['campaign_id'];

    // Step 1: Delete the campaign
    const deletedCampaign = await Campaigns.deleteOne({ _id: campaignId });

    if (deletedCampaign.deletedCount === 0) {
      return res.status(404).json({ message: 'Campaign not found' });
    }

    // Step 2: Delete related adRequests
    const deletedAdRequests = await adRequest.deleteMany({ campaignId: campaignId });

    res.json({
      message: 'Campaign and related ad requests successfully deleted',
      deletedAdRequestsCount: deletedAdRequests.deletedCount,
    });

    console.log("Campaign and related adRequests deleted from DB");
  } catch (error) {
    res.status(500).json({ message: 'Error deleting campaign and ad requests', error });
  }
};

module.exports = { deleteCampaign };
