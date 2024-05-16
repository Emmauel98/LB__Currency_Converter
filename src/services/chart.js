


export  const createChart = (rateHistories, baseCurrency, targetCurrency)=> {

    const rateGraphLabels = rateHistories.map(
        (rateHistory) => rateHistory.Dt
      );
    const rateGraphCcyAmtData = rateHistories.map(
        (rateHistory) => rateHistory.CcyAmt[1].Amt
      );
      const graphtextLabel = `1 ${baseCurrency} to ${targetCurrency}`;
    // if (chart) {
    //   chart.destroy();
    // }
      
    const GraphData = {
        data: {
            labels: rateGraphLabels,
            datasets: [
              {
                label: graphtextLabel,
                data: rateGraphCcyAmtData,
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgba(75, 192, 192, 1)', 
                borderWidth: 2, 
                pointBackgroundColor: 'rgba(75, 192, 192, 1)', 
                pointBorderColor: '#9AA0A6', 
                pointBorderWidth: 2, 
                pointRadius: 5,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                labels: {
                  font: {
                    size: 16,
                    weight: 'bold',
                  },
                },
              },
            },
            aspectRatio: window.innerWidth >= 768 ? 2 : 1,
            scales: {
              y: {
                ticks: {
                  color: '#9AA0A6',
                  padding: 8,
                  // stepSize: this.getStepSize(),
                },
                grid: {
                  color: '#9AA0A6',
                },
              },
              x: {
                grid: {
                  color: '#9AA0A6',
                },
                ticks: {
                  color: '#9AA0A6',
                },
              },
            },
          },
    };

    return GraphData;

    //  chart = new Chart('MyChart', {
    //   type: 'line',
    //   data: {
    //     labels: rateGraphLabels,
    //     datasets: [
    //       {
    //         label: graphtextLabel,
    //         data: rateGraphCcyAmtData,
    //         backgroundColor: 'rgba(75, 192, 192, 1)',
    //         borderColor: 'rgba(75, 192, 192, 1)', 
    //         borderWidth: 2, 
    //         pointBackgroundColor: 'rgba(75, 192, 192, 1)', 
    //         pointBorderColor: '#9AA0A6', 
    //         pointBorderWidth: 2, 
    //         pointRadius: 5,
    //       },
    //     ],
    //   },
    //   options: {
    //     plugins: {
    //       legend: {
    //         labels: {
    //           font: {
    //             size: 16,
    //             weight: 'bold',
    //           },
    //         },
    //       },
    //     },
    //     aspectRatio: window.innerWidth >= 768 ? 2 : 1,
    //     scales: {
    //       y: {
    //         ticks: {
    //           color: '#9AA0A6',
    //           padding: 8,
    //           // stepSize: this.getStepSize(),
    //         },
    //         grid: {
    //           color: '#9AA0A6',
    //         },
    //       },
    //       x: {
    //         grid: {
    //           color: '#9AA0A6',
    //         },
    //         ticks: {
    //           color: '#9AA0A6',
    //         },
    //       },
    //     },
    //   },
    // });
  }
