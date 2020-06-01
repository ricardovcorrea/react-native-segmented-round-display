import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import SegmentedRoundDisplay from 'react-native-segmented-round-display';

const App = () => {
  const examples = [
    {
      displayValue: true,
      formatValue: (value) => `R$ ${value.toFixed(2)}`,
      segments: [
        {
          total: 80,
          filled: 40,
        },
      ],
    },
    {
      displayValue: true,
      formatValue: (value) => `R$ ${value.toFixed(2)}`,
      segments: [
        {
          total: 80,
          filled: 80,
        },
        {
          total: 30,
          filled: 15,
        },
      ],
    },
    {
      displayValue: true,
      formatValue: (value) => `R$ ${value.toFixed(2)}`,
      segments: [
        {
          total: 80,
          filled: 80,
        },
        {
          total: 30,
          filled: 30,
        },
        {
          total: 100,
          filled: 40,
        },
      ],
    },
    {
      displayValue: true,
      filledArcColor: '#ec823a',
      emptyArcColor: '#e8e4e1',
      incompleteArcColor: '#f9c49a',
      valueBoxColor: '#000000',
      valueFontColor: '#FFFFFF',
      formatValue: (value) => `${value.toFixed(0)} pts`,
      segments: [
        {
          total: 80,
          filled: 40,
        },
      ],
    },
    {
      displayValue: true,
      filledArcColor: '#ec823a',
      emptyArcColor: '#e8e4e1',
      incompleteArcColor: '#f9c49a',
      valueBoxColor: '#000000',
      valueFontColor: '#FFFFFF',
      formatValue: (value) => `${value.toFixed(0)} pts`,
      segments: [
        {
          total: 80,
          filled: 80,
        },
        {
          total: 30,
          filled: 15,
        },
      ],
    },
    {
      displayValue: true,
      filledArcColor: '#ec823a',
      emptyArcColor: '#e8e4e1',
      incompleteArcColor: '#f9c49a',
      valueBoxColor: '#000000',
      valueFontColor: '#FFFFFF',
      formatValue: (value) => `${value.toFixed(0)} pts`,
      segments: [
        {
          total: 80,
          filled: 80,
        },
        {
          total: 30,
          filled: 30,
        },
        {
          total: 100,
          filled: 40,
        },
      ],
    },
    {
      animated: false,
      displayValue: true,
      filledArcColor: '#442727',
      emptyArcColor: '#eae7d9',
      incompleteArcColor: '#d2c6b2',
      valueBoxColor: '#442727',
      valueFontColor: '#eae7d9',
      segments: [
        {
          total: 80,
          filled: 40,
        },
      ],
    },
    {
      animated: false,
      displayValue: true,
      filledArcColor: '#442727',
      emptyArcColor: '#eae7d9',
      incompleteArcColor: '#d2c6b2',
      valueBoxColor: '#442727',
      valueFontColor: '#eae7d9',
      segments: [
        {
          total: 80,
          filled: 80,
        },
        {
          total: 30,
          filled: 15,
        },
      ],
    },
    {
      animated: false,
      displayValue: true,
      filledArcColor: '#442727',
      emptyArcColor: '#eae7d9',
      incompleteArcColor: '#d2c6b2',
      valueBoxColor: '#442727',
      valueFontColor: '#eae7d9',
      segments: [
        {
          total: 80,
          filled: 80,
        },
        {
          total: 30,
          filled: 30,
        },
        {
          total: 100,
          filled: 40,
        },
      ],
    },
    {
      animated: false,
      filledArcColor: '#7f78d2',
      emptyArcColor: '#ffe2ff',
      incompleteArcColor: '#481380',
      segments: [
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 30,
          filled: 30,
        },
        {
          total: 100,
          filled: 40,
        },
      ],
    },
    {
      animated: false,
      filledArcColor: '#7f78d2',
      emptyArcColor: '#ffe2ff',
      incompleteArcColor: '#481380',
      segments: [
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
      ],
    },
    {
      animated: false,
      filledArcColor: '#7f78d2',
      emptyArcColor: '#ffe2ff',
      incompleteArcColor: '#481380',
      segments: [
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 80,
        },
        {
          total: 80,
          filled: 0,
        },
        {
          total: 80,
          filled: 0,
        },
      ],
    },
  ];

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {examples.map((example, i) => (
            <SegmentedRoundDisplay key={i} {...example} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
