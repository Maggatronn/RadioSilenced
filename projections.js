// Albers equal-area conic projection   
function projectAlbers(lon, lat) {
  // USGS uses standard parallels at 45.5°N and 29.5°N
  // With a central meridian value of 96°W
  // Latitude value is phi, longitude is lambda
  let phi0 = 0;
  let lambda0 = radians(-96);
  let phi1 = radians(29.5);
  let phi2 = radians(45.5);
    
  let phi = radians(lat);
  let lambda = radians(lon);

  let n = 0.5 * (sin(phi1) + sin(phi2));
  let theta = n * (lambda - lambda0); //radians(lon - lambda0);
  let c = sq(cos(phi1)) + 2*n*sin(phi1);
  let rho = sqrt(c - 2*n*sin(phi)) / n;
  let rho0 = sqrt(c - 2*n*sin(phi0)) / n;
 
  return { 'x': rho * sin(theta), 'y': rho0 - rho*cos(theta) };
}


// get the Mercator projection for a specific lat/lon coordinate
function projectMercator(lon, lat) {
  return { 
    'x': lon, 
    'y': degrees(log(tan(radians(lat)) + 1.0/cos(radians(lat)))) 
  };
}
