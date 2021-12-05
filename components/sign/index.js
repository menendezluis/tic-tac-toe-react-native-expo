import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'

 const Sign = (props) => {
     const { row,col,item,handleClick, endGame } = props
    return (
        <>
        {!endGame ?
        <TouchableHighlight 
  activeOpacity={0.6}
  onPress={() =>{handleClick(row,col)}}
   underlayColor= "rgba(255,255,255,0.0 1)"
>
  <View style={styles.grid}>
        <Text style={styles.text}>{item}</Text>
          </View>
</TouchableHighlight>:
 <View style={styles.grid}>
        <Text style={styles.text}>{item}</Text>
          </View>}
       </>
    )
}

export default Sign

const styles = StyleSheet.create({
grid :{
       
        
       borderRadius: 10,
       borderWidth: 1,
 
       margin: 5,
       borderColor: '#fff',
       padding: 10,
       shadowColor: '#000',
       shadowOffset: {
           width: 0,
           height: 2   
       },
       shadowOpacity: 0.25,
       shadowRadius: 3.84,
       elevation: 5,      
       width: 100,
       height: 100,
   },
   text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
}
})