const mongoose = require('mongoose')
const Sponsors = require('../../models/sponsorModel')
const bcrypt = require('bcryptjs')


const sponsorLogin = async (req, res) => {

    const { email, password } = req.body;
    const sponsor = await Sponsors.findOne({ email: email });
    if (sponsor && await bcrypt.compare(password, sponsor.password)) {
        return res.status(200).json({ success: true, sponsorId: sponsor._id });
    } else {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

}

module.exports = { sponsorLogin }