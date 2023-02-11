import styles from '../menu/header.module.css';
import { useNavigate, useParams } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();


    return ( 
        <div className={styles.contenedor}>
            <button className={styles.btn} onClick={() => navigate('formulario')}>NUEVO LEAD</button>
        </div>
     );
}
 
export default Header;