import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ControlButtons = ({ title, size, color, onPress }) => {
  return (
    <TouchableOpacity style={styles.ControlButtons} onPress={onPress}>
      <Ionicons name={title} size={size} color={color} />
    </TouchableOpacity>
  );
};
class VideoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: { width: undefined, height: undefined, duration: undefined },
      thumbnailUrl: undefined,
      videoUrl: undefined,
    };
  }

  fetchVideoData = async () => {
    const response = await fetch(`https://player.vimeo.com/video/48835377/config`);
    const resData = await response.json();
    this.setState({
      thumbnailUrl: resData.video.thumbs['640'],
      videoUrl: resData.request.files.hls.cdns[resData.request.files.hls.default_cdn].url,
      video: resData.video,
    });

  }
  componentDidMount() {
    this.fetchVideoData();
  }

  render() {
    const { thumbnailUrl, videoUrl } = this.state;
    const { width, height, duration } = this.state.video;
    console.log(videoUrl);
    return (
      <SafeAreaView style={styles.container}>
        <VideoPlayer
          endWithThumbnail
          thumbnail={{ uri: thumbnailUrl }}
          video={{ uri: videoUrl }}
          videoWidth={width}
          videoHeight={height}
          duration={duration}
          ref={ref => this.player = ref}
        />
        {/* <View style={styles.ControlButtonsView}>
          <ControlButtons
            size={50}
            title="ios-pause-circle-outline"
            color="#954B4D"
            onPress={() => this.player.pause()}
          />
          <ControlButtons
            size={50}
            title="ios-play-circle-outline"
            color="#954B4D"
            onPress={() => this.player.resume()}
          />
          <ControlButtons
            size={50}
            title="ios-stop-circle-outline"
            color="#954B4D"
            onPress={() => this.player.stop()}
          />
        </View> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },
  ControlButtonsView: {
    padding: 10,
    marginHorizontal: '5%',
    paddingHorizontal: '15%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#954B4D',
    borderWidth: 2,
  },
});


export default VideoScreen;