import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// data_dict corresponds to python object data_dict
// the JSON object below is used for development purposes
const data_dict = {'2017Q3': {
  'balance': [0.0, 317554.0, 1980514.0, 194971.0, 
    54692.0, 2547731.0, 143112.0, 164612.0, 612823.0, 74102.0, 0, 
    3542380.0, 0.0, 15207.0, 280957.0, 296164.0, 70946.0, 0, 367110.0, 
    0.0, 0.0, 7470272.0, 11682.0, -4306696.0, 0, 3175270.0, 3542380.0, 
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 
    9.0, 0.0, 0.0, 1.0, 0.0, 0.0, 2.0], 
  'income': [0.0, 207937.0, 0.0, 210710.0, 239442.0, 101511.0, 118101.0, 
    669764.0, 0, -461827.0, 6253.0, -887.0, 1002.0, 0, -455459.0, 12300.0, 
    -443159.0, 0.0, -0.36, -0.36], 'cfs': [0, 0.0, -3095089.0, 0.0, 42502.0, 
    2458851.0, -14397.0, 21997.0, -3714.0, 0.0, -24513.0, -48965.0, -8545.0, 
    4103.0, 103449.0, 5737.0, -558584.0, 0, 0.0, -63306.0, -8025.0, -7530.0, 
    -352407.0, 0.0, 0.0, -3412776.0, 441089.0, 1831327.0, 9899.0, -1561729.0, 
    0, 0.0, 6855.0, -367234.0, 2657797.0, 0.0, 0.0, 0.0, 0.0, -9672.0, 
    2287746.0, 167433.0, 150121.0, 0.0, 317554.0, 0, 5437.0, 0.0, 3911.0, 
    11772.0, 0.0, 1107.0, -4155.0, 0.0, 0.0, -561713.0, 0.0, 0.0]}, 
  '2017Q2': {'balance': [0.0, 501677.0, 2295919.0, 171525.0, 
    77777.0, 3046898.0, 128031.0, 136005.0, 502825.0, 
    61715.0, 0, 3875474.0, 0.0, 17770.0, 240539.0, 
    258309.0, 76258.0, 0, 334567.0, 0.0, 0.0, 7400842.0, 
    3590.0, -3863537.0, 0, 3540907.0, 3875474.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 
    0.0, 7.0, 0.0, 0.0, 3.0, 0.0, 0.0, 2.0], 
    'income': [0.0, 181671.0, 0.0, 152148.0, 255735.0, 90903.0, 
    131903.0, 630689.0, 0, -449018.0, 6349.0, -998.0, 786.0, 0, 
    -442881.0, -212.0, -443093.0, 0.0, -0.36, -0.36], 
    'cfs': [0, 0.0, -2651930.0, 0.0, 25035.0, 2237149.0, 
    -1765.0, 0, -1672.0, 0.0, -8209.0, -47835.0, -10108.0, 
    9317.0, 82190.0, 3257.0, -364571.0, 0, 0.0, -37358.0, 
    -7720.0, -7530.0, -224176.0, 0.0, 0, -2742370.0, 237095.0, 
    1047479.0, 9899.0, -1724681.0, 0, 0.0, 783.0, -208407.0, 
    2657797.0, 0, 0.0, 0, 0, -9365.0, 2440808.0, 351556.0, 
    150121.0, 0.0, 501677.0, 0, 5490.0, 0.0, 0, 11242.0, 0, 
    683.0, -3743.0, 0.0, 0.0, -543768.0, 0.0, 0.0]}, 
    '2017Q1': {'balance': [0.0, 1427114.0, 1815442.0, 
    147677.0, 72973.0, 3463206.0, 116132.0, 79781.0, 332205.0, 
    50453.0, 0, 4041777.0, 0.0, 13849.0, 228436.0, 242285.0, 
    63974.0, 0, 306259.0, 0.0, 0.0, 7157585.0, -1635.0, -3420444.0, 
    0, 3735518.0, 4041777.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 
    0.0, 0.0, 0.0, 0.0, 0.0, 7.0, 0.0, 0.0, 3.0, 0.0, 0.0, 2.0], 
    'income': [0.0, 149648.0, 0.0, 163358.0, 805848.0, 219733.0, 
    1174476.0, 2363415.0, 0, -2213767.0, 2424.0, -695.0, 187.0, 0, 
    -2211851.0, 3014.0, -2208837.0, 0.0, -2.31, -2.31], 
    'cfs': [0, 0.0, -2208837.0, 0.0, 12450.0, 1992121.0, 
    -1488.0, 0, 1892.0, 0.0, 13444.0, -43436.0, 2715.0, 5619.0, 
    69204.0, 1319.0, -154997.0, 0, 0.0, -17993.0, 0.0, -625.0, 
    -18013.0, 0.0, 0, -1423214.0, 0, 445047.0, 0.0, -1014798.0, 
    0, 0.0, 594.0, -206579.0, 2657797.0, 0, 0.0, 0, 0, -5024.0, 
    2446788.0, 1276993.0, 150121.0, 0.0, 1427114.0, 0, 3545.0, 
    0.0, 0, 1901.0, 0, 257.0, -4355.0, 0.0, 0.0, -376386.0, 0.0, 0.0]}}

const row_labels = {'balance': ['Current assets', 'Cash and cash equivalents', 'Marketable securities', 'Accounts receivable, net of allowance', 'Prepaid expenses and other current assets', 'Total current assets', 'Property and equipment, net', 'Intangible assets, net', 'Goodwill', 'Other assets', 'other assets', 'Total assets', 'Current liabilities', 'Accounts payable', 'Accrued expenses and other current liabilities', 'Total current liabilities', 'Other liabilities', 'other liabilities', 'Total liabilities', 'Commitments and contingencies (Note 6)', 'Stockholders▒ equity', 'Additional paid-in capital', 'Accumulated other comprehensive income (loss)', 'Accumulated deficit', 'other equity', 'Total stockholders▒ equity', 'Total liabilities and stockholders▒ equity', 'Convertible Voting Preferred Stock, Series A, A-1, and B', 'Stockholders▒ equity0', 'Preferred stock, value', 'Convertible Non-voting Preferred Stock, Series C', 'Stockholders▒ equity1', 'Preferred stock, value2', 'Convertible Non-voting Preferred Stock, Series D, E, and F', 'Stockholders▒ equity3', 'Preferred stock, value4', 'Series FP Convertible Voting Preferred Stock', 'Stockholders▒ equity5', 'Preferred stock, value6', 'Class A Non-voting Common Stock', 'Stockholders▒ equity7', 'Common stock, value', 'Class B Common Stock', 'Stockholders▒ equity8', 'Common stock, value9', 'Class C Common Stock', 'Stockholders▒ equity10', 'Common stock, value11'], 
'income': ['Income Statement [Abstract]', 'Revenue', 'Costs and expenses:', 'Cost of revenue', 'Research and development', 'Sales and marketing', 'General and administrative', 'Total costs and expenses', 'other operating income', 'Loss from operations', 'Interest income', 'Interest expense', 'Other income (expense), net', 'other IS items', 'Loss before income taxes', 'Income tax benefit (expense)', 'Net loss', 'Net loss per share attributable to Class A, Class B, and Class C common stockholders (Note 2):', 'Basic', 'Diluted'], 'cfs': ['other operating activities', 'Cash flows from operating activities', 'Net loss', 'Adjustments to reconcile net loss to net cash used in operating activities:', 'Depreciation and amortization', 'Stock-based compensation', 'Deferred income taxes', 'Excess inventory reserve and related asset impairment', 'Other', 'Change in operating assets and liabilities, net of effect of acquisitions:', 'Accounts receivable, net of allowance', 'Prepaid expenses and other current assets', 'Other assets', 'Accounts payable', 'Accrued expenses and other current liabilities', 'Other liabilities', 'Net cash used in operating activities', 'other investing activities', 'Cash flows from investing activities', 'Purchases of property and equipment', 'Purchases of intangible assets', 'Non-marketable investments', 'Cash paid for acquisitions, net of cash acquired', 'Issuance of notes receivable from officers/stockholders', 'Repayment of notes receivables from officers/stockholders', 'Purchases of marketable securities', 'Sales of marketable securities', 'Maturities of marketable securities', 'Change in restricted cash', 'Net cash used in investing activities', 'other financing activities', 'Cash flows from financing activities', 'Proceeds from the exercise of stock options', 'Stock repurchases from employees for tax withholdings', 'Proceeds from issuance of Class A common stock in initial public offering, net of underwriting commissions', 'Repurchase of Class B voting common stock and Series FP voting preferred stock', 'Proceeds from issuances of preferred stock, net of issuance costs', 'Borrowings from revolving credit facility', 'Principal payments on revolving credit facility', 'Payments of initial public offering issuance costs', 'Net cash provided by financing activities', 'Change in cash and cash equivalents', 'Cash and cash equivalents, beginning of period', 'Supplemental disclosures', 'Cash and cash equivalents, end of period', 'Supplemental disclosures', 'Cash paid for income taxes', 'Supplemental disclosures of non-cash activities', 'Assumed equity awards in acquisitions', 'Purchase consideration liabilities related to acquisitions', 'Repurchase of Class B voting common stock and Series FP voting preferred stock in exchange for notes receivable from officers/stockholders', 'Construction in progress related to financing lease obligations', 'Net change in accounts payable and accrued expenses and other current liabilities related to property and equipment additions', 'Class B Common Stock', 'Cash flows from operating activities0', 'Net loss1', 'Supplemental disclosures of non-cash activities2', 'Issuance of Class B common stock related to acquisitions']}

// function Row(props){
//   return (<a className="cell"></a>)
  
// }
class Cell extends React.Component{
  render(){
    return (<a className={this.props.cell_type}>{formatValue(this.props.value)}</a>)
  }
}

class Col extends React.Component{
  // creates columns
  renderCells(){
    let cells = [];
    var id = 0;
    this.props.data_col[0] = this.props.period
    for (var key in this.props.data_col){
      cells.push(<Cell key={id} value={this.props.data_col[key]} cell_type='datacell'/>);
      id++;
    }
    return (<div className="col">{cells}</div>)
  }

  render(){
    return (this.renderCells())
  }
}

class Data extends React.Component{
  // Creates Data Columns
  renderCols(){
    let cols = [];
    var id = 0;
    for (var col in this.props.data_dict){
      // here key is just being set as a numeric ID
      cols.push(<Col key={id} data_col={this.props.data_dict[col][this.props.statement_type]} period={col}/>);
      id++;
    }
    return cols
  }

  render(){
    return (<div className="col-container">{this.renderCols()}</div>)}
}

class RowLabels extends React.Component{
  renderLabels(){
    let labels = [];
    let id = 0;
    for (var value in this.props.labels[this.props.statement_type]){
      id++;
      labels.push(<Cell key={id} value={this.props.labels[this.props.statement_type][value]} cell_type='labelcell'/>);}
    return labels
  }
  render(){
    return(<div className="col">{this.renderLabels()}</div>)
  }
}

class SpreadSheet extends React.Component{
  'use strict'
  constructor(props){
    super(props)
    this.state = {
      statement_type: 'income',
      active_btn: 'income',
    };
    this.handleClick = this.handleClick.bind(this)
    this.toggle_active = this.toggle_active.bind(this)
  }

  handleClick(statement_type){
    this.setState({
      statement_type: statement_type,
      active_btn: statement_type})
  }

  toggle_active(current_btn){
    if(current_btn===this.state.active_btn){
      return 'last-btn'
    }
    return null
  }

  render(){
    return(
      <div className="outer-container">
        <div>
          <button className={this.toggle_active('income')} onClick={()=>{this.handleClick('income')}}>
            Income Statement
          </button>
          <button className={this.toggle_active('balance')} onClick={()=>{this.handleClick('balance')}}>Balance Sheet</button>
          <button className={this.toggle_active('cfs')} onClick={()=>{this.handleClick('cfs')}}>Statement of Cashflow</button>
        </div>
        <div className="sheet-container">
          <RowLabels labels={this.props.row_labels} statement_type={this.state.statement_type}/>
          <Data data_dict={data_dict} row_labels={row_labels} statement_type={this.state.statement_type}/>
        </div>
      </div>)
  }
}

ReactDOM.render(
  <SpreadSheet data_dict={data_dict} row_labels={row_labels}/>,
  document.getElementById('root')
);

// formats value as it should appear in spreadsheet
function formatValue(value){
  if (typeof value === 'string') {
    return value.length < 25 ? value : value.slice(0, 22) + '...'
  }
  return value===0 ? '-' : value
}