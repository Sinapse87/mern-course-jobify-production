import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main-alternative.svg'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo/>
            </nav>
            <main>
                <div className='container page'>
                    <div className='info'>
                        <h1>
                            job <span> tracking </span> App
                        </h1>
                        <p>
                            I'm baby dIY leggings scenester prism cred. Chartreuse aesthetic biodiesel, mukbang jianbing master cleanse live-edge snackwave deep v humblebrag helvetica umami kogi small batch shabby chic. Keytar mustache narwhal hammock venmo pinterest before they sold out gochujang swag sriracha beard. Freegan kickstarter mukbang, four dollar toast raclette succulents craft beer bitters roof party celiac vinyl direct trade kogi.
                        </p>
                        <Link to='/register' className='btn btn-hero'>
                            Login/register
                        </Link>
                    </div>
                    <img src={main} alt="job hunt" className="img main-img" />
                </div>
            </main>
        </Wrapper>
    )
}

export default Landing