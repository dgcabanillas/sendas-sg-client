import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    drawerWidth: 280,
    typography: {
        fontSize: 12,
        fontFamily: [
            'Inter',
            'Roboto',
        ].join(',')
    },
    text: {
        main:       '#67748E',
        dark:       '#252f40',
        light:      'rgba(58,65,111,.5)',
        semibold:   '#3A416F',
        shadow:     '0 20px 27px 0 rgb(0 0 0 / 5%)',
        iconshadow: '0 .25rem .375rem -.0625rem hsla(0,0%,8%,.12),0 .125rem .25rem -.0625rem hsla(0,0%,8%,.07)',
    },
    form: {
        container: {
            background: 'rgb(255 255 255 / 100%)',
        }
    },
    card: {
        borderRadius: '1rem',
        border: '0 solid rgba(0,0,0,.125)',
        boxShadow: '0 20px 27px 0 rgb(0 0 0 / 5%)',
    },
    modal: {
        title: '#595959',
        text:  '#545454',
    },
    background: {
        main:    '#F8F9FA',
        default: '#FFF',
    },
    palette: {
        primary: {
            //main:   '#2f65cb',
            //dark:   '#D32F2F',
            //light:  '#FFCDD2',
            //main:   '#F44336',
            dark:   '#E64A19',
            light:  '#FFCCBC',
            main:   '#FF5722',
            contrastText: '#FFFFFF',
        },
        secondary: {
            dark:   '#D32F2F',
            light:  '#FFCDD2',
            main:   '#F44336',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#f4f6f8',
        },
        text: {
            //primary: '#263238',
            primary:    '#212121',
            secondary:  '#757575',
        },
        divider: '#BDBDBD',
    }
});

export default theme;
