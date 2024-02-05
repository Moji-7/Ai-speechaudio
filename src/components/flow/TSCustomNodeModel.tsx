import { NodeModel, DefaultPortModel, DefaultNodeModel } from '@projectstorm/react-diagrams';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';

export interface TSCustomNodeModelOptions extends BaseModelOptions {
  color?: string;
  value?: number;
  name?: string;
  cssClass?: string; 
}

export class TSCustomNodeModel extends DefaultNodeModel {
  // declare the class properties
  color: string;
  name: string;
  value: number;
  cssClass: string;

  constructor(options: TSCustomNodeModelOptions = {}) {
    super({
      ...options,
      type: 'ts-custom-node'
    });
    this.color = options.color || '';
    this.value = options.value || 0;
    this.name = options.name || 'name';
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
      color: this.color,
      cssClass: this.cssClass
    };
  }
  deserialize(event:any): void {
    super.deserialize(event);
    this.color = event.data.color;
    this.cssClass = event.data.cssClass; 
  }
}
