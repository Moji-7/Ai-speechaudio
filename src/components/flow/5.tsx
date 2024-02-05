// part 5
// import the necessary modules
import { NodeModel, DefaultPortModel } from '@projectstorm/react-diagrams';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';

// define the table model options interface
export interface TableModelOptions extends BaseModelOptions {
  name?: string;
   nodeId?: string;
  values?: any[]; // json array
 // position?: { x: number; y: number };
  color?: string;
  cssClass?: string;
  size?: { width: number; height: number };
}

// define the table model class
export class TableModel extends NodeModel {
  // declare the class properties
  name: string;
  nodeId: string;
  values: any[];
 // position: { x: number; y: number };
  color: string;
  cssClass: string;
  size: { width: number; height: number };

  constructor(options: TableModelOptions = {}) {
    super({
      ...options,
      type: 'table'
    });
    this.name = options.name || 'Table';
    this.nodeId = options.nodeId || '';
    this.values = options.values || [];
   // this.position = options.position || { x: 0, y: 0 };
    this.color = options.color || 'white';
    this.cssClass = options.cssClass || 'table';
    this.size = options.size || { width: 100, height: 100 };

    // add some ports to the table model
    // this.addPort(
    //   new DefaultPortModel({
    //     in: true,
    //     name: 'IN'
    //   })
    // );
    // this.addPort(
    //   new DefaultPortModel({
    //     in: false,
    //     name: 'OUT'
    //   })
    // );
  }

  // serialize method
  serialize() {
    return {
      ...super.serialize(),
      name: this.name,
      nodeId: this.nodeId,
      values: this.values,
      position: this.position,
      color: this.color,
      cssClass: this.cssClass,
      size: this.size
    };
  }
  deserialize(event:any): void {
    super.deserialize(event);
    this.name = event.data.name;
    this.nodeId = event.data.nodeId;
    this.values = event.data.values;
    this.position = event.data.position;
    this.color = event.data.color;
    this.cssClass = event.data.cssClass;
    this.size = event.data.size;
  }
}