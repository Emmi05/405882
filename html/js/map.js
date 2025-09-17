   // Inicializar mapa (aprox. entre SC y GA)
    var map = L.map('map').setView([33.3, -82.9], 7);

    // Cargar tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Íconos personalizados
    var iconGeorgia = new L.Icon({
      iconUrl: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    var iconSC = new L.Icon({
      iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    // Lista de lugares con coordenadas y estado
    var lugares = [
      { nombre: "Georgia (Estado)", coords: [32.1656, -82.9001], estado: "GA" },
      { nombre: "South Carolina (Estado)", coords: [33.8361, -81.1637], estado: "SC" },
      { nombre: "Savannah, GA", coords: [32.0809, -81.0912], estado: "GA" },
      { nombre: "Rincon, GA", coords: [32.2960, -81.2351], estado: "GA" },
      { nombre: "Pooler, GA", coords: [32.1155, -81.2471], estado: "GA" },
      { nombre: "Bluffton, SC", coords: [32.2371, -80.8604], estado: "SC" },
      { nombre: "Hilton Head Island, SC", coords: [32.2163, -80.7526], estado: "SC" },
      { nombre: "Hardeeville, SC", coords: [32.2877, -81.0801], estado: "SC" },
      { nombre: "Beaufort, SC", coords: [32.4316, -80.6698], estado: "SC" }
    ];

    // Agregar marcadores con íconos
    var group = [];
    lugares.forEach(function(lugar) {
      var icon = (lugar.estado === "GA") ? iconGeorgia : iconSC;
      var marker = L.marker(lugar.coords, { icon: icon })
        .addTo(map)
        .bindPopup(lugar.nombre);
      group.push(marker);
    });

    // Ajustar vista para mostrar todos los marcadores
    var groupLayer = L.featureGroup(group);
    map.fitBounds(groupLayer.getBounds());

    // 👇 Restar un poquito de zoom (para ver más área)
    map.setZoom(map.getZoom() - 1);