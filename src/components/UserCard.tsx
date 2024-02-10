import facebook from '../assets/facebook.png'
import instagram from '../assets/Vector.png'
import twitter from '../assets/Vector (1).png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface Props{
    userImageSrc: string;
    userImageAlt: string
}

function UserCard ({userImageSrc, userImageAlt}:Props){
    return(
        <>        
            <div className="user-card flex-column gap-20">
                <LazyLoadImage src={userImageSrc} alt={userImageAlt} effect="blur" />
                <p className="name">Username</p>
                <p className="profession text-gray">Profession</p>
                <div className="user-media d-flex gap-20">
                    <a href="#"><img src={facebook} alt="Facebook logo" /></a>
                    <a href="#"><img src={instagram} alt="Instagram logo" /></a>
                    <a href="#"><img src={twitter} alt="Twitter logo" /></a>
                </div>
            </div>
        </>
    )
}

export default UserCard;