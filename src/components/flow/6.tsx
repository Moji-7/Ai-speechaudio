
// part 6
// import the necessary modules
import * as React from 'react';
import { DiagramEngine, PortWidget } from '@projectstorm/react-diagrams-core';
import { TableModel } from './5';

// define the table widget props interface
export interface TableWidgetProps extends React.PropsWithChildren<any> {
  table: TableModel;
  engine: DiagramEngine;
  size: { width: number; height: number };
}

// define the table widget class
export class TableWidget extends React.Component<TableWidgetProps> {
  // constructor method
  constructor(props: TableWidgetProps) {
    // call the super constructor with the props
    super(props);
  }

  // render method
  render() {
    // return a JSX element with the table widget
    return (
      <div
        className={this.props.table.cssClass}
        style={{
          position: 'absolute',
          // left: this.props.table.position.x,
          // top: this.props.table.position.y,
          width: this.props.table.size.width,
          height: this.props.table.size.height,
          backgroundColor: this.props.table.color
        }}
      >
        {/* <PortWidget
          engine={this.props.engine}
          port={this.props.table.getPort('IN')}
        >
          <div className="circle-port" />
        </PortWidget>
        <PortWidget
          engine={this.props.engine}
          port={this.props.table.getPort('OUT')}
        >
          <div className="circle-port" />
        </PortWidget> */}
<table>
  <th colSpan={3} >{this.props.table.title}</th>
  {/* Use the name property of the table model as the header */}
  <tbody>
    {this.props.table.values.map((row, i) => (
      <tr key={i}>
        {row.map((cell: any, j: number) => (
          j === 2 ? 
          // If it is the third cell, use the fourth value as the class name and span two columns
          <td key={j} className={row[3]} colSpan={2}>{cell}</td> 
          : 
          // If it is the fourth cell, hide it from the table
          j === 3 ? 
          <td key={j} style={{display: 'none'}}>{cell}</td>
          : 
          // Otherwise, use the default cell
          <td key={j}>{cell}</td>
        ))}
      </tr>
    ))}
  </tbody>
</table>

      </div>
    );
  }
}