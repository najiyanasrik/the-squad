function showMessage() {
    alert("Welcome to your fitness journey! Let's get started.");
}



let order = [];


function addToOrder(item) {
    order.push(item);
    updateOrderList();
}

function updateOrderList() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';
    order.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        orderList.appendChild(li);
    });
}

function submitOrder() {
    if (order.length === 0) {
        alert('Your order is empty!');
    } else {
        alert('Order submitted: ' + order.join(', '));
        order = [];
        updateOrderList();
    }
}
