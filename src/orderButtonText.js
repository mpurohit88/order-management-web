export default function orderButtonText(status) {
    switch(status) {
        case '1':
            return {status: 'Start Preparing', color: '#827717'};
        case '2':
            return {status: 'Order Is Ready', color: '#1b5e20'};
        case '3':
            return {status: 'Delivered', color: '#1b5e20'};
        default:
            return {status: 'Done', color: ''};;
    }
}