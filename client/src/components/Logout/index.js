import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const history = useNavigate();

    useEffect(() => {
        const logOut = async () => {
            try {
                await axios.delete('http://localhost:5000/logout');
                history("/login");
            } catch (error) {
                console.log(error);
            }
        };

        logOut();
    }, [history]);

    return null; // This component doesn't render anything
}

export default Logout;