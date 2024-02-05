// part 8
// import the necessary modules
import React, { useEffect, useState } from 'react';
import createEngine, { DiagramModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { TableFactory } from './7';
import { TableModel } from './5';
import { DemoCanvasWidget } from './DemoCanvasWidget';
import DiagramA from './e';


const Diagram = () => {
  const [engine, setEngine] = useState(createEngine());

  const model = new DiagramModel();
  const [modelHadset, setmodelHadset] = useState(false);
  // use useEffect hook to initialize the engine and model
  useEffect(() => {
    engine.getNodeFactories().registerFactory(new TableFactory());

    // create some table objects
    const table1 = new TableModel({
      name: 'Table 1',
      values: [
        ['Name', 'Age', 'Gender'],
        ['Alice', 25, 'F'],
        ['Bob', 30, 'M'],
        ['Charlie', 35, 'M']
      ],
    //  position: { x: 50, y: 150 },
      color: 'pink',
      cssClass: 'table',
      size: { width: 200, height: 200 }
    });

    const table2 = new TableModel({
      name: 'Table 2',
      values: [
        ['Country', 'Population', 'Area'],
        ['China', 1441, 9597],
        ['India', 1380, 3287],
        ['USA', 331, 9834]
      ],
    //  position: { x: 300, y: 150 },
      color: 'lightblue',
      cssClass: 'table',
      size: { width: 200, height: 200 }
    });

    const table3 = new TableModel({
      name: 'Table 3',
      values: [
        ['Product', 'Price', 'Quantity'],
        ['Apple', 1, 10],
        ['Banana', 0.5, 20],
        ['Carrot', 0.2, 30]
      ],
     // position: { x: 550, y: 150 },
      color: 'lightgreen',
      cssClass: 'table',
      size: { width: 200, height: 200 }
    });

    model.addAll(table1, table2, table3);
    engine.setModel(model);

    setEngine(engine);
    setmodelHadset(true);
  }, [modelHadset]);

  return (
    <div style={{ height: '800px', width: '800px' }}>
      {modelHadset && (
        <>
          <DemoCanvasWidget>
            <CanvasWidget engine={engine} />
            <DiagramA/>
          </DemoCanvasWidget>
        </>
      )}
    </div>
  );
};
export default Diagram;
