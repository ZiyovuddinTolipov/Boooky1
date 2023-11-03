import React, { useState, useEffect } from "react";
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
// import {
//   CssVarsProvider,
//   useColorScheme,
//   GlobalStyles,
//   CssBaseline,
//   Box,
//   Button,
//   Checkbox,
//   Divider,
//   FormControl,
//   FormLabel,
//   IconButton,
//   Link,
//   Input,
//   Typography,
//   Stack,
// } from "@mui/joy/styles";
// import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
// import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
// import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";

function ColorSchemeToggle({ onClick, ...props }) {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  

  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="neutral" disabled />;
  }

  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="outlined"
      color="neutral"
      aria-label="toggle light/dark mode"
      {...props}
      onClick={(event) => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
        onClick?.(event);
      }}
    >
      {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
                  const data = {
                    username: event.target.username.value,
                    password: event.target.password.value,
                    persistent: event.target.persistent.checked,
                  };
                  const base64Credentials = btoa(`${data.username}:${data.password}`);
                  const headers = {
                    'Authorization': `Basic ${base64Credentials}`,
                    'Content-Type': 'application/json',
                }
                fetch("https://boookyuz.pythonanywhere.com/login/", {
                  method: 'POST',
                  headers: headers,
                  body: JSON.stringify(data),
              })
                  .then((response) => {
                      if (!response.ok) {
                          throw new Error('Network response was not ok');
                      }
                      return response.json();
                  })
                  .then((result) => {
                    // Handle the response data here
                      toast.success("Ro'yxatdan o'tdingiz!");
                      console.log(result);
                      navigate("/")
                      localStorage.setItem('token', result.token);
                      localStorage.setItem('staff', result.staff);
                      localStorage.setItem('user_id', result.id);
      
                      // result.staff=="librarian" ? navigate("/admin"):navigate("/library");
                      // setToken(result.token)
                      // setStaff(result.staff)
                      // navigate("/library");
                      // setFormData({
                      //     password: '',
                      //     username: '',
                      //     // Boshqa inputlarni tozalash
                      // });
                  })
                  .catch((error) => {
                      // Handle errors here
                      toast.error("Login yoki parol noto'g'ri")
                      console.error('Error:', error);
                  });
                  // alert(JSON.stringify(data, null, 2));
                }
  
  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": {
            "--Collapsed-breakpoint": "769px",
            "--Cover-width": "50vw",
            "--Form-maxWidth": "800px",
            "--Transition-duration": "0.4s",
          },
        }}
      />
      <Box
        sx={(theme) => ({
          width:
            "clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",
          transition: "width var(--Transition-duration)",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "flex-end",
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(255 255 255 / 0.2)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundColor: "rgba(19 19 24 / 0.4)",
          },
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            width:
              "clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",
            maxWidth: "100%",
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{
              py: 3,
              display: "flex",
              alignItems: "left",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                gap: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton variant="soft" color="primary" size="sm">
                <BadgeRoundedIcon />
              </IconButton>
              <Typography level="title-lg">Boooky</Typography>
            </Box>
            <ColorSchemeToggle />
          </Box>
          <Box
            component="main"
            sx={{
              my: "auto",
              py: 2,
              pb: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: 400,
              maxWidth: "100%",
              mx: "auto",
              borderRadius: "sm",
              "& form": {
                display: "flex",
                flexDirection: "column",
                gap: 2,
              },
            }}
          >
            <Stack gap={4} sx={{ mb: 2 }}>
              <Stack gap={1}>
                <Typography level="h3">Kirish</Typography>
                <Typography level="body-sm">
                  Sizda hisob mavjud emasmi?{" "}
                  <Link href="#replace-with-a-link" level="title-sm">
                    {" Ro'yxatdan o'tish!"}
                  </Link>
                </Typography>
              </Stack>
              <Button variant="soft" color="neutral" fullWidth>
                Continue with Google
              </Button>
            </Stack>
            <Divider
              sx={(theme) => ({
                [theme.getColorSchemeSelector("light")]: {
                  color: { xs: "#FFF", md: "text.tertiary" },
                  "--Divider-lineColor": {
                    xs: "#FFF",
                    md: "var(--joy-palette-divider)",
                  },
                },
              })}
            >
              or
            </Divider>
            <Stack gap={4} sx={{ mt: 2 }}>
              <form
                onSubmit={handleSubmit}>
                <FormControl required>
                  <FormLabel>Username</FormLabel>
                  <Input type="text" name="username" />
                </FormControl>
                <FormControl required>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" name="password" />
                </FormControl>
                <Stack gap={4} sx={{ mt: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox size="sm" label="Remember me" name="persistent" />
                    <Link level="title-sm" to="#replace-with-a-link">
                      Forgot your password?
                    </Link>
                  </Box>
                  <Button type="submit" fullWidth>
                    Sign in
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" textAlign="center">
              © Your company {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: "100%",
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          left: "clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))",
          transition:
            "background-image var(--Transition-duration), left var(--Transition-duration) !important",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          backgroundColor: "background.level1",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)",
          },
        })}
      />
    </CssVarsProvider>
  );
}
