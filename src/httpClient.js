const axios = require('axios');

export default {
    getOrders: async () => {
        try {
        const { data } = await axios('/api/getListOfOrder', { methodType: 'GET' }, {});
        return data;
        } catch (error) {
        throw error;
        }
    },
    updateOrderStatus: async (id, status) => {
        try {
        const { data } = await axios.post('/api/updateStatus', {data: {id: id, status: status}});
        return data;
        } catch (error) {
        throw error;
        }
    }
};
