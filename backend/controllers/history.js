import History from '../models/history.js';

const postHistory = async (req, res) => {
    const firstSevenDays = req.days.slice(0, 7)
    const days = firstSevenDays
    const tempData = days.temp

    try {
        firstSevenDays.map((day) => console.log(day.temp))

    } catch (err) {
        console.error('Error saving history data:', err);
        res.status(500).send('Internal Server Error');
    }
};

const getHistory = async () => {
    try {
        const history = await History.find();
        res.json(history);
    } catch (err) {
        console.error('Error retrieving history data:', err);
        res.status(500).send('Internal Server Error');
    }
};

export default postHistory