  // Function to get all customer data
  function getAllCustomerData() {
    const customerData = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('customer_')) {
            try {
                const data = JSON.parse(localStorage.getItem(key));
                customerData.push(data);
            } catch (e) {
                console.error('Error parsing data for key:', key);
            }
        }
    }
    return customerData;
}

// Function to display customer data in table
function loadCustomerData() {
    const tableBody = document.getElementById('customerTableBody');
    const storedData = localStorage.getItem('customerData');
    
    if (storedData) {
        const customerData = JSON.parse(storedData);
        
        // Create a table row
        const row = document.createElement('tr');
        
        // Add cells for each piece of data
        row.innerHTML = `
            <td>${customerData.firstName || ''}</td>
            <td>${customerData.lastName || ''}</td>
            <td>${customerData.email || ''}</td>
            <td>${customerData.phone || ''}</td>
            <td>${customerData.birthDate || ''}</td>
            <td>${customerData.preferredContact || ''}</td>
            <td>${customerData.deliveryAddress || ''}</td>
            <td class="${customerData.foodPreferences.includes('vegetarian') ? 'checkbox-true' : 'checkbox-false'}">
                ${customerData.foodPreferences.includes('vegetarian') ? '✓' : '✕'}
            </td>
            <td class="${customerData.foodPreferences.includes('glutenFree') ? 'checkbox-true' : 'checkbox-false'}">
                ${customerData.foodPreferences.includes('glutenFree') ? '✓' : '✕'}
            </td>
            <td class="${customerData.foodPreferences.includes('dairyFree') ? 'checkbox-true' : 'checkbox-false'}">
                ${customerData.foodPreferences.includes('dairyFree') ? '✓' : '✕'}
            </td>
            <td class="${customerData.foodPreferences.includes('nutAllergy') ? 'checkbox-true' : 'checkbox-false'}">
                ${customerData.foodPreferences.includes('nutAllergy') ? '✓' : '✕'}
            </td>
            <td class="${customerData.marketingPreferences.includes('emailNewsletter') ? 'checkbox-true' : 'checkbox-false'}">
                ${customerData.marketingPreferences.includes('emailNewsletter') ? '✓' : '✕'}
            </td>
            <td class="${customerData.marketingPreferences.includes('smsOffers') ? 'checkbox-true' : 'checkbox-false'}">
                ${customerData.marketingPreferences.includes('smsOffers') ? '✓' : '✕'}
            </td>
            <td>0</td>
            <td>N/A</td>
            <td class="status-active">Active</td>
        `;
        
        tableBody.appendChild(row);
    } else {
        // If no data is found, display a message
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="16" style="text-align: center;">No customer data found</td>';
        tableBody.appendChild(row);
    }
}

// Load data when the page loads
window.addEventListener('load', loadCustomerData);