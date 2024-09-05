const { adRequest } = require('../../models/adModel');

const adRequestSave = async (req, res) => {
  try {
    const { adname, requirements, payment_amount, influencer_requested, status, campaignId } = req.body;
    console.log("Adname:", adname);
    console.log("Req:", requirements);
    console.log("Payment:", payment_amount);
    console.log("Influencer:", influencer_requested);
    console.log("Status:", status);
    console.log("CampaignId:", campaignId);

    const newAd = new adRequest({
      name: adname,
      campaignId: campaignId,
      influencer_username: influencer_requested,
      requirements,
      payment_amount,
      status,
    });

    const data = await newAd.save();
    res.json(data);
    console.log("Data ad req saved to db");
  } catch (err) {
    console.log("Error in storing adrequest save in backend:", err);
    res.status(500).send("Server error");
  }
};

module.exports = { adRequestSave };
