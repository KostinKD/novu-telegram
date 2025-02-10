import { ApiServiceLevelEnum, ProductFeatureKeyEnum } from '../types';

export const productFeatureEnabledForServiceLevel: Record<ProductFeatureKeyEnum, ApiServiceLevelEnum[]> = Object.freeze(
  {
    [ProductFeatureKeyEnum.TRANSLATIONS]: [ApiServiceLevelEnum.TEAM, ApiServiceLevelEnum.ENTERPRISE],
    [ProductFeatureKeyEnum.MANAGE_ENVIRONMENTS]: [ApiServiceLevelEnum.TEAM, ApiServiceLevelEnum.ENTERPRISE],
  }
);
