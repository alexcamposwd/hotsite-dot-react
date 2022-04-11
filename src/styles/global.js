import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	*,
  html {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box
	}
	::after,
	::before {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	ul {
		list-style-type: none;
	}
	a {
		text-decoration: none;
	}
	body,
  html {
		min-width: 360px;
    overflow-x: hidden;
	}
`;
