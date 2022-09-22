import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';


interface IFerramentasDaListagemProps {
  textoDaBusca?: string
  mostrarInputBusca?: boolean
  aoMudarTextoDaBusca?: (novoTexto: string) => void
  textoBotaoNovo?: string
  mostrarBotaoNovo?: boolean
  aoClicarEmNovo?: () => void
}

export const FerramentasDaListagem = ({

  textoDaBusca = '',
  mostrarInputBusca = false,
  aoMudarTextoDaBusca,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarEmNovo

}: IFerramentasDaListagemProps
) => {

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
      {mostrarInputBusca && (
        <TextField
          size='small'
          placeholder='Pesquisar...'
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoDaBusca?.(e.target.value)}
        />
      )}
      <Box
        flex={1}
        display='flex'
        justifyContent='end'
      >
        {mostrarBotaoNovo && (
          <Button
            variant='contained'
            disableElevation
            onClick={aoClicarEmNovo}
            endIcon={<Icon>add</Icon>}
          >
            {textoBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};