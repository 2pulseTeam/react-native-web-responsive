import { TextProps, ImageProps, TextStyle, ViewProps, Text, View, Image, TextInput, TouchableOpacity, TextInputProps, ImageStyle, ActivityIndicator, Modal, ImageBackground, KeyboardAvoidingView, Switch, ViewStyle, SwitchProps, TouchableHighlightProps, TouchableHighlight, SafeAreaView, ScrollView, ScrollViewProps, TouchableOpacityProps, ActivityIndicatorProps, KeyboardAvoidingViewProps, ImageBackgroundProps, ModalProps } from 'react-native';
import { withResponsive } from '../hoc/withResponsive';

export default {
  View: withResponsive<ViewStyle, ViewProps>(View),
  Text: withResponsive<TextStyle, TextProps>(Text),
  Modal: withResponsive<ViewStyle, ModalProps>(Modal),
  Image: withResponsive<ImageStyle, ImageProps>(Image),
  Switch: withResponsive<ViewStyle, SwitchProps>(Switch),
  TextInput: withResponsive<TextStyle, TextInputProps>(TextInput),
  SafeAreaView: withResponsive<ViewStyle, ViewProps>(SafeAreaView),
  ScrollView: withResponsive<ViewStyle, ScrollViewProps>(ScrollView),
  ImageBackground: withResponsive<ViewStyle, ImageBackgroundProps>(ImageBackground),
  TouchableOpacity: withResponsive<ViewStyle, TouchableOpacityProps>(TouchableOpacity),
  ActivityIndicator: withResponsive<ViewStyle, ActivityIndicatorProps>(ActivityIndicator),
  KeyboardAvoidingView: withResponsive<ViewStyle, KeyboardAvoidingViewProps>(KeyboardAvoidingView),
  TouchableHighlight: withResponsive<ViewStyle, TouchableHighlightProps>(TouchableHighlight),
};
