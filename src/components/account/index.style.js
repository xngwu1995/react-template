import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '@constants';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
    width: '25%',
    alignItems: 'flex-start',
  },
  title: {
    marginBottom: 18,
    fontStyle: 'italic',
    fontSize: SIZES.xxlarge,
    fontFamily: FONT.bold,
  },
  subtitle: {
    fontStyle: 'italic',
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    marginBottom: 16,
  },
  link: {
    color: 'orange',
  },
  inputContainer: {
    marginBottom: 12,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    height: 40,
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
  },
  forgotPassword: {
    color: 'orange',
    fontSize: 14,
    marginTop: 4,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginBottom: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
  },
  returnStore: {
    color: 'orange',
    fontSize: 14,
    margin: 20,
    flexShrink: 0,
  }
});
