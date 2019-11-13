import { DepInjection } from 'depsin';

import { Domain } from './Domain/domain';

import { ConfigSymbols } from './Config/ConfigSymbols';
import { Config } from './Config/Config';

import { AuthSymbols } from './Auth/AuthSymbols';
import { LoginUseCase } from './Auth/UseCases/LoginUseCase';
import { LoginService } from './Auth/Services/LoginService';
import { BiwengerAuthRepository } from './Auth/Repositories/BiwengerAuthRepository';

import { UserSymbols } from './User/UserSymbols';
import { GetUserUseCase } from './User/UseCases/GetUserUseCase';
import { GetUserService } from './User/Services/GetUserService';
import { BiwengerUserRepository } from './User/Repositories/BiwengerUserRepository';

import { leagueReducer } from './League/Reducers/reducer'
import { Store } from './Adapters/Store/Store';

export function createDomain({ config }: { config: Config }) {
  if (!(config instanceof Config)) {
    config = new Config(config);
  }
  config.set('store', new Store({ reducers: { league: leagueReducer } }))

  const container = new DepInjection(
    {
      [AuthSymbols.UseCases.Login]: LoginUseCase,
      [AuthSymbols.Services.Login]: LoginService,
      [AuthSymbols.Repositories.Auth]: BiwengerAuthRepository,
      [UserSymbols.UseCases.GetUser]: GetUserUseCase,
      [UserSymbols.Services.GetUser]: GetUserService,
      [UserSymbols.Repositories.User]: BiwengerUserRepository,
    },
    { [ConfigSymbols.Config]: config },
  );

  return new Domain({
    useCases: {
      [AuthSymbols.UseCases.Login]: container.get<LoginUseCase>(AuthSymbols.UseCases.Login),
      [UserSymbols.UseCases.GetUser]: container.get<GetUserUseCase>(UserSymbols.UseCases.GetUser),
    },
    config: container.get<Config>(ConfigSymbols.Config),
  });
}
