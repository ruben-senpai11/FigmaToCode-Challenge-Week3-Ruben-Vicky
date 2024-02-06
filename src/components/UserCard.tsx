import facebook from '../assets/facebook.png'
import instagram from '../assets/Vector.png'
import twitter from '../assets/Vector (1).png'

interface Props{
    userImageSrc: string;
    userImageAlt: string
}

function UserCard ({userImageSrc, userImageAlt}:Props){
    return(
        <>        
            <div className="user-card flex-column gap-20">
                <img src={userImageSrc} alt={userImageAlt} />
                <p className="name">Username</p>
                <p className="profession text-gray">Profession</p>
                <p className="user-media d-flex gap-20">
                    <a href="#"><img src={facebook} alt="Facebook logo" /></a>
                    <a href="#"><img src={instagram} alt="Instagram logo" /></a>
                    <a href="#"><img src={twitter} alt="Twitter logo" /></a>
                </p>
            </div>
        </>
    )
}

export default UserCard;