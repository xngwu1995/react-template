import {
  ScrollView,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { COLORS } from "@constants";
import { Login} from "@components";

const LoginPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <Login />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  scrollView: {
    flex: 1
  },
  scrollViewContent: {
    flexGrow: 1
  }
});

export default LoginPage;
