import React from 'react'
import './styles/about.css'
import hero from '../assets/herd.png'

import { GiAchievement } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { BiWallet } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';

const About = () => {
    return (
        <motion.div
            whileInView={{ x: [300, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
        >
            <div className='about'>
                <div className='main'>
                    <img src={hero} />
                    <div className='about-text'>
                        <h1>About Us</h1>
                        <h5>Alleventcelebrities<span> We are an international company that partner with  well known celebrities</span> </h5>
                        <p>
                            We do this in other to procure thier services for majority of the masses
                            <br />

                        </p>
                        <button type='button'>Let's talk</button>
                    </div>
                </div>
                <div className='service'>
                    <h1>Why Choose Us</h1>
                    <div className='block'>
                        <motion.div
                            whileHover={{ scale: 0.97 }}
                        >
                            <div className='card'>
                                <span className="icon-block">
                                    <GiAchievement className='icon' />
                                </span>
                                <h1>Reliable Services</h1>
                                <p>
                                    We offer reliable meet up and ontime services
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 0.97 }}
                        >
                            <div className='card'>
                                <span className="icon-block">
                                    <BiWallet className='icon' />
                                </span>
                                <h1>Professional Expert</h1>
                                <p>
                                    We offer the best celebrity for your needs and events
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 0.97 }}
                        >
                            <div className='card'>
                                <span className="icon-block">
                                    <MdPayment className='icon' />
                                </span>
                                <h1>Quick Response</h1>
                                <p>
                                    we are always available to attend to you and you can always reach us on the click of a button
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default About