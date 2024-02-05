// import the necessary modules
import * as React from 'react';
import { TSCustomNodeModel2 } from './10';
import { TSCustomNodeWidget2 } from './12';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

// define the custom node factory class
export class TSCustomNodeFactory2 extends AbstractReactFactory<TSCustomNodeModel2, DiagramEngine> {
  // constructor method
  constructor() {
    // call the super constructor with the custom node type
    super('ts-custom-node-2');
  }

  // generateModel method
  generateModel(initialConfig:any) {
    // return a new instance of the custom node model
    return new TSCustomNodeModel2();
  }

  // generateReactWidget method
  generateReactWidget(event:any): JSX.Element {
    // return a React element of the custom node widget
    return <TSCustomNodeWidget2 engine={this.engine as DiagramEngine} node={event.model} />;
  }
}
