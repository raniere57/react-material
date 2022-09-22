import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from '@mui/material';


interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string
  mostrarBotaoNovo?: boolean
  mostrarBotaoVoltar?: boolean
  mostrarBotaoApagar?: boolean
  mostrarBotaoSalvar?: boolean
  mostrarBotaoSalvarEVoltar?: boolean

  mostrarBotaoNovoCarregando?: boolean
  mostrarBotaoVoltarCarregando?: boolean
  mostrarBotaoApagarCarregando?: boolean
  mostrarBotaoSalvarCarregando?: boolean
  mostrarBotaoSalvarEVoltarCarregando?: boolean

  aoClicarEmNovo?: () => void
  aoClicarEmVoltar?: () => void
  aoClicarEmApagar?: () => void
  aoClicarEmSalvar?: () => void
  aoClicarEmSalvarEVoltar?: () => void
}

export const FerramentasDeDetalhe = ({

  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEVoltar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = true,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEVoltarCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEVoltar

}: IFerramentasDeDetalheProps) => {

  const theme = useTheme();

  return (
    <Box
      component={Paper}
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      gap={1}
      alignItems='center'
    >
      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
        <Button
          color='primary'
          variant='contained'
          disableElevation
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSalvar}
        >
          Salvar
        </Button>)}

      {mostrarBotaoSalvarCarregando && (<Skeleton width={110} height={65} />)}

      {(mostrarBotaoSalvarEVoltar && !mostrarBotaoSalvarEVoltarCarregando) && (
        <Button
          color='primary'
          variant='outlined'
          disableElevation
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSalvarEVoltar}
        >
          Salvar e Voltar
        </Button>)}

      {mostrarBotaoSalvarEVoltarCarregando && (<Skeleton width={110} height={65} />)}

      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (<Button
        color='primary'
        variant='outlined'
        disableElevation
        startIcon={<Icon>delete</Icon>}
        onClick={aoClicarEmApagar}
      >
        Apagar
      </Button>)}

      {mostrarBotaoApagarCarregando && (<Skeleton width={110} height={65} />)}

      {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) && (<Button
        color='primary'
        variant='outlined'
        disableElevation
        startIcon={<Icon>add</Icon>}
        onClick={aoClicarEmNovo}
      >
        {textoBotaoNovo}
      </Button>)}

      {mostrarBotaoNovoCarregando && (<Skeleton width={110} height={65} />)}

      <Divider variant='middle' orientation='vertical' />

      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (<Button
        color='primary'
        variant='outlined'
        disableElevation
        startIcon={<Icon>arrow_back</Icon>}
        onClick={aoClicarEmVoltar}
      >
        Voltar
      </Button>)}

      {mostrarBotaoVoltarCarregando && (<Skeleton width={110} height={65} />)}

    </Box>
  );
};