import React from 'react';
import { LeagueSymbols } from '@bger/domain';

import useDomain from '../hooks/useDomain';

import LeagueItem from '../components/LeagueItem';

function LeaguesPage() {
  const [{ data: leaguesData }] = useDomain(LeagueSymbols.UseCases.GetLeagues, true);

  if (!leaguesData) return null;

  const leagues = leaguesData.map(league => <LeagueItem key={league.id} league={league} />);

  return (
    <div className="Leagues Page">
      <div className="Leagues__list">{leagues}</div>
    </div>
  );
}

export default LeaguesPage;
