import React from 'react';
import './Hero.css';
import { Button } from './SharedComponents';

const ContentA = () => {
    const onClick = () => {
        alert('Button A Clicked');
    }
    return (
        <div className="hero">
            <h1>Hero Section</h1>
            <article>
                <p>
                    The Akita is renowned for its noble and loyal nature, making it one of the most revered dog breeds. Known for their deep bond with their families, Akitas are fiercely protective and will go to great lengths to ensure the safety and well-being of their loved ones. Their loyalty is unwavering, often forming a strong, lifelong attachment to their owners. The breed’s dignified demeanor and natural sense of independence make them appear regal, while their calm and reserved nature adds to their noble reputation. Akitas are also highly intuitive, capable of sensing emotions and responding with a protective, affectionate instinct. Their combination of strength, loyalty, and protectiveness has earned them a well-deserved place as a symbol of devotion and courage.
                </p>
                <a href="https://www.google.com/search?q=akita+puppy&sca_esv=332c1457e26e21ac&rlz=1C5CHFA_enUS922US922&sxsrf=ADLYWILTTvc0VqDoH5NemfxgN3RURrXsSA%3A1732260322378&ei=4jFAZ83jFueM0PEP3J7a6Ao&oq=akita+&gs_lp=Egxnd3Mtd2l6LXNlcnAiBmFraXRhICoCCAUyChAjGIAEGCcYigUyChAjGIAEGCcYigUyChAAGIAEGEMYigUyCBAAGIAEGLEDMgsQLhiABBixAxjUAjIIEAAYgAQYsQMyBRAAGIAEMggQABiABBixAzIFEAAYgAQyBRAAGIAESNARULYCWLYCcAF4AZABAJgBRaABRaoBATG4AQHIAQD4AQGYAgKgAl3CAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgITEC4YgAQYsAMYQxjIAxiKBdgBAZgDAIgGAZAGEboGBggBEAEYCZIHATKgB5YO&sclient=gws-wiz-serp"><Button onClick={onClick} /></a>
            </article>
        </div>
    )
}

export { ContentA };