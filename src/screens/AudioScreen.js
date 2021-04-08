import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlayerComp from '../components/PlayerComp';
import TrackPlayer, { usePlaybackState } from 'react-native-track-player';
import playlistData from '../utils/playlistData.json'

class AudioScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() { }

  trackPlayerSetup = async () => {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ]
    });
  }

  togglePlayback = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    const playbackState = await TrackPlayer.getState();
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add(playlistData);
      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  }

  skipToNext = async () => {
    try {
      await TrackPlayer.skipToNext();
    } catch (error) { console.error(error); }
  }

  skipToPrevious = async () => {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (error) { console.error(error); }
  }

  render() {
    return (
      <View style={styles.container}>
        <PlayerComp
          onNext={this.skipToNext}
          onPrevious={this.skipToPrevious}
          onTogglePlayback={this.togglePlayback}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191919'
  },
});


export default AudioScreen;