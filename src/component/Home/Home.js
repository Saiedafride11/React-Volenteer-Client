import React, { useState, useEffect } from 'react';
import Event from '../Event/Event';

// const events = [
    
//     {
//         name: 'Animal Shelter',
//         pic: 'https://i.imgur.com/0wty7D0.png'
//     },
//     {
//         name: 'Child Support',
//         pic: 'https://i.imgur.com/NsP0iiu.png'
//     },
//     {
//         name: 'Bird House',
//         pic: 'https://i.imgur.com/3aBCVi4.png'
//     },
//     {
//         name: 'Child Support',
//         pic: 'https://i.imgur.com/RXyM08N.png'
//     },
//     {
//         name: 'Library Books',
//         pic: 'https://i.imgur.com/FYhwBKa.png'
//     },

//     {
//         name: 'Child Support',
//         pic: 'https://i.imgur.com/Z0S7osm.png'
//     },
//     {
//         name: 'Library Books',
//         pic: 'https://i.imgur.com/FNT7gsy.png'
//     },
//     {
//         name: 'Child Support',
//         pic: 'https://i.imgur.com/1QdmRhw.png'
//     }

//     // {
//     //     name: 'Child Support',
//     //     pic: 'childSupport.png'
//     // },
//     // {
//     //     name: 'Animal Shelter',
//     //     pic: 'animalShelter.png'
//     // },
//     // {
//     //     name: 'Bird House',
//     //     pic: 'birdHouse.png'
//     // },
//     // {
//     //     name: 'Child Support',
//     //     pic: 'childSupport.png'
//     // },
//     // {
//     //     name: 'Library Books',
//     //     pic: 'libraryBooks.png'
//     // }
// ]


const Home = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/addEvent')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setEvents(data)
        })
    })

    return (
        <div className="container">
            <div className="row">
                {
                    events.map(event => <Event event={event}></Event>)
                }
            </div>
        </div>
    );
};

export default Home;