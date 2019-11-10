import React from 'react';
import { View } from 'react-native';
import { Input, Button, Header, ListItem } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


class Login extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>        
        <Input placeholder="Email" />
        <Input placeholder="Pass"/>
        <Button 
          buttonStyle={{borderRadius: 5, margin: 20}}
          title='Submit'
          onPress={() => this.props.navigation.push('Details')}
        />        
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <ListItem                    
          title={"Alunos"}
          subtitle={"Dados"}
          bottomDivider
          chevron
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Login,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}