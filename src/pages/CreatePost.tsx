import React from 'react';
import Cover from '../components/Cover';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const CreatePost: React.FC = () => {
    return (
        <React.Fragment>
            <Cover>
                <Banner
                title="luxurious rooms"
                subtitle="deluxe rooms starting at $299"
                >
                <Link to="/rooms" className="btn-primary">create post</Link>
                </Banner>
            </Cover>
            <Services/>
            <FeaturedRooms />
        </React.Fragment>
    )
}

export default CreatePost;
