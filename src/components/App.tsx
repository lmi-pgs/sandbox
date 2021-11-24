import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fieldsData } from '../data/fields';
import { loadFieldsData } from '../store/actions';
import { FlexContainer, GridContainer, GameContainer, BackgroundArea, BackgroundAreaB, BackgroundAreaC } from './App.style';
import Field from './Field';
import { PlayerContainer } from './Player';

const App = (props: any) => {
  useEffect(() => {
    props.loadFieldsData(fieldsData);
  });

  return (
    <FlexContainer>
      <GameContainer>
        <GridContainer>
          <BackgroundArea />
          <BackgroundAreaB />
          <BackgroundAreaC />
          {fieldsData.map((field, index) => (
            <Field key={`field-${index}`} {...field} />
          ))}
          <PlayerContainer />
        </GridContainer>
      </GameContainer>
    </FlexContainer>
  );
}

const mapDispatchToProps = { loadFieldsData };

export const AppContainer = connect(null, mapDispatchToProps)(App);


