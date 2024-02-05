// import the necessary modules
import * as React from 'react';
import { TSCustomNodeModel } from './TSCustomNodeModel';
import { TSCustomNodeWidget } from './TSCustomNodeWidget';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

// define the custom node factory class
export class TSCustomNodeFactory extends AbstractReactFactory<TSCustomNodeModel, DiagramEngine> {
  // constructor method
  constructor() {
    // call the super constructor with the custom node type
    super('ts-custom-node');
  }

  // generateModel method
  generateModel(initialConfig:any) {
    // return a new instance of the custom node model
    return new TSCustomNodeModel();
  }

  // generateReactWidget method
  generateReactWidget(event:any): JSX.Element {
    // return a React element of the custom node widget
    return <TSCustomNodeWidget engine={this.engine as DiagramEngine} node={event.model} />;
  }
}
