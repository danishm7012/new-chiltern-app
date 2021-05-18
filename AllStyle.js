import Color from './colors/Color'
import { Dimensions } from 'react-native'
// *****************************Swiper Styling Start *******************************
import { StyleSheet } from 'react-native'
let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

export default StyleSheet.create({
  // ************************************************ Main Page Style Home

  containerStyleAvatar: {
    backgroundColor: '#121212',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 15,
  },

  slide1: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imagess: {
    flex: 1,
    resizeMode: 'stretch',
    width: '100%',
  },

  // **************************** About page Start *******************************
  aboutSwiper: {
    resizeMode: 'stretch',
    height: screenHeight / 3,
    width: screenWidth,
  },
  Aboutdetail: {
    color: '#808080',
    fontWeight: '600',
    textAlign: 'justify',
    width: screenWidth * 0.93,

    fontSize: 16,
    lineHeight: 16 * 1.5,
    //paddingBottom:30,
  },
  Aboutheading: {
    marginTop: 15,
    color: '#444',
    textTransform: 'uppercase',
    fontSize: 24,

    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 2,

    fontFamily: 'open-sans-bold',
  },

  //************************************Contact Us Page Start  ******************************/

  mainContactForm: {
    flex: 1,
    padding: 30,
  },
  contactUsImagesView: {
    flex: 0.5,
    width: screenWidth,
    height: screenHeight,
  },
  contactUsImages: {
    flex: 1,
    width: screenWidth,
    resizeMode: 'stretch',
  },
  contactUsformMainHeading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactUsformMainHeadingOuter: {
    fontSize: 26,
    fontFamily: 'open-sans-bold',
    color: Color.accentColour,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  contactUsformMainHeadingInner: {
    fontSize: 26,
    fontFamily: 'open-sans-bold',
    color: '#0f385a',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  TextinputfieldcontactUs: {
    paddingTop: 10,
    borderBottomColor: '#0f385a',
    borderBottomWidth: 2,
    color: '#0f385a',
    borderRadius: 40,
    fontSize: 16,
    fontFamily: 'open-sans',
    letterSpacing: 2,
  },

  //*********************************About Page Start****************************/

  aboutMainClass: {
    flex: 1,
  },
  aboutimage: {
    flex: 1,
    width: screenWidth,
    height: screenHeight / 3,
    resizeMode: 'stretch',
  },
  abouttextStyle: {
    flex: 1,
    padding: 5,
  },
  aboutinnerTextStyle: {
    color: '#c11e8a',
    fontSize: 20,
    fontWeight: 'bold',
  },
  aboutouterTextStyle: {
    fontSize: 16,
    padding: 5,
    color: 'black',
    letterSpacing: 2,
    fontFamily: 'open-sans',
  },
  aboutListcontent: {
    flex: 1,
  },
  sectionHeader: {
    paddingTop: 6,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#c11e8a',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 44,
  },

  // **************************** About page Start *******************************
  aboutSwiper: {
    resizeMode: 'stretch',
    height: screenHeight / 3,
    width: screenWidth,
  },
  Aboutdetail: {
    color: '#808080',
    fontWeight: '600',
    textAlign: 'justify',
    width: screenWidth * 0.93,

    marginLeft: 8,
    fontSize: 16,
    lineHeight: 16 * 1.5,
    //paddingBottom:30,
  },
  Aboutheading: {
    marginTop: 15,
    marginHorizontal: 8,
    color: '#444',
    textTransform: 'uppercase',
    // fontSize: 24,

    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 2,

    fontFamily: 'open-sans-bold',
  },
})
