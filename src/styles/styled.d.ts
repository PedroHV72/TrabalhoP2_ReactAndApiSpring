import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string,
            secondary: string,
            tertiary: string,
    
            white: string,
            black: string,
            gray: string,
    
            sucess: string,
            info: string,
            warning: string
        },
    };
}