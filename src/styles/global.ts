import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	html {
		font-size: 62.5%;
		box-sizing: border-box;

	}
	
    body {
		background-color: ${({ theme }) => theme.colors.white};
		font-family: "Montserrat", sans-serif;
        color: ${props => props.theme.colors.greyDark2};
        min-height: 100vh;
    }

	// Override da estilização do loading de mudança de página
	#nprogress .bar {
		background: ${({ theme }) => theme.colors.primary} !important;
	}

	#nprogress .spinner-icon {
		border-top-color: ${({ theme }) => theme.colors.primary} !important;
		border-left-color: ${({ theme }) => theme.colors.primary} !important;
	}

`
