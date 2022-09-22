import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useAppThemeContext, useDrawerContext } from '../../contexts';


interface IMenuLateralProps {
  children: React.ReactNode
}

interface IListItemLinkProps {
  label: string;
  icon: string;
  to: string;
  onClick: () => void
}

const ListItemLink = ({ label, icon, to, onClick }: IListItemLinkProps) => {

  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);

  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    onClick();
    navigate(to);
  };

  return (
    <ListItemButton onClick={handleClick} selected={!!match}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuLateral = ({ children }: IMenuLateralProps) => {

  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen} >
        <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center' >
            <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} />
          </Box>
          <Divider />
          <Box flex='1' >
            <List component='nav' >
              {drawerOptions.map(drawerOption => (
                <ListItemLink
                  key={drawerOption.path}
                  label={drawerOption.label}
                  icon={drawerOption.icon}
                  to={drawerOption.path}
                  onClick={toggleDrawerOpen}
                />
              ))}
            </List>
          </Box>
          <Box>
            <List component='nav' >
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>dark_mode</Icon>
                </ListItemIcon>
                <ListItemText primary='Alternar Tema'/>
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height='100vh' ml={smDown ? 0 : theme.spacing(28)} >
        {children}
      </Box>
    </>
  );
};