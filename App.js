import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import ContactComp from './src/components/ContactComp';
import CustomModal from './src/components/CustomModal';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: true });
    }, 5000);
  }
  render() {
    const { visible } = this.state;
    const RenderAllComp = () => {
      return (
        <>
          <StatusBar barStyle="light-content" translucent={true} />
          <ContactComp />
        </>
      );
    };

    return (
      <View style={styles.container}>
        {!visible ? <CustomModal /> : RenderAllComp()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
