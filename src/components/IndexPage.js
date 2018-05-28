import React from 'react';
import { SubjectCard } from './SubjectCard';

export const IndexPage = ({ athletes }) => (
  <div className="home">
    <div className="athletes-selector">
      {athletes.map(
        athleteData => <SubjectCard key={athleteData.id} {...athleteData} />,
      )}
    </div>
  </div>
);

export default IndexPage;
