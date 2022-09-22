import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';


interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string
  mostrarBotaoNovo?: boolean
  mostrarBotaoVoltar?: boolean
  mostrarBotaoApagar?: boolean
  mostrarBotaoSalvar?: boolean
  mostrarBotaoSalverEVoltar?: boolean

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
  mostrarBotaoSalverEVoltar = false,

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
      {mostrarBotaoSalvar && (<Button
        color='primary'
        variant='contained'
        disableElevation
        startIcon={<Icon>save</Icon>}
        onClick={aoClicarEmSalvar}
      >
        Salvar
      </Button>)}
      {mostrarBotaoSalverEVoltar && (<Button
        color='primary'
        variant='outlined'
        disableElevation
        startIcon={<Icon>save</Icon>}
        onClick={aoClicarEmSalvarEVoltar}
      >
        Salvar e Voltar
      </Button>)}
      {mostrarBotaoApagar && (<Button
        color='primary'
        variant='outlined'
        disableElevation
        startIcon={<Icon>delete</Icon>}
        onClick={aoClicarEmApagar}
      >
        Apagar
      </Button>)}
      {mostrarBotaoNovo && (<Button
        color='primary'
        variant='outlined'
        disableElevation
        startIcon={<Icon>add</Icon>}
        onClick={aoClicarEmNovo}
      >
        {textoBotaoNovo}
      </Button>)}

      <Divider variant='middle' orientation='vertical' />

      {mostrarBotaoVoltar && (<Button
        color='primary'
        variant='outlined'
        disableElevation
        startIcon={<Icon>arrow_back</Icon>}
        onClick={aoClicarEmVoltar}
      >
        Voltar
      </Button>)}
    </Box>
  );
};