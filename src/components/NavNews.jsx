import React from 'react'
import { Link } from 'react-router-dom'

const NavNews = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">NEWS</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            {/* <a class="nav-link" to="/">Features</a>
                            <a class="nav-link" to="/">Pricing</a> */}
                            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavNews