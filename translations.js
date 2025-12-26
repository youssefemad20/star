const translations = {
    en: {
        "nav-home": "Home",
        "nav-earth": "Earth",
        "nav-planets": "Planets",
        "nav-gallery": "Gallery",
        "nav-spacer": "Spacer",
        "nav-spacer-chat": "Spacer Chat",
        "home-title": "Hello in the Star",
        "home-desc": "Space is not just distant stars — it is the beginning of everything. Here, where galaxies stretch beyond limits and imagination meets science, we take you on a journey to explore the secrets of the universe, from the depths of deep space to the latest scientific discoveries. Get ready to expand your horizons, because every star tells a story, and every galaxy holds a secret waiting to be discovered.",
        "btn-discover": "Discover with Spacer",
        "earth-title": "Earth",
        "earth-desc": "Earth is the third planet from the Sun and the only known planet to support life. It is the only planet known to have plate tectonics, oceans, and a diverse range of life forms, including humans. Earth is also the only planet known to have a magnetic field, which helps protect it from harmful solar radiation.",
        "btn-learn-more": "Learn More",
        "planets-title": "Planets",
        "chat-title": "Chat with our AI",
        "chat-spacer-name": "Spacer",
        "btn-let-chat": "Let's Chat with Spacer",
        "footer-text": "© 2025 Youssef Emad. All rights reserved.",
        "spacer-ai-badge": "AI",
        "spacer-subtitle": "Your intelligent cosmic companion. Ask me anything about space!",
        "spacer-placeholder": "Type your space question...",
        "spacer-api-notice": "Powered by Google Gemini. Please ensure your API Key is set in spacer.js",
        "event-badge": "Next Cosmic Event",
        "event-scientific-title": "Scientific Explanation",
        "sub-title": "Cosmic Alerts",
        "sub-desc": "Get notified about rare cosmic events 1 week before they happen. It's 100% free!",
        "btn-subscribe": "Subscribe for Free",
        "sub-success": "Welcome explorer! You're now subscribed.",
        "sub-error": "Email already exists or error occurred.",
        "viewing-time": "Best Viewing Time:",
        "scientific-insight": "Scientific Insight:",
        "nasa-alert-title": "NASA Space Weather Alert",
        "nasa-alert-desc": "New space weather notification from NASA. Potential solar activity detected.",

        // Famous Missions Section (Home)
        "missions-section-title": "Historic Space Missions",
        
        "lbl-country": "Country:",
        "lbl-year": "Year:",
        "lbl-goal": "Mission Goal",
        "lbl-results": "Mission Results",
        "lbl-impact": "Why it matters",

        // 1. Apollo 11
        "msN-1": "Apollo 11",
        "msC-1": "United States",
        "msY-1": "1969",
        "msG-1": "Land humans on the Moon and return them safely.",
        "msR-1": "<li>First human landing on the Moon.</li><li>Collected Moon rock and soil samples.</li><li>Proved human deep-space travel is possible.</li>",
        "msI-1": "Changed human history and began modern space exploration.",

        // 2. Voyager
        "msN-2": "Voyager 1 & 2",
        "msC-2": "United States",
        "msY-2": "1977",
        "msG-2": "Explore the outer planets of the solar system.",
        "msR-2": "<li>First close-up images of Jupiter, Saturn, Uranus, Neptune.</li><li>Discovered active volcanoes on Io.</li><li>Voyager 1 entered interstellar space.</li>",
        "msI-2": "Extended human knowledge beyond the solar system.",

        // 3. Hubble
        "msN-3": "Hubble Space Telescope",
        "msC-3": "NASA + ESA",
        "msY-3": "1990",
        "msG-3": "Observe the universe from above Earth’s atmosphere.",
        "msR-3": "<li>Deep images of distant galaxies.</li><li>Calculated age of universe.</li><li>Evidence of universe expansion.</li>",
        "msI-3": "Revolutionized astronomy.",

        // 4. Curiosity
        "msN-4": "Curiosity Rover",
        "msC-4": "United States",
        "msY-4": "2012",
        "msG-4": "Study Mars’ surface and determine if it once supported life.",
        "msR-4": "<li>Found evidence of ancient liquid water.</li><li>Detected organic molecules.</li><li>Analyzed Martian soil.</li>",
        "msI-4": "Showed Mars was once habitable.",

        // 5. Perseverance
        "msN-5": "Perseverance Rover",
        "msC-5": "United States",
        "msY-5": "2021",
        "msG-5": "Search for ancient life and collect samples.",
        "msR-5": "<li>Collected rock samples for return.</li><li>Recorded Mars sounds.</li><li>Tested first helicopter (Ingenuity).</li>",
        "msI-5": "Key step toward human missions to Mars.",

        // 6. ISS
        "msN-6": "International Space Station",
        "msC-6": "International",
        "msY-6": "1998",
        "msG-6": "Conduct scientific research in microgravity.",
        "msR-6": "<li>Medical breakthroughs.</li><li>Long-term space effects on body.</li><li>Deep-space tech testing.</li>",
        "msI-6": "Essential for future deep-space travel.",

        // 7. James Webb
        "msN-7": "James Webb Telescope",
        "msC-7": "NASA + ESA + CSA",
        "msY-7": "2021",
        "msG-7": "Study the early universe and exoplanets.",
        "msR-7": "<li>Unprecedented images of early galaxies.</li><li>Detailed exoplanet atmospheres.</li><li>Star formation insights.</li>",
        "msI-7": "Looks deeper into space than any telescope before.",

        // Famous Figures Section (Home)
        "figures-section-title": "Legends of Space",
        "subtitle-scientists": "Famous Scientists",
        "subtitle-astronauts": "Famous Astronauts",

        // Scientists
        "sc-1-name": "Isaac Newton",
        "sc-1-role": "Physicist & Astronomer",
        "sc-1-why": "Created the laws of motion and gravity.",
        "sc-1-contrib": "Explained why planets orbit the Sun.",
        "sc-1-fact": "Every space mission uses Newton’s laws.",

        "sc-2-name": "Albert Einstein",
        "sc-2-role": "Theoretical Physicist",
        "sc-2-why": "Changed our understanding of space, time, and gravity.",
        "sc-2-contrib": "Predicted black holes and time dilation.",
        "sc-2-fact": "GPS satellites depend on his equations.",

        "sc-3-name": "Galileo Galilei",
        "sc-3-role": "Astronomer",
        "sc-3-why": "First to use a telescope to study space.",
        "sc-3-contrib": "Proved Earth is not the center of the universe.",
        "sc-3-fact": "Called the 'Father of Modern Astronomy'.",

        "sc-4-name": "Edwin Hubble",
        "sc-4-role": "Astronomer",
        "sc-4-why": "Discovered that the universe is expanding.",
        "sc-4-contrib": "Proved other galaxies exist beyond the Milky Way.",
        "sc-4-fact": "The Hubble Space Telescope is named after him.",

        "sc-5-name": "Stephen Hawking",
        "sc-5-role": "Cosmologist",
        "sc-5-why": "Studied black holes and the origin of the universe.",
        "sc-5-contrib": "Discovered Hawking Radiation.",
        "sc-5-fact": "Connected physics with cosmology.",

        // Astronauts
        "ast-1-name": "Yuri Gagarin",
        "ast-1-role": "First Human in Space",
        "ast-1-why": "First person to orbit Earth (1961).",
        "ast-1-fact": "Started the human spaceflight era.",

        "ast-2-name": "Neil Armstrong",
        "ast-2-role": "American Astronaut",
        "ast-2-why": "First human to walk on the Moon.",
        "ast-2-fact": "A historic moment for humanity.",

        // Buzz Aldrin
        "ast-3-name": "Buzz Aldrin",
        "ast-3-role": "Astronaut",
        "ast-3-why": "Second person to walk on the Moon.",
        "ast-3-fact": "Conducted important lunar experiments.",

        // Chris Hadfield
        "ast-4-name": "Chris Hadfield",
        "ast-4-role": "Canadian Astronaut",
        "ast-4-why": "Made space education popular from the ISS.",
        "ast-4-fact": "Combined science and communication.",

        // Valentina Tereshkova
        "ast-5-name": "Valentina Tereshkova",
        "ast-5-role": "First Woman in Space",
        "ast-5-why": "First female astronaut (1963).",
        "ast-5-fact": "Broke gender barriers in space exploration.",

        // Famous Galaxies Section (Home)
        "galaxies-section-title": "Famous Galaxies",
        "btn-explore-galaxy": "Explore Galaxy",
        "card-mw-desc": "Our home galaxy, containing the Sun and Earth.",
        "card-and-desc": "Our massive cosmic neighbor on a collision course.",
        "card-whirl-desc": "The perfect grand-design spiral galaxy.",

        // Common Labels
        "label-type": "Type",
        "label-diameter": "Diameter",
        "label-stars": "Stars",
        "label-age": "Age",
        "label-distance": "Distance",
        "label-size": "Size",
        "label-interaction": "Interaction",
        "label-spiral": "Spiral Galaxy",
        "insight-label": "Big Insight",

        // Milky Way Page
        "mw-title": "The Milky Way",
        "mw-subtitle": "Our Home Galaxy",
        "mw-identity-title": "Basic Identity",
        "mw-type": "Barred Spiral",
        "mw-diameter": "100,000 Light-Years",
        "mw-stars": "100-400 Billion",
        "mw-age": "13.6 Billion Years",
        "mw-desc": "The Milky Way is the galaxy that contains Earth, the Sun, and all stars we see in the night sky.",
        "mw-structure-title": "Structure (Important)",
        "mw-structure-intro": "The Milky Way is not just a flat disk. It has:",
        "mw-structure-list": "<li><strong>Galactic Core:</strong> Dense region with a supermassive black hole (Sagittarius A*).</li><li><strong>Bar:</strong> A long bridge of stars helping move gas inward.</li><li><strong>Spiral Arms:</strong> Regions of active star formation. We are in the Orion Arm.</li><li><strong>Halo:</strong> Spherical region containing old stars and dark matter.</li>",
        "mw-science-title": "Why Scientists Care So Much",
        "mw-science-list": "<li>It’s the only galaxy we can study from inside.</li><li>Helps us understand star life cycles and planet formation.</li><li>Reveals Dark Matter distribution and galactic evolution.</li>",
        "mw-vis-warning": "Most pictures of the Milky Way as a full galaxy are artist simulations, not photos.",
        "mw-insight": "Studying the Milky Way is like trying to understand a forest while standing inside it — difficult, but incredibly detailed.",

        // Andromeda Page
        "and-title": "Andromeda Galaxy (M31)",
        "and-subtitle": "Our Cosmic Neighbor",
        "and-identity-title": "Basic Identity",
        "and-distance": "~2.5 Million LY",
        "and-stars": "~1 Trillion",
        "and-size": "Larger than Milky Way",
        "and-desc": "Andromeda is the nearest large galaxy to us and the largest galaxy in the Local Group.",
        "and-importance-title": "Why It Is Important",
        "and-importance-list": "<li>A reference model for spiral galaxies.</li><li>Close enough to observe clearly and compare directly to ours.</li><li>Helps answer: How do spiral galaxies form and age?</li><li><strong>Dark Matter:</strong> Rotation speed provides strong evidence of dark matter.</li>",
        "and-future-title": "The Future Collision",
        "and-future-desc": "Yes, the Milky Way and Andromeda will collide in ~4–5 billion years.",
        "and-future-list": "<li>Individual stars will NOT crash (too much space).</li><li>The galaxies will merge to form 'Milkomeda'.</li><li>This helps scientists study galaxy mergers, which are common.</li>",
        "and-insight": "Andromeda lets us see our future and our mirror — what the Milky Way was, and what it will become.",

        // Whirlpool Page
        "whirl-title": "Whirlpool Galaxy (M51)",
        "whirl-subtitle": "The Perfect Spiral",
        "whirl-identity-title": "Basic Identity",
        "whirl-type": "Grand-design Spiral",
        "whirl-distance": "~23 Million LY",
        "whirl-interact": "Actively Interacting",
        "whirl-desc": "The Whirlpool Galaxy is famous because it looks like a textbook perfect spiral galaxy.",
        "whirl-looks-title": "Why It Looks So Perfect",
        "whirl-looks-desc": "Its clear, symmetrical, bright arms are caused by gravitational interaction with a smaller neighbor.",
        "whirl-looks-list": "<li>Gravity compresses gas.</li><li>Triggers star birth.</li><li>Enhances spiral structure.</li>",
        "whirl-science-title": "Scientific Importance",
        "whirl-science-desc": "M51 was the first galaxy where spiral structure was recognized. It teaches us:",
        "whirl-science-list": "<li>Spiral arm formation and tidal forces.</li><li>Starburst regions.</li><li><strong>Key Lesson:</strong> Spiral arms are density waves (traffic jams), not solid structures.</li>",
        "whirl-insight": "The Whirlpool Galaxy proves that gravity shapes beauty in the universe.",

        // Technology Page
        "nav-tech": "Technology",
        "tech-hero-title": "Robotic Technology Used in Space",
        "tech-hero-desc": "Space probes, rovers, and robotic assistants are humanity's eyes and hands in the cosmos. Discover how these machines explore where humans cannot go.",
        
        "tech-what-is": "What They Are",
        "tech-functions": "Main Functions",
        "tech-technologies": "Key Technologies",
        "tech-capabilities": "Core Capabilities",
        "tech-purposes": "Main Purposes",
        "tech-challenges": "Key Challenges",
        "tech-types": "Types",
        "tech-stack": "Technology Stack",
        "tech-examples": "Famous Examples:",
        "tech-why-matter": "Why They Matter:",

        // 1. Probes
        "tech-1-title": "Space Probes",
        "tech-1-desc": "Space probes are fully robotic spacecraft sent beyond Earth orbit to explore deep space. They do not carry humans and usually never return.",
        "tech-1-functions": "<li>Measure temperature, radiation, gravity, magnetic fields</li><li>Take photos and spectrometry data</li><li>Send scientific data back to Earth via radio waves</li>",
        "tech-1-techs": "<li>Autonomous navigation (they correct their path themselves)</li><li>Long-range communication antennas</li><li>Radiation-hardened computers</li><li>RTGs (nuclear power) for missions far from the Sun</li>",
        "tech-1-examples": "Voyager 1 & 2 (Interstellar), New Horizons (Pluto), Juno (Jupiter)",
        "tech-1-reason": "They are humanity’s eyes beyond the solar system. Humans cannot survive these distances or durations.",

        // 2. Rovers
        "tech-2-title": "Rovers",
        "tech-2-desc": "Rovers are mobile robots that land on planets or moons and drive across the surface.",
        "tech-2-capabilities": "<li>Terrain navigation (rocks, slopes, dust)</li><li>Soil drilling and sample collection</li><li>Chemical analysis (searching for water or life)</li><li>High-resolution imaging</li>",
        "tech-2-techs": "<li>AI-based path planning</li><li>Computer vision</li><li>Robotic arms</li><li>Autonomous hazard avoidance</li><li>Delayed communication handling (Mars has ~20-minute delay)</li>",
        "tech-2-examples": "Curiosity (Mars geology), Perseverance (Life detection), Spirit & Opportunity",
        "tech-2-reason": "They act as robot scientists, doing years of research without human presence.",

        // 3. Landers
        "tech-3-title": "Landers",
        "tech-3-desc": "Landers are robots that touch down and stay in one place.",
        "tech-3-purposes": "<li>Seismic activity detection</li><li>Atmospheric analysis</li><li>Soil chemistry</li><li>Temperature & pressure monitoring</li>",
        "tech-3-challenges": "<li>Precision landing</li><li>Surviving extreme cold or heat</li><li>Limited mobility</li>",
        "tech-3-examples": "InSight (Mars quakes), Viking Landers, Chang’e Moon landers",
        "tech-3-reason": "They allow deep, focused experiments that require stability rather than movement.",

        // 4. Satellites
        "tech-4-title": "Satellites",
        "tech-4-desc": "Satellites are robotic systems in orbit around Earth or other planets.",
        "tech-4-types": "<li>Communication satellites (internet, TV, phones)</li><li>Navigation satellites (GPS, Galileo)</li><li>Weather satellites</li><li>Scientific satellites (space telescopes)</li>",
        "tech-4-stack": "<li>Onboard computers</li><li>Gyroscopes & reaction wheels (orientation control)</li><li>Solar panels</li><li>Thrusters</li><li>Autonomous fault correction</li>",
        "tech-4-examples": "Hubble Space Telescope, James Webb Space Telescope, Starlink satellites",
        "tech-4-reason": "Modern civilization depends on them — navigation, communication, climate monitoring.",

        // 5. Arms
        "tech-5-title": "Robotic Arms & Station Robots",
        "tech-5-desc": "Robots designed to assist astronauts or operate independently in orbit.",
        "tech-5-capabilities": "<li>Capture spacecraft</li><li>Repair satellites</li><li>Move cargo</li><li>Reduce astronaut spacewalk risk</li>",
        "tech-5-techs": "<li>Precision motors</li><li>Force feedback systems</li><li>Teleoperation + AI assistance</li>",
        "tech-5-examples": "Canadarm2, Dextre, European Robotic Arm",
        "tech-5-reason": "They make space operations safer, faster, and cheaper.",

        // Core Tech
        "tech-core-title": "Core Technologies Powering All Space Robots",
        "tech-core-ai": "Artificial Intelligence",
        "tech-core-ai-list": "<li>Decision-making</li><li>Pattern recognition</li><li>Navigation</li><li>Self-diagnosis</li>",
        "tech-core-power": "Power Systems",
        "tech-core-power-list": "<li>Solar energy</li><li>Nuclear (RTG)</li><li>Battery storage</li>",
        "tech-core-comms": "Communication",
        "tech-core-comms-list": "<li>Deep Space Network</li><li>High-gain antennas</li><li>Error-correcting signals</li>",
        "tech-core-materials": "Materials",
        "tech-core-materials-list": "<li>Radiation-resistant electronics</li><li>Extreme-temperature alloys</li><li>Lightweight composites</li>",
        
        // Insight
        "tech-insight-title": "🌌 Big Insight",
        "tech-insight-text": "Robotic space technology is not a replacement for humans — it is a necessary precursor.",
        "tech-insight-1": "Humans follow robots.",
        "tech-insight-2": "Robots reduce risk.",
        "tech-insight-3": "Robots expand reach.",
        "tech-insight-conclusion": "Without robots: No Mars missions, No deep-space exploration, No satellite infrastructure, No future colonization.",

        // Forum Section
        "nav-forum": "Forum",
        "forum-title": "Galactic Community",
        "forum-subtitle": "Share your cosmic thoughts and debate the mysteries of the universe!",
        "placeholder-question": "Ask a question... e.g., Do aliens exist?",
        "btn-post-question": "Post Question",
        "opinions-title": "Opinions",
        "placeholder-opinion": "Share your opinion...",
        "no-opinions": "No opinions yet. Be the first to share!",
        
        // Global Labels
        "challenges-title": "The Cosmic Challenges",
        "solutions-title": "Future Solutions",
        "scientific-deep-dive": "Scientific Deep Dive",
        
        // Planet Specifics (Earth)
        "planet-hero-subtitle-earth": "Our Beautiful Blue Home",
        "planet-hero-desc-earth": "Welcome home! Earth is the third planet from the Sun and the only place in the entire universe where we know for sure that life exists. It's perfectly placed—not too hot, not too cold—just right for liquid water, which is the key to life! Earth is a complex system of interacting rock, water, air, and life. Its atmosphere is rich in nitrogen and oxygen, and its magnetic field protects us from harmful solar radiation.",
        "earth-challenges": "Overpopulation, climate change, and depletion of natural resources. Maintaining the delicate balance of ecosystems while advancing technology is our greatest hurdle.",
        "earth-solutions": "Transitioning to renewable energy, sustainable agriculture, and space exploration to monitor environmental changes and potentially find secondary habitats.",

        // Sun
        "planet-hero-subtitle-sun": "The Heart of Our Solar System",
        "planet-hero-desc-sun": "The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest particles of debris in its orbit. The energy it releases provides the light and heat that make life possible on Earth.",
        "sun-challenges": "Extreme heat and radiation. The surface temperature is about 5,500°C, and the core is 15 million°C. Solar flares can disrupt Earth's communications.",
        "sun-solutions": "Probes like the Parker Solar Probe use advanced carbon-carbon heat shields to withstand the heat. Future tech might involve massive magnetic shields to protect visiting spacecraft.",
        
        // Mercury
        "planet-hero-subtitle-mercury": "The Swift Small Planet",
        "planet-hero-desc-mercury": "Mercury is the smallest planet in our solar system and the closest to the Sun. It's only slightly larger than Earth's Moon. Mercury is a rocky planet with a heavily cratered surface, much like our Moon. It has a very thin atmosphere, or exosphere, and no moons of its own.",
        "mercury-challenges": "Massive temperature swings (430°C to -180°C) and intense solar radiation. There is almost no atmosphere to breathe or protect from space rocks.",
        "mercury-solutions": "Building habitats in permanently shadowed craters at the poles where ice exists, or building deep underground to use the planet's crush as a natural shield.",
        
        // Venus
        "planet-hero-subtitle-venus": "Earth's Overheated Twin",
        "planet-hero-desc-venus": "Venus is the second planet from the Sun and Earth's closest planetary neighbor. Even though Mercury is closer to the Sun, Venus is the hottest planet in our solar system because of its thick, toxic atmosphere that traps heat in a runaway greenhouse effect.",
        "venus-challenges": "Crushing atmospheric pressure (90x Earth's) and lead-melting temperatures. The clouds are made of corrosive sulfuric acid.",
        "venus-solutions": "Floating cities in the upper atmosphere where pressure and temperature are similar to Earth's. Using acid-resistant materials like specialized ceramics and metals.",
        
        // Mars
        "planet-hero-subtitle-mars": "The Red Planet",
        "planet-hero-desc-mars": "Mars is a dusty, cold, desert world with a very thin atmosphere. It's the most explored planet after Earth. Evidence suggests Mars was much wetter and warmer billions of years ago. It has the tallest volcano (Olympus Mons) and the longest canyon (Valles Marineris) in the solar system.",
        "mars-challenges": "Lack of a breathable atmosphere (95% CO2), low gravity (38% of Earth), and high radiation levels due to the lack of a global magnetic field.",
        "mars-solutions": "Using MOXIE technology to extract oxygen from CO2, building pressurized habitats covered in Martian soil for radiation shielding, and using low-gravity exercise routines.",
        
        // Jupiter
        "planet-hero-subtitle-jupiter": "The King of Planets",
        "planet-hero-desc-jupiter": "Jupiter is the largest planet in our solar system—more than twice as massive as all the other planets combined. It's a gas giant with no solid surface. Its Great Red Spot is a storm larger than Earth that has raged for hundreds of years.",
        "jupiter-challenges": "Immense gravity and a lethal radiation environment. There is no solid ground to land on, and the pressure inside the planet is crushing.",
        "jupiter-solutions": "Exploring its moons instead of the planet itself. Using heavy lead or water shielding for radiation protection and orbital habitats that stay outside the main radiation belts.",
        
        // Saturn
        "planet-hero-subtitle-saturn": "The Jewel of the Solar System",
        "planet-hero-desc-saturn": "Adorned with a dazzling system of rings made of ice and rock, Saturn is unique. It's a gas giant, primarily hydrogen and helium. It has over 80 moons, including Titan, which has its own atmosphere and liquid methane lakes.",
        "saturn-challenges": "Extreme cold and high-speed winds (up to 1,800 km/h). Like Jupiter, it lacks a solid surface and has high radiation near the rings.",
        "saturn-solutions": "Developing advanced cold-resistant propulsion and using the atmosphere's gases for fuel. Future habitats could float in the calmer layers of the atmosphere.",
        
        // Uranus
        "planet-hero-subtitle-uranus": "The Sideways Planet",
        "planet-hero-desc-uranus": "Uranus is an ice giant that rotates on its side—likely the result of a massive collision long ago. It's the coldest planet in the solar system. It has 27 moons and 13 faint rings. Its blue-green color comes from methane in its atmosphere.",
        "uranus-challenges": "Extreme distance from Earth (long travel times) and cryogenic temperatures. The lack of solar energy makes traditional solar power useless.",
        "uranus-solutions": "Nuclear fusion propulsion for faster travel and nuclear power generators (RTGs) to provide energy in the dark, cold outer reaches.",
        
        // Neptune
        "planet-hero-subtitle-neptune": "The Windiest World",
        "planet-hero-desc-neptune": "Neptune is the most distant major planet. It's dark, cold, and whipped by supersonic winds—some faster than the speed of sound on Earth. It has 14 moons, including Triton, which orbits the planet backward.",
        "neptune-challenges": "Supersonic winds and extreme distance. The high pressure and cold make it one of the most hostile places for any probe or habitat.",
        "neptune-solutions": "Streamlined atmospheric probes and high-density thermal insulation. Using gravity assists from other planets to reach Neptune more quickly.",
        
        // Pluto
        "planet-hero-subtitle-pluto": "The Small World with a Big Heart",
        "planet-hero-desc-pluto": "Pluto is a dwarf planet in the Kuiper Belt. It has mountains made of water ice and a large heart-shaped glacier made of nitrogen and methane. It was considered the ninth planet for 76 years before being reclassified.",
        "pluto-challenges": "Incredibly weak gravity and extreme cold. It takes 248 Earth years to orbit the Sun, meaning long periods of total darkness.",
        "pluto-solutions": "Cryogenic life-support systems and deep-space communication relays. Using local nitrogen ice for fuel and air processing.",

        "data-diameter": "Diameter",
        "data-water": "Water Cover",
        "data-moons": "Moons",
        "data-day": "Day Length",
        "info-goldilocks-title": "The Goldilocks Planet",
        "info-goldilocks-desc": "Scientists call Earth the \"Goldilocks Planet\" because everything is \"just right\". We have an atmosphere that is rich in oxygen for us to breathe and protects us from meteors. We have a magnetic field that acts like a shield against harmful space rays.",
        "info-dynamic-title": "A Dynamic World",
        "info-dynamic-desc": "Earth is alive in more ways than one! The ground beneath our feet is made of giant puzzle pieces called \"tectonic plates\" that are always moving very slowly. This movement creates mountains, volcanoes, and earthquakes over millions of years.",
        "info-blue-title": "The Blue Marble",
        "info-blue-desc": "From space, Earth looks like a glowing blue marble swirled with white clouds. That blue color comes from our oceans, which cover almost three-quarters of the planet. It's the most colorful and beautiful planet we know!",
        "gallery-title-earth": "Earth Gallery",
        "back-to-solar": "Back to Solar System",
        
        // Planet names and summaries for index.html
        "sun-name": "Sun",
        "sun-desc": "The Sun is the star at the center of our Solar System. It is a massive ball of hot plasma that provides light and heat to all the planets. The Sun contains 99.86% of the mass in the Solar System and is responsible for Earth's climate and weather through its powerful energy output.",
        "mercury-name": "Mercury",
        "mercury-desc": "Mercury is the closest planet to the Sun and the smallest planet in our Solar System. It has extreme temperature variations, from scorching hot during the day to freezing cold at night. Mercury has no atmosphere to retain heat and is covered with craters from asteroid impacts.",
        "venus-name": "Venus",
        "venus-desc": "Venus is the second planet from the Sun and is often called Earth's twin due to similar size. However, Venus has a thick toxic atmosphere filled with carbon dioxide and sulfuric acid clouds, creating a runaway greenhouse effect that makes it the hottest planet in our Solar System.",
        "mars-name": "Mars",
        "mars-desc": "Mars is the fourth planet from the Sun, known as the Red Planet due to iron oxide on its surface. It has the largest volcano and canyon in the Solar System. Mars has polar ice caps and evidence suggests it once had liquid water, making it a prime target for the search for past life.",
        "jupiter-name": "Jupiter",
        "jupiter-desc": "Jupiter is the fifth and largest planet in our Solar System, a gas giant with colorful cloud bands and the famous Great Red Spot storm. It has at least 79 moons, including the four large Galilean moons. Jupiter's massive gravity helps protect Earth from asteroids and comets.",
        "saturn-name": "Saturn",
        "saturn-desc": "Saturn is the sixth planet from the Sun and is famous for its spectacular ring system made of ice and rock particles. It is a gas giant with a low density that would allow it to float in water. Saturn has over 80 known moons, with Titan being the largest.",
        "uranus-name": "Uranus",
        "uranus-desc": "Uranus is the seventh planet from the Sun and is unique for rotating on its side, likely due to a massive collision in its past. This ice giant has a blue-green color from methane in its atmosphere and has 27 known moons. Uranus experiences extreme seasons lasting over 20 years each.",
        "neptune-name": "Neptune",
        "neptune-desc": "Neptune is the eighth and farthest planet from the Sun in our Solar System. This ice giant has the strongest winds in the Solar System, reaching speeds of over 2,000 km/h. Neptune has a deep blue color and 14 known moons, with Triton being the largest and most unusual.",
        "pluto-name": "Pluto",
        "pluto-desc": "Pluto is a dwarf planet in the Kuiper Belt beyond Neptune's orbit. Once considered the ninth planet, it was reclassified in 2006. Pluto has a heart-shaped glacier, five known moons, and a thin atmosphere. NASA's New Horizons mission revealed its surprisingly complex and active surface.",

        // Meteorites Section
        "nav-meteorites": "Meteorites",
        "meteorites-section-title": "Meteorites & Meteor Showers",
        "category-meteorites": "Famous Meteorites",
        "category-showers": "Annual Meteor Showers",
        "category-craters": "Incredible Craters",

        "hoba-name": "Hoba Meteorite",
        "hoba-desc": "Located in Namibia, it's the largest intact meteorite ever found on Earth. It weighs about 60 tons and is composed almost entirely of iron.",
        "chelyabinsk-name": "Chelyabinsk Meteor",
        "chelyabinsk-desc": "Exploded over Russia in 2013. It's famous for being widely caught on dashboard cameras. The blast broke thousands of windows and injured hundreds.",
        "allende-name": "Allende Meteorite",
        "allende-desc": "Fell in Mexico in 1969. Scientists call it the 'Rosetta Stone' of astronomy because it contains minerals from the very birth of the solar system.",
        "willamette-name": "Willamette Meteorite",
        "willamette-desc": "The largest meteorite discovered in the USA. It's known for its unique, deeply pitted surface caused by thousands of years of erosion.",

        "perseids-name": "Perseids",
        "perseids-desc": "Peak in mid-August. They are the most popular shower because they produce bright meteors in clear, warm summer skies.",
        "leonids-name": "Leonids",
        "leonids-desc": "Peak in November. They are famous for producing spectacular 'meteor storms' about every 33 years where thousands of meteors fall.",
        "geminids-name": "Geminids",
        "geminids-desc": "Peak in December. One of the strongest showers, showing over 120 multicolored meteors per hour under ideal dark conditions.",

        "barringer-name": "Barringer Crater",
        "barringer-desc": "Located in Arizona, USA. It is the best-preserved meteorite crater on Earth, created by an impact about 50,000 years ago.",
        "chicxulub-name": "Chicxulub Crater",
        "chicxulub-desc": "Located in Mexico. This giant crater marks the impact site of the asteroid that caused the extinction of the dinosaurs 66 million years ago.",

        // Cosmic Mysteries Section (Home)
        "nav-mysteries": "Cosmos",
        "mysteries-section-title": "Cosmic Mysteries",
        "mystery-black-hole-title": "Black Holes",
        "mystery-black-hole-desc": "The invisible monsters of the universe that swallow everything, even light!",
        "mystery-white-hole-title": "White Holes",
        "mystery-white-hole-desc": "The mysterious opposites of black holes that spew matter into space!",

        // Black Hole Page
        "bh-hero-subtitle": "The Invisible Gravity Monsters",
        "bh-hero-desc": "A black hole is a region of space where gravity is so strong that nothing—not even light—can escape. It's like a cosmic whirlpool that never lets go!",
        "bh-discovery-title": "Who Found Them?",
        "bh-discovery-desc": "Karl Schwarzschild first thought of them in 1916 using Einstein's math. The first real candidate, Cygnus X-1, was found in 1971. In 2019, we finally took the first-ever photo of one!",
        "bh-formation-title": "How are they born?",
        "bh-formation-desc": "When a massive star dies, it collapses under its own weight. If the star is big enough, it crushes itself down into a tiny point with infinite gravity!",
        "bh-behavior-title": "What do they do?",
        "bh-behavior-desc": "They pull in nearby gas and stars, forming a glowing 'accretion disk'. If you got too close, you'd experience 'spaghettification'—stretched out like a noodle!",
        "bh-features-title": "Key Features",
        "bh-features-desc": "1. Event Horizon: The point of no return. 2. Singularity: The crushed center. 3. Accretion Disk: Glowing stuff swirling around it.",
        "bh-famous-title": "Famous Black Holes",
        "bh-famous-desc": "Sagittarius A* is the monster at the center of our Milky Way! M87* is the giant in another galaxy that we photographed first.",

        // White Hole Page
        "wh-hero-subtitle": "The Cosmic Fountain",
        "wh-hero-desc": "Imagine a black hole running in reverse—that's a white hole! While black holes swallow everything, white holes spew out light and matter and let nothing in.",
        "wh-discovery-title": "Theoretical Origins",
        "wh-discovery-desc": "They were first predicted in 1935 as part of the 'Einstein-Rosen Bridge' (wormhole theory). Unlike black holes, we've never actually seen one in real life yet!",
        "wh-formation-title": "The Rebound Theory",
        "wh-formation-desc": "Some scientists think that when a black hole dies and gets as small as it can, it might 'bounce' out and become a white hole in a different time or place.",
        "wh-behavior-title": "How do they act?",
        "wh-behavior-desc": "They are the ultimate 'no-entry' zones. Matter and energy constantly pour out of them, but the anti-event horizon makes it impossible to ever go inside.",
        "wh-critique-title": "The Big Debate",
        "wh-critique-desc": "Many scientists doubt they exist because they seem to break the laws of physics (entropy). They are currently a mathematical mystery waiting to be solved!",
        "wh-famous-title": "Scientific Candidates",
        "wh-famous-desc": "GRB 060614 was a mysterious 102-second 'Gamma-Ray Burst' in 2006 that some think might have been a white hole, though most think it was just a weird star explosion."
    },
    ar: {
        "nav-home": "الرئيسية",
        "nav-earth": "الأرض",
        "nav-planets": "الكواكب",
        "nav-gallery": "المعرض",
        "nav-spacer": "سبيسر",
        "nav-spacer-chat": "دردشة سبيسر",
        "nav-meteorites": "النيازك والشهب",
        "nav-mysteries": "الكون",
        "meteorites-section-title": "النيازك وزخات الشهب",
        "category-meteorites": "أشهر النيازك",
        "category-showers": "زخات الشهب السنوية",
        "category-craters": "فوهات نيزكية مذهلة",
        "mysteries-section-title": "أسرار كونية",
        "mystery-black-hole-title": "الثقوب السوداء",
        "mystery-black-hole-desc": "وحوش الكون غير المرئية التي تبتلع كل شيء، حتى الضوء!",
        "mystery-white-hole-title": "الثقوب البيضاء",
        "mystery-white-hole-desc": "الأضداد الغامضة للثقوب السوداء التي تقذف المادة في الفضاء!",

        // Black Hole Page (Arabic)
        "bh-hero-subtitle": "وحوش الجاذبية غير المرئية",
        "bh-hero-desc": "الثقب الأسود هو منطقة في الفضاء تكون فيها الجاذبية قوية جداً لدرجة أنه لا يمكن لأي شيء - ولا حتى الضوء - الهروب منها. إنه مثل دوامة كونية لا تترك شيئاً أبداً!",
        "bh-discovery-title": "من اكتشفها؟",
        "bh-discovery-desc": "أول من فكر فيها كان كارل شوارزشيلد عام 1916 باستخدام رياضيات أينشتاين. تم العثور على أول مرشح حقيقي، Cygnus X-1، في عام 1971. وفي عام 2019، التقطنا أخيراً أول صورة على الإطلاق لواحد منها!",
        "bh-formation-title": "كيف تولد؟",
        "bh-formation-desc": "عندما يموت نجم ضخم، فإنه ينهار تحت ثقله. إذا كان النجم كبيراً بما يكفي، فإنه يسحق نفسه لأسفل إلى نقطة صغيرة ذات جاذبية لا نهائية!",
        "bh-behavior-title": "ماذا تفعل؟",
        "bh-behavior-desc": "تقوم بسحب الغاز والنجوم القريبة، مكونة 'قرصاً تراكمياً' متوهجاً. إذا اقتربت جداً، فستواجه 'تأثير السباغيتي' - حيث ستتمدد مثل قطعة المعكرونة!",
        "bh-features-title": "الميزات الرئيسية",
        "bh-features-desc": "1. أفق الحدث: نقطة اللاعودة. 2. التفرد: المركز المسحوق. 3. القرص التراكمي: المواد المتوهجة التي تدور حوله.",
        "bh-famous-title": "أشهر الثقوب السوداء",
        "bh-famous-desc": "Sagittarius A* هو الوحش الموجود في مركز مجرتنا درب التبانة! M87* هو العملاق الموجود في مجرة أخرى والذي صورناه أولاً.",

        // White Hole Page (Arabic)
        "wh-hero-subtitle": "النافورة الكونية",
        "wh-hero-desc": "تخيل ثقباً أسود يعمل بشكل عكسي - هذا هو الثقب الأبيض! بينما تبتلع الثقوب السوداء كل شيء، تقذف الثقوب البيضاء الضوء والمادة ولا تسمح بدخول أي شيء.",
        "wh-discovery-title": "الأصول النظرية",
        "wh-discovery-desc": "تم التنبؤ بها لأول مرة في عام 1935 كجزء من 'جسر أينشتاين-روزين' (نظرية الثقب الدودي). على عكس الثقوب السوداء، لم نرَ واحداً منها بالفعل في الحياة الواقعية بعد!",
        "wh-formation-title": "نظرية الارتداد",
        "wh-formation-desc": "يعتقد بعض العلماء أنه عندما يموت الثقب الأسود ويصبح صغيراً قدر الإمكان، فقد 'يرتد' ويصبح ثقباً أبيض في وقت أو مكان مختلف.",
        "wh-behavior-title": "كيف تتصرف؟",
        "wh-behavior-desc": "هي مناطق 'ممنوع الدخول' النهائية. تتدفق المادة والطاقة منها باستمرار، لكن أفق الحدث المضاد يجعل من المستحيل الدخول إليها أبداً.",
        "wh-critique-title": "الجدل الكبير",
        "wh-critique-desc": "يشكك العديد من العلماء في وجودها لأنها تبدو وكأنها تكسر قوانين الفيزياء (الإنتروبيا). إنها حالياً لغز رياضي ينتظر الحل!",
        "wh-famous-title": "مرشحون علميون",
        "wh-famous-desc": "GRB 060614 كان 'انفجار أشعة غاما' غامضاً مدته 102 ثانية في عام 2006 يعتقد البعض أنه ربما كان ثقباً أبيض، رغم أن معظمهم يعتقد أنه كان مجرد انفجار نجمي غريب.",

        "hoba-name": "نيزك هوبا",
        "hoba-desc": "يقع في ناميبيا، وهو أكبر نيزك سليم عُثر عليه على الإطلاق. يزن حوالي 60 طناً ويتكون معظمه من الحديد.",
        "chelyabinsk-name": "نيزك تشيليابنسك",
        "chelyabinsk-desc": "انفجر فوق روسيا عام 2013. اشتهر بتوثيقه الواسع عبر كاميرات السيارات، وتسبب بموجة صادمة أدت لتحطم النوافذ وإصابة المئات.",
        "allende-name": "نيزك أليندي",
        "allende-desc": "سقط في المكسيك عام 1969، ويعتبره العلماء 'حجر رشيد' لعلم الفلك لأنه يحتوي على مواد تعود لبداية تشكل النظام الشمسي.",
        "willamette-name": "نيزك ويلاميت",
        "willamette-desc": "أكبر نيزك عُثر عليه في الولايات المتحدة، ويتميز بشكل فجواته الغريب الناتج عن التآكل.",

        "perseids-name": "البرشاويات",
        "perseids-desc": "تحدث في منتصف شهر أغسطس، وهي الأكثر شعبية لأنها تنتج شهباً ساطعة وكثيرة في جو صيفي صافٍ.",
        "leonids-name": "الأسديات",
        "leonids-desc": "تحدث في شهر نوفمبر، وتشتهر بإنتاج 'عواصف شهابية' هائلة كل 33 عاماً تقريباً.",
        "geminids-name": "التوأميات",
        "geminids-desc": "تظهر في شهر ديسمبر، وتعتبر من أقوى الزخات السنوية، حيث يمكن رؤية أكثر من 120 شهاباً في الساعة.",

        "barringer-name": "فوهة بارينجر",
        "barringer-desc": "تقع في أريزونا بأمريكا، وهي أشهر وأوضح فوهة نيزكية في العالم ناتجة عن اصطدام حدث قبل 50 ألف عام.",
        "chicxulub-name": "فوهة تشيكسولوب",
        "chicxulub-desc": "تقع في المكسيك، وهي الفوهة العملاقة الناتجة عن النيزك الذي تسبب في انقراض الديناصورات قبل 66 مليون عام.",

        "nav-home": "الرئيسية",
        "nav-earth": "الأرض",
        "nav-planets": "الكواكب",
        "nav-spacer": "سبيسر",
        "nav-spacer-chat": "دردشة سبيسر",
        "home-title": "مرحباً بك في النجوم",
        "home-desc": "الفضاء ليس مجرد نجوم بعيدة - إنه بداية كل شيء. هنا، حيث تمتد المجرات وراء الحدود ويتلاقى الخيال مع العلم، نأخذك في رحلة لاستكشاف أسرار الكون، من أعماق الفضاء السحيق إلى أحدث الاكتشافات العلمية. استعد لتوسيع آفاقك، لأن كل نجم يحكي قصة، وكل مجرة تحمل سراً ينتظر من يكتشفه.",
        "btn-discover": "اكتشف مع سبيسر",
        "earth-title": "الأرض",
        "earth-desc": "الأرض هي الكوكب الثالث من الشمس والكوكب الوحيد المعروف الذي يدعم الحياة. إنه الكوكب الوحيد المعروف بوجود صفائح تكتونية ومحيطات ومجموعة متنوعة من أشكال الحياة، بما في ذلك البشر. الأرض هي أيضاً الكوكب الوحيد المعروف بوجود مجال مغناطيسي، مما يساعد على حمايتها من الإشعاع الشمسي الضار.",
        "btn-learn-more": "لمعرفة المزيد",
        "planets-title": "الكواكب",
        "chat-title": "دردش مع ذكائنا الاصطناعي",
        "chat-spacer-name": "سبيسر",
        "btn-let-chat": "لنبدأ الدردشة مع سبيسر",
        "footer-text": "© 2025 يوسف عماد. جميع الحقوق محفوظة.",
        "spacer-ai-badge": "ذكاء اصطناعي",
        "spacer-subtitle": "رفيقك الكوني الذكي. اسألني أي شيء عن الفضاء!",
        "spacer-placeholder": "اكتب سؤالك عن الفضاء...",
        "spacer-api-notice": "مدعوم بواسطة Google Gemini. يرجى التأكد من ضبط مفتاح API الخاص بك في spacer.js",
        "event-badge": "الحدث الكوني القادم",
        "event-scientific-title": "التفسير العلمي",
        "sub-title": "تنبيهات كونية",
        "sub-desc": "احصل على تنبيهات بالظواهر الكونية النادرة قبل حدوثها بأسبوع. الخدمة مجانية تماماً!",
        "btn-subscribe": "اشترك مجاناً",
        "sub-success": "مرحباً بك أيها المستكشف! تم اشتراكك بنجاح.",
        "sub-error": "هذا الإيميل مسجل بالفعل أو حدث خطأ.",
        "viewing-time": "أفضل وقت للمشاهدة:",
        "scientific-insight": "رؤية علمية:",
        "nasa-alert-title": "تنبيه ناسا للطقس الفضائي",
        "nasa-alert-desc": "إشعار جديد بحالة الطقس الفضائي من ناسا. تم رصد نشاط شمسي محتمل.",

        // Famous Missions Section (Home - Arabic)
        "missions-section-title": "مهام فضائية تاريخية",

        "lbl-country": "الدولة:",
        "lbl-year": "السنة:",
        "lbl-goal": "الهدف",
        "lbl-results": "النتائج",
        "lbl-impact": "الأهمية",

        // 1. Apollo 11
        "msN-1": "أبوللو 11",
        "msC-1": "الولايات المتحدة",
        "msY-1": "1969",
        "msG-1": "هبوط البشر على القمر وإعادتهم بسلام.",
        "msR-1": "<li>أول هبوط بشري على القمر.</li><li>جمع عينات صخور وتربة قمرية.</li><li>إثبات إمكانية السفر في الفضاء العميق.</li>",
        "msI-1": "غيرت تاريخ البشرية وبدأت استكشاف الفضاء الحديث.",

        // 2. Voyager
        "msN-2": "فوياجر 1 و 2",
        "msC-2": "الولايات المتحدة",
        "msY-2": "1977",
        "msG-2": "استكشاف الكواكب الخارجية للنظام الشمسي.",
        "msR-2": "<li>أول صور قريبة للمشتري، زحل، أورانوس، نبتون.</li><li>اكتشاف براكين نشطة على قمر آيو.</li><li>فوياجر 1 دخلت الفضاء بين النجمي.</li>",
        "msI-2": "وسعت معرفة الإنسان لما وراء النظام الشمسي.",

        // 3. Hubble
        "msN-3": "تلسكوب هابل الفضائي",
        "msC-3": "ناسا + وكالة الفضاء الأوروبية",
        "msY-3": "1990",
        "msG-3": "مراقبة الكون من فوق الغلاف الجوي للأرض.",
        "msR-3": "<li>صور عميقة للمجرات البعيدة.</li><li>حساب عمر الكون بدقة.</li><li>دليل على توسع الكون.</li>",
        "msI-3": "أحدث ثورة في علم الفلك.",

        // 4. Curiosity
        "msN-4": "كيوريوسيتي روفر",
        "msC-4": "الولايات المتحدة",
        "msY-4": "2012",
        "msG-4": "دراسة سطح المريخ ومعرفة ما إذا كان يدعم الحياة.",
        "msR-4": "<li>اكتشاف أدلة على مياه سائلة قديمة.</li><li>رصد جزيئات عضوية.</li><li>تحليل تربة المريخ.</li>",
        "msI-4": "أظهر أن المريخ كان صالحاً للحياة يوماً ما.",

        // 5. Perseverance
        "msN-5": "بيرسيفيرانس روفر",
        "msC-5": "الولايات المتحدة",
        "msY-5": "2021",
        "msG-5": "البحث عن حياة قديمة وجمع عينات.",
        "msR-5": "<li>جمع عينات صخور للعودة بها.</li><li>تسجيل أصوات المريخ.</li><li>اختبار أول مروحية (إنجينيويتي).</li>",
        "msI-5": "خطوة رئيسية نحو المهام البشرية للمريخ.",

        // 6. ISS
        "msN-6": "محطة الفضاء الدولية",
        "msC-6": "تعاون دولي",
        "msY-6": "1998",
        "msG-6": "إجراء أبحاث علمية في الجاذبية الصغرى.",
        "msR-6": "<li>اختراقات طبية.</li><li>دراسة تأثير الفضاء طويل الأمد.</li><li>اختبار تقنيات الفضاء العميق.</li>",
        "msI-6": "ضرورية للسفر في الفضاء العميق مستقبلاً.",

        // 7. James Webb
        "msN-7": "تلسكوب جيمس ويب",
        "msC-7": "ناسا + أوروبا + كندا",
        "msY-7": "2021",
        "msG-7": "دراسة الكون المبكر والكواكب الخارجية.",
        "msR-7": "<li>صور غير مسبوقة للمجرات المبكرة.</li><li>تحليل الغلاف الجوي للكواكب.</li><li>رؤى حول تكوين النجوم.</li>",
        "msI-7": "ينظر أعمق في الفضاء من أي تلسكوب قبله.",

        // Famous Figures Section (Home - Arabic)
        "figures-section-title": "أساطير الفضاء",
        "subtitle-scientists": "أشهر العلماء",
        "subtitle-astronauts": "أشهر رواد الفضاء",

        // Scientists (Arabic)
        "sc-1-name": "إسحاق نيوتن",
        "sc-1-role": "فيزيائي وفلكي",
        "sc-1-why": "وضع قوانين الحركة والجاذبية.",
        "sc-1-contrib": "شرح سبب دوران الكواكب حول الشمس.",
        "sc-1-fact": "كل مهمة فضائية تستخدم قوانين نيوتن.",

        "sc-2-name": "ألبيرت أينشتاين",
        "sc-2-role": "فيزيائي نظري",
        "sc-2-why": "غير فهمنا للمكان والزمان والجاذبية.",
        "sc-2-contrib": "تنبأ بالثقوب السوداء وتمدد الزمن.",
        "sc-2-fact": "أقمار GPS تعتمد على معادلاته.",

        "sc-3-name": "جاليليو جاليلي",
        "sc-3-role": "فلكي",
        "sc-3-why": "أول من استخدم التلسكوب لدراسة الفضاء.",
        "sc-3-contrib": "أثبت أن الأرض ليست مركز الكون.",
        "sc-3-fact": "يُلقب بـ 'أبو علم الفلك الحديث'.",

        "sc-4-name": "إدوين هابل",
        "sc-4-role": "فلكي",
        "sc-4-why": "اكتشف أن الكون يتوسع.",
        "sc-4-contrib": "أثبت وجود مجرات أخرى غير درب التبانة.",
        "sc-4-fact": "تلسكوب هابل الفضائي سمي تيمناً به.",

        "sc-5-name": "ستيفن هوكينج",
        "sc-5-role": "عالم كونيات",
        "sc-5-why": "درس الثقوب السوداء ونشأة الكون.",
        "sc-5-contrib": "اكتشف إشعاع هوكينج.",
        "sc-5-fact": "ربط الفيزياء بعلم الكونيات.",

        // Astronauts (Arabic)
        "ast-1-name": "يوري جاجارين",
        "ast-1-role": "أول إنسان في الفضاء",
        "ast-1-why": "أول شخص يدور حول الأرض (1961).",
        "ast-1-fact": "بدأ عصر الرحلات الفضائية البشرية.",

        "ast-2-name": "نيل أرمسترونج",
        "ast-2-role": "رائد فضاء أمريكي",
        "ast-2-why": "أول إنسان يمشي على القمر.",
        "ast-2-fact": "لحظة تاريخية للبشرية.",

        "ast-3-name": "بز ألدرين",
        "ast-3-role": "رائد فضاء",
        "ast-3-why": "ثاني شخص يمشي على القمر.",
        "ast-3-fact": "أجرى تجارب قمرية مهمة.",

        "ast-4-name": "كريس هادفيلد",
        "ast-4-role": "رائد فضاء كندي",
        "ast-4-why": "جعل التثقيف الفضائي مشهوراً من المحطة الدولية.",
        "ast-4-fact": "جمع بين العلم والتواصل.",

        "ast-5-name": "فالنتينا تريشكوفا",
        "ast-5-role": "أول امرأة في الفضاء",
        "ast-5-why": "أول رائدة فضاء (1963).",
        "ast-5-fact": "كسرت الحواجز بين الجنسين في استكشاف الفضاء.",

        // Famous Galaxies Section (Home - Arabic)
        "galaxies-section-title": "أشهر المجرات",
        "btn-explore-galaxy": "استكشف المجرة",
        "card-mw-desc": "مجرتنا الأم، التي تحتوي على الشمس والأرض.",
        "card-and-desc": "جارنا الكوني العملاق في مسار تصادمي معنا.",
        "card-whirl-desc": "المجرة الحلزونية المثالية بتصميم عظيم.",

        // Common Labels (Arabic)
        "label-type": "النوع",
        "label-diameter": "القطر",
        "label-stars": "النجوم",
        "label-age": "العمر",
        "label-distance": "المسافة",
        "label-size": "الحجم",
        "label-interaction": "التفاعل",
        "label-spiral": "مجرة حلزونية",
        "insight-label": "رؤية عميقة",

        // Milky Way Page (Arabic)
        "mw-title": "درب التبانة",
        "mw-subtitle": "مجرتنا الأم",
        "mw-identity-title": "الهوية الأساسية",
        "mw-type": "حلزونية قضيبية",
        "mw-diameter": "100,000 سنة ضوئية",
        "mw-stars": "100-400 مليار",
        "mw-age": "13.6 مليار سنة",
        "mw-desc": "درب التبانة هي المجرة التي تحتوي على الأرض والشمس وجميع النجوم التي نراها في سماء الليل.",
        "mw-structure-title": "الهيكل (مهم)",
        "mw-structure-intro": "درب التبانة ليست مجرد قرص مسطح. بل تحتوي على:",
        "mw-structure-list": "<li><strong>المركز المجري:</strong> منطقة كثيفة بها ثقب أسود هائل (Sagittarius A*).</li><li><strong>القضيب:</strong> جسر طويل من النجوم يساعد في تحريك الغاز للداخل.</li><li><strong>الأذرع الحلزونية:</strong> مناطق تكوين النجوم النشطة. نحن في ذراع الجبار (Orion).</li><li><strong>الهالة:</strong> منطقة كروية تحتوي على نجوم قديمة ومادة مظلمة.</li>",
        "mw-science-title": "لماذا يهتم العلماء بها جداً",
        "mw-science-list": "<li>إنها المجرة الوحيدة التي يمكننا دراستها من الداخل.</li><li>تساعدنا على فهم دورات حياة النجوم وتكوين الكواكب.</li><li>تكشف توزيع المادة المظلمة وتطور المجرات.</li>",
        "mw-vis-warning": "معظم صور درب التبانة كمجرة كاملة هي محاكاة فنية وليست صوراً حقيقية!",
        "mw-insight": "دراسة درب التبانة تشبه محاولة فهم غابة وأنت واقف بداخلها — أمر صعب، لكنه مفصل بشكل لا يصدق.",

        // Andromeda Page (Arabic)
        "and-title": "مجرة أندروميدا (M31)",
        "and-subtitle": "جارنا الكوني",
        "and-identity-title": "الهوية الأساسية",
        "and-distance": "~2.5 مليون سنة ضوئية",
        "and-stars": "~1 تريليون",
        "and-size": "أكبر من درب التبانة",
        "and-desc": "أندروميدا هي أقرب مجرة كبيرة إلينا وأكبر مجرة في المجموعة المحلية.",
        "and-importance-title": "لماذا هي مهمة للغاية",
        "and-importance-list": "<li>نموذج مرجعي للمجرات الحلزونية.</li><li>قريبة بما يكفي للمراقبة بوضوح والمقارنة بمجرتنا.</li><li>تساعد في الإجابة: كيف تتشكل المجرات الحلزونية وتشيخ؟</li><li><strong>المادة المظلمة:</strong> سرعة الدوران تقدم دليلاً قوياً على وجود المادة المظلمة.</li>",
        "and-future-title": "التصادم المستقبلي",
        "and-future-desc": "نعم، ستتصادم درب التبانة وأندروميدا خلال 4-5 مليار سنة.",
        "and-future-list": "<li>النجوم الفردية لن تصطدم (بسبب الفراغ الكبير).</li><li>ستندمج المجرتان لتشكل 'Milkomeda'.</li><li>هذا يساعد العلماء على دراسة اندماج المجرات، وهو أمر شائع.</li>",
        "and-insight": "تسمح لنا أندروميدا برؤية مستقبلنا ومرآتنا — ما كانت عليه درب التبانة، وما ستصبح عليه.",

        // Whirlpool Page (Arabic)
        "whirl-title": "مجرة الدوامة (M51)",
        "whirl-subtitle": "الحلزون المثالي",
        "whirl-identity-title": "الهوية الأساسية",
        "whirl-type": "حلزونية بتصميم عظيم",
        "whirl-distance": "~23 مليون سنة ضوئية",
        "whirl-interact": "تتفاعل بنشاط",
        "whirl-desc": "مجرة الدوامة مشهورة لأنها تبدو كمجرة حلزونية مثالية كما في الكتب.",
        "whirl-looks-title": "لماذا تبدو مثالية جداً",
        "whirl-looks-desc": "أذرعها الواضحة والمتناظرة والساطعة ناتجة عن التفاعل الجاذبي مع مجرة مجاورة أصغر.",
        "whirl-looks-list": "<li>الجاذبية تضغط الغاز.</li><li>تحفز ولادة النجوم.</li><li>تعزز الهيكل الحلزوني.</li>",
        "whirl-science-title": "الأهمية العلمية",
        "whirl-science-desc": "كانت M51 أول مجرة تم التعرف فيها على الهيكل الحلزوني. تعلمنا:",
        "whirl-science-list": "<li>تكوين الأذرع الحلزونية وقوى المد والجزر.</li><li>مناطق الانفجار النجمي.</li><li><strong>درس رئيسي:</strong> الأذرع الحلزونية هي موجات كثافة (مثل الازدحام المروري)، وليست هياكل صلبة.</li>",
        "whirl-insight": "تثبت مجرة الدوامة أن الجاذبية تشكل الجمال في الكون.",

        // Technology Page (Arabic)
        "nav-tech": "تكنولوجيا الفضاء",
        "tech-hero-title": "التكنولوجيا الروبوتية في الفضاء",
        "tech-hero-desc": "مسابير الفضاء، المتجولات، والمساعدات الآلية هي عيون وأيادي البشرية في الكون. اكتشف كيف تستكشف هذه الآلات الأماكن التي لا يستطيع البشر الوصول إليها.",

        "tech-what-is": "ما هي؟",
        "tech-functions": "الوظائف الرئيسية",
        "tech-technologies": "تقنيات رئيسية",
        "tech-capabilities": "القدرات الأساسية",
        "tech-purposes": "الأغراض الرئيسية",
        "tech-challenges": "التحديات الرئيسية",
        "tech-types": "الأنواع",
        "tech-stack": "حزمة التكنولوجيا",
        "tech-examples": "أمثلة مشهورة:",
        "tech-why-matter": "لماذا هي مهمة:",

        // 1. Probes
        "tech-1-title": "مسابير الفضاء",
        "tech-1-desc": "مسابير الفضاء هي مركبات فضائية روبوتية بالكامل ترسل خارج مدار الأرض لاستكشاف الفضاء العميق. لا تحمل بشراً وعادة لا تعود أبداً.",
        "tech-1-functions": "<li>قياس درجة الحرارة والإشعاع والجاذبية والمجالات المغناطيسية</li><li>التقاط الصور وبيانات القياس الطيفي</li><li>إرسال البيانات العلمية إلى الأرض عبر موجات الراديو</li>",
        "tech-1-techs": "<li>الملاحة الذاتية (تصحح مسارها بنفسها)</li><li>هوائيات اتصال بعيدة المدى</li><li>أجهزة كمبيوتر مقاومة للإشعاع</li><li>RTGs (طاقة نووية) للمهام البعيدة عن الشمس</li>",
        "tech-1-examples": "فوياجر 1 و 2 (بين النجوم)، نيو هورايزونز (بلوتو)، جونو (المشتري)",
        "tech-1-reason": "هي عيون البشرية خارج النظام الشمسي. لا يستطيع البشر تحمل هذه المسافات أو المدد الزمنية.",

        // 2. Rovers
        "tech-2-title": "المتجولات (Rovers)",
        "tech-2-desc": "المتجولات هي روبوتات متحركة تهبط على الكواكب أو الأقمار وتقود عبر السطح.",
        "tech-2-capabilities": "<li>الملاحة في التضاريس (الصخور، المنحدرات، الغبار)</li><li>حفر التربة وجمع العينات</li><li>التحليل الكيميائي (البحث عن الماء أو الحياة)</li><li>تصوير عالي الدقة</li>",
        "tech-2-techs": "<li>تخطيط المسار القائم على الذكاء الاصطناعي</li><li>الرؤية الحاسوبية</li><li>أذرع روبوتية</li><li>تجنب المخاطر المستقل</li><li>التعامل مع تأخير الاتصال (المريخ لديه تأخير حوالي 20 دقيقة)</li>",
        "tech-2-examples": "كيوريوسيتي (جيولوجيا المريخ)، بيرسيفيرانس (الكشف عن الحياة)، سبيريت وأوبورتيونيتي",
        "tech-2-reason": "تعمل كعلماء آليين، حيث تقوم بأبحاث لسنوات دون وجود بشري.",

        // 3. Landers
        "tech-3-title": "المراكب الهابطة (Landers)",
        "tech-3-desc": "المراكب الهابطة هي روبوتات تهبط وتبقى في مكان واحد.",
        "tech-3-purposes": "<li>الكشف عن النشاط الزلزالي</li><li>تحليل الغلاف الجوي</li><li>كيمياء التربة</li><li>مراقبة درجة الحرارة والضغط</li>",
        "tech-3-challenges": "<li>الهبوط الدقيق</li><li>النجاة من البرد الشديد أو الحرارة</li><li>محدودية الحركة</li>",
        "tech-3-examples": "إنسايت (زلازل المريخ)، مركبات فايكنغ، مركبات تشانغ آه القمرية",
        "tech-3-reason": "تسمح بإجراء تجارب عميقة ومركزة تتطلب الثبات بدلاً من الحركة.",

        // 4. Satellites
        "tech-4-title": "الأقمار الصناعية",
        "tech-4-desc": "الأقمار الصناعية هي أنظمة روبوتية في مدار حول الأرض أو كواكب أخرى.",
        "tech-4-types": "<li>أقمار الاتصالات (الإنترنت، التلفزيون، الهواتف)</li><li>أقمار الملاحة (GPS، غاليليو)</li><li>أقمار الطقس</li><li>الأقمار العلمية (تلسكوبات الفضاء)</li>",
        "tech-4-stack": "<li>أجهزة الكمبيوتر على متنها</li><li>الجيروسكوبات وعجلات التفاعل (التحكم في الاتجاه)</li><li>الألواح الشمسية</li><li>الدوافع</li><li>تصحيح الأخطاء الذاتي</li>",
        "tech-4-examples": "تلسكوب هابل الفضائي، تلسكوب جيمس ويب الفضائي، أقمار ستارلينك",
        "tech-4-reason": "تعتمد الحضارة الحديثة عليها — الملاحة، الاتصالات، مراقبة المناخ.",

        // 5. Arms
        "tech-5-title": "الأذرع الروبوتية وروبوتات المحطات",
        "tech-5-desc": "روبوتات مصممة لمساعدة رواد الفضاء أو العمل بشكل مستقل في المدار.",
        "tech-5-capabilities": "<li>التقاط المركبات الفضائية</li><li>إصلاح الأقمار الصناعية</li><li>نقل البضائع</li><li>تقليل مخاطر السير في الفضاء لرواد الفضاء</li>",
        "tech-5-techs": "<li>محركات دقيقة</li><li>أنظمة ردود الفعل للقوة</li><li>التحكم عن بعد + مساعدة الذكاء الاصطناعي</li>",
        "tech-5-examples": "Canadarm2، Dextre، الذراع الروبوتية الأوروبية",
        "tech-5-reason": "تجعل العمليات الفضائية أكثر أماناً وأسرع وأرخص.",

        // Core Tech
        "tech-core-title": "تقنيات أساسية تشغل جميع روبوتات الفضاء",
        "tech-core-ai": "الذكاء الاصطناعي",
        "tech-core-ai-list": "<li>اتخاذ القرار</li><li>التعرف على الأنماط</li><li>الملاحة</li><li>التشخيص الذاتي</li>",
        "tech-core-power": "أنظمة الطاقة",
        "tech-core-power-list": "<li>الطاقة الشمسية</li><li>النووية (RTG)</li><li>تخزين البطارية</li>",
        "tech-core-comms": "الاتصالات",
        "tech-core-comms-list": "<li>شبكة الفضاء العميق</li><li>هوائيات عالية الكسب</li><li>إشارات تصحيح الأخطاء</li>",
        "tech-core-materials": "المواد",
        "tech-core-materials-list": "<li>إلكترونيات مقاومة للإشعاع</li><li>سبائك تتحمل درجات الحرارة القصوى</li><li>مركبات خفيفة الوزن</li>",
        
        // Insight
        "tech-insight-title": "🌌 رؤية عميقة",
        "tech-insight-text": "تكنولوجيا الفضاء الروبوتية ليست بديلاً للبشر — إنها مقدمة ضرورية.",
        "tech-insight-1": "البشر يتبعون الروبوتات.",
        "tech-insight-2": "الروبوتات تقلل المخاطر.",
        "tech-insight-3": "الروبوتات توسع النطاق.",
        "tech-insight-conclusion": "بدون الروبوتات: لا مهمات للمريخ، لا استكشاف للفضاء العميق، لا بنية تحتية للأقمار الصناعية، لا استعمار مستقبلي.",

        // Forum Section
        "nav-forum": "المنتدى",
        "forum-title": "المجتمع الفضائي",
        "forum-subtitle": "شارك أفكارك الكونية وناقش أسرار الكون مع الآخرين!",
        "placeholder-question": "اطرح سؤالاً... مثلاً: هل الفضائيون موجودون؟",
        "btn-post-question": "انشر السؤال",
        "opinions-title": "الآراء",
        "placeholder-opinion": "شارك برأيك...",
        "no-opinions": "لا توجد آراء بعد. كن أول من يشارك!",
        
        // Global Labels
        "challenges-title": "تحديات كونية",
        "solutions-title": "حلول مستقبلية",
        "scientific-deep-dive": "تعمق علمي",

        // Planet Specifics (Earth)
        "planet-hero-subtitle-earth": "منزلنا الأزرق الجميل",
        "planet-hero-desc-earth": "أهلاً بك في بيتك! الأرض هي الكوكب الثالث من الشمس والمكان الوحيد في الكون بأسره الذي نعرف فيه بالتأكيد وجود حياة. إنه في موقع مثالي - لا شديد الحرارة ولا شديد البرودة - تماماً بما يكفي لوجود الماء السائل، وهو مفتاح الحياة! الأرض نظام معقد من الصخور والمياه والهواء والحياة المتفاعلة. غلافها الجوي غني بالنيتروجين والأكسجين، ويحمينا مجالها المغناطيسي من الإشعاع الشمسي الضار.",
        "earth-challenges": "الانفجار السكاني، تغير المناخ، واستنفاد الموارد الطبيعية. الحفاظ على التوازن الدقيق للأنظمة البيئية مع تقدم التكنولوجيا هو أكبر عقبة تواجهنا.",
        "earth-solutions": "الانتقال إلى الطاقة المتجددة، الزراعة المستدامة، واستكشاف الفضاء لمراقبة التغيرات البيئية وربما العثور على موائل ثانوية.",

        // Sun
        "planet-hero-subtitle-sun": "قلب نظامنا الشمسي",
        "planet-hero-desc-sun": "الشمس هي نجم قزم أصفر، كرة ساخنة من الغازات المتوهجة في قلب نظامنا الشمسي. تمسك جاذبيتها بالنظام الشمسي، مما يبقي كل شيء من أكبر الكواكب إلى أصغر جزيئات الحطام في مدارها. الطاقة التي تطلقها توفر الضوء والحرارة اللذين يجعلان الحياة ممكنة على الأرض.",
        "sun-challenges": "الحرارة الشديدة والإشعاع. تبلغ درجة حرارة السطح حوالي 5500 درجة مئوية، واللب 15 مليون درجة مئوية. يمكن للوهج الشمسي أن يعطل اتصالات الأرض.",
        "sun-solutions": "تستخدم مسبارات مثل 'باركر سولار بروب' دروعاً حرارية متطورة من الكربون لتحمل الحرارة. قد تتضمن تكنولوجيا المستقبل دروعاً مغناطيسية ضخمة لحماية المركبات الفضائية الزائرة.",
        
        // Mercury
        "planet-hero-subtitle-mercury": "الكوكب الصغير السريع",
        "planet-hero-desc-mercury": "عطارد هو أصغر كوكب في نظامنا الشمسي والأقرب إلى الشمس. إنه أكبر قليلاً من قمر الأرض. عطارد كوكب صخري ذو سطح مليء بالفوهات، يشبه إلى حد كبير قمرنا. له غلاف جوي رقيق جداً، وليس له أقمار خاصة به.",
        "mercury-challenges": "تقلبات هائلة في درجات الحرارة (430 إلى -180 درجة مئوية) وإشعاع شمسي شديد. لا يوجد تقريباً غلاف جوي للتنفس أو للحماية من صخور الفضاء.",
        "mercury-solutions": "بناء موائل في الفوهات المظلمة دائماً عند القطبين حيث يوجد الجليد، أو البناء عميقاً تحت الأرض لاستخدام قشرة الكوكب كدرع طبيعي.",
        
        // Venus
        "planet-hero-subtitle-venus": "توأم الأرض المحترق",
        "planet-hero-desc-venus": "الزهرة هو الكوكب الثاني من الشمس وأقرب جار كوكبي للأرض. على الرغم من أن عطارد أقرب إلى الشمس، إلا أن الزهرة هو أحر كوكب في نظامنا الشمسي بسبب غلافه الجوي السام السميك الذي يحبس الحرارة في ظاهرة احتباس حراري جامحة.",
        "venus-challenges": "ضغط جوي ساحق (90 ضعف ضغط الأرض) ودرجات حرارة تذيب الرصاص. السحب مكونة من حمض الكبريتيك الأكّال.",
        "venus-solutions": "مدن عائمة في طبقات الجو العليا حيث يكون الضغط والحرارة مشابهين للأرض. استخدام مواد مقاومة للأحماض مثل السيراميك والمعادن المتخصصة.",
        
        // Mars
        "planet-hero-subtitle-mars": "الكوكب الأحمر",
        "planet-hero-desc-mars": "المريخ عالم مترب وبارد وصحراوي ذو غلاف جوي رقيق جداً. إنه الكوكب الأكثر استكشافاً بعد الأرض. تشير الأدلة إلى أن المريخ كان أكثر رطوبة ودفئاً بكثير قبل مليارات السنين. يضم أكبر بركان (أوليمبوس مونس) وأطول أخدود (فاليس مارينيريس) في النظام الشمسي.",
        "mars-challenges": "نقص الغلاف الجوي القابل للتنفس (95% ثاني أكسيد كربون)، الجاذبية المنخفضة (38% من الأرض)، ومستويات الإشعاع العالية بسبب نقص المجال المغناطيسي العالمي.",
        "mars-solutions": "استخدام تقنية MOXIE لاستخراج الأكسجين من ثاني أكسيد الكربون، بناء موائل مضغوطة مغطاة بالتربة المريخية للحماية من الإشعاع، واستخدام تمارين رياضية خاصة للجاذبية المنخفضة.",
        
        // Jupiter
        "planet-hero-subtitle-jupiter": "ملك الكواكب",
        "planet-hero-desc-jupiter": "المشتري هو أكبر كوكب في نظامنا الشمسي - أكثر من ضعف كتلة جميع الكواكب الأخرى مجتمعة. إنه عملاق غازي ليس له سطح صلب. بقعته الحمراء العظيمة هي عاصفة أكبر من الأرض استمرت لمئات السنين.",
        "jupiter-challenges": "جاذبية هائلة وبيئة إشعاعية قاتلة. لا توجد أرض صلبة للهبوط عليها، والضغط داخل الكوكب ساحق.",
        "jupiter-solutions": "استكشاف أقماره بدلاً من الكوكب نفسه. استخدام دروع ثقيلة من الرصاص أو الماء للحماية من الإشعاع وموائل مدارية تبقى خارج أحزمة الإشعاع الرئيسية.",
        
        // Saturn
        "planet-hero-subtitle-saturn": "جوهرة النظام الشمسي",
        "planet-hero-desc-saturn": "مزين بنظام مذهل من الحلقات المكونة من الجليد والصخور، زحل فريد من نوعه. إنه عملاق غازي، يتكون أساساً من الهيدروجين والهيليوم. لديه أكثر من 80 قمراً، بما في ذلك تيتان، الذي له غلافه الجوي الخاص وبحيرات الميثان السائل.",
        "saturn-challenges": "برد قارس ورياح عالية السرعة (تصل إلى 1800 كم/ساعة). مثل المشتري، يفتقر إلى سطح صلب ولديه إشعاع عالي بالقرب من الحلقات.",
        "saturn-solutions": "تطوير دفع متقدم مقاوم للبرد واستخدام غازات الغلاف الجوي كوقود. يمكن للموائل المستقبلية أن تطفو في الطبقات الأكثر هدوءاً من الغلاف الجوي.",
        
        // Uranus
        "planet-hero-subtitle-uranus": "الكوكب الجانبي",
        "planet-hero-desc-uranus": "أورانوس عملاق جليدي يدور على جنبه - على الأرجح نتيجة اصطدام هائل منذ زمن بعيد. إنه أبرد كوكب في النظام الشمسي. لديه 27 قمراً و13 حلقة باهتة. يأتي لونه الأزرق المخضر من الميثان في غلافه الجوي.",
        "uranus-challenges": "البعد الشديد عن الأرض (أوقات سفر طويلة) ودرجات حرارة شديدة البرودة. نقص الطاقة الشمسية يجعل الطاقة الشمسية التقليدية غير مجدية.",
        "uranus-solutions": "دفع الاندماج النووي لسفر أسرع ومولدات طاقة نووية (RTGs) لتوفير الطاقة في الأطراف الخارجية المظلمة والباردة.",
        
        // Neptune
        "planet-hero-subtitle-neptune": "عالم العواصف",
        "planet-hero-desc-neptune": "نبتون هو أبعد كوكب رئيسي. إنه مظلم وبارد وتجلده رياح تفوق سرعتها سرعة الصوت - بعضها أسرع من سرعة الصوت على الأرض. لديه 14 قمراً، بما في ذلك تريتون، الذي يدور حول الكوكب بشكل عكسي.",
        "neptune-challenges": "رياح تفوق سرعتها سرعة الصوت وبُعد هائل. الضغط العالي والبرد يجعله واحداً من أكثر الأماكن عدائية لأي مسبار أو موطن.",
        "neptune-solutions": "مسبارات جوية انسيابية وعزل حراري عالي الكثافة. استخدام مساعدة الجاذبية من كواكب أخرى للوصول إلى نبتون بسرعة أكبر.",
        
        // Pluto
        "planet-hero-subtitle-pluto": "العالم الصغير بقلب كبير",
        "planet-hero-desc-pluto": "بلوتو كوكب قزم في حزام كايبر. يضم جبالاً مكونة من جليد الماء ونهر جليدي كبير على شكل قلب مكون من النيتروجين والميثان. كان يعتبر الكوكب التاسع لمدة 76 عاماً قبل إعادة تصنيفه.",
        "pluto-challenges": "جاذبية ضعيفة للغاية وبرد قارس. يستغرق 248 سنة أرضية للدوران حول الشمس، مما يعني فترات طويلة من الظلام التام.",
        "pluto-solutions": "أنظمة دعم حياة مبردة ومرحلات اتصالات في الفضاء العميق. استخدام جليد النيتروجين المحلي للوقود ومعالجة الهواء.",

        // Planet names and summaries for index.html
        "sun-name": "الشمس",
        "sun-desc": "الشمس هي النجم الموجود في مركز نظامنا الشمسي. وهي عبارة عن كرة ضخمة من البلازما الساخنة التي تمد جميع الكواكب بالضوء والحرارة. تحتوي الشمس على 99.86% من الكتلة في النظام الشمسي وهي مسؤولة عن مناخ الأرض وطقسها من خلال نتاجها الطاقي القوي.",
        "mercury-name": "عطارد",
        "mercury-desc": "عطارد هو أقرب كوكب إلى الشمس وأصغر كوكب في نظامنا الشمسي. لديه تقلبات حرارية قصوى، من الحرارة الحارقة خلال النهار إلى البرودة المتجمدة في الليل. ليس لعطارد غلاف جوي للاحتفاظ بالحرارة وهو مغطى بالفوهات الناتجة عن اصطدام الكويكبات.",
        "venus-name": "الزهرة",
        "venus-desc": "الزهرة هو الكوكب الثاني من الشمس وغالباً ما يطلق عليه توأم الأرض بسبب تشابه الحجم. ومع ذلك، فإن للزهرة غلافاً جوياً ساماً سميكاً مليئاً بثاني أكسيد الكربون وسحب حمض الكبريتيك، مما يخلق تأثيراً للاحتباس الحراري يجعله أسخن كوكب في نظامنا الشمسي.",
        "mars-name": "المريخ",
        "mars-desc": "المريخ هو الكوكب الرابع من الشمس، المعروف باسم الكوكب الأحمر بسبب أكسيد الحديد الموجود على سطحه. يحتوي على أكبر بركان وأخدود في النظام الشمسي. للمريخ قلنسوات جليدية قطبية وتشير الأدلة إلى أنه كان يحتوي ذات يوم على ماء سائل، مما يجعله هدفاً رئيسياً للبحث عن حياة سابقة.",
        "jupiter-name": "المشتري",
        "jupiter-desc": "المشتري هو الكوكب الخامس وأكبر كوكب في نظامنا الشمسي، وهو عملاق غازي ذو أحزمة سحابية ملونة وعاصفة البقعة الحمراء العظيمة الشهيرة. لديه 79 قمراً على الأقل، بما في ذلك أقمار جاليليو الأربعة الكبيرة. تساعد جاذبية المشتري الهائلة في حماية الأرض من الكويكبات والمذنبات.",
        "saturn-name": "زحل",
        "saturn-desc": "زحل هو الكوكب السادس من الشمس ويشتهر بنظامه الحلقي المذهل المكون من جزيئات الجليد والصخور. وهو عملاق غازي ذو كثافة منخفضة تسمح له بالطفو في الماء. لدى زحل أكثر من 80 قمراً معروفاً، وتيتان هو أكبرها.",
        "uranus-name": "أورانوس",
        "uranus-desc": "أورانوس هو الكوكب السابع من الشمس وهو فريد من نوعه لدورانه على جنبه، على الأرجح بسبب اصطدام هائل في ماضيه. يتمتع هذا العملاق الجليدي بلون أزرق مخضر من الميثان في غلافه الجوي ولديه 27 قمراً معروفاً. يواجه أورانوس فصولاً قاسية تدوم كل منها أكثر من 20 عاماً.",
        "neptune-name": "نبتون",
        "neptune-desc": "نبتون هو الكوكب الثامن وأبعد كوكب عن الشمس في نظامنا الشمسي. يتمتع هذا العملاق الجليدي بأقوى رياح في النظام الشمسي، حيث تصل سرعتها إلى أكثر من 2000 كم/ساعة. نبتون له لون أزرق عميق و14 قمراً معروفاً، وتريتون هو أكبرها وأكثرها غرابة.",
        "pluto-name": "بلوتو",
        "pluto-desc": "بلوتو هو كوكب قزم في حزام كايبر وراء مدار نبتون. كان يعتبر في السابق الكوكب التاسع، وتمت إعادة تصنيفه في عام 2006. بلوتو لديه نهر جليدي على شكل قلب، وخمسة أقمار معروفة، وغلاف جوي رقيق. كشفت مهمة نيوهورايزنز التابعة لناسا عن سطحه المعقد والنشط بشكل مفاجئ."
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
