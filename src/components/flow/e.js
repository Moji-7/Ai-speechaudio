import React, { useEffect, useState } from 'react';
import createEngine, { DiagramModel, DefaultNodeModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { TSCustomNodeFactory } from './TSCustomNodeFactory';
import { TSCustomNodeModel } from './TSCustomNodeModel';
import { DemoCanvasWidget } from './DemoCanvasWidget';
import Circle from './Circle';
import './style.css'; 
const DiagramA = () => {

    const [engine, setEngine] = useState(createEngine());

   const model=new DiagramModel()
    const [modelHadset, setmodelHadset] = useState(false);
    // use useEffect hook to initialize the engine and model
    useEffect(() => {
        
        engine.getNodeFactories().registerFactory(new TSCustomNodeFactory());

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

        node1.setPosition(50, 50);
        node2.setPosition(200, 50);
        node3.setPosition(350, 50);

        const link1 = node1.getPort('OUT').link(node2.getPort('IN'));
        const link2 = node2.getPort('OUT').link(node3.getPort('IN'));

        model.addAll(node1, node2, node3, link1, link2);
        engine.setModel(model);

        setEngine(engine);
        setmodelHadset(true)
        console.log("ali")
    }, [modelHadset]);

    return (
        <div style={{ height: '800px', width:'800px'}}>
            {modelHadset && (<>
            <h2>hi</h2>
                <DemoCanvasWidget>
                    <CanvasWidget engine={engine} />
                </DemoCanvasWidget>
              
                </>

            )}
        </div>
    );
};
export default DiagramA;
