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
    constructor(props: TSCustomNodeWidgetProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className={this.props.node.cssClass}>
                {/* ${this.props.node.cssClass} */}
            </div>
        );
    }
}
