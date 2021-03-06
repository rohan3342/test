import React, {useEffect, useState} from 'react';
import StackComp from '../components/StackComp';
import TabComp from '../components/TabComp';
import {NavigationContainer} from '@react-navigation/native';

const Routes = ({}) => {
  const isTabs = false;
    return (
    <NavigationContainer>
        <StackComp />
        {/* <TabComp /> */}
    </NavigationContainer>
  );
}

export default Routes;