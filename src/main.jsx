// src/main.jsx
import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import keycloak from './keycloak.js'
import './index.css'

function KeycloakWrapper() {
    const [keycloakReady, setKeycloakReady] = useState(false)
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        keycloak
            .init({
                onLoad: 'login-required',
                checkLoginIframe: false,
            })
            .then((auth) => {
                setAuthenticated(auth)
                setKeycloakReady(true)
            })
            .catch((err) => {
                console.error('Keycloak init error:', err)
            })
    }, [])

    if (!keycloakReady) {
        return <div>Initializing authentication…</div>
    }

    if (!authenticated) {
        return <div>Not authenticated</div>
    }

    return <App keycloak={keycloak} />
}

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <KeycloakWrapper />
    </React.StrictMode>,
)
