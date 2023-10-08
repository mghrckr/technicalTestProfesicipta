

export const fetchItems = () => {
    return async dispatch => {
        try {
            let response = await fetch(`https://dev.profescipta.co.id/so-api/Order/GetItems`)
            if (!response.ok) throw await response.text()
            response = await response.json()
            dispatch({ type: 'items/get', payload: response })
        } catch (err) {
            console.log(err);
        }
    }
}
export const fetchOrders = () => {
    return async dispatch => {
        try {
            let response = await fetch(`https://dev.profescipta.co.id/so-api/Order/GetOrderList`)
            if (!response.ok) throw await response.text()
            response = await response.json()
            dispatch({ type: 'orders/get', payload: response })
        } catch (err) {
            console.log(err);
        }
    }
}