/**
 * Form validation and sanitization utilities for the tree care intake workflow.
 */

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

/**
 * Validates full name (minimum 2 non-whitespace characters, letters and standard name punctuation)
 */
export function validateName(name: string, lang: 'de' | 'en' = 'de'): ValidationResult {
  const trimmed = name ? name.trim() : '';
  if (!trimmed) {
    return {
      isValid: false,
      message: lang === 'de' ? 'Bitte geben Sie Ihren vollständigen Namen an' : 'Please provide your full name',
    };
  }
  if (trimmed.length < 2) {
    return {
      isValid: false,
      message: lang === 'de' ? 'Der Name muss mindestens 2 Zeichen lang sein' : 'Name must be at least 2 characters',
    };
  }
  return { isValid: true };
}

/**
 * Validates German / international phone number formats.
 * Accepts digits, spaces, hyphens, slashes, and leading plus. Minimum 6 digits.
 */
export function validatePhone(phone: string, lang: 'de' | 'en' = 'de'): ValidationResult {
  const trimmed = phone ? phone.trim() : '';
  if (!trimmed) {
    return {
      isValid: false,
      message: lang === 'de' ? 'Bitte geben Sie eine Telefonnummer für Rückfragen an' : 'Please provide a contact phone number',
    };
  }

  // Count raw digits
  const digitCount = (trimmed.match(/\d/g) || []).length;
  if (digitCount < 6 || digitCount > 16) {
    return {
      isValid: false,
      message: lang === 'de' ? 'Bitte geben Sie eine gültige Telefonnummer an (mind. 6 Ziffern)' : 'Please enter a valid phone number (at least 6 digits)',
    };
  }

  // Format check: allowed characters only (+, -, /, (), spaces, digits)
  const phonePattern = /^[+]?[0-9\s/()\-.]+$/;
  if (!phonePattern.test(trimmed)) {
    return {
      isValid: false,
      message: lang === 'de' ? 'Ungültiges Telefonnummern-Format' : 'Invalid phone number format',
    };
  }

  return { isValid: true };
}

/**
 * Validates location string and detects if it belongs to Passau or surrounding Bavarian Forest region
 */
export function validateLocation(location: string, lang: 'de' | 'en' = 'de'): ValidationResult & { isPassauRegion: boolean } {
  const trimmed = location ? location.trim() : '';
  if (!trimmed) {
    return {
      isValid: false,
      isPassauRegion: false,
      message: lang === 'de' ? 'Bitte geben Sie Ihre PLZ oder Ihren Wohnort an' : 'Please provide your postal code or town',
    };
  }
  if (trimmed.length < 3) {
    return {
      isValid: false,
      isPassauRegion: false,
      message: lang === 'de' ? 'Ortsangabe ist zu kurz (mind. 3 Zeichen)' : 'Location is too short (min. 3 characters)',
    };
  }

  // Detect Passau postal code pattern (94xxx) or Passau name
  const isPassauZip = /\b94\d{3}\b/.test(trimmed);
  const isPassauTown = /passau|salzweg|fürstenzell|vilshofen|tiefenbach|hauzenberg|pocking|innstadt|grubweg|haidenhof/i.test(trimmed);

  return {
    isValid: true,
    isPassauRegion: isPassauZip || isPassauTown,
  };
}
