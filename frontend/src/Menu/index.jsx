import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import { TouchableImage, CardView } from '../common/components';
import { changeDisplayedComponent } from './actionCreator';
import buildingMenuIcon from '../../assets/menu/Buildings.png';
import troopsMenuIcon from '../../assets/menu/Troops.png';
import battleMenuIcon from '../../assets/menu/Battle.png';
import leaderBoardMenuIcon from '../../assets/menu/Leaderboard.png';

function Menu() {
  const activeComponent = useSelector((state) => state.menu.currentlyDisplayComponent);
  const dispatch = useDispatch();

  const ICON_LIST = [
    { name: 'Buildings', url: buildingMenuIcon },
    { name: 'Troops', url: troopsMenuIcon },
    { name: 'Battle', url: battleMenuIcon },
    { name: 'Leaderboard', url: leaderBoardMenuIcon },
  ];

  function handlePress(name) {
    dispatch(changeDisplayedComponent(name));
  }

  return (
    <CardView style={{ height: 120, paddingVertical: 10 }}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
        }}
      >
        {ICON_LIST.map((element) => (
          <TouchableImage
            key={element.url}
            src={element.url}
            name={element.name}
            onPress={handlePress}
            activeComponent={activeComponent}
          />
        ))}
      </View>
    </CardView>
  );
}

export default Menu;
