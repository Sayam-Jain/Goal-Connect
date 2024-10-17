import React from 'react';
import clubLogo from '../../assets/sample-club-logo.png';
import nikeLogo from '../../assets/nike.png';
import adidasLogo from '../../assets/adidas.png';
import player1 from '../../assets/chhetri.jpg'; // Sample player image
import player2 from '../../assets/chhetri.jpg'; // Sample player image
import player3 from '../../assets/chhetri.jpg'; // Sample player image
import { useLocation } from 'react-router-dom';


// Sample data for club name, logo, and sponsors
const clubInfo = {
    name: 'East Bengal FC',
    logo: clubLogo,
    sponsors: [
        { name: 'Nike', logo: nikeLogo },
        { name: 'Adidas', logo: adidasLogo }
    ],
};

// Sample data for players
const players = [
    { id: 1, name: 'Kanye West', position: 'Forward', image: player1 },
    { id: 2, name: 'Arijit Singh', position: 'Midfielder', image: player2 },
    { id: 3, name: 'Akshay Kumar', position: 'Defender', image: player3 },
    { id: 4, name: 'Dwayne Johnson', position: 'Defender', image: player3 },
    { id: 5, name: 'Messi', position: 'Defender', image: player3 },
    { id: 6, name: 'Tame Impala', position: 'Defender', image: player3 },
    { id: 7, name: 'Honey singh', position: 'Defender', image: player3 },
    { id: 8, name: 'Samay Raina', position: 'Defender', image: player3 },
    { id: 9, name: 'Tanmay Bhat', position: 'Defender', image: player3 },
    { id: 10, name: 'Madhur Virli', position: 'Defender', image: player3 },
    { id: 11, name: 'Sunil Chettri', position: 'Defender', image: player3 },
    // Add more players as needed
];

const ClubDashboard = () => {
    const location = useLocation();
    const clubInfoReceived = location.state?.club; // Access the club data passed from ClubsMenu

    // Fallback data if no club is passed
    if (!clubInfoReceived) {
        return <div>Club information not available.</div>;
    }
    console.log(clubInfoReceived)
    return (
        <div className='relative flex items-center w-full justify-center'>
            {/* Background Image with opacity */}
            <div className="absolute inset-0 bg-background-job-form bg-cover bg-center opacity-50 z-0"></div>
            <div className="mt-5 min-h-screen w-[60vw] max-[902px]:w-full bg-gray-900 bg-opacity-90 text-gray-200 p-6 relative z-2">
                {/* Header Section */}
                <header className="flex justify-center items-center mb-10 max-[541px]:flex-col max-[541px]:gap-5 ">
                    {/* Club Logo and Name */}
                    <div className="flex items-center gap-4">
                        <img
                            src={clubInfoReceived.logoImg}
                            alt="Club Logo"
                            className="w-16 h-16 object-contain"
                        />
                        <h1 className="text-4xl md:text-5xl font-bold">{clubInfoReceived.fullName}</h1>
                    </div>

                    {/* Create Crowdfunding Campaign Button */}
                </header>
                <div className='flex flex-col justify-center items-center mb-5'>
                    <h1 className='text-3xl font-normal mb-2 text-center'>Venue</h1>
                    <img src = {clubInfoReceived.bannerImg} className = "border rounded-lg sm:w-1/2" alt = "image not loading"></img>
                    <h1 className='mt-1 text-sm text-center'>{clubInfoReceived.venue}</h1>
                </div>

                {/* Sponsors Section */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Our Sponsors</h2>
                    <div className="flex gap-6">
                        {clubInfo.sponsors.map((sponsor, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img
                                    src={sponsor.logo}
                                    alt={`${sponsor.name} Logo`}
                                    className="w-20 h-20 object-contain mb-2"
                                />
                                <p className="text-lg">{sponsor.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
                {/* Team Section */}
                <section className="mb-2">
                    <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {players.map(player => (
                            <div key={player.id} className="bg-gray-800 p-4 cursor-pointer hover:scale-105 transition-all rounded-lg shadow-lg flex flex-col items-center">
                                <img
                                    src={player.image}
                                    alt={`${player.name}'s Profile`}
                                    className="w-[15rem] h-[15rem] object-contain mb-2"
                                />
                                <h3 className="text-lg font-semibold">{player.name}</h3>
                                <p className="text-gray-400">{player.position}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ClubDashboard;
