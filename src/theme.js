import { Platform } from 'react-native';

export const theme = {
  background: '#f3f3f3',
  header: '#ffffff',
  headerShadow: '#dedede',
  ink: '#050505',
  muted: '#5d5d5d',
  line: '#242424',
  blue: '#1e94e8',
  softBlue: '#d9f0ff',
  switchOff: '#dedede',
  switchKnob: '#f7f7f7',
};

export const font = {
  family: Platform.select({
    ios: 'Courier',
    android: 'monospace',
    default: 'monospace',
  }),
};
