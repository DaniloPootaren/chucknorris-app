import {TextStyle, ViewStyle} from 'react-native';

export const VStack: ViewStyle = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export const HStack: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const MainLayout: ViewStyle = {
  flex: 1,
  padding: 20,
};

export const CenterLayout: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

export const BoldText: TextStyle = {
  fontWeight: 'bold',
  fontSize: 16,
};
