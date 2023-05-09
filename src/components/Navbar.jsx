import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
        ></IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Chicago Park District & Forest Preserves
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Park District</Button>
          <Button color="inherit">Forect Preserve</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
