import mongoose from 'mongoose'

const HistorySchema = new mongoose.Schema({
    historyData: {
        type: [String],
        required: true
    }
}, { collection: 'history' });

const History = mongoose.model('History', HistorySchema);

export default History;
