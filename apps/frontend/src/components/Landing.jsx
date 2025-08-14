import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ShipsyLanding = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const cubeVariants = {
        hidden: { scale: 0, rotateY: -180 },
        visible: {
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 1.2,
                ease: "easeOut",
                delay: 0.5
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="min-h-screen text-white overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <style jsx>{`
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>

            {/* Navigation - Minimal Modern Glass Navbar */}
            <motion.div className="fixed top-0 left-0 w-full px-4 sm:px-6 lg:px-8 pt-4 z-50">
                <motion.nav
                    className="flex items-center justify-between px-6 py-3 rounded-2xl backdrop-blur-xl shadow-lg"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        backgroundColor: "rgba(255,255,255,0.06)",
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.15)"
                    }}
                >
                    {/* Left: Logo + Brand Name */}
                    <motion.div
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="27" fill="none"><path d="M 39.106 13.451 L 38.488 13.451 L 34.556 6.403 C 34.407 6.135 34.124 5.978 33.793 5.978 L 29.169 5.978 L 30.085 1.063 C 30.195 0.476 29.812 0 29.231 0 L 4.779 0.011 C 4.151 0.011 3.641 0.525 3.641 1.159 C 3.641 1.794 4.151 2.308 4.779 2.308 L 18.237 2.308 C 18.772 2.401 19.18 2.871 19.18 3.439 C 19.18 4.04 18.722 4.533 18.139 4.582 L 1.138 4.582 C 0.51 4.583 0 5.097 0 5.731 C 0 6.366 0.51 6.88 1.138 6.88 L 18.187 6.88 C 18.747 6.952 19.18 7.433 19.18 8.018 C 19.18 8.606 18.743 9.089 18.18 9.158 L 2.807 9.158 C 2.178 9.158 1.669 9.672 1.669 10.307 C 1.669 10.941 2.178 11.455 2.807 11.455 L 6.37 11.455 L 4.495 21.519 C 4.385 22.106 4.768 22.582 5.35 22.582 L 7.028 22.582 C 6.704 25.012 8.341 26.949 10.779 26.949 C 13.218 26.949 15.577 25.012 16.158 22.582 L 25.021 22.582 L 27.527 22.582 C 27.202 25.012 28.839 26.949 31.278 26.949 C 33.716 26.949 36.076 25.012 36.657 22.582 L 37.404 22.582 L 38.336 22.582 C 38.917 22.582 39.478 22.106 39.587 21.519 L 39.926 19.7 C 40.028 19.155 39.704 18.705 39.191 18.645 L 39.961 14.514 C 40.07 13.927 39.687 13.451 39.106 13.451 Z M 14.105 22.334 C 13.85 23.706 12.535 24.823 11.176 24.823 C 9.816 24.823 8.918 23.706 9.174 22.334 C 9.43 20.961 10.744 19.845 12.104 19.845 C 13.463 19.845 14.361 20.961 14.105 22.334 Z M 34.604 22.334 C 34.348 23.706 33.033 24.823 31.674 24.823 C 30.314 24.823 29.416 23.706 29.672 22.334 C 29.928 20.961 31.242 19.845 32.602 19.845 C 33.962 19.845 34.86 20.961 34.604 22.334 Z M 27.776 13.451 L 28.773 8.104 L 32.871 8.104 L 35.854 13.451 Z" fill="rgb(252, 76, 0)" stroke-width="0.34" stroke="rgba(0,0,0,1)" stroke-miterlimit="10"></path></svg>
                        <span className="text-lg sm:text-xl font-extrabold tracking-wide bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                            Shipsy
                        </span>
                    </motion.div>

                    {/* Right: Login/Register Button */}
                    <motion.button
                        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                        whileTap={{ scale: 0.96 }}
                    >
                        Login / Register
                    </motion.button>
                </motion.nav>
            </motion.div>

            {/* Main Content */}
            <motion.main
                className="container mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center lg:text-left">
                    {/* Left Content */}
                    <motion.div
                        className="space-y-6 lg:space-y-8"
                        variants={itemVariants}
                    >
                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
                            variants={itemVariants}
                        >
                            We Ship It.
                            <br />
                            <motion.span
                                className="text-white"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            >
                                You Relax.
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed"
                            variants={itemVariants}
                        >
                            Say goodbye to logistics headaches, we'll get your products to your customers, hassle-free.
                        </motion.p>

                        <motion.button
                            className="bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 25px -5px rgba(251, 146, 60, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book Now
                        </motion.button>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        className="relative flex justify-center items-center py-8 lg:py-0"
                        variants={cubeVariants}
                        animate="animate"
                    >
                        <motion.div
                            className="relative"
                            variants={floatingVariants}
                            animate="animate"
                        >
                            {/* Isometric Grid */}
                            <div className="grid grid-cols-4 gap-1 sm:gap-2 transform rotate-12 scale-90 sm:scale-110">
                                {[...Array(16)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-gray-200 to-gray-400 rounded shadow-lg"
                                        style={{
                                            transform: `perspective(400px) rotateX(45deg) rotateY(-45deg)`
                                        }}
                                        initial={{ scale: 0, rotateY: 180 }}
                                        animate={{ scale: 1, rotateY: 0 }}
                                        transition={{
                                            delay: i * 0.05 + 0.8,
                                            duration: 0.6,
                                            ease: "easeOut"
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor: "#f97316"
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Testimonial */}
                <motion.section
                    className="mt-16 lg:mt-24 xl:mt-32 flex justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2, duration: 0.8 }}
                >
                    <div className="max-w-4xl w-full bg-[#1C1C1C] rounded-lg p-6 lg:p-8">
                        <motion.div
                            className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 text-center lg:text-left"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex-shrink-0">
                                <motion.h3
                                    className="text-xl font-semibold text-orange-400"
                                    whileHover={{ color: "#fb923c" }}
                                >
                                    Dean Kresh
                                </motion.h3>
                                <p className="text-gray-400">Manager at TechCo</p>
                            </div>

                            <motion.blockquote
                                className="text-gray-300 text-base sm:text-lg lg:text-xl italic leading-relaxed border-l-4 border-orange-500 pl-4 lg:pl-6"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 2.5, duration: 0.8 }}
                            >
                                "Shipsy has transformed our logistics operations. Their real-time tracking and on-time deliveries have made a significant impact on our business. Highly recommended!"
                            </motion.blockquote>
                        </motion.div>
                    </div>
                </motion.section>
            </motion.main>

            {/* Bottom CTA */}
            <motion.section
                className="text-center bg-[#1C1C1C] py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
            >
                <motion.h2
                    className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 3.2, duration: 0.8 }}
                >
                    Are you ready.
                </motion.h2>

                <motion.p
                    className="text-gray-400 text-base sm:text-lg mb-6 lg:mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.4, duration: 0.6 }}
                >
                    This could be the start of something big.
                </motion.p>

                <motion.button
                    className="bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.6, duration: 0.6 }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.25)"
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    Use this template
                </motion.button>
            </motion.section>

            {/* Footer */}
            <motion.footer
                className="bg-[#1C1C1C] py-6 lg:py-8 px-4 sm:px-6 lg:px-8 text-center lg:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.8, duration: 0.6 }}
            >
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 text-sm text-gray-400">
                        <span>Made in France</span>
                        {['Services', 'Benefits', 'Process', 'Plans', 'Contact'].map((item) => (
                            <motion.a
                                key={item}
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                                whileHover={{ y: -1 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        className="text-sm text-gray-400"
                        whileHover={{ scale: 1.05 }}
                    >
                        Created by <span className="text-white font-semibold">🚀Man</span>
                    </motion.div>
                </div>
            </motion.footer>
        </div>
    );
};

export default ShipsyLanding;