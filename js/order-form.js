const form = document.getElementById('burger-order-form');

    form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        burgerChoice: form['burger-type'].value,
        extraCheese: form['extra-cheese'].checked,
        extraBacon: form['extra-bacon'].checked,
        addAvocado: form['add-avocado'].checked,
        premiumFries: form['premium-fries'].checked,
        specialInstructions: form['special-instructions'].value
    };

    localStorage.setItem('burgerOrderData', JSON.stringify(formData));
    alert('Order placed ! ');
    form.reset();
});