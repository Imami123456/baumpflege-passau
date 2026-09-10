export interface ServicePriceOption {
  id: string;
  basePrice: number;
}

export interface HeightPriceOption {
  id: string;
  factor: number;
}

export interface PriceRangeResult {
  min: number;
  max: number;
  rawTotal: number;
}

export type AccessibilityType = 'easy' | 'hard';

/**
 * Calculates a reliable preliminary cost range for tree and garden services in the Passau region.
 *
 * Formula:
 * - baseSum = Sum of basePrice for all selected services
 * - heightFactor = scale factor corresponding to tree height (<5m: 1.0, 5-10m: 1.35, 10-20m: 1.85, >20m: 2.5)
 * - accessFactor = 1.0 for easy flat access, 1.35 for steep riverbank slope or tight residential quarters
 * - rawTotal = baseSum * heightFactor * accessFactor
 * - min = round(rawTotal * 0.88, nearest 10)
 * - max = round(rawTotal * 1.22, nearest 10)
 */
export function calculateEstimatedPrice(
  selectedServiceIds: string[],
  treeHeightId: string,
  accessibility: AccessibilityType,
  serviceOptions: ServicePriceOption[],
  heightOptions: HeightPriceOption[]
): PriceRangeResult {
  if (!selectedServiceIds || selectedServiceIds.length === 0) {
    return { min: 0, max: 0, rawTotal: 0 };
  }

  const selectedItems = serviceOptions.filter((opt) =>
    selectedServiceIds.includes(opt.id)
  );

  const baseSum = selectedItems.reduce((acc, curr) => acc + curr.basePrice, 0);

  const heightOption =
    heightOptions.find((h) => h.id === treeHeightId) || heightOptions[0];
  const heightFactor = heightOption ? heightOption.factor : 1.0;

  const accessFactor = accessibility === 'hard' ? 1.35 : 1.0;

  const rawTotal = baseSum * heightFactor * accessFactor;

  const min = Math.round((rawTotal * 0.88) / 10) * 10;
  const max = Math.round((rawTotal * 1.22) / 10) * 10;

  return { min, max, rawTotal };
}
