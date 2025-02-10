import { ApiServiceLevelEnum } from '../types';

export enum FeatureNameEnum {
  // Platform Features
  PLATFORM_MONTHLY_COST = 'platformMonthlyCost',
  PLATFORM_ANNUAL_COST = 'platformAnnualCost',
  PLATFORM_MONTHLY_EVENTS_INCLUDED = 'platformMonthlyEventsIncluded',
  PLATFORM_MAX_API_REQUESTS_TRIGGER_EVENTS = 'platformMaxApiRequestsTriggerEvents',
  PLATFORM_MAX_API_REQUESTS_CONFIGURATION = 'platformMaxApiRequestsConfiguration',
  PLATFORM_MAX_API_REQUESTS_GLOBAL = 'platformMaxApiRequestsGlobal',
  PLATFORM_COST_PER_ADDITIONAL_1K_EVENTS = 'platformCostPerAdditional1kEvents',
  PLATFORM_CHANNELS_SUPPORTED_BOOLEAN = 'platformChannelsSupportedBoolean',
  PLATFORM_SUBSCRIBERS = 'platformSubscribers',
  PLATFORM_MAX_WORKFLOWS = 'platformMaxWorkflows',
  PLATFORM_GUI_BASED_WORKFLOW_MANAGEMENT_BOOLEAN = 'platformGuiBasedWorkflowManagementBoolean',
  PLATFORM_CODE_BASED_WORKFLOW_MANAGEMENT_BOOLEAN = 'platformCodeBasedWorkflowManagementBoolean',
  PLATFORM_SUBSCRIBER_MANAGEMENT_BOOLEAN = 'platformSubscriberManagementBoolean',
  PLATFORM_ENVIRONMENTS = 'platformEnvironments',
  PLATFORM_MULTI_ORG_MULTI_TENANCY = 'platformMultiOrgMultiTenancy',
  PLATFORM_PROVIDER_INTEGRATIONS = 'platformProviderIntegrations',
  PLATFORM_ACTIVITY_FEED_RETENTION = 'platformActivityFeedRetention',
  PLATFORM_MAX_DIGEST_WINDOW_TIME = 'platformMaxDigestWindowTime',
  PLATFORM_BLOCK_BASED_EMAIL_EDITOR_BOOLEAN = 'platformBlockBasedEmailEditorBoolean',
  PLATFORM_REMOVE_NOVU_BRANDING_BOOLEAN = 'platformRemoveNovuBrandingBoolean',

  // Inbox Features
  INBOX_COMPONENT_BOOLEAN = 'inboxComponentBoolean',
  INBOX_USER_PREFERENCES_COMPONENT_BOOLEAN = 'inboxUserPreferencesComponentBoolean',
  INBOX_BELL_COMPONENT_BOOLEAN = 'inboxBellComponentBoolean',
  INBOX_NOTIFICATIONS_COMPONENT_BOOLEAN = 'inboxNotificationsComponentBoolean',
  INBOX_CONTENT_COMPONENT_BOOLEAN = 'inboxContentComponentBoolean',

  // Account Administration Features
  ACCOUNT_MAX_TEAM_MEMBERS = 'accountMaxTeamMembers',
  ACCOUNT_ROLE_BASED_ACCESS_CONTROL_BOOLEAN = 'accountRoleBasedAccessControlBoolean',
  ACCOUNT_STANDARD_BUILT_IN_AUTHENTICATION_BOOLEAN = 'accountStandardBuiltInAuthenticationBoolean',
  ACCOUNT_CUSTOM_SAML_SSO_OIDC_BOOLEAN = 'accountCustomSamlSsoOidcBoolean',
  ACCOUNT_MULTI_FACTOR_AUTHENTICATION_BOOLEAN = 'accountMultiFactorAuthenticationBoolean',

  // Compliance Features
  COMPLIANCE_GDPR_BOOLEAN = 'complianceGdprBoolean',
  COMPLIANCE_SOC2_ISO27001_REPORT_BOOLEAN = 'complianceSoc2Iso27001ReportBoolean',
  COMPLIANCE_HIPAA_BAA_BOOLEAN = 'complianceHipaaBaaBoolean',
  COMPLIANCE_CUSTOM_SECURITY_REVIEWS_BOOLEAN = 'complianceCustomSecurityReviewsBoolean',
  COMPLIANCE_DATA_PROCESSING_AGREEMENTS = 'complianceDataProcessingAgreements',
}

export type FeatureValue = string | number | null | boolean | DetailedPriceListItem;

class DetailedPriceListItem {
  label?: string;
  value: number | string | null | boolean;
  timeSuffix?: 'h' | 'd';
  currency?: '$';
}

const novuServiceTiers: Record<FeatureNameEnum, Record<ApiServiceLevelEnum, FeatureValue>> = {
  [FeatureNameEnum.PLATFORM_MONTHLY_COST]: {
    [ApiServiceLevelEnum.FREE]: 0,
    [ApiServiceLevelEnum.FREE_2025]: 0,
    [ApiServiceLevelEnum.PRO]: 30,
    [ApiServiceLevelEnum.TEAM]: 250,
    [ApiServiceLevelEnum.BUSINESS]: 250,
    [ApiServiceLevelEnum.ENTERPRISE]: null,
    [ApiServiceLevelEnum.UNLIMITED]: null,
  },
  [FeatureNameEnum.PLATFORM_ANNUAL_COST]: {
    [ApiServiceLevelEnum.FREE]: 0,
    [ApiServiceLevelEnum.FREE_2025]: 0,
    [ApiServiceLevelEnum.PRO]: 330,
    [ApiServiceLevelEnum.TEAM]: 2700,
    [ApiServiceLevelEnum.BUSINESS]: 2700,
    [ApiServiceLevelEnum.ENTERPRISE]: null,
    [ApiServiceLevelEnum.UNLIMITED]: null,
  },
  [FeatureNameEnum.PLATFORM_MONTHLY_EVENTS_INCLUDED]: {
    [ApiServiceLevelEnum.FREE]: 10000,
    [ApiServiceLevelEnum.FREE_2025]: 10000,
    [ApiServiceLevelEnum.PRO]: 30000,
    [ApiServiceLevelEnum.TEAM]: 250000,
    [ApiServiceLevelEnum.BUSINESS]: 250000,
    [ApiServiceLevelEnum.ENTERPRISE]: 5000000,
    [ApiServiceLevelEnum.UNLIMITED]: 5000000,
  },
  [FeatureNameEnum.PLATFORM_MAX_API_REQUESTS_TRIGGER_EVENTS]: {
    [ApiServiceLevelEnum.FREE]: 60,
    [ApiServiceLevelEnum.FREE_2025]: 60,
    [ApiServiceLevelEnum.PRO]: 240,
    [ApiServiceLevelEnum.TEAM]: 600,
    [ApiServiceLevelEnum.BUSINESS]: 600,
    [ApiServiceLevelEnum.ENTERPRISE]: 6000,
    [ApiServiceLevelEnum.UNLIMITED]: 6000,
  },
  [FeatureNameEnum.PLATFORM_MAX_API_REQUESTS_CONFIGURATION]: {
    [ApiServiceLevelEnum.FREE]: 20,
    [ApiServiceLevelEnum.FREE_2025]: 20,
    [ApiServiceLevelEnum.PRO]: 80,
    [ApiServiceLevelEnum.TEAM]: 200,
    [ApiServiceLevelEnum.BUSINESS]: 200,
    [ApiServiceLevelEnum.ENTERPRISE]: 2000,
    [ApiServiceLevelEnum.UNLIMITED]: 2000,
  },
  [FeatureNameEnum.PLATFORM_MAX_API_REQUESTS_GLOBAL]: {
    [ApiServiceLevelEnum.FREE]: 30,
    [ApiServiceLevelEnum.FREE_2025]: 30,
    [ApiServiceLevelEnum.PRO]: 120,
    [ApiServiceLevelEnum.TEAM]: 300,
    [ApiServiceLevelEnum.BUSINESS]: 300,
    [ApiServiceLevelEnum.ENTERPRISE]: 3000,
    [ApiServiceLevelEnum.UNLIMITED]: 3000,
  },
  [FeatureNameEnum.PLATFORM_COST_PER_ADDITIONAL_1K_EVENTS]: {
    [ApiServiceLevelEnum.FREE]: null,
    [ApiServiceLevelEnum.FREE_2025]: null,
    [ApiServiceLevelEnum.PRO]: 1.2,
    [ApiServiceLevelEnum.TEAM]: 1.2,
    [ApiServiceLevelEnum.BUSINESS]: 1.2,
    [ApiServiceLevelEnum.ENTERPRISE]: null,
    [ApiServiceLevelEnum.UNLIMITED]: null,
  },
  [FeatureNameEnum.PLATFORM_CHANNELS_SUPPORTED_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: { label: 'Yes', value: true },
    [ApiServiceLevelEnum.FREE_2025]: { label: 'Yes', value: true },
    [ApiServiceLevelEnum.PRO]: { label: 'Yes', value: true },
    [ApiServiceLevelEnum.TEAM]: { label: 'Yes', value: true },
    [ApiServiceLevelEnum.BUSINESS]: { label: 'Yes', value: true },
    [ApiServiceLevelEnum.ENTERPRISE]: { label: 'Yes', value: true },
    [ApiServiceLevelEnum.UNLIMITED]: { label: 'Yes', value: true },
  },
  [FeatureNameEnum.PLATFORM_SUBSCRIBERS]: {
    [ApiServiceLevelEnum.FREE]: { label: 'Unlimited', value: -1 },
    [ApiServiceLevelEnum.FREE_2025]: { label: 'Unlimited', value: -1 },
    [ApiServiceLevelEnum.PRO]: { label: 'Unlimited', value: -1 },
    [ApiServiceLevelEnum.TEAM]: { label: 'Unlimited', value: -1 },
    [ApiServiceLevelEnum.BUSINESS]: { label: 'Unlimited', value: -1 },
    [ApiServiceLevelEnum.ENTERPRISE]: { label: 'Unlimited', value: -1 },
    [ApiServiceLevelEnum.UNLIMITED]: { label: 'Unlimited', value: -1 },
  },
  [FeatureNameEnum.PLATFORM_MAX_WORKFLOWS]: {
    [ApiServiceLevelEnum.FREE]: { value: 20 },
    [ApiServiceLevelEnum.FREE_2025]: { value: 20 },
    [ApiServiceLevelEnum.PRO]: { value: 20 },
    [ApiServiceLevelEnum.TEAM]: { value: -1 },
    [ApiServiceLevelEnum.BUSINESS]: { value: -1, label: 'unlimited' },
    [ApiServiceLevelEnum.ENTERPRISE]: { value: -1, label: 'unlimited' },
    [ApiServiceLevelEnum.UNLIMITED]: { value: -1, label: 'unlimited' },
  },
  [FeatureNameEnum.PLATFORM_GUI_BASED_WORKFLOW_MANAGEMENT_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 1,
    [ApiServiceLevelEnum.FREE_2025]: 1,
    [ApiServiceLevelEnum.PRO]: 1,
    [ApiServiceLevelEnum.TEAM]: 1,
    [ApiServiceLevelEnum.BUSINESS]: 1,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  [FeatureNameEnum.PLATFORM_CODE_BASED_WORKFLOW_MANAGEMENT_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 1,
    [ApiServiceLevelEnum.FREE_2025]: 1,
    [ApiServiceLevelEnum.PRO]: 1,
    [ApiServiceLevelEnum.TEAM]: 1,
    [ApiServiceLevelEnum.BUSINESS]: 1,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  [FeatureNameEnum.PLATFORM_SUBSCRIBER_MANAGEMENT_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 1,
    [ApiServiceLevelEnum.FREE_2025]: 1,
    [ApiServiceLevelEnum.PRO]: 1,
    [ApiServiceLevelEnum.TEAM]: 1,
    [ApiServiceLevelEnum.BUSINESS]: 1,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  [FeatureNameEnum.PLATFORM_ENVIRONMENTS]: {
    [ApiServiceLevelEnum.FREE]: 2,
    [ApiServiceLevelEnum.FREE_2025]: 2,
    [ApiServiceLevelEnum.PRO]: 2,
    [ApiServiceLevelEnum.TEAM]: 10,
    [ApiServiceLevelEnum.BUSINESS]: 10,
    [ApiServiceLevelEnum.ENTERPRISE]: -1,
    [ApiServiceLevelEnum.UNLIMITED]: -1,
  },
  [FeatureNameEnum.PLATFORM_MULTI_ORG_MULTI_TENANCY]: {
    [ApiServiceLevelEnum.FREE]: { label: 'No', value: 0 },
    [ApiServiceLevelEnum.FREE_2025]: { label: 'No', value: 0 },
    [ApiServiceLevelEnum.PRO]: { label: 'No', value: 0 },
    [ApiServiceLevelEnum.TEAM]: { label: 'Q2 2025', value: true },
    [ApiServiceLevelEnum.BUSINESS]: { label: 'Q2 2025', value: true },
    [ApiServiceLevelEnum.ENTERPRISE]: { label: 'Q2 2025', value: true },
    [ApiServiceLevelEnum.UNLIMITED]: { label: 'Q2 2025', value: true },
  },
  [FeatureNameEnum.PLATFORM_PROVIDER_INTEGRATIONS]: {
    [ApiServiceLevelEnum.FREE]: -1,
    [ApiServiceLevelEnum.FREE_2025]: -1,
    [ApiServiceLevelEnum.PRO]: -1,
    [ApiServiceLevelEnum.TEAM]: -1,
    [ApiServiceLevelEnum.BUSINESS]: -1,
    [ApiServiceLevelEnum.ENTERPRISE]: -1,
    [ApiServiceLevelEnum.UNLIMITED]: -1,
  },
  [FeatureNameEnum.PLATFORM_ACTIVITY_FEED_RETENTION]: {
    [ApiServiceLevelEnum.FREE]: { label: '24hr', value: 24, timeSuffix: 'h' },
    [ApiServiceLevelEnum.FREE_2025]: { label: '24hr', value: 24, timeSuffix: 'h' },
    [ApiServiceLevelEnum.PRO]: { label: '7 days', value: 7, timeSuffix: 'd' },
    [ApiServiceLevelEnum.TEAM]: { label: '90 days', value: 90, timeSuffix: 'd' },
    [ApiServiceLevelEnum.BUSINESS]: { label: '90 days', value: 90, timeSuffix: 'd' },
    [ApiServiceLevelEnum.ENTERPRISE]: { label: 'Unlimited', value: -1 },
    [ApiServiceLevelEnum.UNLIMITED]: { label: 'Unlimited', value: -1 },
  },
  [FeatureNameEnum.PLATFORM_MAX_DIGEST_WINDOW_TIME]: {
    [ApiServiceLevelEnum.FREE]: { label: '24hr', value: 24, timeSuffix: 'h' },
    [ApiServiceLevelEnum.FREE_2025]: { label: '24hr', value: 24, timeSuffix: 'h' },
    [ApiServiceLevelEnum.PRO]: { label: '7 days', value: 7, timeSuffix: 'd' },
    [ApiServiceLevelEnum.TEAM]: { label: '30 days', value: 30, timeSuffix: 'd' },
    [ApiServiceLevelEnum.BUSINESS]: { label: '30 days', value: 30, timeSuffix: 'd' },
    [ApiServiceLevelEnum.ENTERPRISE]: { label: 'unlimited', value: -1 },
    [ApiServiceLevelEnum.UNLIMITED]: { label: 'unlimited', value: -1 },
  },
  [FeatureNameEnum.PLATFORM_BLOCK_BASED_EMAIL_EDITOR_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 1,
    [ApiServiceLevelEnum.FREE_2025]: 1,
    [ApiServiceLevelEnum.PRO]: 1,
    [ApiServiceLevelEnum.TEAM]: 1,
    [ApiServiceLevelEnum.BUSINESS]: 1,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  [FeatureNameEnum.PLATFORM_REMOVE_NOVU_BRANDING_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 0,
    [ApiServiceLevelEnum.FREE_2025]: 0,
    [ApiServiceLevelEnum.PRO]: 1,
    [ApiServiceLevelEnum.TEAM]: 1,
    [ApiServiceLevelEnum.BUSINESS]: 1,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  // Inbox Features
  [FeatureNameEnum.INBOX_COMPONENT_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 1,
    [ApiServiceLevelEnum.FREE_2025]: 1,
    [ApiServiceLevelEnum.PRO]: 1,
    [ApiServiceLevelEnum.TEAM]: 1,
    [ApiServiceLevelEnum.BUSINESS]: 1,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  [FeatureNameEnum.INBOX_USER_PREFERENCES_COMPONENT_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 1,
    [ApiServiceLevelEnum.FREE_2025]: 1,
    [ApiServiceLevelEnum.PRO]: 1,
    [ApiServiceLevelEnum.TEAM]: 1,
    [ApiServiceLevelEnum.BUSINESS]: 1,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  [FeatureNameEnum.INBOX_BELL_COMPONENT_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 1,
    [ApiServiceLevelEnum.FREE_2025]: 1,
    [ApiServiceLevelEnum.PRO]: 1,
    [ApiServiceLevelEnum.TEAM]: 1,
    [ApiServiceLevelEnum.BUSINESS]: 1,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  [FeatureNameEnum.INBOX_NOTIFICATIONS_COMPONENT_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 1,
    [ApiServiceLevelEnum.FREE_2025]: 1,
    [ApiServiceLevelEnum.PRO]: 1,
    [ApiServiceLevelEnum.TEAM]: 1,
    [ApiServiceLevelEnum.BUSINESS]: 1,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  [FeatureNameEnum.INBOX_CONTENT_COMPONENT_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 1,
    [ApiServiceLevelEnum.FREE_2025]: 1,
    [ApiServiceLevelEnum.PRO]: 1,
    [ApiServiceLevelEnum.TEAM]: 1,
    [ApiServiceLevelEnum.BUSINESS]: 1,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  // Account Administration Features
  [FeatureNameEnum.ACCOUNT_MAX_TEAM_MEMBERS]: {
    [ApiServiceLevelEnum.FREE]: 3,
    [ApiServiceLevelEnum.FREE_2025]: 3,
    [ApiServiceLevelEnum.PRO]: 3,
    [ApiServiceLevelEnum.TEAM]: -1,
    [ApiServiceLevelEnum.BUSINESS]: -1,
    [ApiServiceLevelEnum.ENTERPRISE]: -1,
    [ApiServiceLevelEnum.UNLIMITED]: -1,
  },
  [FeatureNameEnum.ACCOUNT_ROLE_BASED_ACCESS_CONTROL_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 0,
    [ApiServiceLevelEnum.FREE_2025]: 0,
    [ApiServiceLevelEnum.PRO]: 0,
    [ApiServiceLevelEnum.TEAM]: 1,
    [ApiServiceLevelEnum.BUSINESS]: 1,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  [FeatureNameEnum.ACCOUNT_STANDARD_BUILT_IN_AUTHENTICATION_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 1,
    [ApiServiceLevelEnum.FREE_2025]: 1,
    [ApiServiceLevelEnum.PRO]: 1,
    [ApiServiceLevelEnum.TEAM]: 1,
    [ApiServiceLevelEnum.BUSINESS]: 1,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  [FeatureNameEnum.ACCOUNT_CUSTOM_SAML_SSO_OIDC_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 0,
    [ApiServiceLevelEnum.FREE_2025]: 0,
    [ApiServiceLevelEnum.PRO]: 0,
    [ApiServiceLevelEnum.TEAM]: 0,
    [ApiServiceLevelEnum.BUSINESS]: 0,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  [FeatureNameEnum.ACCOUNT_MULTI_FACTOR_AUTHENTICATION_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 1,
    [ApiServiceLevelEnum.FREE_2025]: 1,
    [ApiServiceLevelEnum.PRO]: 1,
    [ApiServiceLevelEnum.TEAM]: 1,
    [ApiServiceLevelEnum.BUSINESS]: 1,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  // Compliance Features
  [FeatureNameEnum.COMPLIANCE_GDPR_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 1,
    [ApiServiceLevelEnum.FREE_2025]: 1,
    [ApiServiceLevelEnum.PRO]: 1,
    [ApiServiceLevelEnum.TEAM]: 1,
    [ApiServiceLevelEnum.BUSINESS]: 1,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  // ... (previous code remains the same)

  [FeatureNameEnum.COMPLIANCE_SOC2_ISO27001_REPORT_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 0,
    [ApiServiceLevelEnum.FREE_2025]: 0,
    [ApiServiceLevelEnum.PRO]: 0,
    [ApiServiceLevelEnum.TEAM]: 1,
    [ApiServiceLevelEnum.BUSINESS]: 1,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  [FeatureNameEnum.COMPLIANCE_HIPAA_BAA_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 0,
    [ApiServiceLevelEnum.FREE_2025]: 0,
    [ApiServiceLevelEnum.PRO]: 0,
    [ApiServiceLevelEnum.TEAM]: 0,
    [ApiServiceLevelEnum.BUSINESS]: 0,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  [FeatureNameEnum.COMPLIANCE_CUSTOM_SECURITY_REVIEWS_BOOLEAN]: {
    [ApiServiceLevelEnum.FREE]: 0,
    [ApiServiceLevelEnum.FREE_2025]: 0,
    [ApiServiceLevelEnum.PRO]: 0,
    [ApiServiceLevelEnum.TEAM]: 0,
    [ApiServiceLevelEnum.BUSINESS]: 0,
    [ApiServiceLevelEnum.ENTERPRISE]: 1,
    [ApiServiceLevelEnum.UNLIMITED]: 1,
  },
  [FeatureNameEnum.COMPLIANCE_DATA_PROCESSING_AGREEMENTS]: {
    [ApiServiceLevelEnum.FREE]: 'Standard',
    [ApiServiceLevelEnum.FREE_2025]: 'Standard',
    [ApiServiceLevelEnum.PRO]: 'Standard',
    [ApiServiceLevelEnum.TEAM]: 'Standard',
    [ApiServiceLevelEnum.BUSINESS]: 'Standard',
    [ApiServiceLevelEnum.ENTERPRISE]: 'Custom',
    [ApiServiceLevelEnum.UNLIMITED]: 'Custom',
  },
};

export function isDetailedPriceListItem(item: any): item is DetailedPriceListItem {
  return (
    item !== null &&
    typeof item === 'object' &&
    ('label' in item || 'value' in item || 'timeSuffix' in item || 'currency' in item)
  );
}

export function getFeatureForTier(featureName: FeatureNameEnum, tier: ApiServiceLevelEnum): FeatureValue {
  const feature = novuServiceTiers[featureName][tier];

  // If already matches FeatureValue, return directly
  if (
    feature === null ||
    typeof feature === 'string' ||
    typeof feature === 'number' ||
    isDetailedPriceListItem(feature)
  ) {
    return feature;
  }

  throw new Error(`Invalid feature type for ${featureName} at tier ${tier}`);
}

export function getFeatureForTierAsNumber(featureName: FeatureNameEnum, tier: ApiServiceLevelEnum): number {
  const feature = novuServiceTiers[featureName][tier];

  // Handle DetailedPriceListItem
  if (isDetailedPriceListItem(feature)) {
    if (typeof feature.value === 'number') return feature.value;
    if (typeof feature.value === 'string') {
      const parsed = Number(feature.value.replace(/[^\d.-]/g, ''));
      if (!Number.isNaN(parsed)) return parsed;
    }
    if (typeof feature.value === 'boolean') return feature.value ? 1 : 0;
  }

  // Direct number
  if (typeof feature === 'number') return feature;

  // String to number conversion
  if (typeof feature === 'string') {
    const parsed = Number(feature.replace(/[^\d.-]/g, ''));
    if (!Number.isNaN(parsed)) return parsed;
  }

  // Boolean to number
  if (typeof feature === 'boolean') return feature ? 1 : 0;

  throw new Error(`Cannot convert feature ${featureName} at tier ${tier} to number`);
}

export function getFeatureForTierAsBoolean(featureName: FeatureNameEnum, tier: ApiServiceLevelEnum): boolean {
  const feature = novuServiceTiers[featureName][tier];

  // Handle DetailedPriceListItem
  if (isDetailedPriceListItem(feature)) {
    if (typeof feature.value === 'boolean') return feature.value;
    if (typeof feature.value === 'number') {
      if (feature.value === 0) return false;
      if (feature.value === 1) return true;
      throw new Error(`Cannot convert number ${feature.value} to boolean for ${featureName} at tier ${tier}`);
    }
    if (typeof feature.value === 'string') {
      const lowercased = feature.value.toLowerCase();
      if (lowercased === 'true') return true;
      if (lowercased === 'false') return false;
      throw new Error(`Cannot convert string "${feature.value}" to boolean for ${featureName} at tier ${tier}`);
    }
  }

  // Direct boolean
  if (typeof feature === 'boolean') return feature;

  // Number conversion
  if (typeof feature === 'number') {
    if (feature === 0) return false;
    if (feature === 1) return true;
    throw new Error(`Cannot convert number ${feature} to boolean for ${featureName} at tier ${tier}`);
  }

  // String conversion
  if (typeof feature === 'string') {
    const lowercased = feature.toLowerCase();
    if (lowercased === 'true') return true;
    if (lowercased === 'false') return false;
    throw new Error(`Cannot convert string "${feature}" to boolean for ${featureName} at tier ${tier}`);
  }

  throw new Error(`Cannot convert feature ${featureName} at tier ${tier} to boolean`);
}

export function getFeatureForTierAsText(featureName: FeatureNameEnum, tier: ApiServiceLevelEnum): string {
  const feature = novuServiceTiers[featureName][tier];

  // Handle DetailedPriceListItem
  if (isDetailedPriceListItem(feature)) {
    if (feature.label) return feature.label;
    if (feature.value !== null && feature.value !== undefined) {
      return String(feature.value) + (feature.timeSuffix || '');
    }
  }

  // Direct conversion to string
  if (feature === null) return '';
  if (feature === undefined) return '';

  return JSON.stringify(feature);
}
