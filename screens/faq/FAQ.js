import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Image, SafeAreaView, Text, View } from 'react-native'

import AllStyle from '../../AllStyle'
import HeaderButton from '../../components/headerButton/HeaderButton'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const FAQ = (props) => {
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={AllStyle.aboutMainClass}>
          <View style={{}}>
            <Text
              style={[
                { fontSize: 18, textAlign: 'center' },
                AllStyle.Aboutheading,
              ]}
            >
              Frequently asked Questions
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Normally How Long It Takes to Get the Dubai Visit Visa
              Processed? 
            </Text>
          </View>

          <View style={{ margin: 5 }}>
            <Text style={AllStyle.Aboutdetail}>
              Normally it takes almost 4 to 5 working days to get your tourist
              visa processed. However, it can a bit longer due to certain
              reasons depending on your case.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Who May Get Visit Visa For Dubai Rejected? 
            </Text>
          </View>

          <View style={{}}>
            <Text style={AllStyle.Aboutdetail}>
              A person with a severe criminal record or belonging to an outlawed
              terrorist group, a person with a serious medical condition, and
              any viral disease patient can have a visa rejected because of the
              Visa Policies of the UAE. 
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Who Does Get Visa Processed Faster? 
            </Text>
          </View>

          <View style={{ margin: 5 }}>
            <Text style={AllStyle.Aboutdetail}>
              A national of the country that enjoys good bilateral relations
              with the UAE, Citizens of Australia, EU Countries, UK, and the US
              also get visa conveniently processed to visit Dubai or the UAE.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Can A Travel & Tour Agency Apply Visa on Your Behalf?
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes! A registered travel and tour agency such as Chiltern Travel
              and Tour can apply for a visit visa for Dubai on behalf of you. No
              matter wherever you live or belong, Chiltern being one of those
              registered visa consultancy services, can apply visa for you to
              visit Dubai or any other emirate of the UAE. 
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Does Visit Visa Cover Insurance? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              No, a Visit visa is nothing to do with your health coverage.
              However, you can get the basic treatment in Dubai for free.
              Moreover, your airline should provide you with a life assurance
              policy while traveling with them. 
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Can an Airline Book Visit Visa on Behalf of You? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes, an airline that offers its services in the UAE can apply visa
              on behalf of you. However, you should verify first that the
              airline offers the air services in the UAE. To avoid any problem,
              you should always get your visa processed from a registered travel
              and tour company because it also offers airline tickets and visa
              assistance. 
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Why is it best to Book Visa with a Travel Company? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              A travel company has a great service of all in one tourism realm.
              A registered travel and tour company can provide you the best
              service with all necessary options for tourism—some of those
              services, visa assistance, travel booking, hotel reservation, and
              travel guides, etc.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Is Alcohol banned in the UAE?
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              In the UAE, Alcohol is banned due to being an Islamic country.
              However, Alcohol is allowed for the Non-Muslim tourists from the
              licensed outlets and franchise of the beverage.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What is the Time Difference of the UAE with GMT?
            </Text>
          </View>

          <View style={{ margin: 5 }}>
            <Text style={AllStyle.Aboutdetail}>
              The official time of the UAE is 4 hours ahead of that of the GMT. 
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What are the Currency and Currency Units of the UAE? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              The Official currency of the UAE is Emirati Dirham. Its short form
              is denoted officially as AED. Conventionally abbreviations include
              Dh and Dhs. The dirham is subdivided into 100 fils. Coins are also
              run in the following denomination as AED 1, 50 fils, and 25 fils.
              The UAE AED Currency Notes or bills are in the denomination of AED
              5, 10, 20, 50, 100, 200, 500 and 1,000.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What is the Exchange Rate of the AED with USD? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              AED often performs better race with the USD, and since February
              2002, the Arab Emirati Dirham (AED) is fixed to the US dollar
              (USD) under the rate of 1 USD = AED 3.6725 as of so far.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Which Countries Can Avail Visa on Arrival for the UAE Tourism? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              The nationals of the US, Canada, Australia, Brunei, Japan, Canada,
              and Germany can avail of visa on arrival in the airport. They can
              get the visa as they reach any of the international airports in
              the UAE. A separate desk can assist them to get their visa issued.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. How Many Visit Visa Type of the UAE? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              You can visit the UAE under two types of visa, short-term visa,
              long-term visa and short visit visa. There are three categories of
              the visit visa in the UAE.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What is Short Term Visa? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              It is short term visa that can be issued for thirty days or 15
              days.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What is Long Term Visa? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              It is the tourist visa that allows you to stay in the UAE for 90
              days.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What is Short Tour Visa? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              It is an Hour based visa that allows you to stay for 48 hours or
              96 hours.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What is the Visa Extension? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Visit Visa in Dubai can be extended for one month more to stay.
              This is called visit visa extension.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. How Much it Costs to take For the Visit Visa Extension? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              The cost of visit visa extension is $230 USD for a one-time
              extension.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. How Long Can You Stay with Visit Visa Extension in Dubai? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Visit Visa Dubai extension allows you to stay for further 30 days.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What is Multi-entry Visit Visa For Dubai? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Visa with multi entry options is about you can exit and re-enter
              Dubai without having to renew the visa.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. How Many Types of Multi-entry Visa? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              There are two types of multi-entry visas. 1 Month and 3 Months.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What is Dubai E-Visa? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              It is an online visit visa that you can avail and linked with your
              passport electronically. You can make sense of how it is
              convenient that you can take it as your pre-arrival document. Your
              passport and ticket are enough to show that you are traveling
              under the e-Visa facility.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What Do I Need For the E-Visa? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              You will need to have the following documents to be eligible for
              applying for the E-Visa. A Valid passport: You will need basically
              one of the most important documents, which is your valid passport.
              It is also important that you should get it valid for the date of
              arrival in the UAE. If the document gets expired sooner than that,
              you need to get it renewed. Otherwise, your UAE eVisa may be
              denied. A passport scan: it Should be in JPEG format. Passport
              photo: Your photograph to apply for the e-Visa must meet the
              standards of an official passport photo. To help you with that,
              Chiltern Travel and Tour has a Passport Photos service that can be
              helpful for the visa applicant. Valid e-mail address: when
              applying online for e-Visa, you’ll receive an official response
              attached with the valid copy of your visa through your valid
              e-mail address, so you should make sure that you offer a valid
              email address before you apply for the visa. Means of payment:
              Obviously you’ll have to pay for this e-Visa and another document
              while filling in the form. You should be having a valid Paypal
              account or debit/credit Visa or Master card on hand. Bear in mind
              that if you have children traveling with you so children also have
              to have their own valid passport, a photo, and a birth certificate
              either in English or Arabic.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. For How Long E-Visa is Valid? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              E-Visa for Dubai visit can be valid for 30 days or 60 days. It
              depends on you whichever you choose according to your need.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. How Quickly the e-Visa Gets Processed 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              The Standard Processing time for the e-visa processing is 7
              Business Days. It can be fluctuating due to unforeseen
              circumstances. So you might have to wait some more Business Days
              to get your visa processed.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What is the Fee For the E-Visa? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              The standard price for the e-visa for Dubai is $150.00 USD
              (service fees included).
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Can I Get E-Visa a Bit Quicker? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes, you can have your e-visit visa processed a bit faster. It is
              called Rush processing. This processing time may take only 5
              official Days. However, you might have to pay for $180.00 (service
              fees included). Ahead of it there comes another faster way that is
              the Super Rush Visa. It takes only three working days to get your
              visa processed. Since it’s the fastest option to get your e-visa
              processed, so you’ll have to pay some extra dollars as much as USD
              210.00 (service fees included).
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

FAQ.navigationOptions = (navData) => {
  return {
    headerTitle: 'FAQ',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default FAQ
