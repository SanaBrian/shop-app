import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  function handleClick(){
    navigate("/users")
  }

  function handleClickP(){
    navigate("/products")
  }

  return (
    
      <Box sx={{ flexGrow: 1, margin: 10 }}>
        <AppBar >
          <Toolbar sx={{
            display:"flex", 
            justifyContent: "center", 
            gap: "15px",
            }}>
            
              <Button color="inherit" onClick={handleClickP}>Products</Button>
              <Button color="inherit" onClick={handleClick}>Carts</Button>
            
          </Toolbar>
        </AppBar>
      </Box>
  );
}
