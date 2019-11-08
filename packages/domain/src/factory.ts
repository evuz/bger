import { DepInjection } from 'depsin';

import { ConfigSymbols } from './Config/ConfigSymbols';
import { Config } from './Config/Config';
import { Domain } from './Domain/domain';
import { UserSymbols } from './User/UserSymbols';
import { LoginUseCase } from './User/UseCases/LoginUseCase';
import { LoginService } from './User/Services/LoginService';
import { BiwengerLoginRepository } from './User/Repositories/BiwengerLoginRepository';

export function createDomain({ config }: { config: Config }) {
  const container = new DepInjection(
    {
      [UserSymbols.UseCases.Login]: LoginUseCase,
      [UserSymbols.Services.Login]: LoginService,
      [UserSymbols.Repositories.Login]: BiwengerLoginRepository,
    },
    { [ConfigSymbols.Config]: config },
  );

  return new Domain({
    useCases: {
      [UserSymbols.UseCases.Login]: container.get<LoginUseCase>(UserSymbols.UseCases.Login),
    },
    config: <Config>container.get(ConfigSymbols.Config),
  });
}
