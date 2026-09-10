import { describe, it, expect } from 'vitest';
import { calculateEstimatedPrice } from '../src/utils/pricing';

describe('calculateEstimatedPrice Engine', () => {
  const mockServiceOptions = [
    { id: 'faellung', basePrice: 420 },
    { id: 'pflege', basePrice: 280 },
    { id: 'hecke', basePrice: 190 },
    { id: 'wurzel', basePrice: 170 },
    { id: 'entsorgung', basePrice: 120 },
  ];

  const mockHeightOptions = [
    { id: 'h1', factor: 1.0 },   // < 5m
    { id: 'h2', factor: 1.35 },  // 5-10m
    { id: 'h3', factor: 1.85 },  // 10-20m
    { id: 'h4', factor: 2.5 },   // > 20m
  ];

  it('should return zero when no service is selected', () => {
    const result = calculateEstimatedPrice(
      [],
      'h1',
      'easy',
      mockServiceOptions,
      mockHeightOptions
    );
    expect(result.min).toBe(0);
    expect(result.max).toBe(0);
    expect(result.rawTotal).toBe(0);
  });

  it('should correctly calculate base price for a single service with flat terrain and small height', () => {
    const result = calculateEstimatedPrice(
      ['faellung'],
      'h1',
      'easy',
      mockServiceOptions,
      mockHeightOptions
    );
    // base = 420 * 1.0 * 1.0 = 420
    // min = round(420 * 0.88 / 10) * 10 = round(36.96) * 10 = 370
    // max = round(420 * 1.22 / 10) * 10 = round(51.24) * 10 = 510
    expect(result.rawTotal).toBe(420);
    expect(result.min).toBe(370);
    expect(result.max).toBe(510);
  });

  it('should scale appropriately for multi-service bundles', () => {
    const result = calculateEstimatedPrice(
      ['faellung', 'wurzel', 'entsorgung'],
      'h1',
      'easy',
      mockServiceOptions,
      mockHeightOptions
    );
    // base = 420 + 170 + 120 = 710
    expect(result.rawTotal).toBe(710);
    expect(result.min).toBe(620); // 710 * 0.88 = 624.8 -> 620
    expect(result.max).toBe(870); // 710 * 1.22 = 866.2 -> 870
  });

  it('should apply difficulty multiplier for steep slopes (Passauer Hanglage)', () => {
    const easyResult = calculateEstimatedPrice(
      ['faellung'],
      'h2',
      'easy',
      mockServiceOptions,
      mockHeightOptions
    );
    const hardResult = calculateEstimatedPrice(
      ['faellung'],
      'h2',
      'hard',
      mockServiceOptions,
      mockHeightOptions
    );
    // Hard result rawTotal should be exactly 1.35x easyResult rawTotal
    expect(hardResult.rawTotal).toBeCloseTo(easyResult.rawTotal * 1.35, 1);
    expect(hardResult.min).toBeGreaterThan(easyResult.min);
    expect(hardResult.max).toBeGreaterThan(easyResult.max);
  });

  it('should scale with tree height factor for large trees >20m', () => {
    const smallTree = calculateEstimatedPrice(
      ['faellung'],
      'h1',
      'easy',
      mockServiceOptions,
      mockHeightOptions
    );
    const extraLargeTree = calculateEstimatedPrice(
      ['faellung'],
      'h4',
      'easy',
      mockServiceOptions,
      mockHeightOptions
    );
    expect(extraLargeTree.rawTotal).toBe(smallTree.rawTotal * 2.5);
  });
});
