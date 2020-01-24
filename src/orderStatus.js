export default function orderStatus(status) {
    switch(status) {
        case '1':
            return {status: 'New Order', color: '#bf360c'};
        case '2':
            return {status: 'Preparing', color: '#827717'};
        case '3':
            return {status: 'Ready', color: '#1b5e20'};
        case '4':
            return {status: 'Delivered', color: '#263238'};
        default:
            return {status: '', color: ''};;
    }
}