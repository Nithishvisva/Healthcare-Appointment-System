document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const doctorId = document.getElementById('doctorId').value;
    const patientName = document.getElementById('patientName').value;
    const timeSlot = document.getElementById('timeSlot').value;
    const date = document.getElementById('date').value;
  
    fetch('/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ doctorId, patientName, timeSlot, date }),
    })
      .then(response => response.json())
      .then(data => {
        const confirmation = document.getElementById('confirmation');
        confirmation.textContent = 'Appointment booked successfully!';
      })
      .catch(error => console.error('Error:', error));
  });
  