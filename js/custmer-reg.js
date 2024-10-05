document.getElementById('customerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      birthDate: formData.get('birthDate'),
      preferredContact: formData.get('preferredContact'),
      deliveryAddress: formData.get('deliveryAddress'),
      foodPreferences: Array.from(formData.getAll('foodPreferences')),
      marketingPreferences: Array.from(formData.getAll('marketingPreferences'))
    };
    
    // Store in localStorage
    localStorage.setItem('customerData', JSON.stringify(data));
    
    alert('Registration data has been saved!');
    
    // Optional: Display stored data
    console.log('Stored data:', data);
  });

  // Load data from localStorage if it exists
  window.addEventListener('load', function() {
    const storedData = localStorage.getItem('customerData');
    if (storedData) {
      const data = JSON.parse(storedData);
      const form = document.getElementById('customerForm');
      
      // Populate form fields
      form.firstName.value = data.firstName || '';
      form.lastName.value = data.lastName || '';
      form.email.value = data.email || '';
      form.phone.value = data.phone || '';
      form.birthDate.value = data.birthDate || '';
      form.preferredContact.value = data.preferredContact || '';
      form.deliveryAddress.value = data.deliveryAddress || '';
      
      // Checkboxes for food preferences
      data.foodPreferences.forEach(pref => {
        const checkbox = form.querySelector(`input[name="foodPreferences"][value="${pref}"]`);
        if (checkbox) checkbox.checked = true;
      });
      
      // Checkboxes for marketing preferences
      data.marketingPreferences.forEach(pref => {
        const checkbox = form.querySelector(`input[name="marketingPreferences"][value="${pref}"]`);
        if (checkbox) checkbox.checked = true;
        customerForm.reset();
      });
     
    }
  });