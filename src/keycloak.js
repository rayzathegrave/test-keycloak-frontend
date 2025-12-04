// src/keycloak.js
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'https://158.178.144.151/',     // Keycloak base URL
    realm: 'myrealm',          // <- change this
    clientId: 'myclient',        // <- change this
});
//fuck me
export default keycloak;
