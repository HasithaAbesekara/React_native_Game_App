import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Title({children}:any) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles=StyleSheet.create({
    title:{
        fontSize:26,
        fontWeight:"bold",
        color:"white",
        textAlign:"center",
        borderWidth:2,
        borderColor:"white",
        padding:12,
        maxWidth:"80%"
    }
})