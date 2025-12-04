// src/App.jsx
import { useState } from 'react'
import PropTypes from 'prop-types'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({ keycloak }) {
    const [count, setCount] = useState(0)

    const username = keycloak.tokenParsed?.preferred_username

    //  Check if the user has the "admin" role (realm role)
    const roles = keycloak.tokenParsed?.realm_access?.roles || []
    const isAdmin = roles.includes("admin")

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>

            <h1>Vite + React + Keycloak</h1>

            <p>
                Logged in as <strong>{username}</strong>
            </p>

            <p>
                Roles: <strong>{roles.join(", ")}</strong>
            </p>

            <button onClick={() => keycloak.logout()}>
                Logout
            </button>

            {/*  Show this button ONLY for admin users */}
            {isAdmin && (
                <button
                    style={{ marginTop: "20px", padding: "10px", fontSize: "16px" }}
                    onClick={() => alert("Admin button clicked!")}
                >
                    Admin-only Action
                </button>
            )}

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

App.propTypes = {
    keycloak: PropTypes.shape({
        tokenParsed: PropTypes.shape({
            preferred_username: PropTypes.string,
            realm_access: PropTypes.shape({
                roles: PropTypes.arrayOf(PropTypes.string),
            }),
        }),
        logout: PropTypes.func,
    }).isRequired,
}

export default App