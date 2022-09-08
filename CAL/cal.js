import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
class Inputs extends Component {
   state = {
      height: '',
      weight: '',
      bmi: '',
      BmiResult: '',
   }
   handleHeight = (text) => {
      this.setState({ height: text })
   }
   handleWeight = (text) => {
      this.setState({ weight: text })
   }
   calculate = (height, weight) => {
      //calculation
      var result = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
      result = result.toFixed(2);
      //display result
      this.setState({ bmi: result })
      if(result<18.5){
         this.setState({BmiResult:'Underweight'})
      }
      else if(result>=18.5&&result<25){
         this.setState({BmiResult:'Normal weight'})
      }
      else if(result>=25&&result<30){
         this.setState({BmiResult:'Overweight'})
      }
      else if(result>=30){
         this.setState({BmiResult:'Obese'})
      }
      else{
         alert('Incorrect Input!');
         this.setState({BmiResult:''})
      }
   }
   render() {
      return (
         <><View style={styles.container}>
            <Text style={styles.title}>BMI Calculator</Text>

            <Text style={styles.Text1}> Male </Text>
         </View><View style={styles.button3}>

          <Text style={styles.Text1}> Female </Text>
          </View><View style={styles.button4}>

               <Text style={styles.label}>Height</Text>
               <TextInput style={styles.TextInput2}
                  underlineColorAndroid="transparent"
                  placeholder="Height (Cm)"
                  autoCapitalize="none"
                  onChangeText={this.handleHeight} />
               <Text style={styles.label}>Weight</Text>
               <TextInput style={styles.TextInput3}
                  underlineColorAndroid="transparent"
                  placeholder="Weight (Kg)"
                  autoCapitalize="none"
                  onChangeText={this.handleWeight} />

               <TouchableOpacity
                  style={styles.submitButton}
                  onPress={() => this.calculate(this.state.height, this.state.weight)}>
                  <Text style={styles.submitButtonText}> Calculate </Text>
               </TouchableOpacity>
               <Text style={styles.output}>{this.state.bmi}</Text>
               <Text style={styles.resultText}>{this.state.BmiResult}</Text>
            </View></>
      )
   }
}
export default Inputs
const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 23,
      backgroundColor: '#07123E',
      
   },
   input: {
      margin: 15,
      height: 40,
      borderWidth: 1,
      padding: 10,
   },
   submitButton: {
      backgroundColor: '#ff6666',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      textAlign: "center",
      color: 'white',
     // fontWeight:"bold",
      fontSize: 18,
   },
   output:{
      textAlign: "center",
      fontSize: 30,
   },
   title:{
      paddingTop:30,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      fontWeight:"bold",
   },
   resultText:{
      paddingTop:20,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      color: 'blue'
   },
   label:{
      marginLeft: 15,
   },
   Text1: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: 3,
      width: '100%',
      textAlign: 'center',
      justifyContent: 'center',
    },
    TextInput2: {
      width: '59%',
      height: 60,
      fontSize: 27,
      marginRight: 62,
      textAlign: 'center',
      justifyContent: 'center',
      marginBottom: -68,
      color: '#000000',
    },
    TextInput3: {
      width: '40%',
      height: 60,
      fontSize: 27,
      marginRight: 90,
      textAlign: 'center',
      justifyContent: 'center',
      marginBottom: -68,
      color: '#000000',
    },
    button3: {
      width: '35%',
      height: 170,
      fontSize: 29,
      fontWeight: 'bold',
      backgroundColor: 'gray',
      borderWidth: 3,
      padding: 20,
      margin: 60,
      justifyContent: 'center',
      alignItems: 'center',
      //marginLeft: 200,
      //marginTop: -230,
    },
    button4: {
      width: '79%',
      height: 150,
      fontSize: 29,
      fontWeight: 'bold',
      backgroundColor: 'gray',
      borderWidth: 3,
      padding: 20,
      margin: 60,
      justifyContent: 'center',
      alignItems: 'center',
      //marginTop: -45,
      //marginLeft: 10,
    },
});