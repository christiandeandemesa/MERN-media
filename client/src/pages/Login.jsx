// LOGIN PAGE

import {useState} from 'react';
import {Link} from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Logo from '../assets/logo-text.png';

function Login() {
	const [showPassword, setShowPassword] = useState(false);

	// Hides or reveals the password.
	const handleClickShowPassword = () => setShowPassword(show => !show);

	return (
		<Container class='min-h-[100vh] flex justify-center items-center font-source'>
			{/* LOGIN BOX */}
			<Box class='w-full md:w-[80%] lg:w-[50%] flex rounded-md min-h-[600px] overflow-hidden'>
				{/* LEFT SIDE OF BOX */}
				<Box class='bg-login-crowd flex-1 bg-cover p-5 md:flex hidden'>
					{/* TEXT */}
					<Box class='h-fit flex flex-col justify-center gap-[30px] bg-transparent-black text-white rounded-md p-4'>
						<Typography class='text-5xl'>Hello World</Typography>
						<Typography class='font-playfair'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt temporibus
							officia numquam eveniet, ullam, voluptatem nostrum eum totam nobis,
							magni sit. Aliquam saepe ducimus incidunt. Unde ad quae doloribus autem?
						</Typography>
						<Typography class='text-lg'>
							Don't have an account? Click{' '}
							<Link to='/register' class='text-blue'>
								here
							</Link>
							.
						</Typography>
					</Box>
				</Box>

				{/* RIGHT SIDE OF BOX */}
				<Box class='flex-1 p-4 md:border-t-2 md:border-r-2 md:border-b-2 flex flex-col items-center'>
					{/* LOGO */}
					<Box component='img' src={Logo} alt='logo'></Box>

					{/* LOGIN FORM */}
					<Paper component='form' class='flex flex-col bg-transparent gap-[60px]'>
						{/* EMAIL INPUT */}
						<TextField label='Email' variant='filled' color='secondary' />

						{/* PASSWORD INPUT */}
						<FormControl variant='filled' color='secondary'>
							<InputLabel htmlFor='filled-adornment-password'>Password</InputLabel>
							<FilledInput
								type={showPassword ? 'text' : 'password'}
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={handleClickShowPassword}
											edge='end'
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>

						{/* LOGIN BUTTON */}
						<Button variant='contained' type='submit' color='secondary'>
							Login
						</Button>
					</Paper>
				</Box>
			</Box>
		</Container>
	);
}

export default Login;
