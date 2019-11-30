import React from 'react';

import Card from './Card';
import Avatar from './Avatar';
import Button from './Button';

function LeagueItem({ league }) {
  console.log(league);
  return (
    <Card>
      <div className="LeagueItem">
        <div className="LeagueItem__avatar">
          <Avatar type="competitions" alt={league.competition} icon={league.icon} />
        </div>
        <div className="LeagueItem__info">
          <div className="LeagueItem__name">{league.name}</div>
          <div className="LeagueItem__competition">{league.competition}</div>
        </div>
        <div className="LeagueItem__button">
          <Button stl="outline" color="primary">Play</Button>
        </div>
      </div>
    </Card>
  );
}

export default LeagueItem;
