import styles from '../ListaDeLeads/lListaDeLeads.module.css';
import Header from '../menu/header';
import Leads from '../Leads/Leads';

const ListaDeLeads = () => {

    return ( 
        <>
          <div className={styles.con}>
              <Header />
              <Leads />
          </div>
        </>
     );
}
 
export default ListaDeLeads;