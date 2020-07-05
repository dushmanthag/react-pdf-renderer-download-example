import React from 'react';
import logo from './logo.svg';
import { Document, Page, Text, View, StyleSheet,PDFDownloadLink,PDFViewer } from '@react-pdf/renderer';
import { Line } from 'react-chartjs-2';
import './App.css';
import MyDocument from "./MyDocument";

// Create styles



const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
 



// Create Document Component


class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.chart = null;

    this.state = {
                    chartImage: null
                 }
}

  componentDidMount = () => {
    // required for png export as per https://github.com/chartjs/Chart.js/issues/2830
    //console.log(this.chartRef.current.toBase64Image())

    if(this.chartRef){
       console.log(this.chartRef.current.chartInstance.draw())
       console.log(this.chartRef.current.chartInstance.toBase64Image());
       this.setState({
          chartImage:this.chartRef.current.chartInstance.toBase64Image()
       })
    }
};


  render(){
    return (
      <div className="App">
        <header className="App-header">

          <div style={{position:"absolute",left:-99999,top:-99999}}>
              <Line options={
                        {
                                
                           animation:false
                            
                        }
                    } height={300} width={300} ref={this.chartRef} data={data} />
          </div>

          <PDFDownloadLink document={<MyDocument data={this.state.chartImage} />} fileName="somename.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
          </PDFDownloadLink>
        </header>
      </div>
    );
  }
}

export default App;
