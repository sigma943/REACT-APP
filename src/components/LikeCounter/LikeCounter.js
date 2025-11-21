import './LikeCounter.css';
import { useState } from 'react';


function LikeCounter() {
    const [likes, setLikes] = useState(0);
    const handClick = () => {
       setLikes(likes + 1);
    };
    const handClick1 = () => {
        if (likes == 0) return;
       setLikes(likes - 1);
    };

    const counterStyles = {
        color: likes > 5 ? 'red' : 'black',
        fontWeight: likes > 5 ? 'bold' : 'normal',
        textAlign: "center"

    };

    return (
        <div className='post'>
            <p style={counterStyles}>Liczba lajków {likes}</p>
            <div className='actions'>
                <button onClick={handClick} style={{ marginRight: "10px" }}>❤️ Polub</button>
                <button onClick={handClick1}>👎 Usuń lajka</button>
            </div>
            
        </div>
    );
};

export default LikeCounter;