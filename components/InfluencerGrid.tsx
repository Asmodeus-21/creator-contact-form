import React from 'react';
import InstagramProfile, { InstagramProfileProps } from './InstagramProfile';

const INFLUENCERS: InstagramProfileProps[] = [
    // Host
    {
        username: 'ciaostardus',
        name: 'Maya Saha',
        pronouns: 'sey/xier',
        bio: 'She loves pink 🩵',
        posts: '630',
        followers: '139K',
        following: '0',
        music: 'Hasta la Raíz · Natalia Lafourcade',
        imageUrl: '/maya-new-screenshot.jpg',
        verification: false
    },
    // UK Influencers
    {
        username: 'fashioninflux', // Updated to verified username
        name: 'Lydia Rose',
        bio: 'Fashion & Lifestyle 🇬🇧\nDaily outfit inspo ✨',
        posts: '2,401',
        followers: '2.4M', // Updated to match search result
        following: '1,203',
        music: 'Original Audio',
        imageUrl: '/influencers/fashioninflux.jpg',
        verification: true
    },
    {
        username: 'lillielexie',
        name: 'Lillie Lexie',
        bio: 'Mum of 3 🤍\nLondon based 📍\nFashion • Family • Lifestyle',
        posts: '1,892',
        followers: '492K',
        following: '845',
        imageUrl: '/influencers/lillielexie.jpg',
        verification: true
    },
    {
        username: 'thecuriouspixie',
        name: 'Sima Sthanakiya',
        bio: 'Travel • Family • Lifestyle\nLondon & Beyond 🇬🇧✈️',
        posts: '1,240',
        followers: '329K',
        following: '982',
        imageUrl: '/influencers/thecuriouspixie.jpg',
        verification: true
    },
    {
        username: 'aytanabbasli',
        name: 'Aytan Abbasli',
        bio: 'London Life 🇬🇧\nTravel | Food | Style',
        posts: '856',
        followers: '253K',
        following: '430',
        imageUrl: '/influencers/aytanabbasli.jpg',
        verification: false
    },
    // Other Influencers
    {
        username: 'julienfranks',
        name: 'Julien Franks',
        bio: 'Affordable Fashion & Style\nPetite Friendly 👗',
        posts: '943',
        followers: '471K',
        following: '1,500',
        imageUrl: '/influencers/julienfranks.jpg',
        verification: true
    },
    {
        username: 'mikaylavallati',
        name: 'Mikayla Vallati',
        bio: 'Personal Stylist 👗\nHelping you look & feel your best',
        posts: '1,102',
        followers: '402K',
        following: '890',
        imageUrl: '/influencers/mikaylavallati.jpg',
        verification: true
    },
    {
        username: 'catieli',
        name: 'Catherine Li',
        bio: 'Model | Fashion | Lifestyle\nLA / NYC 📍',
        posts: '2,300',
        followers: '317K',
        following: '1,100',
        imageUrl: '/influencers/catieli.jpg',
        verification: true
    },
];

const InfluencerGrid: React.FC = () => {
    return (
        <section className="py-16 bg-neutral-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-4">
                    Our Network
                </h2>
                <p className="text-center text-neutral-500 mb-12 max-w-2xl mx-auto">
                    Join a community of thriving creators. Here are some of the amazing profiles in our network.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {INFLUENCERS.map((influencer, index) => (
                        <InstagramProfile key={index} {...influencer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfluencerGrid;
