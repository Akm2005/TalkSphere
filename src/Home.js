import React from 'react'
import { View, Text, StyleSheet, StatusBar, FlatList, TextInput, Image, ScrollView } from 'react-native';
import Footer from './Footer';

const contacts = [
  { id: '1', name: 'Alice', message: 'Hey, how are you?', time: '12:30 PM', avatar: 'https://i.ibb.co/25yB1jj/Screenshot-2024-07-06-221009.png' },
  { id: '2', name: 'Bob', message: 'Are we meeting tomorrow?', time: '11:15 AM', avatar: 'https://lh3.googleusercontent.com/a/ACg8ocL5H3jEExo13RYL8Wa1Yq1MKSdDCmAh6rSiXFSym-FYV2QGg6vP=s432-c-no' },
  { id: '3', name: 'Charlie', message: 'Check out this photo!', time: '10:45 AM', avatar: 'https://media.licdn.com/dms/image/D4D03AQGJade3MgRlDA/profile-displayphoto-shrink_400_400/0/1668435028549?e=1726704000&v=beta&t=gRUIgpjeeZ8hLIdNvwEwuw0wQpxDYNpuFHkZ3sCsMBU' },
  { id: '4', name: 'David', message: 'Good morning!', time: '09:00 AM', avatar: 'https://media.licdn.com/dms/image/D4D03AQF1szdG13gi8w/profile-displayphoto-shrink_400_400/0/1705665524578?e=1726704000&v=beta&t=B8DAKr3tBvSX9wjYEk9JhE5G1SnPD73XM_2u1TU_Lqw' },
  { id: '5', name: 'Eve', message: 'See you soon.', time: '08:30 AM', avatar: 'https://media.licdn.com/dms/image/D4D03AQF0AELLDgipyw/profile-displayphoto-shrink_400_400/0/1713765584338?e=1726704000&v=beta&t=wP1o-HHH-un6nP_etc9Oo-h39AbVDBLTTQShEnT97L4' },
  { id: '6', name: 'Alice', message: 'Hey, how are you?', time: '12:30 PM', avatar: 'https://i.ibb.co/25yB1jj/Screenshot-2024-07-06-221009.png' },
  { id: '7', name: 'Bob', message: 'Are we meeting tomorrow?', time: '11:15 AM', avatar: 'https://lh3.googleusercontent.com/a/ACg8ocL5H3jEExo13RYL8Wa1Yq1MKSdDCmAh6rSiXFSym-FYV2QGg6vP=s432-c-no' },
  { id: '8', name: 'Charlie', message: 'Check out this photo!', time: '10:45 AM', avatar: 'https://media.licdn.com/dms/image/D4D03AQGJade3MgRlDA/profile-displayphoto-shrink_400_400/0/1668435028549?e=1726704000&v=beta&t=gRUIgpjeeZ8hLIdNvwEwuw0wQpxDYNpuFHkZ3sCsMBU' },
  { id: '9', name: 'David', message: 'Good morning!', time: '09:00 AM', avatar: 'https://media.licdn.com/dms/image/D4D03AQF1szdG13gi8w/profile-displayphoto-shrink_400_400/0/1705665524578?e=1726704000&v=beta&t=B8DAKr3tBvSX9wjYEk9JhE5G1SnPD73XM_2u1TU_Lqw' },
  { id: '10', name: 'Eve', message: 'See you soon.', time: '08:30 AM', avatar: 'https://media.licdn.com/dms/image/D4D03AQF0AELLDgipyw/profile-displayphoto-shrink_400_400/0/1713765584338?e=1726704000&v=beta&t=wP1o-HHH-un6nP_etc9Oo-h39AbVDBLTTQShEnT97L4' },
  { id: '1', name: 'Alice', message: 'Hey, how are you?', time: '12:30 PM', avatar: 'https://i.ibb.co/25yB1jj/Screenshot-2024-07-06-221009.png' },
  { id: '2', name: 'Bob', message: 'Are we meeting tomorrow?', time: '11:15 AM', avatar: 'https://lh3.googleusercontent.com/a/ACg8ocL5H3jEExo13RYL8Wa1Yq1MKSdDCmAh6rSiXFSym-FYV2QGg6vP=s432-c-no' },
  { id: '3', name: 'Charlie', message: 'Check out this photo!', time: '10:45 AM', avatar: 'https://media.licdn.com/dms/image/D4D03AQGJade3MgRlDA/profile-displayphoto-shrink_400_400/0/1668435028549?e=1726704000&v=beta&t=gRUIgpjeeZ8hLIdNvwEwuw0wQpxDYNpuFHkZ3sCsMBU' },
  { id: '4', name: 'David', message: 'Good morning!', time: '09:00 AM', avatar: 'https://media.licdn.com/dms/image/D4D03AQF1szdG13gi8w/profile-displayphoto-shrink_400_400/0/1705665524578?e=1726704000&v=beta&t=B8DAKr3tBvSX9wjYEk9JhE5G1SnPD73XM_2u1TU_Lqw' },
  { id: '5', name: 'Eve', message: 'See you soon.', time: '08:30 AM', avatar: 'https://media.licdn.com/dms/image/D4D03AQF0AELLDgipyw/profile-displayphoto-shrink_400_400/0/1713765584338?e=1726704000&v=beta&t=wP1o-HHH-un6nP_etc9Oo-h39AbVDBLTTQShEnT97L4' },
  { id: '6', name: 'Alice', message: 'Hey, how are you?', time: '12:30 PM', avatar: 'https://i.ibb.co/25yB1jj/Screenshot-2024-07-06-221009.png' },
  { id: '7', name: 'Bob', message: 'Are we meeting tomorrow?', time: '11:15 AM', avatar: 'https://lh3.googleusercontent.com/a/ACg8ocL5H3jEExo13RYL8Wa1Yq1MKSdDCmAh6rSiXFSym-FYV2QGg6vP=s432-c-no' },
  { id: '8', name: 'Charlie', message: 'Check out this photo!', time: '10:45 AM', avatar: 'https://media.licdn.com/dms/image/D4D03AQGJade3MgRlDA/profile-displayphoto-shrink_400_400/0/1668435028549?e=1726704000&v=beta&t=gRUIgpjeeZ8hLIdNvwEwuw0wQpxDYNpuFHkZ3sCsMBU' },
  { id: '9', name: 'David', message: 'Good morning!', time: '09:00 AM', avatar: 'https://media.licdn.com/dms/image/D4D03AQF1szdG13gi8w/profile-displayphoto-shrink_400_400/0/1705665524578?e=1726704000&v=beta&t=B8DAKr3tBvSX9wjYEk9JhE5G1SnPD73XM_2u1TU_Lqw' },
  { id: '10', name: 'Eve', message: 'See you soon.', time: '08:30 AM', avatar: 'https://media.licdn.com/dms/image/D4D03AQF0AELLDgipyw/profile-displayphoto-shrink_400_400/0/1713765584338?e=1726704000&v=beta&t=wP1o-HHH-un6nP_etc9Oo-h39AbVDBLTTQShEnT97L4' },
] 

const Contact = ({ name, message, time, avatar }) => (
  <View style={styles.contact}>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <View style={styles.contactDetails}>
      <Text style={styles.contactName}>{name}</Text>
      <Text style={styles.contactMessage}>{message}</Text>
    </View>
    <Text style={styles.contactTime}>{time}</Text>
  </View>
)

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#f57df1" />
      <View style={styles.header}>
        <Text style={styles.headerText}>TalkSphere</Text>
      </View>
      {/* <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View> */}
      <ScrollView>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Contact
            name={item.name}
            message={item.message}
            time={item.time}
            avatar={item.avatar}
          />
        )}
      />
      </ScrollView>
      <Footer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#f57df1',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBar: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  searchInput: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  contact: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
  contactMessage: {
    color: '#888888',
  },
  contactTime: {
    alignSelf: 'center',
    color: '#888888',
  },
})

export default Home
