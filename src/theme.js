import { Platform } from 'react-native';

export const themes = {
  light: {
    background: '#f4f6f4',
    card: '#ffffff',
    cardAlt: '#eef8ff',
    header: '#ffffff',
    headerShadow: '#d8ded8',
    ink: '#060707',
    muted: '#5f6965',
    line: '#1f2b27',
    blue: '#168ee8',
    cyan: '#35b9d5',
    gold: '#f2a51a',
    green: '#22a06b',
    rose: '#ee6a7c',
    switchKnob: '#f8f8f8',
  },
  dark: {
    background: '#111315',
    card: '#1c2024',
    cardAlt: '#162832',
    header: '#171a1d',
    headerShadow: '#2b3135',
    ink: '#f7f7ef',
    muted: '#bac4bc',
    line: '#eff6ee',
    blue: '#46a8ff',
    cyan: '#45d0df',
    gold: '#ffd45d',
    green: '#54d98c',
    rose: '#ff8a9a',
    switchKnob: '#ffffff',
  },
};

export const theme = themes.light;

export const getTemperatureAccent = (temperature) => {
  if (temperature <= 21) {
    return '#45b6f0';
  }

  if (temperature >= 29) {
    return '#f36f38';
  }

  return '#22a06b';
};

export const font = {
  family: Platform.select({
    ios: 'Courier',
    android: 'monospace',
    default: 'monospace',
  }),
};
