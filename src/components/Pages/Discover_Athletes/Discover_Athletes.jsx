import React from 'react';
import Layout from '../../Layout/Layout';
import Filter from './Filter';
import AthleteTable from './AthleteTable';
import CardList from '../Featured_Athletes/CardList';
const hundredmeter = [{
    meters: 100,
    athletes: [
        {
            name: 'Usain Bolt',
            uid: 'AW******001',
            image: 'https://media.istockphoto.com/id/1399611777/photo/portrait-of-a-smiling-little-brown-haired-boy-looking-at-the-camera-happy-kid-with-good.jpg?s=2048x2048&w=is&k=20&c=nyOxOKJQvvUOXIZ1s7mPF4zUySY1eKBIl88Vbwi7wLA='
        },
        {
            name: 'Yohan Blake',
            uid: 'AW******002',
            image: 'https://media.istockphoto.com/id/1399611777/photo/portrait-of-a-smiling-little-brown-haired-boy-looking-at-the-camera-happy-kid-with-good.jpg?s=2048x2048&w=is&k=20&c=nyOxOKJQvvUOXIZ1s7mPF4zUySY1eKBIl88Vbwi7wLA='
        },
        {
            name: 'Justin Gatlin',
            uid: 'AW******003',
            image: 'https://media.istockphoto.com/id/1399611777/photo/portrait-of-a-smiling-little-brown-haired-boy-looking-at-the-camera-happy-kid-with-good.jpg?s=2048x2048&w=is&k=20&c=nyOxOKJQvvUOXIZ1s7mPF4zUySY1eKBIl88Vbwi7wLA='
        },
        {
            name: 'Christian Coleman',
            uid: 'AW******004',
            image: 'https://media.istockphoto.com/id/1399611777/photo/portrait-of-a-smiling-little-brown-haired-boy-looking-at-the-camera-happy-kid-with-good.jpg?s=2048x2048&w=is&k=20&c=nyOxOKJQvvUOXIZ1s7mPF4zUySY1eKBIl88Vbwi7wLA='
        },
        {
            name: 'Trayvon Bromell',
            uid: 'AW******005',
            image: 'https://media.istockphoto.com/id/1399611777/photo/portrait-of-a-smiling-little-brown-haired-boy-looking-at-the-camera-happy-kid-with-good.jpg?s=2048x2048&w=is&k=20&c=nyOxOKJQvvUOXIZ1s7mPF4zUySY1eKBIl88Vbwi7wLA='
        },
        {
            name: 'Andre De Grasse',
            uid: 'AW******006',
            image: 'https://media.istockphoto.com/id/1399611777/photo/portrait-of-a-smiling-little-brown-haired-boy-looking-at-the-camera-happy-kid-with-good.jpg?s=2048x2048&w=is&k=20&c=nyOxOKJQvvUOXIZ1s7mPF4zUySY1eKBIl88Vbwi7wLA='
        },
    ]
},]
const Discover_Athletes = () => {
    return (
        <Layout>
            <Filter />
            {/* Hide AthleteTable on mobile and show only on md and larger screens */}
            <div className="hidden md:block">
                <AthleteTable />
            </div>
            <div className='w-full px-8 md:px-14 p-6 lg:px-12'>
                {
                    hundredmeter.map((athlete) => (
                        <CardList key={athlete.id} athlete={athlete} />
                    ))
                }
            </div>
        </Layout>
    );
};

export default Discover_Athletes;
