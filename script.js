document.addEventListener('DOMContentLoaded', function () {
  // Baca data dari file JSON (diasumsikan file JSON berada pada path yang sama dengan script.js)
  fetch('Sales_per_Day.json')
  .then(response => response.json())
  .then(data => {
      // Ubah data JSON menjadi array labels dan array data
      const labels = data.map(item => item.day_of_week);
      const dataArray = data.map(item => parseInt(item.quantity_sold));

      // Tentukan nilai maksimum data
      const maxDataValue = Math.max(dataArray);

      // Inisialisasi Chart.js dengan data yang telah diubah
      const ctx = document.getElementById('myChart');
      new Chart(ctx, {
          type: 'bar',
          data: {
              labels: labels, // Gunakan array labels dari data JSON
              datasets: [{
                  label: 'quantity',
                  data: dataArray,
                  backgroundColor:'rgb(0,114,240)', // Gunakan array data dari data JSON
                  borderWidth: 1
              }]
            }
      });
  })
  .catch(error => console.error('Error fetching JSON:', error));
});




    document.addEventListener('DOMContentLoaded', function () {
      fetch('IncomeMonth.json')
      .then(response => response.json())
      .then(data => {
          const labels = data.map(item => item.bulan);
          const dataArray = data.map(item => parseFloat(item.total_penjualan_dollar.replace('$', '')));
  
          const ctl = document.getElementById('LineChart');
          new Chart(ctl, {
              type: 'line',
              data: {
                  labels: labels,
                  datasets: [{
                      label: 'Total Penjualan ($)',
                      data: dataArray,
                      borderWidth: 3,
                      backgroundColor: 'rgb(0, 114, 240)',
                      borderColor: 'rgb(0, 114, 240)'
                  }]
              }
          });
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });
  


    


    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
    function filterFunction() {
      var input, filter, ul, li, label, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown");
      label = div.getElementsByTagName("label");
      for (i = 0; i < label.length; i++) {
        txtValue = label[i].textContent || label[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          label[i].style.display = ""; // Tampilkan label jika cocok dengan pencarian
          label[i].previousElementSibling.style.display = ""; // Tampilkan checkbox sebelum label
        } else {
          label[i].style.display = "none"; // Sembunyikan label jika tidak cocok dengan pencarian
          label[i].previousElementSibling.style.display = "none"; // Sembunyikan checkbox sebelum label
        }
      }
  }


