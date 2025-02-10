import { ApiServiceLevelEnum } from '@novu/shared';
import { Check } from 'lucide-react';
import { cn } from '../../utils/ui';

enum SupportedPlansEnum {
  FREE = ApiServiceLevelEnum.FREE,
  PRO = ApiServiceLevelEnum.PRO,
  TEAM = ApiServiceLevelEnum.TEAM,
  ENTERPRISE = ApiServiceLevelEnum.ENTERPRISE,
}

type FeatureValue = {
  value: React.ReactNode;
};

type Feature = {
  label: string;
  isTitle?: boolean;
  values: {
    [SupportedPlansEnum.FREE]: FeatureValue;
    [SupportedPlansEnum.PRO]: FeatureValue;
    [SupportedPlansEnum.TEAM]: FeatureValue;
    [SupportedPlansEnum.ENTERPRISE]: FeatureValue;
  };
};

const features: Feature[] = [
  {
    label: 'Platform',
    isTitle: true,
    values: {
      [SupportedPlansEnum.FREE]: { value: '' },
      [SupportedPlansEnum.PRO]: { value: '' },
      [SupportedPlansEnum.TEAM]: { value: '' },
      [SupportedPlansEnum.ENTERPRISE]: { value: '' },
    },
  },
  {
    label: 'Monthly events',
    values: {
      [SupportedPlansEnum.FREE]: { value: 'Up to 10,000' },
      [SupportedPlansEnum.PRO]: { value: 'Up to 30,000' },
      [SupportedPlansEnum.TEAM]: { value: 'Up to 250,000' },
      [SupportedPlansEnum.ENTERPRISE]: { value: '5,000,000' },
    },
  },
  {
    label: 'Additional Events',
    values: {
      [SupportedPlansEnum.FREE]: { value: '-' },
      [SupportedPlansEnum.PRO]: { value: '$1.2 per 1000 events' },
      [SupportedPlansEnum.TEAM]: { value: '$1.2 per 1000 events' },
      [SupportedPlansEnum.ENTERPRISE]: { value: 'Custom' },
    },
  },
  {
    label: 'Email, InApp, SMS, Chat, Push Channels',
    values: {
      [SupportedPlansEnum.FREE]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.PRO]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.TEAM]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.ENTERPRISE]: { value: <Check className="h-4 w-4" /> },
    },
  },
  {
    label: 'Notification subscribers',
    values: {
      [SupportedPlansEnum.FREE]: { value: 'Unlimited' },
      [SupportedPlansEnum.PRO]: { value: 'Unlimited' },
      [SupportedPlansEnum.TEAM]: { value: 'Unlimited' },
      [SupportedPlansEnum.ENTERPRISE]: { value: 'Unlimited' },
    },
  },
  {
    label: 'Environments',
    values: {
      [SupportedPlansEnum.FREE]: { value: '2' },
      [SupportedPlansEnum.PRO]: { value: '2' },
      [SupportedPlansEnum.TEAM]: { value: '10' },
      [SupportedPlansEnum.ENTERPRISE]: { value: 'Unlimited' },
    },
  },
  {
    label: 'Framework',
    isTitle: true,
    values: {
      [SupportedPlansEnum.FREE]: { value: '' },
      [SupportedPlansEnum.PRO]: { value: '' },
      [SupportedPlansEnum.TEAM]: { value: '' },
      [SupportedPlansEnum.ENTERPRISE]: { value: '' },
    },
  },
  {
    label: 'Total workflows',
    values: {
      [SupportedPlansEnum.FREE]: { value: '20' },
      [SupportedPlansEnum.PRO]: { value: 'Unlimited' },
      [SupportedPlansEnum.TEAM]: { value: 'Unlimited' },
      [SupportedPlansEnum.ENTERPRISE]: { value: 'Unlimited' },
    },
  },
  {
    label: 'Provider integrations',
    values: {
      [SupportedPlansEnum.FREE]: { value: 'Unlimited' },
      [SupportedPlansEnum.PRO]: { value: 'Unlimited' },
      [SupportedPlansEnum.TEAM]: { value: 'Unlimited' },
      [SupportedPlansEnum.ENTERPRISE]: { value: 'Unlimited' },
    },
  },
  {
    label: 'Activity Feed retention',
    values: {
      [SupportedPlansEnum.FREE]: { value: '24 Hours' },
      [SupportedPlansEnum.PRO]: { value: '7 days' },
      [SupportedPlansEnum.TEAM]: { value: '90 days' },
      [SupportedPlansEnum.ENTERPRISE]: { value: 'Unlimited' },
    },
  },
  {
    label: 'Digests',
    values: {
      [SupportedPlansEnum.FREE]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.PRO]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.TEAM]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.ENTERPRISE]: { value: <Check className="h-4 w-4" /> },
    },
  },
  {
    label: 'Step controls',
    values: {
      [SupportedPlansEnum.FREE]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.PRO]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.TEAM]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.ENTERPRISE]: { value: <Check className="h-4 w-4" /> },
    },
  },
  {
    label: 'Inbox',
    isTitle: true,
    values: {
      [SupportedPlansEnum.FREE]: { value: '' },
      [SupportedPlansEnum.PRO]: { value: '' },
      [SupportedPlansEnum.TEAM]: { value: '' },
      [SupportedPlansEnum.ENTERPRISE]: { value: '' },
    },
  },
  {
    label: 'Inbox component',
    values: {
      [SupportedPlansEnum.FREE]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.PRO]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.TEAM]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.ENTERPRISE]: { value: <Check className="h-4 w-4" /> },
    },
  },
  {
    label: 'User preferences component',
    values: {
      [SupportedPlansEnum.FREE]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.PRO]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.TEAM]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.ENTERPRISE]: { value: <Check className="h-4 w-4" /> },
    },
  },
  {
    label: 'Remove Novu branding',
    values: {
      [SupportedPlansEnum.FREE]: { value: '-' },
      [SupportedPlansEnum.PRO]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.TEAM]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.ENTERPRISE]: { value: <Check className="h-4 w-4" /> },
    },
  },
  {
    label: 'Account administration and security',
    isTitle: true,
    values: {
      [SupportedPlansEnum.FREE]: { value: '' },
      [SupportedPlansEnum.PRO]: { value: '' },
      [SupportedPlansEnum.TEAM]: { value: '' },
      [SupportedPlansEnum.ENTERPRISE]: { value: '' },
    },
  },
  {
    label: 'Team members',
    values: {
      [SupportedPlansEnum.FREE]: { value: '3' },
      [SupportedPlansEnum.PRO]: { value: '3' },
      [SupportedPlansEnum.TEAM]: { value: 'Unlimited' },
      [SupportedPlansEnum.ENTERPRISE]: { value: 'Unlimited' },
    },
  },
  {
    label: 'RBAC',
    values: {
      [SupportedPlansEnum.FREE]: { value: '-' },
      [SupportedPlansEnum.PRO]: { value: '-' },
      [SupportedPlansEnum.TEAM]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.ENTERPRISE]: { value: <Check className="h-4 w-4" /> },
    },
  },
  {
    label: 'GDPR compliance',
    values: {
      [SupportedPlansEnum.FREE]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.PRO]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.TEAM]: { value: <Check className="h-4 w-4" /> },
      [SupportedPlansEnum.ENTERPRISE]: { value: <Check className="h-4 w-4" /> },
    },
  },
  {
    label: 'SAML SSO and Enterprise SSO providers',
    values: {
      [SupportedPlansEnum.FREE]: { value: '-' },
      [SupportedPlansEnum.PRO]: { value: '-' },
      [SupportedPlansEnum.TEAM]: { value: '-' },
      [SupportedPlansEnum.ENTERPRISE]: { value: <Check className="h-4 w-4" /> },
    },
  },
  {
    label: 'Support and account management',
    isTitle: true,
    values: {
      [SupportedPlansEnum.FREE]: { value: '' },
      [SupportedPlansEnum.PRO]: { value: '' },
      [SupportedPlansEnum.TEAM]: { value: '' },
      [SupportedPlansEnum.ENTERPRISE]: { value: '' },
    },
  },
  {
    label: 'Support SLA',
    values: {
      [SupportedPlansEnum.FREE]: { value: '-' },
      [SupportedPlansEnum.PRO]: { value: '-' },
      [SupportedPlansEnum.TEAM]: { value: '48 hours' },
      [SupportedPlansEnum.ENTERPRISE]: { value: '24 hours' },
    },
  },
  {
    label: 'Support channels',
    values: {
      [SupportedPlansEnum.FREE]: { value: 'Community & Discord' },
      [SupportedPlansEnum.PRO]: { value: 'Community & Discord' },
      [SupportedPlansEnum.TEAM]: { value: 'Slack & Email' },
      [SupportedPlansEnum.ENTERPRISE]: { value: 'Dedicated' },
    },
  },
  {
    label: 'Legal & Vendor management',
    isTitle: true,
    values: {
      [SupportedPlansEnum.FREE]: { value: '' },
      [SupportedPlansEnum.PRO]: { value: '' },
      [SupportedPlansEnum.TEAM]: { value: '' },
      [SupportedPlansEnum.ENTERPRISE]: { value: '' },
    },
  },
  {
    label: 'Payment method',
    values: {
      [SupportedPlansEnum.FREE]: { value: '-' },
      [SupportedPlansEnum.PRO]: { value: 'Credit card only' },
      [SupportedPlansEnum.TEAM]: { value: 'Credit card only' },
      [SupportedPlansEnum.ENTERPRISE]: { value: 'Credit card & PO and Invoicing' },
    },
  },
  {
    label: 'Terms of service',
    values: {
      [SupportedPlansEnum.FREE]: { value: 'Standard' },
      [SupportedPlansEnum.PRO]: { value: 'Standard' },
      [SupportedPlansEnum.TEAM]: { value: 'Standard' },
      [SupportedPlansEnum.ENTERPRISE]: { value: 'Custom' },
    },
  },
  {
    label: 'DPA',
    values: {
      [SupportedPlansEnum.FREE]: { value: 'Standard' },
      [SupportedPlansEnum.PRO]: { value: 'Standard' },
      [SupportedPlansEnum.TEAM]: { value: 'Standard' },
      [SupportedPlansEnum.ENTERPRISE]: { value: 'Custom' },
    },
  },
  {
    label: 'Security review',
    values: {
      [SupportedPlansEnum.FREE]: { value: 'SOC 2 and ISO 27001 upon request' },
      [SupportedPlansEnum.PRO]: { value: 'SOC 2 and ISO 27001 upon request' },
      [SupportedPlansEnum.TEAM]: { value: 'Custom' },
      [SupportedPlansEnum.ENTERPRISE]: { value: 'Custom' },
    },
  },
];

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  return (
    <div
      className={cn('divide-border grid grid-cols-4 divide-x bg-neutral-50', {
        'bg-muted/50': index % 2 === 1,
        'border-border border-y': feature.isTitle,
      })}
    >
      <div className="p-4">
        <span
          className={cn('text-sm', {
            'text-foreground font-semibold': feature.isTitle,
            'text-muted-foreground': !feature.isTitle,
          })}
        >
          {feature.label}
        </span>
      </div>

      {Object.entries(feature.values).map(([plan, value]) => (
        <div key={plan} className="flex items-center justify-center p-4">
          <span className="text-muted-foreground text-sm">{value.value}</span>
        </div>
      ))}
    </div>
  );
}

export function Features() {
  return (
    <div className="flex flex-col">
      {features.map((feature, index) => (
        <FeatureRow key={index} feature={feature} index={index} />
      ))}
    </div>
  );
}
