import { describe, it, expect } from 'vitest';
import { translations, passauDistricts, passauSurroundings } from '../src/i18n/translations';

describe('Bilingual Translations & Geographic Data Integrity', () => {
  it('should have both German and English translation dictionaries', () => {
    expect(translations.de).toBeDefined();
    expect(translations.en).toBeDefined();
  });

  it('should maintain parity in top-level navigation keys', () => {
    const deNavKeys = Object.keys(translations.de.nav);
    const enNavKeys = Object.keys(translations.en.nav);
    expect(deNavKeys.sort()).toEqual(enNavKeys.sort());
  });

  it('should have exactly 6 core services defined in both languages with matching IDs', () => {
    expect(translations.de.services.items).toHaveLength(6);
    expect(translations.en.services.items).toHaveLength(6);

    const deIds = translations.de.services.items.map((s) => s.id);
    const enIds = translations.en.services.items.map((s) => s.id);
    expect(deIds).toEqual(enIds);
  });

  it('should validate Passau districts have valid 5-digit German postal codes', () => {
    expect(passauDistricts.length).toBeGreaterThanOrEqual(6);

    passauDistricts.forEach((district) => {
      expect(district.zip).toMatch(/^940\d{2}$/);
      expect(district.name.length).toBeGreaterThan(1);
    });
  });

  it('should include key Bavarian Forest surrounding municipalities', () => {
    expect(passauSurroundings).toContain('Salzweg');
    expect(passauSurroundings).toContain('Vilshofen an der Donau');
    expect(passauSurroundings).toContain('Fürstenzell');
  });
});
