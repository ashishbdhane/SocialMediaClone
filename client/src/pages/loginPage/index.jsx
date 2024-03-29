import React from 'react';
import {Box, Typography, useTheme, useMediaQuery} from '@mui/material';
import Form from './Form';

const LoginPage = () => {
	const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
	const theme = useTheme();
	const alt = theme.palette.background.alt;
	return (
		<Box>
			<Box width="100%" backgroundColor={alt} p="1rem 6%" textAlign="center" >
				<Typography fontWeight="bold" fontSize="32px" color="primary">
                    Echosphere
				</Typography>
			</Box>
			<Box
				width={isNonMobileScreens ? '50%' : '93%'}
				p="2rem"
				m="2rem auto"
				borderRadius="1.5rem"
                backgroundColor={alt}
			>
                <Typography fontWeight='500' variant='h5' sx={{mb: '1.5rem'}} >
                    Welcome to Echosphere! Your Echo, Your Story, Your Social Realm!!
                </Typography>
				<Form/>
            </Box>
		</Box>
	);
};

export default LoginPage;
