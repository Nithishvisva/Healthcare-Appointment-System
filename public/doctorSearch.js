document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const specialty = document.getElementById('specialty').value;
    const location = document.getElementById('location').value;
  
    fetch(`/api/doctors?specialty=${specialty}&location=${location}`)
      .then(response => response.json())
      .then(doctors => {
        const doctorList = document.getElementById('doctor-list');
        doctorList.innerHTML = '';
  
        doctors.forEach(doctor => {
          const li = document.createElement('li');
          li.textContent = `${doctor.name} - ${doctor.specialty} - ${doctor.location}`;
          doctorList.appendChild(li);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  