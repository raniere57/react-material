import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDePaginas } from '../../shared/layouts';


export const Dashboard = () => {

  return(
    <LayoutBaseDePaginas
      titulo='Dashboard'
      barraDeFerramentas={
        <FerramentasDaListagem mostrarInputBusca/>
      }
    >
      filho
    </LayoutBaseDePaginas>
  );
};