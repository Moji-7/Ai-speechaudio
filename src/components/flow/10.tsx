import { NodeModel, DefaultPortModel, DefaultNodeModel } from '@projectstorm/react-diagrams';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';

export interface TSCustomNodeModelOptions extends BaseModelOptions {
  value?: string;
  name?: string;
  nodeId?: string;
  cssClass?: string; 
}

export class TSCustomNodeModel2 extends DefaultNodeModel {
  // declare the class properties
  name: string;
  value?: string;
  nodeId?: string;
  cssClass: string;

  constructor(options: TSCustomNodeModelOptions = {}) {
    super({
      ...options,
      type: 'ts-custom-node'
    });
    this.value = options.value;
    this.name = options.name || 'svg';
    this.nodeId = options.nodeId || '';
    this.cssClass = options.cssClass || 'custom-node'; 


    this.addPort(
      new DefaultPortModel({
        in: true,
        name: 'IN'
      })
    );
    this.addPort(
      new DefaultPortModel({
        in: false,
        name: 'OUT'
      })
    );
  }

  // serialize method
  serialize() {
    return {
      ...super.serialize(),
      nodeId: this.nodeId,
      cssClass: this.cssClass,
      position: this.position,
    };
  }
  deserialize(event:any): void {
    super.deserialize(event);
    this.nodeId = event.data.nodeId;
    this.cssClass = event.data.cssClass; 
    this.position = event.data.position;
  }
}
