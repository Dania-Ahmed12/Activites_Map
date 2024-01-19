// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { Icon } from "@iconify/react";

// function Index() {
//   // Define custom icons for markers
//   const narco = new L.Icon({
//     iconUrl: "/images/drugs.png",
//     iconSize: [35,35],
//     iconAnchor: [16, 16],
//     popupAnchor: [0, -10],
//   });

//   const smugglig = new L.Icon({
//     iconUrl: "/images/smuggling.png",
//     iconSize: [35,35],
//     iconAnchor: [16, 16],
//     popupAnchor: [0, -10],
//   });

//   const trafficking = new L.Icon({
//     iconUrl: "/images/trafficking.png",
//     iconSize: [35,35],
//     iconAnchor: [16, 16],
//     popupAnchor: [0, -10],
//   });

//   const illegal = new L.Icon({
//     iconUrl: "/images/illelgal.png",
//     iconSize: [35,35],
//     iconAnchor: [16, 16],
//     popupAnchor: [0, -10],
//   });

//   const markerPositionNarco = [25.297156873648902, 64.22090651659775];
//   const markerPositionSmuggling= [26.297156873648902, 63.22090651659775];
//   const markerPositionTrafficking = [25.897156873648902, 63.52090651659775];
//   const markerPositionIllegal = [25.457156873648902, 64.62090651659775];




//   return (
//     <>
//       <MapContainer
//         center={markerPositionNarco}
//         zoom={8}
//         style={{ height: "800px" }}
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <Marker position={markerPositionNarco} icon={narco}>
//           <Popup>
//             <div>
//               <h4>Narcotics</h4>
//               <p>Latitude: {markerPositionNarco[0]}</p>
//               <p>Longitude: {markerPositionNarco[1]}</p>
//               {/* Add more information as needed */}
//             </div>
//           </Popup>
//         </Marker>
//         <Marker position={markerPositionSmuggling} icon={smugglig}>
//           <Popup>
//             <div>
//               <h4>Smuggling</h4>
//               <p>Latitude: {markerPositionSmuggling[0]}</p>
//               <p>Longitude: {markerPositionSmuggling[1]}</p>
//               {/* Add more information as needed */}
//             </div>
//           </Popup>
//         </Marker>
//         <Marker position={markerPositionTrafficking} icon={trafficking}>
//           <Popup>
//             <div>
//               <h4>Trafficking</h4>
//               <p>Latitude: {markerPositionTrafficking[0]}</p>
//               <p>Longitude: {markerPositionTrafficking[1]}</p>
//               {/* Add more information as needed */}
//             </div>
//           </Popup>
//         </Marker>
//         <Marker position={markerPositionIllegal} icon={illegal}>
//           <Popup>
//             <div>
//               <h4>Illegal Jetty</h4>
//               <p>Latitude: {markerPositionIllegal[0]}</p>
//               <p>Longitude: {markerPositionIllegal[1]}</p>
//               {/* Add more information as needed */}
//             </div>
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </>
//   );
// }

// export default Index;

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "@iconify/react";

function generateCustomIcon(iconUrl) {
  return new L.Icon({
    iconUrl: iconUrl,
    iconSize: [35, 35],
    iconAnchor: [16, 16],
    // popupAnchor: [0, -10],
  });
}

function Index() {
    
function Legend() {
  const legendData = [
    { icon: "/images/drugs.png", title: "Narcotics" },
    { icon: "/images/smuggling.png", title: "Smuggling" },
    { icon: "/images/trafficking.png", title: "Trafficking" },
    { icon: "/images/illelgal.png", title: "Illegal Jetty" },
    // Add more legend items as needed
  ];
  return (
    <div
      style={{
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 5,
        zIndex: 1000, // Make sure it's above the map
      }}
    >
      <h3>Legend</h3>
      <ul>
        {legendData.map((item, index) => (
          <li key={index} style={{ margin: "0 50px 0px 25px" }}>
            <img
              src={item.icon}
              alt={item.title}
              style={{ width: 20, height: 20, marginRight: 20 , marginBottom:-5 , marginTop:10 }}
            />
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

const data = [
  {
    position: [24.7085, 66.8458], // Hawke's Bay, Karachi
    icon: "/images/trafficking.png",
    title: "Human Trafficking Spot",
    description: "Details about human trafficking in Hawke's Bay...",
  },
  {
    position: [25.4362, 64.0373], // Kund Malir Beach
    icon: "/images/illelgal.png",
    title: "Illegal Trade Activity",
    description: "Information about illegal trade near Kund Malir Beach...",
  },
  {
    position: [24.774, 66.8458], // Sandspit Beach, Karachi
    icon: "/images/drugs.png",
    title: "Drug Smuggling Route",
    description: "Details about drug smuggling route from Sandspit...",
  },
  {
    position: [25.2396, 63.4736], // Hammerhead, Gwadar
    icon: "/images/smuggling.png",
    title: "Contraband Smuggling Point",
    description: "Information about contraband smuggling near Hammerhead...",
  },
  {
    position: [25.1633, 61.7396], // Astola Island
    icon: "/images/trafficking.png",
    title: "Human Trafficking Hub",
    description: "Details about human trafficking hub near Astola Island...",
  },
  {
    position: [24.7835, 66.6618], // French Beach, Karachi
    icon: "/images/illelgal.png",
    title: "Illegal Fishing Zone",
    description:
      "Details about illegal fishing activities near French Beach...",
  },
  {
    position: [25.2967, 64.029], // Sur Bandar
    icon: "/images/drugs.png",
    title: "Narcotics Distribution Point",
    description: "Information about narcotics distribution near Sur Bandar...",
  },
  {
    position: [25.2048, 63.4227], // Gunz
    icon: "/images/smuggling.png",
    title: "Smuggling Operations",
    description: "Details about smuggling operations near Gunz...",
  },
  {
    position: [24.7111, 66.703], // Turtle Beach, Karachi
    icon: "/images/trafficking.png",
    title: "Human Trafficking Zone",
    description: "Details about human trafficking zone near Turtle Beach...",
  },
  {
    position: [25.2493, 64.0382], // Golden Beach, Gwadar
    icon: "/images/illelgal.png",
    title: "Illegal Trade Hotspot",
    description: "Information about illegal trade hotspot near Golden Beach...",
  },
  {
    position: [24.8068, 66.6141], // Kemari, Karachi
    icon: "/images/trafficking.png",
    title: "Human Trafficking Hub",
    description: "Details about human trafficking in Kemari...",
  },
  {
    position: [24.8029, 66.9826], // Keamari Port, Karachi
    icon: "/images/illelgal.png",
    title: "Illegal Trade Port",
    description: "Information about illegal trade at Keamari Port...",
  },
  {
    position: [24.8169, 66.9935], // Karachi Port Trust
    icon: "/images/drugs.png",
    title: "Drug Syndicate Spot",
    description: "Details about a drug syndicate near Karachi Port Trust...",
  },
  {
    position: [24.8503, 66.975], // Clifton Beach, Karachi
    icon: "/images/smuggling.png",
    title: "Contraband Smuggling Area",
    description: "Information about contraband smuggling near Clifton Beach...",
  },
  {
    position: [24.8615, 66.9909], // Manora, Karachi
    icon: "/images/trafficking.png",
    title: "Human Trafficking Zone",
    description: "Details about human trafficking near Manora...",
  },
  {
    position: [24.7774, 66.8696], // Sandspit Beach, Karachi
    icon: "/images/trafficking.png",
    title: "Human Trafficking Spot",
    description: "Details about human trafficking near Sandspit Beach...",
  },
  {
    position: [24.816, 66.9311], // Hawksbay, Karachi
    icon: "/images/illelgal.png",
    title: "Illegal Trade Area",
    description: "Information about illegal trade near Hawksbay...",
  },
  {
    position: [24.8386, 66.9739], // Clifton, Karachi
    icon: "/images/drugs.png",
    title: "Narcotics Point",
    description: "Some information about narcotics near Clifton...",
  },
  {
    position: [24.736, 66.9829], // Do Darya, Karachi
    icon: "/images/smuggling.png",
    title: "Smuggling Hotspot",
    description: "Details about smuggling activities near Do Darya...",
  },
  {
    position: [24.8695, 66.9422], // Kiamari, Karachi
    icon: "/images/trafficking.png",
    title: "Human Trafficking Area",
    description: "Details about human trafficking near Kiamari...",
  },
  {
    position: [24.9245, 66.9908], // Port Bin Qasim
    icon: "/images/illelgal.png",
    title: "Illegal Trade Zone",
    description: "Information about illegal trade at Port Bin Qasim...",
  },
  {
    position: [24.8548, 66.9025], // Mubarak Village, Karachi
    icon: "/images/drugs.png",
    title: "Narcotics Distribution Point",
    description:
      "Information about narcotics distribution near Mubarak Village...",
  },
  {
    position: [24.9138, 66.9346], // Korangi Fish Harbour, Karachi
    icon: "/images/smuggling.png",
    title: "Smuggling Point",
    description:
      "Details about a known smuggling point near Korangi Fish Harbour...",
  },
  {
    position: [24.8044, 66.9403], // Karachi Marina Club
    icon: "/images/trafficking.png",
    title: "Human Trafficking Spot",
    description: "Details about human trafficking near Karachi Marina Club...",
  },
  {
    position: [24.754, 66.8621], // Paradise Point, Karachi
    icon: "/images/illelgal.png",
    title: "Illegal Trade Point",
    description:
      "Details about a known illegal trade point near Paradise Point...",
  },
  {
    position: [24.8599, 66.9213], // DHA, Karachi
    icon: "/images/drugs.png",
    title: "Narcotics Spot",
    description: "Some information about narcotics near DHA...",
  },
  {
    position: [24.8131, 66.9493], // Karachi Boat Club
    icon: "/images/smuggling.png",
    title: "Smuggling Area",
    description: "Details about smuggling activities near Karachi Boat Club...",
  },
  {
    position: [24.8587, 66.8613], // Churna Island
    icon: "/images/trafficking.png",
    title: "Human Trafficking Point",
    description: "Details about human trafficking near Churna Island...",
  },
  {
    position: [24.8793, 66.8826], // French Beach, Karachi
    icon: "/images/illelgal.png",
    title: "Illegal Trade Hub",
    description: "Information about illegal trade hub near French Beach...",
  },
  {
    position: [24.7574, 66.9362], // Boat Basin, Karachi
    icon: "/images/drugs.png",
    title: "Drug Syndicate Area",
    description: "Details about a drug syndicate near Boat Basin...",
  },
  {
    position: [24.8059, 66.5933], // Hawkesbay, Karachi
    icon: "/images/trafficking.png",
    title: "Human Trafficking Zone",
    description: "Details about human trafficking near Hawkesbay...",
  },
  {
    position: [24.788, 66.7402], // Sandspit, Karachi
    icon: "/images/smuggling.png",
    title: "Contraband Smuggling Point",
    description: "Information about contraband smuggling near Sandspit...",
  },
  {
    position: [24.8318, 66.644], // Paradise Point, Karachi
    icon: "/images/illelgal.png",
    title: "Illegal Trade Spot",
    description: "Details about illegal trade near Paradise Point...",
  },
  {
    position: [25.1958, 63.3858], // Ormara
    icon: "/images/trafficking.png",
    title: "Human Trafficking Area",
    description: "Details about human trafficking near Ormara...",
  },
  {
    position: [25.3419, 66.5299], // Kund Malir
    icon: "/images/drugs.png",
    title: "Drug Syndicate Zone",
    description: "Details about a drug syndicate zone near Kund Malir...",
  },
  {
    position: [25.1518, 61.8734], // Sonmiani
    icon: "/images/smuggling.png",
    title: "Contraband Operations Area",
    description: "Information about contraband operations near Sonmiani...",
  },
  {
    position: [25.2254, 64.506], // Kalmat
    icon: "/images/illelgal.png",
    title: "Illegal Trade Point",
    description: "Details about a known illegal trade point near Kalmat...",
  },
  {
    position: [25.3923, 66.5161], // Mubarak Village
    icon: "/images/drugs.png",
    title: "Narcotics Distribution Center",
    description:
      "Information about a narcotics distribution center near Mubarak Village...",
  },
  {
    position: [25.1505, 64.2156], // Astola Island
    icon: "/images/smuggling.png",
    title: "Smuggling Hotspot",
    description: "Details about smuggling activities near Astola Island...",
  },
  {
    position: [25.3898, 66.6744], // Ganz
    icon: "/images/trafficking.png",
    title: "Human Trafficking Point",
    description: "Details about human trafficking near Ganz...",
  },
  {
    position: [24.8607, 67.0011], // Karachi
    icon: "/images/trafficking.png",
    title: "Human Trafficking",
    description: "Details about human trafficking...",
  },
  {
    position: [25.1216, 62.3256], // Gwadar
    icon: "/images/illelgal.png",
    title: "Illegal Trade",
    description: "Information about illegal trade...",
  },
  {
    position: [25.2738, 66.9133], // Port Qasim
    icon: "/images/drugs.png",
    title: "Drug Syndicate",
    description: "Details about a drug syndicate...",
  },
  {
    position: [24.7417, 66.9881], // Clifton, Karachi
    icon: "/images/smuggling.png",
    title: "Contraband Smuggling",
    description: "Information about contraband smuggling...",
  },
  {
    position: [25.4391, 63.3247], // Ormara
    icon: "/images/trafficking.png",
    title: "Illegal Immigration",
    description: "Details about illegal immigration...",
  },
  {
    position: [25.2867, 66.6288], // Hawksbay, Karachi
    icon: "/images/trafficking.png",
    title: "Human Trafficking",
    description: "Details about human trafficking...",
  },
  {
    position: [26.2336, 63.0686], // Jiwani
    icon: "/images/illelgal.png",
    title: "Illegal Trade",
    description: "Information about illegal trade...",
  },
  {
    position: [24.8717, 66.7215], // Manora, Karachi
    icon: "/images/drugs.png",
    title: "Narcotics",
    description: "Some information about narcotics...",
  },
  {
    position: [24.8607, 67.0011], // Karachi
    icon: "/images/trafficking.png",
    title: "Human Trafficking",
    description: "Details about human trafficking...",
  },
  {
    position: [25.1216, 62.3256], // Gwadar
    icon: "/images/illelgal.png",
    title: "Illegal Trade",
    description: "Information about illegal trade...",
  },
  {
    position: [25.2738, 66.9133], // Port Qasim
    icon: "/images/drugs.png",
    title: "Drug Syndicate",
    description: "Details about a drug syndicate...",
  },
  {
    position: [24.7417, 66.9881], // Clifton, Karachi
    icon: "/images/smuggling.png",
    title: "Contraband Smuggling",
    description: "Information about contraband smuggling...",
  },
  {
    position: [25.4391, 63.3247], // Ormara
    icon: "/images/trafficking.png",
    title: "Illegal Immigration",
    description: "Details about illegal immigration...",
  },
  {
    position: [25.2867, 66.6288], // Hawksbay, Karachi
    icon: "/images/trafficking.png",
    title: "Human Trafficking",
    description: "Details about human trafficking...",
  },
  {
    position: [26.2336, 63.0686], // Jiwani
    icon: "/images/illelgal.png",
    title: "Illegal Trade",
    description: "Information about illegal trade...",
  },
  {
    position: [24.8717, 66.7215], // Manora, Karachi
    icon: "/images/drugs.png",
    title: "Narcotics",
    description: "Some information about narcotics...",
  },
  {
    position: [25.2214, 63.4954], // Pasni
    icon: "/images/smuggling.png",
    title: "Smuggling",
    description: "Some information about smuggling...",
  },
  {
    position: [25.3713, 66.9829], // Gadani
    icon: "/images/trafficking.png",
    title: "Trafficking",
    description: "Some information about trafficking...",
  },
  {
    position: [25.2532, 63.4751], // Ganz
    icon: "/images/illelgal.png",
    title: "Illegal Trade",
    description: "Information about illegal trade...",
  },
  {
    position: [24.8607, 67.0011], // Karachi
    icon: "/images/trafficking.png",
    title: "Human Trafficking",
    description: "Details about human trafficking...",
  },
  {
    position: [25.1216, 62.3256], // Gwadar
    icon: "/images/illelgal.png",
    title: "Illegal Trade",
    description: "Information about illegal trade...",
  },
  {
    position: [25.2738, 66.9133], // Port Qasim
    icon: "/images/drugs.png",
    title: "Drug Syndicate",
    description: "Details about a drug syndicate...",
  },
  {
    position: [24.7417, 66.9881], // Clifton, Karachi
    icon: "/images/smuggling.png",
    title: "Contraband Smuggling",
    description: "Information about contraband smuggling...",
  },
  {
    position: [25.4391, 63.3247], // Ormara
    icon: "/images/trafficking.png",
    title: "Illegal Immigration",
    description: "Details about illegal immigration...",
  },
  {
    position: [25.2867, 66.6288], // Hawksbay, Karachi
    icon: "/images/trafficking.png",
    title: "Human Trafficking",
    description: "Details about human trafficking...",
  },
  {
    position: [26.2336, 63.0686], // Jiwani
    icon: "/images/illelgal.png",
    title: "Illegal Trade",
    description: "Information about illegal trade...",
  },
  {
    position: [24.8717, 66.7215], // Manora, Karachi
    icon: "/images/drugs.png",
    title: "Narcotics",
    description: "Some information about narcotics...",
  },
  {
    position: [25.2214, 63.4954], // Pasni
    icon: "/images/smuggling.png",
    title: "Smuggling",
    description: "Some information about smuggling...",
  },
  {
    position: [25.3713, 66.9829], // Gadani
    icon: "/images/trafficking.png",
    title: "Trafficking",
    description: "Some information about trafficking...",
  },
  // Additional data points
  {
    position: [24.9056, 66.9115], // DHA, Karachi
    icon: "/images/illelgal.png",
    title: "Illegal Fishing",
    description: "Details about illegal fishing activities...",
  },
  {
    position: [25.1402, 63.8281], // Astola Island
    icon: "/images/drugs.png",
    title: "Narcotics Hideout",
    description: "Information about narcotics hideout...",
  },
  {
    position: [25.3255, 66.6101], // French Beach, Karachi
    icon: "/images/smuggling.png",
    title: "Smuggling Point",
    description: "Details about a known smuggling point...",
  },
  {
    position: [25.164, 61.4294], // Keti Bandar
    icon: "/images/trafficking.png",
    title: "Human Trafficking Hub",
    description: "Details about human trafficking hub...",
  },
  {
    position: [24.9605, 66.9481], // Sandspit, Karachi
    icon: "/images/illelgal.png",
    title: "Illegal Coastal Development",
    description: "Information about illegal coastal development...",
  },
  {
    position: [25.13, 63.2944], // Gwadar East Bay
    icon: "/images/drugs.png",
    title: "Drug Smuggling Route",
    description: "Details about a drug smuggling route...",
  },
  {
    position: [25.2765, 66.1455], // Kund Malir
    icon: "/images/trafficking.png",
    title: "Human Trafficking Zone",
    description: "Details about a human trafficking zone...",
  },
  {
    position: [25.4216, 61.7446], // Sonmiani
    icon: "/images/smuggling.png",
    title: "Contraband Operations",
    description: "Information about contraband operations...",
  },
  {
    position: [25.2222, 64.4042], // Kalmat
    icon: "/images/illelgal.png",
    title: "Illegal Trade Point",
    description: "Details about a known illegal trade point...",
  },
  {
    position: [25.3572, 66.6107], // Mubarak Village, Karachi
    icon: "/images/drugs.png",
    title: "Narcotics Distribution Center",
    description: "Information about a narcotics distribution center...",
  },
  {
    position: [24.8607, 67.0011], // Karachi
    icon: "/images/trafficking.png",
    title: "Human Trafficking",
    description: "Details about human trafficking...",
  },
  {
    position: [25.1216, 62.3256], // Gwadar
    icon: "/images/illelgal.png",
    title: "Illegal Trade",
    description: "Information about illegal trade...",
  },
  {
    position: [25.2738, 66.9133], // Port Qasim
    icon: "/images/drugs.png",
    title: "Drug Syndicate",
    description: "Details about a drug syndicate...",
  },
  {
    position: [24.7417, 66.9881], // Clifton, Karachi
    icon: "/images/smuggling.png",
    title: "Contraband Smuggling",
    description: "Information about contraband smuggling...",
  },
  {
    position: [25.4391, 63.3247], // Ormara
    icon: "/images/trafficking.png",
    title: "Illegal Immigration",
    description: "Details about illegal immigration...",
  },
  {
    position: [25.2867, 66.6288], // Hawksbay, Karachi
    icon: "/images/trafficking.png",
    title: "Human Trafficking",
    description: "Details about human trafficking...",
  },
  {
    position: [26.2336, 63.0686], // Jiwani
    icon: "/images/illelgal.png",
    title: "Illegal Trade",
    description: "Information about illegal trade...",
  },
  {
    position: [24.8717, 66.7215], // Manora, Karachi
    icon: "/images/drugs.png",
    title: "Narcotics",
    description: "Some information about narcotics...",
  },
  {
    position: [25.2214, 63.4954], // Pasni
    icon: "/images/smuggling.png",
    title: "Smuggling",
    description: "Some information about smuggling...",
  },
  {
    position: [25.3713, 66.9829], // Gadani
    icon: "/images/trafficking.png",
    title: "Trafficking",
    description: "Some information about trafficking...",
  },
  // Additional data points
  {
    position: [24.9056, 66.9115], // DHA, Karachi
    icon: "/images/illelgal.png",
    title: "Illegal Fishing",
    description: "Details about illegal fishing activities...",
  },
  {
    position: [25.1402, 63.8281], // Astola Island
    icon: "/images/drugs.png",
    title: "Narcotics Hideout",
    description: "Information about narcotics hideout...",
  },
  {
    position: [25.3255, 66.6101], // French Beach, Karachi
    icon: "/images/smuggling.png",
    title: "Smuggling Point",
    description: "Details about a known smuggling point...",
  },
  {
    position: [25.164, 61.4294], // Keti Bandar
    icon: "/images/trafficking.png",
    title: "Human Trafficking Hub",
    description: "Details about human trafficking hub...",
  },
  {
    position: [24.9605, 66.9481], // Sandspit, Karachi
    icon: "/images/illelgal.png",
    title: "Illegal Coastal Development",
    description: "Information about illegal coastal development...",
  },
  {
    position: [25.13, 63.2944], // Gwadar East Bay
    icon: "/images/drugs.png",
    title: "Drug Smuggling Route",
    description: "Details about a drug smuggling route...",
  },
  {
    position: [25.2765, 66.1455], // Kund Malir
    icon: "/images/trafficking.png",
    title: "Human Trafficking Zone",
    description: "Details about a human trafficking zone...",
  },
  {
    position: [25.4216, 61.7446], // Sonmiani
    icon: "/images/smuggling.png",
    title: "Contraband Operations",
    description: "Information about contraband operations...",
  },
  {
    position: [25.2222, 64.4042], // Kalmat
    icon: "/images/illelgal.png",
    title: "Illegal Trade Point",
    description: "Details about a known illegal trade point...",
  },
  {
    position: [25.3572, 66.6107], // Mubarak Village, Karachi
    icon: "/images/drugs.png",
    title: "Narcotics Distribution Center",
    description: "Information about a narcotics distribution center...",
  },
  // Add more coastal areas as needed

  {
    position: [23.546, 64.703], // Arabian Sea Coast
    icon: "/images/drugs.png",
    title: "Arabian Sea Coast",
    description: "Coastal area along the Arabian Sea in Pakistan...",
  },
  {
    position: [21.058, 61.417], // Southernmost Point
    icon: "/images/drugs.png",
    title: "Southern Coastal Point",
    description:
      "Southernmost point along the Arabian Sea coast in Pakistan...",
  },
  {
    position: [25.614, 64.7], // Northernmost Point
    icon: "/images/trafficking.png",
    title: "Northern Coastal Point",
    description:
      "Northernmost point along the Arabian Sea coast in Pakistan...",
  },
  {
    position: [23.932, 64.387], // Coastal Point 1
    icon: "/images/trafficking.png",
    title: "Coastal Point 1",
    description: "Description for Coastal Point 1...",
  },
  {
    position: [24.301, 64.556], // Coastal Point 2
    icon: "/images/trafficking.png",
    title: "Coastal Point 2",
    description: "Description for Coastal Point 2...",
  },
  {
    position: [23.785, 64.813], // Coastal Point 3
    icon: "/images/illelgal.png",
    title: "Coastal Point 3",
    description: "Description for Coastal Point 3...",
  },
  {
    position: [24.089, 64.624], // Coastal Point 4
    icon: "/images/smuggling.png",
    title: "Coastal Point 4",
    description: "Description for Coastal Point 4...",
  },
  {
    position: [23.646, 64.927], // Coastal Point 5
    icon: "/images/illelgal.png",
    title: "Coastal Point 5",
    description: "Description for Coastal Point 5...",
  },
  {
    position: [24.522, 64.455], // Coastal Point 6
    icon: "/images/smuggling.png",
    title: "Coastal Point 6",
    description: "Description for Coastal Point 6...",
  },
  {
    position: [23.772, 64.678], // Coastal Point 7
    icon: "/images/smuggling.png",
    title: "Coastal Point 7",
    description: "Description for Coastal Point 7...",
  },
];

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100vh",
        zIndex: 1, // Make sure it's below the legend
      }}
    >
      <MapContainer
        center={data[0].position}
        zoom={9}
        style={{ height: "730px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            icon={generateCustomIcon(marker.icon)}
          >
            <Popup>
              <div>
                <h4>{marker.title}</h4>
                <p>Latitude: {marker.position[0]}</p>
                <p>Longitude: {marker.position[1]}</p>
                <p>{marker.description}</p>
                {/* Add more information as needed */}
              </div>
            </Popup>
          </Marker>
        ))}
        <Legend />
      </MapContainer>
    </div>
  );
}

export default Index;
