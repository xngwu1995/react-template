import {
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Text
  } from 'react-native';
  import { COLORS } from "@constants";
  
  const HomePage = () => {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
            <Text style={styles.text}>This is Home Page</Text>
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
  
  export default HomePage;
  