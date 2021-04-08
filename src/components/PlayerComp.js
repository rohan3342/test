import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';

const ControlButton = ({ title, size, color, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.controlButtonContainer}>
    <Ionicons name={title} size={size} color={color} />
  </TouchableOpacity>
);

const ProgressBar = () => {
  const progress = useTrackPlayerProgress();
  return (
    <View style={styles.progressBar}>
      <View style={{
        flex: progress.position,
        backgroundColor: '#191919'
      }} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: 'grey',
        }}
      />
    </View>
  );
};

const PlayerComp = (props) => {
  const { onNext, onPrevious, onTogglePlayback } = props;
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState('');
  const [bufferState, setBufferState] = useState(false);

  useTrackPlayerEvents(['playback-track-changed'], async event => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const { title, artist, artwork } = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  let middleButton = 'play-circle-outline';
  if (playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING) {
    middleButton = 'ios-pause-circle-outline';
  }

  return (
    <View style={styles.conatiner}>
      <View style={styles.albumArtWrapper}>
        {
          trackArtwork !== undefined ?
            (<Image
              style={styles.albumArt}
              source={{ uri: trackArtwork }} />) :
            (<MaterialIcons name="music-box-outline" size={280} color="#191919" />)
        }
      </View>

      {
        trackTitle !== '' ?
          (
            <>
              <Text style={styles.titleTxt}>{trackTitle}</Text>
              <Text style={styles.artistTxt}>{trackArtist}</Text>
            </>
          ) : (
            <Text style={styles.titleTxt}>Tap on Play Button!</Text>
          )
      }
      <ProgressBar />
      <View style={styles.controls}>
        <ControlButton
          onPress={onPrevious}
          color="#191919"
          size={60}
          title="play-skip-back-circle-outline" />
        <ControlButton
          onPress={onTogglePlayback}
          color="#191919"
          size={100}
          title={middleButton} />
        <ControlButton
          onPress={onNext}
          color="#191919"
          size={60}
          title="play-skip-forward-circle-outline" />
      </View>

    </View>
  );
};



const styles = StyleSheet.create({
  conatiner: {
    width: '85%',
    height: '80%',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#954B4D',
  },
  albumArtWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    width: '80%',
    height: '50%',
  },
  albumArt: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  titleTxt: {
    fontSize: 24,
  },
  artistTxt: {
    fontSize: 20,
    fontWeight: '300',
  },
  progressBar: {
    backgroundColor: '#191919',
    height: 4,
    borderRadius: 50,
    width: '90%',
    marginTop: 20,
    flexDirection: 'row',
  },
  controls: {
    marginTop: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  controlButtonContainer: {
    flex: 1,
    alignItems: 'center',
  },
});


export default PlayerComp;
