// part 7
// import the necessary modules
import * as React from 'react';
import { TableModel } from './5';
import { TableWidget } from './6';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

// define the table factory class
export class TableFactory extends AbstractReactFactory<TableModel, DiagramEngine> {
  // constructor method
  constructor() {
    // call the super constructor with the table type
    super('table');
  }

  // generateModel method
  generateModel(initialConfig: any) {
    // return a new instance of the table model
    return new TableModel(initialConfig);
  }

  // generateReactWidget method
  generateReactWidget(event: any): JSX.Element {
    // return a React element of the table widget
    return (
      <TableWidget
        engine={this.engine as DiagramEngine}
        table={event.model}
        size={event.model.size}
      />
    );
  }
}