const mongoose = require("mongoose");
const Influencers = require("../../models/influencerModel");

const updateProfile = async (req, res) => {
  try {
    const { username, gender, niche, email, platform, reach, profile_photo_url,social_media_url } = req.body;

    let updatedProfile = await Influencers.findOneAndUpdate(
      { email }, 
      {
        username,
        gender,
        niche,
        email,
        platform,
        reach,
        profile_photo_url,
        social_media_url

      },
      { new: true, runValidators: true } 
    );

    if (!updatedProfile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    console.log("Updated Profile:", updatedProfile);

    res.json(updatedProfile);
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { updateProfile };
