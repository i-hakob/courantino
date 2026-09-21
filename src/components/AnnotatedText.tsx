import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  Dimensions,
  type StyleProp,
  type TextStyle,
  type GestureResponderEvent,
} from 'react-native';
import { lookupFrenchWord, type FrenchEntry } from '@/data/frenchDictionary';
import { colors, spacing, radii, shadow } from '@/theme/theme';

type Selected = {
  display: string;
  entry: FrenchEntry;
  left: number;
  top: number;
};

const POPOVER_WIDTH = 240;
const POPOVER_MARGIN = 12;

type Props = {
  text: string;
  style?: StyleProp<TextStyle>;
};

export function AnnotatedText({ text, style }: Props) {
  const [selected, setSelected] = useState<Selected | null>(null);

  function handleWordPress(rawToken: string, event: GestureResponderEvent) {
    const entry = lookupFrenchWord(rawToken);
    if (!entry) return;

    const { pageX, pageY } = event.nativeEvent;
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

    const left = clamp(pageX - POPOVER_WIDTH / 2, POPOVER_MARGIN, screenWidth - POPOVER_WIDTH - POPOVER_MARGIN);
    const top = clamp(pageY + 20, POPOVER_MARGIN, screenHeight - 140);

    setSelected({ display: entry.word, entry, left, top });
  }

  const tokens = text.split(/(\s+)/);

  return (
    <>
      <Text style={style}>
        {tokens.map((token, i) => {
          if (token.length === 0 || /^\s+$/.test(token)) {
            return token;
          }
          const entry = lookupFrenchWord(token);
          if (!entry) {
            return token;
          }
          return (
            <Text
              key={i}
              style={styles.frenchWord}
              onPress={(e) => handleWordPress(token, e)}
              suppressHighlighting
            >
              {token}
            </Text>
          );
        })}
      </Text>

      <Modal
        visible={!!selected}
        transparent
        animationType="fade"
        onRequestClose={() => setSelected(null)}
      >
        <Pressable style={StyleSheet.absoluteFill} onPress={() => setSelected(null)}>
          {selected && (
            <View style={[styles.popover, { left: selected.left, top: selected.top }]}>
              <View style={styles.popoverAccent} />
              <View style={styles.popoverHeader}>
                <Text style={styles.popoverWord}>{selected.display}</Text>
                <Text style={styles.popoverPronunciation}>/{selected.entry.pronunciation}/</Text>
              </View>
              <Text style={styles.popoverTranslation}>{selected.entry.translation}</Text>
            </View>
          )}
        </Pressable>
      </Modal>
    </>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), Math.max(min, max));
}

const styles = StyleSheet.create({
  frenchWord: {
    color: colors.secondaryDark,
    fontWeight: '700',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
    textDecorationColor: colors.secondary,
  },
  popover: {
    position: 'absolute',
    width: POPOVER_WIDTH,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    ...shadow.floating,
  },
  popoverAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: colors.secondary,
  },
  popoverHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: spacing.xs,
    marginTop: spacing.xs,
  },
  popoverWord: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
    marginRight: spacing.sm,
  },
  popoverPronunciation: {
    fontSize: 13,
    color: colors.textMuted,
    fontStyle: 'italic',
    flexShrink: 1,
  },
  popoverTranslation: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '500',
  },
});
