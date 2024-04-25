import {
  ScrollView,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { COLORS } from "@constants";
import { Register} from "@components";

const RegisterPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <Register />
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

export default RegisterPage;
