import React from 'react';
import logo from './logo.svg';
import { Document, Page, Text, View, StyleSheet,Image } from '@react-pdf/renderer';
import { Line } from 'react-chartjs-2';



const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      height:300,
      width:400

    }
  });

  const LineChart = function(data){
      return 
  }

class MyDocument extends React.PureComponent {

    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
        this.chart = null;
    }

    

    render() {
        return <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Image source={this.props.data}/>
                </View>
                <View style={styles.section}>
                    <Text>Section #2</Text>
                </View>
            </Page>            
        </Document>;
    }
}

export default MyDocument;