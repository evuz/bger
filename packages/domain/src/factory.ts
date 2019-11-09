import { DepInjection } from 'depsin';

import { ConfigSymbols } from './Config/ConfigSymbols';
import { Config } from './Config/Config';
import { Domain } from './Domain/domain';
import { AuthSymbols } from './Auth/AuthSymbols';
import { LoginUseCase } from './Auth/UseCases/LoginUseCase';
import { LoginService } from './Auth/Services/LoginService';
import { BiwengerLoginRepository } from './Auth/Repositories/BiwengerLoginRepository';

export function createDomain({ config }: { config: Config }) {
  const container = new DepInjection(
    {
      [AuthSymbols.UseCases.Login]: LoginUseCase,
      [AuthSymbols.Services.Login]: LoginService,
      [AuthSymbols.Repositories.Auth]: BiwengerLoginRepository,
    },
    { [ConfigSymbols.Config]: config },
  );

  return new Domain({
    useCases: {
      [AuthSymbols.UseCases.Login]: container.get<LoginUseCase>(AuthSymbols.UseCases.Login),
    },
    config: <Config>container.get(ConfigSymbols.Config),
  });
}
