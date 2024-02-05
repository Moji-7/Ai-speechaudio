// import the necessary modules
import * as React from 'react';
import { DiagramEngine, PortWidget } from '@projectstorm/react-diagrams-core';
import { TSCustomNodeModel2 } from './10';
import { DefaultPortModel } from '@projectstorm/react-diagrams';

// define the custom node widget props interface
export interface TSCustomNodeWidgetProps {
    node: TSCustomNodeModel2;
    engine: DiagramEngine;
}

// define the custom node widget state interface
export interface TSCustomNodeWidgetState { }

// define the custom node widget class
export class TSCustomNodeWidget2 extends React.Component<TSCustomNodeWidgetProps, TSCustomNodeWidgetState> {
    // constructor method
    constructor(props: TSCustomNodeWidgetProps) {
        // call the super constructor with the props
        super(props);
        // initialize the state
        this.state = {};
    }

    // render method
    render() {
        // return a JSX element with the custom node widget
        return (
            <div className={` ${this.props.node.cssClass}|| 'custom-node-2'`}>
                {/* <PortWidget engine={this.props.engine} port={this.props.node.getPort?.('IN') || new DefaultPortModel({ in: true, name: 'IN' })}>
                    <div className="circle-port" />
                </PortWidget>
                <PortWidget engine={this.props.engine} port={this.props.node.getPort?.('OUT') || new DefaultPortModel({ in: false, name: 'OUT' })}>
                    <div className="circle-port" />
                </PortWidget> 
                <div className="custom-node-color" style={{ backgroundColor: this.props.node.color }}>
                    {this.props.node.value}
                </div>*/}
            </div>
        );
    }
}
