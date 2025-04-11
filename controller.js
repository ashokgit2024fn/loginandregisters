const userdata = require('./model.js');

// Get all data
async function getdata(req, res) {
    try {
        const allData = await userdata.find();
        res.status(200).json(allData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

// Post new data
async function postdata(req, res) {
    try {
        const newdata = new userdata(req.body);
        console.log(newdata);
        await newdata.save();
        res.status(200).json(newdata);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error saving data' });
    }
}

// Get single data by ID (using the auto-incremented ID)
async function getsingledata(req, res) {
    try {
        const data = await userdata.findOne({ ID: req.params.id }); // Find by the custom 'ID' field
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error retrieving data' });
    }
}

async function putdata(req, res) {
    try {
        const updatedData = await userdata.findOneAndUpdate(
            { ID: req.params.id }, // Find by the custom 'ID' field
            req.body,
            { new: true }
        );
        if (!updatedData) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json(updatedData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error updating data' });
    }
}

async function deletedata(req, res) {
    try {
        const deletedData = await userdata.findOneAndDelete({ ID: req.params.id }); 
        if (!deletedData) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error deleting data' });
    }
}

module.exports = { getdata, postdata, getsingledata, putdata, deletedata };
