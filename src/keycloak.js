// src/keycloak.js
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'https://aaad02.avans.nl:8443/',     // Keyclogtak base URL
    realm: 'myrealm',          // <- change this
    clientId: 'myfrontend',        // <- change this
});
//fuck me lalal
export default keycloak;
