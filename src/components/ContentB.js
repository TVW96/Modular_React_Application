import React from 'react'
import image1 from '../images/./2-Akita_MechRabbit(AiGemini).jpeg';
import image2 from '../images/3-Akita_MechRabbit(AiGemini).jpeg';
import image3 from '../images/Akita(AiGemini).jpeg';
import image4 from '../images/Akita_MechRabbit(AiGemini).jpeg';
import image5 from '../images/mech_rabbit(Gemini).jpeg';
import image6 from '../images/Perspective_Akita(ChatGPT).jpg';

import { Button } from './SharedComponents';
import './ContentB.css';

const ContentB = () => {
    const onClick = () => {
        alert('Button B Clicked');
    }
    return (
        <div className='wrapper'>
            <section class="akitas" id="akitas">
                <ul>
                    <li>
                        <figure>
                            <img src={image1} alt="" />
                            <figcaption><h3>The Akita Chases</h3></figcaption>
                        </figure>
                        <p>
                            Made in the interiors of collapsing stars star stuff harvesting star light venture billions upon billions Drake Equation brain is the seed of intelligence?
                        </p>
                        <a href="https://unsplash.com/s/photos/akita"><Button onClick={onClick}>Visit Akita</Button></a>
                    </li>
                    <li>
                        <figure>
                            <img src={image2} alt="" />
                            <figcaption><h3>The Akita Equation</h3></figcaption>
                        </figure>
                        <p>
                            Another world citizens of distant epochs from which we spring descended from astronomers Orion's sword shores of the cosmic ocean.
                        </p>
                        <a href="https://unsplash.com/s/photos/akita-dog"><Button onClick={onClick}>Visit Akita</Button></a>
                    </li>
                    <li>
                        <figure>
                            <img src={image3} alt="" />
                            <figcaption><h3>Vast cosmic akita</h3></figcaption>
                        </figure>
                        <p>
                            Galaxies the ash of stellar alchemy prime number science inconspicuous motes of rock and gas brain is the seed of intelligence.
                        </p>
                        <a href="https://pixabay.com/images/search/akita%20inu/"><Button onClick={onClick}>Visit Akita </Button></a>
                    </li>
                    <li>
                        <figure>
                            <img src={image4} alt="" />
                            <figcaption><h3>An Akita in Time</h3></figcaption>
                        </figure>
                        <p>
                            Despite their playful nature, Akita puppies carry a calm, composed demeanor and exhibit a natural sense of dignity.
                        </p>
                        <a href="https://www.alamy.com/stock-photo/akita-outline.html?sortBy=relevant"><Button onClick={onClick}>Visit Akita</Button></a>
                    </li>
                    <li>
                        <figure>
                            <img src={image5} alt="" />
                            <figcaption><h3>Why The Rabbits?</h3></figcaption>
                        </figure>
                        <p>
                            This chase dynamic taps into the Akita's natural hunting instincts, which have been honed over centuries as a working dog breed. While not a "natural enemy" in the traditional sense, the rabbit represents a target that the Akita's sharp focus, speed, and agility are often geared toward pursuing, showcasing the breed's powerful hunting heritage.
                        </p>
                        <a href="https://www.istockphoto.com/photos/akita-prefecture"><Button onClick={onClick}>Visit Akita</Button></a>
                    </li>
                    <li>
                        <figure>
                            <img src={image6} alt="" />
                            <figcaption><h3>The Akita Strikes Again pt.6</h3></figcaption>
                        </figure>
                        <p>
                            Akita puppies are highly intelligent, quick to learn commands and tricks, while also being vigilant and observant of their surroundings.
                        </p>
                        <a href="https://www.ebay.com/itm/161830098934"><Button onClick={onClick}>Visit Akita</Button></a>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export { ContentB };