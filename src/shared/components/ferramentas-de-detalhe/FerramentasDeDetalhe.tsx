import { Box, Button, Divider, Icon, Paper, Skeleton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';


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
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEVoltarCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEVoltar

}: IFerramentasDeDetalheProps) => {

  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

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
      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) &&
        (
          <Button
            color='primary'
            variant='contained'
            disableElevation
            startIcon={<Icon>save</Icon>}
            onClick={aoClicarEmSalvar}
          >
            <Typography
              variant='button'
              noWrap
            >
              Salvar
            </Typography>
          </Button>)}

      {mostrarBotaoSalvarCarregando && (<Skeleton width={110} height={65} />)}

      {(mostrarBotaoSalvarEVoltar && !mostrarBotaoSalvarEVoltarCarregando && !mdDown) &&
        (
          <Button
            color='primary'
            variant='outlined'
            disableElevation
            startIcon={<Icon>save</Icon>}
            onClick={aoClicarEmSalvarEVoltar}
          >
            <Typography
              variant='button'
              noWrap
            >
              Salvar e Voltar
            </Typography>
          </Button>)}

      {mostrarBotaoSalvarEVoltarCarregando && !mdDown && (<Skeleton width={178} height={65} />)}

      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) &&
        (
          <Button
            color='primary'
            variant='outlined'
            disableElevation
            startIcon={<Icon>delete</Icon>}
            onClick={aoClicarEmApagar}
          >
            <Typography
              variant='button'
              noWrap
            >
              Apagar
            </Typography>
          </Button>)}

      {mostrarBotaoApagarCarregando && (<Skeleton width={110} height={65} />)}

      {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !mdDown) &&
        (
          <Button
            color='primary'
            variant='outlined'
            disableElevation
            startIcon={<Icon>add</Icon>}
            onClick={aoClicarEmNovo}
          >
            <Typography
              variant='button'
              noWrap
            >
              {textoBotaoNovo}
            </Typography>
          </Button>)}

      {mostrarBotaoNovoCarregando && !mdDown && (<Skeleton width={95} height={65} />)}

      {(
        (mostrarBotaoVoltar || mostrarBotaoVoltarCarregando) &&
        (
          mostrarBotaoNovo ||
          mostrarBotaoNovoCarregando ||
          mostrarBotaoApagar ||
          mostrarBotaoApagarCarregando ||
          mostrarBotaoSalvarEVoltar ||
          mostrarBotaoSalvarEVoltarCarregando ||
          mostrarBotaoSalvar ||
          mostrarBotaoSalvarCarregando
        )
        &&
        <Divider
          variant='middle'
          orientation='vertical'
        />
      )}

      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) &&
        (
          <Button
            color='primary'
            variant='outlined'
            disableElevation
            startIcon={<Icon>arrow_back</Icon>}
            onClick={aoClicarEmVoltar}
          >
            <Typography
              variant='button'
              noWrap
            >
              {!smDown && 'Voltar'}
            </Typography>
          </Button>
        )}

      {mostrarBotaoVoltarCarregando && (<Skeleton width={110} height={65} />)}

    </Box>
  );
};