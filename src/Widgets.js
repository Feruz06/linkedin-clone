import React from 'react';
import { Info } from '@mui/icons-material';
import './Widgets.css';
import { FiberManualRecord } from '@mui/icons-material';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle(
        'Uzbekistan dominants the world',
        'Top News - 145407 readers',
      )}
      {newsArticle('Coronavirus: Uk updates', 'Top News - 126799 readers')}
      {newsArticle('Tesla hits new highs', 'Top News - 56331 readers')}
      {newsArticle('Is Redux Good?', 'Top News - 1648 readers')}
      {newsArticle('Messi wins FIFA World Cup', 'Top News - 68251 readers')}
    </div>
  );
}

export default Widgets;
