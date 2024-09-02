const mongoose = require('mongoose')
const Influencers = require('../../models/influencerModel')
const bcrypt = require('bcryptjs')


const influencerLogin = async (req, res) => {

    const { email, password } = req.body;
    const influencer = await Influencers.findOne({ email: email });
    if (influencer && await bcrypt.compare(password, influencer.password)) {
        return res.status(200).json({ success: true, influencerId: influencer._id });
    } else {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

}

module.exports = { influencerLogin }