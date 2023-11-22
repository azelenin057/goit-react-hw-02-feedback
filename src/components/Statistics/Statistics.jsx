import React from 'react';

// class Statistics extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   handleGood = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//       total: prevState.total + 1,
//     }));
//   };
//   handleNeutral = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//       total: prevState.total + 1,
//     }));
//   };
//   handleBad = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//       total: prevState.total + 1,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>Please leave feedback</h1>
//         <div>
//           <button type="button" onClick={this.handleGood}>
//             Good
//           </button>
//           <button type="button" onClick={this.handleNeutral}>
//             Neutral
//           </button>
//           <button type="button" onClick={this.handleBad}>
//             Bad
//           </button>
//         </div>
//         <h2>Statistics</h2>
//         <div>
//           <p>Good: {this.state.good}</p>
//           <p>Neutral: {this.state.neutral}</p>
//           <p>Bad: {this.state.bad}</p>
//           <p>Total: {this.state.total}</p>
//           <p>Positive: {(this.state.good / this.state.total) * 100}%</p>
//         </div>
//       </div>
//     );
//   }
// }
// export default Statistics;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  </div>
);

export default Statistics;
