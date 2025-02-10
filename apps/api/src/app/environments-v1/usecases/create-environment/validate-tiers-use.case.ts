import { ApiServiceLevelEnum, FeatureNameEnum, getFeatureForTierAsNumber } from '@novu/shared';
import { OrganizationRepository } from '@novu/dal';
import { ValidateTiersCommand } from './validate-tiers.command';
import { TierValidationTypeEnum } from './tier-validation-type.enum';

export class ValidateTiersUseCase {
  constructor(private organizationRepository: OrganizationRepository) {}
  private validatorToFeatureMap: Record<TierValidationTypeEnum, FeatureNameEnum> = {
    [TierValidationTypeEnum.ENVIRONMENT_COUNT]: FeatureNameEnum.PLATFORM_ENVIRONMENTS,
  };
  async execute(validateTiersCommand: ValidateTiersCommand): Promise<void> {
    const organization = await this.organizationRepository.findById(validateTiersCommand.organizationId);
    if (!organization || !organization.apiServiceLevel) {
      throw new Error(`Organization not found ${JSON.stringify(organization)}`);
    }
    const featureName = this.validatorToFeatureMap[validateTiersCommand.validationType];
    if (validateTiersCommand.validationType === TierValidationTypeEnum.ENVIRONMENT_COUNT) {
      this.validateEnvironmentCount(validateTiersCommand, featureName, organization.apiServiceLevel);
    }
  }

  private validateEnvironmentCount(
    validateTiersCommand: ValidateTiersCommand,
    featureName: FeatureNameEnum,
    apiServiceLevel: ApiServiceLevelEnum
  ) {
    const numberOfEnvironments = validateTiersCommand.valueToValidate;
    if (numberOfEnvironments >= getFeatureForTierAsNumber(featureName, apiServiceLevel)) {
      throw new Error(`You have exceeded the maximum number of environments allowed for the [${apiServiceLevel}] tier`);
    }

    return featureName;
  }
}
