// part 13
// import the necessary modules
import React, { useEffect, useState } from 'react';
import createEngine, { DiagramModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { TSCustomNodeFactory } from './TSCustomNodeFactory';
import { TSCustomNodeModel } from './TSCustomNodeModel';
import { TableFactory } from './7';
import { TableModel } from './5';
import { DemoCanvasWidget } from './DemoCanvasWidget';
import './style.css';
import './style2.css';

import { TSCustomNodeModel2 } from './10';
import { TSCustomNodeFactory2 } from './11';

const DiagramM = () => {
  const [engine, setEngine] = useState(createEngine());

  const model = new DiagramModel();
  const [modelHadset, setmodelHadset] = useState(false);
  // use useEffect hook to initialize the engine and model
  useEffect(() => {
    // register both the node and table factories with the engine
    engine.getNodeFactories().registerFactory(new TSCustomNodeFactory());
    engine.getNodeFactories().registerFactory(new TableFactory());
    engine.getNodeFactories().registerFactory(new TSCustomNodeFactory2()); // new factory


    // create some custom nodes
    // create some custom nodes
    const node1 = new TSCustomNodeModel({
      name: 'Node 1',
      color: 'rgb(0,192,255)',
      value: 1,
      cssClass: 'circle-node'
    });

    const node2 = new TSCustomNodeModel({
      name: 'Node 2',
      color: 'rgb(255,255,0)',
      value: 20,
      cssClass: 'triangle-node'
    });

    const node3 = new TSCustomNodeModel({
      name: 'Node 3',
      color: 'rgb(192,255,0)',
      value: 30,
      cssClass: 'pentagon-node'
    });

    const node4 = new TSCustomNodeModel({
      name: 'Node 1',
      color: 'rgb(221,192,255)',
      value: 4,
      cssClass: 'circle-node'
    });

    node1.setPosition(50, 50);
    node2.setPosition(200, 50);
    node3.setPosition(350, 50);
    node4.setPosition(550, 250);

    const link1 = node1.getPort('OUT').link(node2.getPort('IN'));
    const link2 = node2.getPort('OUT').link(node3.getPort('IN'));
    const link3 = node3.getPort('OUT').link(node4.getPort('IN'));

    // create some table objects with nodeId property
    const table1 = new TableModel({
      name: 'Table 1',
      values: [
        ['Name', 'Age', 'Gender'],
        ['Alice', 25, 'F'],
        ['Bob', 30, 'M'],
        ['Charlie', 35, 'M']
      ],
      position: { x: 50, y: 150 }, // initial position
      color: 'pink',
      cssClass: 'table',
      size: { width: 166, height: 200 },
      nodeId: node1.getID() // added prop
    });

    const table2 = new TableModel({
      name: 'Table 2',
      values: [
        ['Coun', 'Pop', 'Area'],
        ['China', 1441, 9597],
        ['India', 1380, 3287],
        ['USA', 331, 9834]
      ],
      position: { x: 250, y: 150 }, // initial position
      color: 'blue',
      cssClass: 'table',
      size: { width: 166, height: 200 },
      nodeId: node2.getID() // added prop
    });

    const table3 = new TableModel({
      name: 'Table 3',
      values: [
        ['Produ', 'Price', 'Quant'],
        ['Apple', 1, 10],
        ['Banana', 0.5, 20],
        ['Carrot', 0.2, 30]
      ],
      position: { x: 500, y: 150 }, // initial position
      color: 'green',
      cssClass: 'table',
      size: { width: 166, height: 200 },
      nodeId: node4.getID() // added prop
    });
    const table4 = new TableModel({
      name: 'Table 4',
      values: [
        ['aaa', 'bbb', 'ccc'],
        ['yazd', 1, 10],
        ['tehran', 0.5, 20],
        ['Amol', 0.2, 30]
      ],
      position: { x: 700, y: 150 }, // initial position
      color: 'brown',
      cssClass: 'table',
      size: { width: 166, height: 200 },
      nodeId: node4.getID() // added prop
    });
    const table5 = new TableModel({
      name: 'Table 5',
      values: [
        ['uiy', 'ww', 'sqqw'],
        ['ss', 1, 10],
        ['cc', 0.5, 20],
        ['ee', 0.2, 30]
      ],
      position: { x: 700, y: 150 }, // initial position
      color: 'brown',
      cssClass: 'table',
      size: { width: 166, height: 200 },
      nodeId: node4.getID() // added prop
    });




    // create some svg objects with nodeId property
    const svg1 = new TSCustomNodeModel2({
      name: 'svg 1',
      //value: 15765,
      cssClass: 'arrow-below',
      position:'middle-below',
         nodeId: node1.getID()
    });
  const svg2 = new TSCustomNodeModel2({
      name: 'svg 2',
      //value: 15765,
      cssClass: 'arrow-left',
      position:'middle-left',
         nodeId: node1.getID()
    });
      const svg3 = new TSCustomNodeModel2({
      name: 'svg 2',
      //value: 15765,
      cssClass: 'arrow-right',
      position:'middle-right',
         nodeId: node1.getID()
    });
       const svg4 = new TSCustomNodeModel2({
      name: 'svg 2',
      //value: 15765,
      cssClass: 'arrow-top',
      position:'middle-top',
         nodeId: node1.getID()
    });
    // const svg2 = new SVGModel({
    //   id: 'svg2',
    //   position: 'middle-left', // relative position
    //   filePath: 'path/to/svg2.svg', // file path to svg graphic
    //   nodeId: node1.getID() // added prop
    // });


    // add both the nodes and tables to the model
    model.addAll(
      node1, node2,// node3, node4,
      link1, link2,//link3, 
      table1//, table2, table3,table4,table5
      , svg1 , svg2 , svg3 , svg4
    );
    engine.setModel(model);


    // calculate the position of each node and then set the position of related tables and svgs accordingly
    const NODE_HEIGHT = 50; // constant value for node height
    const OFFSET = 10; // constant value for space between tables and svgs
    const TABLE_WIDTH = 150; // estimated width of the table, adjust as needed
    const NODE_WIDTH = 50; // estimated width of the node, adjust as needed
    const SVG_WIDTH = 50; // estimated width of the svg, adjust as needed
    const SVG_HEIGHT = 50; // estimated height of the svg, adjust as needed

    for (let node of model.getNodes()) {
      console.log(node)
      // get position of node
      let node_position = node.getPosition();

      // get related tables
      let relatedTables = model.getModels().filter(model => model instanceof TableModel && model.options.nodeId === node.getID());

      // calculate new positions for related tables
      for (let index in relatedTables) {
        // use the node position plus the node width divided by two as the x-position
        let table_x = node_position.x + NODE_WIDTH / 2;
        let table_y = node_position.y + (index * OFFSET) + NODE_HEIGHT;
        relatedTables[index].setPosition(table_x, table_y);
      }

      // get related svgs
      let relatedSVGs = model.getModels().filter(model => model instanceof TSCustomNodeModel2 && model.options.nodeId === node.getID());
       let nodeSpec = model.getModels().filter(model => model instanceof TSCustomNodeModel && model.options.nodeId ===node.getID());
       console.log(node_position)

      // calculate new positions for related svgs
      for (let svg of relatedSVGs) {
        // use the relative position to determine the x and y position
        let svg_x, svg_y;
        switch (svg.options.position) {
          case 'middle-below':
            svg_x = (node_position.x + NODE_WIDTH) / 2 //- SVG_WIDTH / 2;
            svg_y = node_position.y + NODE_HEIGHT;
            break;
          case 'middle-left':
            svg_x = node_position.x - SVG_WIDTH;
            svg_y = (node_position.y + NODE_HEIGHT) / 2 //- SVG_HEIGHT / 2;
            break;
          case 'middle-top':
            svg_x = (node_position.x + NODE_WIDTH) / 2 //- SVG_WIDTH / 2;
            svg_y = node_position.y - SVG_HEIGHT;
            break;
          case 'middle-right':
            svg_x = node_position.x + NODE_WIDTH;
            svg_y = (node_position.y + NODE_HEIGHT) / 2 //- SVG_HEIGHT / 2;
            break;
          // add more cases for other relative positions as needed
        }
        // set new position for svg
        svg.setPosition(svg_x, svg_y);
      }
      
    }

    setEngine(engine);
    setmodelHadset(true);
  }, [modelHadset]);

  return (
    <div style={{ height: '800px', width: '800px' }}>
      {modelHadset && (
        <>
          <DemoCanvasWidget>
            <CanvasWidget engine={engine} />
          </DemoCanvasWidget>
        </>
      )}
    </div>
  );
};
export default DiagramM
