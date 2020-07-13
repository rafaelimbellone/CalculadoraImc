import React, {Component, useState} from 'react';
import { StyleSheet, 
         Text,
         View,
         TextInput,
         KeyboardAvoidingView,
         Platform,
         TouchableOpacity,
         YellowBox
       } from 'react-native';

       YellowBox.ignoreWarnings([
        'Warning: ', 
     ]);

export default function App() {
  const [peso, setPeso]               = useState(0);
  const [altura, setAltura]           = useState(0);
  const [imc, setImc]                 = useState(null);
  const [lengenda, setLegenda]        = useState('');  
  const [validaInput, setValidaInput] = useState('');
  const [cor, setCor]                 = useState('');
  

  
 function handlerSoma(){

      
        setValidaInput('');

        const pesoStr   = peso.toString().replace(',', '.');
        const alturaStr = altura.toString().replace(',', '.');
  
        const resultado = pesoStr/(alturaStr*alturaStr);
        setImc(resultado.toFixed(1));

        if(resultado < 17){
          setLegenda('MAGREZA GRAVE');
          setCor('#E74C3C')
        }
        if(resultado >= 17 && resultado <= 18.4){
          setLegenda('MAGREZA LEVE');
          setCor('#E74C3C'); 
        }else if(resultado >= 18.5 && resultado <= 24.9){
          setLegenda('PESO NORMAL');
          setCor('#2ECC71');
        } else if(resultado >= 25 && resultado <= 29.9){
          setLegenda('SOBREPESO');   
          setCor('#F1C40F');
        }else if(resultado > 30 && resultado <= 34.9){
          setLegenda('OBESIDADE GRAU I');
          setCor('#E67E22');
        }else if(resultado >= 35 && resultado <= 39.9){
          setLegenda('OBESIDADE GRAU II');
          setCor('#E74C3C');
        }else if(resultado >= 40){
          setLegenda('OBESIDADE GRAU III');
          setCor('#E74C3C');
        }     
  }

  function clearImput(){
     setPeso(0);
     setAltura(0);
     setLegenda('');
     setImc(null);
     setValidaInput('');
     setCor('#FFFFFF');
  }

    return (
      <KeyboardAvoidingView style={styles.container}
              behavior="padding"
      >
        <Text style={styles.textTittulo}>Calculadora IMC</Text>
        <View style={[styles.containerResult, { backgroundColor: cor}]}> 
          <Text style={styles.textValidaInput}>{validaInput}</Text>
          <Text style={styles.textImc}>{imc}</Text>
          <Text style={styles.textLegenda}>{lengenda}</Text>
        </View>

        <View style={styles.containerImc}>
          <TextInput style={styles.inputPeso}
                      autoCapitalize='none'
                      autoCorrect= {false}
                      placeholder= "Digite seu Peso"texde
                      placeholderTextColor='#999'
                      keyboardType='numeric'
                      value={peso}
                      onChangeText={setPeso}
          />
          <TextInput style={styles.inputPeso}
                      autoCapitalize='none'
                      autoCorrect= {false}
                      placeholder= "Digite sua Altura" 
                      placeholderTextColor='#999'
                      keyboardType='numeric'
                      value={altura}
                      onChangeText={setAltura}
          />
          
        </View>
       <View style={styles.buttonContainer}>
       <TouchableOpacity onPress= {handlerSoma} style={styles.button}>
               <Text style={styles.textButton}>Calcular</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress= {clearImput} style={styles.button}>
               <Text style={styles.textButton}>Novo</Text>
           </TouchableOpacity>
       </View>
      </KeyboardAvoidingView>
     );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    alignItems:'center',
  },
  containerResult:{
    borderWidth: 1, 
    borderColor:'#ddd', 
    borderRadius:5,
    width:300, 
    height:140,
    alignItems:'center',
    alignContent:'center',
    marginBottom: -10,
  },
  textTittulo:{
    fontSize: 20,
    fontWeight:'bold',
    color:'#DF4722',
  },
  containerImc:{
    justifyContent:'center',
    padding:30,
    marginBottom: 10,
    marginTop:1,
    width: 400,
    flexDirection:'row',
 },
 textTituloImc:{
  fontSize:24,
  alignSelf:'center',
  justifyContent:'center',
  color:"#333",
  
 },
 textImc:{
  fontSize: 40,
  fontWeight:'bold',
  justifyContent:'center',
  alignSelf:'center',
  color:'#FFFFFF'
},
textLegenda:{
  fontSize: 20,
  alignSelf:'center',
  color:'#FFFFFF',
},
inputPeso:{
  borderRadius: 4,
  borderWidth: 1,
  borderColor: '#ddd',
  padding: 15,
  marginTop: 6,
  fontSize: 16,
  marginRight: 8,
},
buttonContainer:{
  flexDirection:'row',
  marginTop:2,
},
button: {
  height: 40,
  width: 140,
  alignSelf: 'stretch',
  backgroundColor: '#DF4722',
  borderRadius: 4,
  marginTop: 1,
  justifyContent: 'center',
  alignItems:'center',
  marginRight:8,
},
textButton: {
 fontSize: 16,
 fontWeight:"bold",
 color: "#fff",
},
textValidaInput:{
  fontSize: 16,
  color: "red",
},
});
