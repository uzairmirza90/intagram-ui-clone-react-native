import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import { ApplicationProvider, Icon, IconRegistry, Layout, Toggle, Button } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {Profile} from './profile';


export default function App() {
  return (
    <View style={{ backgroundColor: '#0d0d0d', flex: 1}}>
      <IconRegistry icons={EvaIconsPack} />
      <View style={{ flexDirection: 'row', position: 'absolute', left: 0, top: 0, right: 0, marginTop: 50}}>
            <Text style={{ color: 'white', fontSize: 30, fontStyle: 'italic', marginLeft: 10, fontWeight: '700' }}>Instagram</Text>
            <Icon name="message-square-outline" style={{ width: 30, height: 30, marginLeft: 203 }} fill="white" />
          </View>
  
        
          
        <ScrollView style={{ backgroundColor: '#0d0d0d', marginTop: 100 }}>
        <ApplicationProvider {...eva} theme={eva.light}>
        <StatusBar barStyle='light-content' />
          
            <View style={styles.container}>

              {/*      Insta Component        */}
            <View style={styles.instaComponent}>
              <View style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', marginLeft: 10, }}>
                <ScrollView horizontal={true}>
                  <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg')}></Image>
                  <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
                  <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/florian-klauer-mk7D-4UCfmg-unsplash.jpg')}></Image>
                  <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/greg-rakozy-oMpAz-DN-9I-unsplash.jpg')}></Image>
                  <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
                  <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/zac-durant-_6HzPU9Hyfg-unsplash.jpg')}></Image>
                  <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
                  <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/icon.png')}></Image>
                  <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/adaptive-icon.png')}></Image>
                  <Image style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }} source={require('./assets/favicon.png')}></Image>
                </ScrollView>
              </View>
              <View>
                <View style={{ backgroundColor: 'grey', height: 0.2, width: '100%', }}></View>
                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', marginLeft: 10, }}>
                  <Image style={{ width: 35, height: 35, borderRadius: 50 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
                  <Text style={{ color: 'white', fontWeight: '700', marginLeft: 10 }}>uzairmirza</Text>
                  <Icon name="more-vertical-outline" style={{ width: 30, height: 30, marginLeft: 225 }} fill="white" />
                </View>

                <Image style={{ width: '100%', height: 400, marginTop: 10 }} source={require('./assets/zac-durant-_6HzPU9Hyfg-unsplash.jpg')}></Image>

                <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                  <Icon name="heart-outline" style={{ width: 30, height: 30, marginRight: 15 }} fill="white" />
                  <Icon name="message-circle-outline" style={{ width: 30, height: 30, marginRight: 15 }} fill="white" />
                  <Icon name="share-outline" style={{ width: 30, height: 30 }} fill="white" />
                  <Icon name="bookmark-outline" style={{ width: 30, height: 30, marginLeft: 220 }} fill="white" />
                </View>
                <View style={{ marginTop: 15, flexDirection: 'row', marginLeft: 10 }}>
                  <Image style={{ width: 20, height: 20, borderRadius: 50, marginRight: 10 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
                  <Text style={{ color: 'white', fontWeight: '600' }}>Liked By uzairmirza and 109 others</Text>
                </View>
                <View style={{ marginTop: 5, marginLeft: 10 }}>
                  <Text style={{ color: 'grey', }}>View all 2 comments</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>
                  <Text style={{ color: 'white', fontWeight: '800' }}>uzairmirza</Text>
                  <Text style={{ color: 'white', marginLeft: 10 }}>Boyy</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 10 }}>
                  <Image style={{ width: 30, height: 30, borderRadius: 50, marginRight: 20 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
                  <Text style={{ color: 'lightgrey' }}>Add a comment...</Text>
                  <Text style={{ marginLeft: 'auto', marginRight: 10 }}>&#128512; &#128525; &#128151;</Text>
                </View>
                <View style={{ backgroundColor: 'grey', height: 0.3, width: '100%', marginTop: 10 }}></View>
              </View>
            </View>


            
          </View>

          {/*      Insta Component        */}
          <View style={styles.instaComponent}>
            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', marginLeft: 10, }}>
              <Image style={{ width: 35, height: 35, borderRadius: 50 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
              <Text style={{ color: 'white', fontWeight: '700', marginLeft: 10 }}>uzairmirza</Text>
              <Icon name="more-vertical-outline" style={{ width: 30, height: 30, marginLeft: 225 }} fill="white" />
            </View>

            <Image style={{ width: '100%', height: 400, marginTop: 10 }} source={require('./assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg')}></Image>

            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
              <Icon name="heart-outline" style={{ width: 30, height: 30, marginRight: 15 }} fill="white" />
              <Icon name="message-circle-outline" style={{ width: 30, height: 30, marginRight: 15 }} fill="white" />
              <Icon name="share-outline" style={{ width: 30, height: 30 }} fill="white" />
              <Icon name="bookmark-outline" style={{ width: 30, height: 30, marginLeft: 220 }} fill="white" />
            </View>

            <View style={{ marginTop: 15, flexDirection: 'row', marginLeft: 10 }}>
              <Image style={{ width: 20, height: 20, borderRadius: 50, marginRight: 10 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
              <Text style={{ color: 'white', fontWeight: '600' }}>Liked By uzairmirza and 109 others</Text>
            </View>
            <View style={{ marginTop: 5, marginLeft: 10 }}>
              <Text style={{ color: 'grey', }}>View all 2 comments</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>
              <Text style={{ color: 'white', fontWeight: '800' }}>uzairmirza</Text>
              <Text style={{ color: 'white', marginLeft: 10 }}>Boyy</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 10 }}>
              <Image style={{ width: 30, height: 30, borderRadius: 50, marginRight: 20 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
              <Text style={{ color: 'lightgrey' }}>Add a comment...</Text>
              <Text style={{ marginLeft: 'auto', marginRight: 10 }}>&#128512; &#128525; &#128151;</Text>
            </View>
            <View style={{ backgroundColor: 'grey', height: 0.3, width: '100%', marginTop: 10 }}></View>

          </View>
          
          {/*      Insta Component        */}
 <View style={styles.instaComponent}>
            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', marginLeft: 10, }}>
              <Image style={{ width: 35, height: 35, borderRadius: 50}} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
              <Text style={{ color: 'white', fontWeight: '700', marginLeft: 10 }}>uzairmirza</Text>
              <Icon name="more-vertical-outline" style={{ width: 30, height: 30, marginLeft: 225 }} fill="white" />
            </View>

            <Image style={{ width: '100%', height: 400, marginTop: 10 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>

            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
              <Icon name="heart-outline" style={{ width: 30, height: 30, marginRight: 15 }} fill="white" />
              <Icon name="message-circle-outline" style={{ width: 30, height: 30, marginRight: 15 }} fill="white" />
              <Icon name="share-outline" style={{ width: 30, height: 30 }} fill="white" />
              <Icon name="bookmark-outline" style={{ width: 30, height: 30, marginLeft: 220 }} fill="white" />
            </View>

            <View style={{ marginTop: 15, flexDirection: 'row', marginLeft: 10 }}>
              <Image style={{ width: 20, height: 20, borderRadius: 50, marginRight: 10 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
              <Text style={{ color: 'white', fontWeight: '600' }}>Liked By uzairmirza and 109 others</Text>
            </View>
            <View style={{ marginTop: 5, marginLeft: 10 }}>
              <Text style={{ color: 'grey', }}>View all 2 comments</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>
              <Text style={{ color: 'white', fontWeight: '800' }}>uzairmirza</Text>
              <Text style={{ color: 'white', marginLeft: 10 }}>Boyy</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 10 }}>
              <Image style={{ width: 30, height: 30, borderRadius: 50, marginRight: 20 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
              <Text style={{ color: 'lightgrey' }}>Add a comment...</Text>
              <Text style={{ marginLeft: 'auto', marginRight: 10 }}>&#128512; &#128525; &#128151;</Text>
            </View>
            <View style={{ backgroundColor: 'grey', height: 0.3, width: '100%', marginTop: 10 }}></View>
    
          </View>


          {/*      Insta Component        */}
          <View style={styles.instaComponent}>
            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', marginLeft: 10, }}>
              <Image style={{ width: 35, height: 35, borderRadius: 50}} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
              <Text style={{ color: 'white', fontWeight: '700', marginLeft: 10 }}>uzairmirza</Text>
              <Icon name="more-vertical-outline" style={{ width: 30, height: 30, marginLeft: 225 }} fill="white" />
            </View>

            <Image style={{ width: '100%', height: 400, marginTop: 10 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>

            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
              <Icon name="heart-outline" style={{ width: 30, height: 30, marginRight: 15 }} fill="white" />
              <Icon name="message-circle-outline" style={{ width: 30, height: 30, marginRight: 15 }} fill="white" />
              <Icon name="share-outline" style={{ width: 30, height: 30 }} fill="white" />
              <Icon name="bookmark-outline" style={{ width: 30, height: 30, marginLeft: 220 }} fill="white" />
            </View>

            <View style={{ marginTop: 15, flexDirection: 'row', marginLeft: 10 }}>
              <Image style={{ width: 20, height: 20, borderRadius: 50, marginRight: 10 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
              <Text style={{ color: 'white', fontWeight: '600' }}>Liked By uzairmirza and 109 others</Text>
            </View>
            <View style={{ marginTop: 5, marginLeft: 10 }}>
              <Text style={{ color: 'grey', }}>View all 2 comments</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>
              <Text style={{ color: 'white', fontWeight: '800' }}>uzairmirza</Text>
              <Text style={{ color: 'white', marginLeft: 10 }}>Boyy</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 10 }}>
              <Image style={{ width: 30, height: 30, borderRadius: 50, marginRight: 20 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
              <Text style={{ color: 'lightgrey' }}>Add a comment...</Text>
              <Text style={{ marginLeft: 'auto', marginRight: 10 }}>&#128512; &#128525; &#128151;</Text>
            </View>
            <View style={{ backgroundColor: 'grey', height: 0.3, width: '100%', marginTop: 10 }}></View>
    
          </View>


          {/*      Insta Component        */}
          <View style={[styles.instaComponent, {marginBottom: 100}]}>
            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', marginLeft: 10, }}>
              <Image style={{ width: 35, height: 35, borderRadius: 50 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
              <Text style={{ color: 'white', fontWeight: '700', marginLeft: 10 }}>uzairmirza</Text>
              <Icon name="more-vertical-outline" style={{ width: 30, height: 30, marginLeft: 225 }} fill="white" />
            </View>

            <Image style={{ width: '100%', height: 400, marginTop: 10 }} source={require('./assets/greg-rakozy-oMpAz-DN-9I-unsplash.jpg')}></Image>

            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
              <Icon name="heart-outline" style={{ width: 30, height: 30, marginRight: 15 }} fill="white" />
              <Icon name="message-circle-outline" style={{ width: 30, height: 30, marginRight: 15 }} fill="white" />
              <Icon name="share-outline" style={{ width: 30, height: 30 }} fill="white" />
              <Icon name="bookmark-outline" style={{ width: 30, height: 30, marginLeft: 220 }} fill="white" />
            </View>

            <View style={{ marginTop: 15, flexDirection: 'row', marginLeft: 10 }}>
              <Image style={{ width: 20, height: 20, borderRadius: 50, marginRight: 10 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
              <Text style={{ color: 'white', fontWeight: '600' }}>Liked By uzairmirza and 109 others</Text>
            </View>
            <View style={{ marginTop: 5, marginLeft: 10 }}>
              <Text style={{ color: 'grey', }}>View all 2 comments</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>
              <Text style={{ color: 'white', fontWeight: '800' }}>uzairmirza</Text>
              <Text style={{ color: 'white', marginLeft: 10 }}>Boyy</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 10 }}>
              <Image style={{ width: 30, height: 30, borderRadius: 50, marginRight: 20 }} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image>
              <Text style={{ color: 'lightgrey' }}>Add a comment...</Text>
              <Text style={{ marginLeft: 'auto', marginRight: 10 }}>&#128512; &#128525; &#128151;</Text>
            </View>
            <View style={{ backgroundColor: 'grey', height: 0.3, width: '100%', marginTop: 10 }}></View>
    
          </View>

          {/*    8********************     */}
          </ApplicationProvider>
          </ScrollView>
        
      <ApplicationProvider {...eva} theme={eva.light}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0d0d0d', position: 'absolute', left: 0, bottom: 0, right: 0, height: 60, paddingLeft: 20, paddingRight: 20, }}>
        <Icon name="home-outline" style={{ width: 30, height: 30, }} fill="white" />
        <Icon name="search-outline" style={{ width: 30, height: 30, }} fill="white" />
        <Icon name="plus-square-outline" style={{ width: 30, height: 30, }} fill="white" />
        <Icon name="heart-outline" style={{ width: 30, height: 30, }} fill="white" />
        <Button size='tiny' appearance='ghost'> <Image style={{width: 25, height: 25, borderRadius: 50}} source={require('./assets/annie-spratt-gAwHIwKI0F4-unsplash.jpg')}></Image></Button>
      </View>
      </ApplicationProvider>
    </View>

  );
}

const styles = StyleSheet.create({
});
