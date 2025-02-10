import { ValidateTiersCommand } from './validate-tiers.command';
import { TierValidationTypeEnum } from './tier-validation-type.enum';

export class ValidateTiersUseCase {
  private validatorToFeatureMap: Record<TierValidationTypeEnum, FeatureName> = {};
  execute(validateTiersCommand: ValidateTiersCommand) {}
}
