import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";

import GoogleIcon from "@mui/icons-material/Google";
import config from "../../config";
import { responseHandler } from "../../services/responseHandler";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setIsAuthenticate } from "../../features/AuthenticateSlice";
import { setIsLoading } from "../../features/ProcessSlice";
import { LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN } from "../../constant";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.processReducer.isLoading);
  const isAuthenticate = useSelector(
    (state) => state.authenticateReducer.isAuthenticate
  );
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      await axios
        .post(`${config.API}/api/auth/login`, {
          username: data.get("username"),
          password: data.get("password"),
        })
        .then((response) => responseHandler(response))
        .then((response) => {
          localStorage.setItem(ACCESS_TOKEN, response.accessToken);
          dispatch(setIsAuthenticate(true));
          toast.success(response.message);
          navigate("/");
          dispatch(setIsLoading(false));
        });
    } catch (error) {
      toast.error(error.response.data.message, {
        theme: "colored",
      });
      dispatch(setIsLoading(false));
      dispatch(setIsAuthenticate(false));
    }
  };
  const googleSuccess = async (res) => {
    try {
      const user = res?.profileObj;
      const googleId = res?.googleId;
      await axios
        .post(`${config.API}/api/auth/google-login`, {
          data: {
            ...user,
            googleId,
          },
        })
        .then((response) => responseHandler(response))
        .then((response) => {
          localStorage.setItem(ACCESS_TOKEN, response.accessToken);
          dispatch(setIsAuthenticate(true));
          dispatch(setIsLoading(false));
          toast.success(response.message);
        });
    } catch (error) {
      toast.error(error.message, {
        theme: "colored",
      });
      dispatch(setIsAuthenticate(false));
    }
  };
  const googleFailure = (error) => {
    console.error(error);
  };
  React.useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "403714864826-4btupt7vlr4mn06gkg3p24uf9uaib166.apps.googleusercontent.com",
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  return isAuthenticate ? (
    navigate("/")
  ) : (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {isLoading ? (
                <LinearProgress sx={{ mt: 5, mb: 2 }} />
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              )}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/sign-up" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
              <Grid container sx={{ mt: 3 }}>
                <GoogleLogin
                  clientId="403714864826-4btupt7vlr4mn06gkg3p24uf9uaib166.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <Button
                      startIcon={<GoogleIcon />}
                      onClick={renderProps.onClick}
                      color="primary"
                      variant="outlined"
                      fullWidth
                      disabled={renderProps.disabled}
                    >
                      Login with Google
                    </Button>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy={"single_host_origin"}
                />
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
