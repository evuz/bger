import { DepInjection } from 'depsin';

import { Domain } from './Domain/domain';

import { IConfig, IAdapter, ConfigValues, ConfigAdapters } from './Config/ConfigTypes';
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

import { LeagueSymbols } from './League/LeagueSymbols';
import { GetLeaguesUseCase } from './League/UseCases/GetLeaguesUseCase';
import { GetLeaguesService } from './League/Services/GetLeaguesService';
import { BiwengerLeagueRepository } from './League/Repositories/BiwengerLeagueRepository';

import { Store } from './Adapters/Store/Store';
import { leagueReducer } from './League/Reducers/reducer';
import { userReducer } from './User/Reducers/reducer';

export function createDomain({ config: c, adapters: a }: { config: IConfig; adapters: IAdapter }) {
  const config = new Config(c);
  const adapters = new Config(a);
  adapters.set('store', new Store({ reducers: { leagues: leagueReducer, user: userReducer } }));

  const container = new DepInjection(
    {
      [AuthSymbols.UseCases.Login]: LoginUseCase,
      [AuthSymbols.Services.Login]: LoginService,
      [AuthSymbols.Repositories.Auth]: BiwengerAuthRepository,
      [UserSymbols.UseCases.GetUser]: GetUserUseCase,
      [UserSymbols.Services.GetUser]: GetUserService,
      [UserSymbols.Repositories.User]: BiwengerUserRepository,
      [LeagueSymbols.UseCases.GetLeagues]: GetLeaguesUseCase,
      [LeagueSymbols.Services.GetLeagues]: GetLeaguesService,
      [LeagueSymbols.Repositories.League]: BiwengerLeagueRepository,
    },
    {
      [ConfigSymbols.Config]: config,
      [ConfigSymbols.Adapters]: adapters,
    },
  );

  return new Domain({
    useCases: {
      [AuthSymbols.UseCases.Login]: container.get<LoginUseCase>(AuthSymbols.UseCases.Login),
      [UserSymbols.UseCases.GetUser]: container.get<GetUserUseCase>(UserSymbols.UseCases.GetUser),
      [LeagueSymbols.UseCases.GetLeagues]: container.get<GetLeaguesUseCase>(LeagueSymbols.UseCases.GetLeagues),
    },
    config: {
      config: container.get<ConfigValues>(ConfigSymbols.Config),
      adapters: container.get<ConfigAdapters>(ConfigSymbols.Adapters),
    },
  });
}
