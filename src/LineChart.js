import React from 'react';
import { Line } from 'react-chartjs-2';





class LineChart extends React.PureComponent {

    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
        this.chart = null;
    }

    componentDidMount = () => {
        // required for png export as per https://github.com/chartjs/Chart.js/issues/2830
        //console.log(this.chartRef.current.toBase64Image())

        if(this.chartRef){
           
           console.log(this.chartRef.current)
        }
    };

    render() {
        return <Line options={
            {
                    
               animation:false
                
            }
        } height={300} width={300} ref={this.chartRef} data={this.props.data} />;
    }
}

export default LineChart;