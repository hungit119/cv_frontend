import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import GoogleIcon from "@mui/icons-material/Google";

import * as React from "react";
import axios from "axios";
import config from "../../config";
import { responseHandler } from "../../services/responseHandler";
import { ACCESS_TOKEN } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticate } from "../../features/AuthenticateSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setIsLoading } from "../../features/ProcessSlice";
import { LinearProgress } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const defaultTheme = createTheme();

export default function SignUp() {
  const [isRobot, setIsRobot] = React.useState(true);
  const capchaRef = React.useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.processReducer.isLoading);
  const [validate, setValidate] = useState({
    firstname: { error: false },
    lastname: { error: false },
    username: { error: false },
    email: { error: false },
    password: { error: false },
    confirm: { error: false },
  });
  const isAuthenticate = useSelector(
    (state) => state.authenticateReducer.isAuthenticate
  );
  const handleOnCapcha = async (value) => {
    try {
      await axios
        .post(`${config.API}/api/auth/capchaCheck`, {
          token: value,
        })
        .then((response) => responseHandler(response))
        .then((response) => {
          toast.success(response.message);
          setIsRobot(false);
          capchaRef.current.reset();
        });
    } catch (error) {
      toast.error(error.response.data.message, {
        theme: "colored",
      });
      setIsRobot(true);
      capchaRef.current.reset();
    }
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      await axios
        .post(`${config.API}/api/auth/register`, {
          firstname: data.get("firstname"),
          lastname: data.get("lastname"),
          username: data.get("username"),
          email: data.get("email"),
          password: data.get("password"),
          confirm: data.get("confirm"),
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
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstname"
                    required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    autoFocus
                    error={validate.firstname.error}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    autoComplete="family-name"
                    error={validate.lastname.error}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={validate.email.error}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Usernamer"
                    name="username"
                    autoComplete="username"
                    error={validate.username.error}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    error={validate.password.error}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirm"
                    label="Confirm Password"
                    type="password"
                    id="confirm"
                    autoComplete="confirm-password"
                    error={validate.confirm.error}
                  />
                </Grid>
              </Grid>
              {isLoading ? (
                <LinearProgress sx={{ mt: 5, mb: 2 }} />
              ) : (
                <>
                  <br />
                  <ReCAPTCHA
                    sitekey={config.COPYSITEKEY}
                    onChange={handleOnCapcha}
                    ref={capchaRef}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={isRobot}
                  >
                    Sign Up
                  </Button>
                </>
              )}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/sign-in" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-start">
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Chấp nhận đồng ý chính sách và bảo mật của Jumbo"
                  />
                </Grid>
              </Grid>
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
