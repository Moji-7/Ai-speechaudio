import { NodeModel, DefaultPortModel, DefaultNodeModel } from '@projectstorm/react-diagrams';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';

export interface TSCustomNodeModelOptions extends BaseModelOptions {
  value?: string;
  name?: string;
  nodeId?: string;
  color?: string;
  cssClass?: string;
  size?: { width: number; height: number };
}

export class TSCustomNodeModel2 extends DefaultNodeModel {
  // declare the class properties
  name: string;
  value?: string;
  nodeId?: string;
  color: string;
  cssClass: string;
  size: { width: number; height: number };

  constructor(options: TSCustomNodeModelOptions = {}) {
    super({
      ...options,
      type: 'ts-custom-node-2'
    });
    this.value = options.value;
    this.name = options.name || 'svg';
    this.nodeId = options.nodeId || ''; 
    this.color = options.color || 'white';
    this.cssClass = options.cssClass || 'custom-me';
    this.size = options.size || { width: 110, height: 110 };

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
