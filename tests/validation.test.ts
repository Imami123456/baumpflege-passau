import { describe, it, expect } from 'vitest';
import { validateName, validatePhone, validateLocation } from '../src/utils/validation';

describe('Customer Intake Validation Engine', () => {
  describe('validateName', () => {
    it('should reject empty or whitespace-only names', () => {
      expect(validateName('').isValid).toBe(false);
      expect(validateName('   ').isValid).toBe(false);
    });

    it('should reject single-character names', () => {
      expect(validateName('A').isValid).toBe(false);
    });

    it('should accept valid German and international names', () => {
      expect(validateName('Markus Huber').isValid).toBe(true);
      expect(validateName('Dr. Sabine Maier-Weidinger').isValid).toBe(true);
    });
  });

  describe('validatePhone', () => {
    it('should reject empty phone number', () => {
      expect(validatePhone('').isValid).toBe(false);
    });

    it('should reject strings with fewer than 6 digits', () => {
      expect(validatePhone('12345').isValid).toBe(false);
      expect(validatePhone('abc').isValid).toBe(false);
    });

    it('should accept standard German mobile and landline formats', () => {
      expect(validatePhone('0170 892 4110').isValid).toBe(true);
      expect(validatePhone('+49 851 987654').isValid).toBe(true);
      expect(validatePhone('0851/123456').isValid).toBe(true);
      expect(validatePhone('+49 (0) 170-1234567').isValid).toBe(true);
    });

    it('should reject numbers with illegal characters', () => {
      expect(validatePhone('0170 892 4110 #ext 2').isValid).toBe(false);
    });
  });

  describe('validateLocation', () => {
    it('should reject empty location', () => {
      expect(validateLocation('').isValid).toBe(false);
    });

    it('should accept and correctly identify Passau postal codes and districts', () => {
      const result1 = validateLocation('94032 Passau-Innstadt');
      expect(result1.isValid).toBe(true);
      expect(result1.isPassauRegion).toBe(true);

      const result2 = validateLocation('Salzweg');
      expect(result2.isValid).toBe(true);
      expect(result2.isPassauRegion).toBe(true);
    });

    it('should accept out-of-area locations without failing isValid', () => {
      const result = validateLocation('80331 München');
      expect(result.isValid).toBe(true);
      expect(result.isPassauRegion).toBe(false);
    });
  });
});
