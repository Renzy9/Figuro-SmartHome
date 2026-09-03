import { Pressable, StyleSheet, Text, View } from 'react-native';

import { font, theme as defaultTheme } from '../theme';

export default function DeviceTile({
  accent = defaultTheme.blue,
  active = false,
  colors = defaultTheme,
  detail,
  icon,
  name,
  onPress,
  status,
}) {
  return (
    <Pressable
      accessibilityLabel={`${name} ${status}`}
      accessibilityRole="button"
      disabled={!onPress}
      onPress={onPress}
      style={({ pressed }) => [
        styles.tile,
        {
          backgroundColor: active ? colors.cardAlt : colors.card,
          borderColor: active ? accent : colors.line,
          shadowColor: accent,
        },
        pressed && styles.pressed,
      ]}
    >
      <View style={[styles.iconWrap, { backgroundColor: accent }]}>{icon}</View>
      <Text style={[styles.name, { color: colors.ink }]}>{name}</Text>
      <Text style={[styles.status, { color: colors.ink }]}>{status}</Text>
      {detail ? <Text style={[styles.detail, { color: colors.muted }]}>{detail}</Text> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1.4,
    elevation: 2,
    minHeight: 136,
    justifyContent: 'center',
    marginBottom: 14,
    paddingHorizontal: 8,
    paddingVertical: 12,
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    width: '48%',
  },
  iconWrap: {
    alignItems: 'center',
    borderRadius: 26,
    height: 52,
    justifyContent: 'center',
    marginBottom: 5,
    width: 52,
  },
  name: {
    fontFamily: font.family,
    fontSize: 22,
    fontWeight: '900',
    lineHeight: 28,
    textAlign: 'center',
  },
  status: {
    fontFamily: font.family,
    fontSize: 17,
    fontWeight: '900',
    lineHeight: 22,
    marginTop: 3,
    textAlign: 'center',
  },
  detail: {
    fontFamily: font.family,
    fontSize: 12,
    fontWeight: '800',
    lineHeight: 17,
    marginTop: 2,
    textAlign: 'center',
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
});
