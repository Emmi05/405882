// Inicializar mapa (centrado entre SC y GA)
    var map = L.map('map').setView([33.5, -82.5], 6);

    // Cargar tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Marcadores
    L.marker([33.8361, -81.1637]).addTo(map).bindPopup('South Carolina');
    L.marker([33.7490, -84.3880]).addTo(map).bindPopup('Georgia');